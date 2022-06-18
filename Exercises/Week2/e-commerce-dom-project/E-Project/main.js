const renderer = Renderer()
const Logic = logic()


$(document).on('click', '#About', function () {
    
});
$(document).on('click', '#AllProduct', function () {
    renderer.renderProducts(Logic.getProducts(),true,Logic.CountCarts())
});
$(document).on('click', '#Cart', function () {
    renderer.renderProducts(Logic.getCarts(),false,Logic.CountCarts())
});
$(document).on('click', '#AddToCard', function () {
     Logic.AddToCart($(this).data().id)
});
$(document).on('click', '#DeleteCart', function () {
    Logic.DeleteCart($(this).data().id)
    renderer.renderProducts(Logic.getCarts(),false,Logic.CountCarts())
});


