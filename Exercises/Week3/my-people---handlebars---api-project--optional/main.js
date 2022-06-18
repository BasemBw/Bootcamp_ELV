$.ajax({
    url: 'https://randomuser.me/api/?results=10',
    dataType: 'json',
    success: function(data) {
      renderFnction(data)
    }
  });

const renderFnction = function(data){
    let obj = {
        dataArray:data.results
    }
    const source = $('#template').html();
    const template = Handlebars.compile(source);
    const newHTML = template(obj);
    $(".wrapper").append(newHTML)
}