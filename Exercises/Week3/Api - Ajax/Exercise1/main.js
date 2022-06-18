const fetch = function(){
    let isbn = $("input").val()
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
        success: function (data) {
            console.log(data.items[0].volumeInfo.title)
        },
        error: function (xhr, text, error) {
            console.log("error");
        }
    }); 
}