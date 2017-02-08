define(['text!./result.template.html'
, 'app/common/reddit-service/service.vue'
, '../comment/SubredditComment.vue'], function(template, redditService, subredditComment) {
    var Result = {
        template: template,
        data: function() {
            return {
                commentsLoaded: false,
                commentsHidden: false,
                comments: []
            }
        },
        props: ['post'],
        name: 'result',
        methods: {
            loadComments: function() {
                var vm = this;

                redditService.getComments(vm.post.postLink)
                    .then(function(comments) {
                        vm.comments = comments;
                        vm.commentsLoaded = true;
                    })
            },
            toggleComments: function() {
                this.commentsHidden = !this.commentsHidden
            },
            navigateToPost: function() {
                this.$emit('on-post-navigate', this.post.id)
            }
        },
        computed: {
            noComments: function() {
                return this.commentsLoaded && this.comments.length == 0
            },
            hasComments: function() {
                return this.commentsLoaded && this.comments.length > 0
            }
        },
        components: {
            'subreddit-comment': subredditComment
        }
    }

    return Result;
})