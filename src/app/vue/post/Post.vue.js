define(['text!./post.template.html', '../search/comment/SubredditComment.vue'], function (template, Comment) {
    var Post = {
        template: template,
        data: function () {
            return {
                post: {},
                comments: [],
                isLoadingPost: true,
                isLoadingComments: false
            }
        },
        mounted: function () {
            //fetch post information based on route params
            //using angular version of redditService
            var redditService = this.$injector('redditService')
            var params = this.postParams;
            var vm = this;

            redditService.getPostData(params.id, params.subreddit)
                .then(function (post) {
                    vm.post = post;
                    vm.isLoadingPost = false;
                })
        },
        methods: {
            loadComments: function () {
                var redditService = this.$injector('redditService')
                var vm = this;

                vm.isLoadingComments = true;

                redditService.getComments(this.post.postLink)
                    .then(function (comments) {
                        vm.isLoadingComments = false;
                        vm.comments = comments;
                    })
            }
        },
        computed: {
            hasPreviewImage: function() {
                return this.post.previewImage != null
            },
            hasText: function() {
                return this.post.text != null
            },
            hasComments: function() {
                return this.comments.length > 0;
            },
            postParams: function () {
                //example of computed property based on $state service
                var $state = this.$injector('$state')

                return {
                    id: $state.params.id,
                    subreddit: $state.params.subreddit
                }
            }
        },
        components: {
            'comment': Comment
        }
    }

    return Post
})