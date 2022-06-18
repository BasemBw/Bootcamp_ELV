const Renderer = function () {
    const renderProducts = function (Products,tybe,Counter) {
        if(!tybe){
            $("#maindiv").empty()
            for (Product of Products) {
                Post = `<div class="col-sm-3 col-md-3 pb-3">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" style="width: 18rem; height: 200px;" src="${Product.image}" alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">${Product.name}</h5>
                      <p class="card-text">Price : ${Product.price}</p>
                      <a id="DeleteCart" data-id=${Product.id} class="btn btn-primary">Delete From Carts</a>
                    </div>
                  </div>
            </div>`
                $("#maindiv").append(Post);
            }
        }
        else if(tybe) {
            $("#maindiv").empty()
            for (Product of Products) {
                Post = `<div class="col-sm-3 col-md-3 pb-3">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" style="width: 18rem; height: 200px;" src="${Product.image}" alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">${Product.name}</h5>
                      <p class="card-text">Price : ${Product.price}</p>
                      <a id="AddToCard" data-id=${Product.id} class="btn btn-primary">Add to cart</a>
                    </div>
                  </div>
            </div>`
                $("#maindiv").append(Post);
            }
        }
        $("#Counter").text("Products in the Carts :"+Counter+"");
    }
    return {
        renderProducts,
    }
}