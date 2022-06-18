const fetch = function(){
    let Gif_Type = $("input").val()
    $.ajax({
        method: "GET",
        url:`https://api.giphy.com/v1/gifs/search?api_key=dtAeLwobe9YAAAJWITlYiVS087K9O6ko&q=${Gif_Type}&limit=5`,
        success: function (data) {
                $(".Show").html(`<iframe src="${data.data[0].embed_url}" ></iframe>`)
        },
        error: function (xhr, text, error) {
            console.log("error");
        }
    }); 
}

$("button").click(function(){
    fetch()
})


