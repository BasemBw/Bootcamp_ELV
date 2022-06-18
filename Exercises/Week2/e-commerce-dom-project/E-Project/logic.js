const logic = function () {
    const Carts = []
    const Products = [
        {
            id: "1",
            name: "Watch",
            price: 500,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdkFnkhPQTEWMky7Q3ONO48Eigx6hDihKk1WIGaQzY8qzzcVBOHugJ71z6s0lFYmss-c0&usqp=CAU"
        },
        {
            id: "2",
            name: "iphone 13",
            price: 1000,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrUPRLARsOtSCK4gMk2JBI3LfiQhRxo28cGD64H4JNQ0cmVTOk3fMzCj5yy-QY2lr_afo&usqp=CAU"
        },
        {
            id: "3",
            name: "hp",
            price: 2000,
            image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07054924.png"
        },
        {
            id: "4",
            name: "ipad",
            price: 1500,
            image: "https://www.espir.co.il/images/itempics/MYGW2RK-A_02122020175513.jpg"
        }
    ]
    const getProducts = () => Products
    const getCarts = () => Carts
    const AddToCart = function (id) {
        for (Product of Products)
            if (Product.id == id)
                Carts.push(Product);
    }
    const DeleteCart = function (id) {
        for (cart of Carts)
            if (cart.id == id)
                Carts.splice(cart, 1)
    }
    const CountCarts = () => Carts.length
    return {
        getProducts,
        AddToCart,
        getCarts,
        DeleteCart,
        CountCarts
    }
}
//-------------------------------------------
