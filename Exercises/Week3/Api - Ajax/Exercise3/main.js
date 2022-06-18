const fetch = function(queryType,queryValue){
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function (data) {
                for(str of data.items){
                    console.log("title :",str.volumeInfo.title)
                    console.log("authors :",str.volumeInfo.authors[0])
                }
                    
        },
        error: function (xhr, text, error) {
            console.log("error");
        }
    }); 
}

fetch("title", "How To Win Friends And Influence People")

