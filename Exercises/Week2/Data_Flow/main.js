const posts = [
    {
        name: "Uncle Jerome",
        text: "Happy birthday kido!"
    },
    {
        name: "BFF Charlene",
        text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD"
    },
    {
        name: "Old High School Teacher",
        text: "Hey ace, have a good one."
    }
]

$("button").on("click", function () {
    posts.push({
        name: $(".Name_input").val(),
        text: $(".Birthday_input").val()
    })
    render()
})
const render = function () {
    $( ".InfoDiv" ).empty();
    for (let post of posts) {
        let postBox = $("<div class='post-box'><p class=name>" + post.name + "</p><p class=text>" + post.text + "</p></div>")
        $(".InfoDiv").append(postBox)
    }
}
render()
