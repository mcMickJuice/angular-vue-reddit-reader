define(function () {
    function redditService(http) {
        var baseRedditUrl = 'https://www.reddit.com';
        function buildSubredditUrl(subreddit, nextPage) {
            var suffix = nextPage == null ? '' : '?limit=30&after=' + nextPage
            return baseRedditUrl + '/r/' + subreddit + '.json' + suffix
        }

        function buildPostUrl(postUrl) {
            return baseRedditUrl + postUrl + '.json';
        }

        function getSubredditPosts(subreddit) {
            return autoPagePosts([], subreddit, null, 0, 20);
        }

        function flattenPost(post) {
            //title, previewImage, score, permalink for comments, after

            var data = post.data;

            var previewImage = null
            if (data.preview) {
                var firstImage = data.preview.images[0];
                var resolution = firstImage.resolutions[0];

                //some posts have previe images but no resolutions
                if (resolution != null) {
                    previewImage = {
                        height: resolution.height,
                        width: resolution.width,
                        url: resolution.url
                    }
                }
            }

            return {
                title: data.title,
                previewImage: previewImage,
                score: data.score,
                postLink: data.permalink,
                text: data.selftext
            }
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

                    var posts = baseData.children.map(flattenPost);
                    collection = collection.concat(posts);

                    if (currentPage >= maxPage || next == null) {
                        return collection
                    }

                    return autoPagePosts(collection, url, next, currentPage + 1, maxPage)
                })
        }

        return {
            getSubredditPosts: getSubredditPosts,
            getComments: getComments
        }
    }

    return redditService
})