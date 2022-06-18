
const fetch = function(queryType,queryValue){
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function (data) {
            if(queryType=="title")
                for(str of data.items)
                    if(str.volumeInfo.title==queryValue)
                        console.log("Book by",str.volumeInfo.authors[0])
            if(queryType=="isbn")
              console.log(data.items[0].volumeInfo.title)
        },
        error: function (xhr, text, error) {
            console.log("error");
        }
    }); 
}

fetch("title", "How To Win Friends And Influence People")