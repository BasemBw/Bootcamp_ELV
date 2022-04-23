const posts = [
    {
        id: 1,
        text: "Love this product",
        comments: []
    },
    {
        id: 2,
        text: "This is the worst. DON'T BUY!",
        comments: [
            { id: 1, text: "Idiot has no idea" },
            { id: 2, text: "Fool!" },
            { id: 3, text: "I agree!" }
        ]
    },
    {
        id: 3,
        text: "So glad I found this. Bought four already!",
        comments: []
    }
]

const removeComment = function (postId, commentId) {
    for (post in posts) {
        if (post == postId) {
            removeCommentFromPost(post, commentId);
        }
    }
}

const removeCommentFromPost = function(post, commentId){
    let postUp = post-1
    for (let i =0; i < posts.length; i++) {
        if (posts[i].id == post) {
            for(let i=0 ; i <= posts[postUp].comments.length ; i++)
                if(i==commentId)
                   posts[postUp].comments.splice(i-1,1);
        }
    }
}

removeComment(2, 3)
for(index in posts)
   console.log(posts[index])












