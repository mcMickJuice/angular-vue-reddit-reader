define(function () {
    //keep actual reddit service plain javascript that accepts $http (or same interface)
    //ngRedditService will inject $http for use in angular app
    //this provides flexibility in porting over the actual service to another library/framework

    function redditService(http) {
        var baseRedditUrl = 'https://www.reddit.com';
        function buildSubredditUrl(subreddit, nextPage) {
            var suffix = nextPage == null ? '' : '?limit=30&after=' + nextPage
            return baseRedditUrl + '/r/' + subreddit + '.json' + suffix
        }

        function buildPostUrl(postUrl) {
            return baseRedditUrl + postUrl + '.json';
        }

        function buildPostUrlFromId(id, subreddit) {
            return baseRedditUrl + '/r/' + subreddit + '/comments/' + id + '.json'
        }

        function getSubredditPosts(subreddit, pageCount) {
            return autoPagePosts([], subreddit, null, 0, pageCount);
        }

        function extractPreviewImage(data) {
            var previewImage = null
            if (data.preview) {
                var firstImage = data.preview.images[0];
                var resolution = firstImage.source;

                //some posts have preview images but no resolutions
                if (resolution != null) {
                    previewImage = {
                        height: resolution.height,
                        width: resolution.width,
                        url: resolution.url
                    }
                }
            }

            return previewImage
        }

        function flattenPostListing(post) {
            var data = post.data;

            return {
                title: data.title,
                previewImage: extractPreviewImage(data),
                score: data.score,
                postLink: data.permalink,
                text: data.selftext,
                id: data.id
            }
        }

        function getPostData(id, subreddit) {
            var url = buildPostUrlFromId(id, subreddit)

            return http.get(url)
                .then(function (response) {
                    var postHeading = response.data[0];

                    var headingData = postHeading.data.children[0].data;

                    return {
                        text: headingData.selftext,
                        author: headingData.author,
                        score: headingData.score,
                        postLink: headingData.permalink,
                        title: headingData.title,
                        previewImage: extractPreviewImage(headingData),
                        numberOfComments: headingData["num_comments"]
                    }
                })
        }

        function getComments(postUrl) {
            var url = buildPostUrl(postUrl);
            return http.get(url)
                .then(function (response) {
                    var baseData = response.data[1].data.children;

                    return baseData.map(function (d) {
                        return flattenComment(d, true)
                    })
                })
        }

        function flattenComment(comment, isFirstLevel) {
            var data = comment.data;

            var replies = null
            if (data.replies && isFirstLevel) {
                replies = data.replies.data.children.map(function (r) {
                    return flattenComment(r);
                })
            }

            return {
                user: data.author,
                score: data.score,
                comment: data.body,
                replies: replies
            }
        }

        function autoPagePosts(collection, url, nextPage, currentPage, maxPage) {
            var pageUrl = buildSubredditUrl(url, nextPage);
            return http.get(pageUrl)
                .then(function (response) {
                    var baseData = response.data.data;
                    var next = baseData.after;

                    var posts = baseData.children.map(flattenPostListing);
                    collection = collection.concat(posts);

                    if (currentPage >= maxPage || next == null) {
                        return collection
                    }

                    return autoPagePosts(collection, url, next, currentPage + 1, maxPage)
                })
        }

        return {
            getSubredditPosts: getSubredditPosts,
            getComments: getComments,
            getPostData: getPostData
        }
    }

    return redditService
})