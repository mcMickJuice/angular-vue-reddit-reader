define(['text!./comment.template.html'], function(template) {
    var SubredditComment = {
        name: 'subreddit-comment',
        template: template,
        props: ['comment'],
        data: function() {
            return {
                showReplies: true
            }
        },
        methods: {
            toggleReplies: function() {
                this.showReplies = !this.showReplies
            }
        }
    }

    return SubredditComment
})