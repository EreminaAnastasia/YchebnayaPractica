//красивая крутящаяся штука, перед загрузкой страницы ('-_-)
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500)
};


//корзина
var Cart = [];
var Price = [];
var Title = [];
//добавить в корзину
function addToCart(id, price, title){
    var price;
    var title;
    if(contains(Cart, id) == true){
        alert('Этот элемент уже добавлен в корзину');
    }
    else{
        Cart.push(id);
        Price.push(price);
        Title.push(title);
        alert('Элемент был добавлен в корзину');

    }
    //console.log(Cart);
    //console.log(Price);
    //console.log(Title);
}

//Удалить из корзины
function deleteFromCart(id){
    var index = Cart.indexOf(id, 0);
    if(Cart.length > index){
        Cart.splice(index, 1);
        Price.splice(index, 1);
        Title.splice(index, 1);
        alert('Этот элемент был успешно удален');
    }
    else{
    }
    console.log(Cart);
    console.log(Price);
    console.log(Title);

}

//Проверяет содержиться ли в коризне элемент или нет
function contains(arr, elem) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            return true;
        }
    }
    return false;
}

//Оформление заказа
function buy(){

    if (Cart.length <= 0){
        alert("Корзина пустая")
    }
    else{
        clearHtml()
        $("#exampleModal").modal('show');
        var fullPrice = 0;
        for(var i = 0; i < Cart.length; i++){
            var title = Title[i];
            var price = Price[i];
            var cart = Cart[i];
            var string = title + ' ' + price + ' ' + '\n';
            $("<div/>", {
            'class' : 'modal-text',
                text: string,
            }).appendTo(".modal-body");
            fullPrice = fullPrice + parseInt(price, 10);
        }
        $("<div/>", {
            'class' : 'modal-text-prices',
                text: 'Итого: ' + fullPrice + ' Рубля',
            }).appendTo(".modal-body");
    }
}
function resetCart(){
    Cart = [];
    Title = [];
    Price = [];
    clearHtml();
}
function result(){
    alert('Заказ успешно был сформирован.')
}

function clearHtml() {
    var container = document.getElementById("modal-body");
    while (container.firstChild) {
    container.removeChild(container.firstChild);
}
}

//Классный header, ну типо да)
var head = document.querySelector('.header');
window.addEventListener('scroll', function () {
    if (pageYOffset <= 0) {
        window.setTimeout(function () {
            head.classList.remove('header-fix');
            head.style.height = 50 + 'px';
        }, 10);

    } else {
        window.setTimeout(function () {
            head.classList.add('header-fix');
            head.style.height = 70 + 'px';
        }, 10);
    }

});
