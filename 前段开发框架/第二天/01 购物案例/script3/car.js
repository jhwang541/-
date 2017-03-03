/**
 * Created by xdyuan on 17/1/16.
 */

//设置购物车的构造函数
function Car() {
    this.sum = 0;
    this.allPrice = 0;
    this.products = [{}, {}];
}
     //构造函数使用原型对象
      // 1.在构造函数中使用原型对象,比直接在构造函数中写的效率要高的多
     // 2.方法较多的情况下直接使用一个对象字面形式替换原型对象
Car.prototype = {
    getSum : function () {
        this.sum = this.products.length;
        return this.sum;
    },
    getAllPrice : function () {
        var all = 0;
        for(var i=0, len=this.products.length; i<len; i++){
            all += this.products[i].price;
        }
        this.allPrice = all;
        return this.allPrice;
    },
    bindBasic : function () {
        $('.cartsum').html(this.sum);
        $('#cartprice').html('￥' + this.allPrice);
    },
    bindList : function () {
        var str = '';
        for(var i=0, len=this.products.length; i<len; i++){
            str += '<div class="cart_box">';
            str += '<div class="message">';
            str += '<div class="alert-close"> </div>';
            str += '<div class="list_img"><img src="'+this.products[i].images[0].small+'" class="img-responsive" alt=""/></div>';
            str += '<div class="list_desc"><h4><a href="#">'+this.products[i].pname+'</a></h4>1 x<span class="actual">';
            str += '$'+this.products[i].price+'</span></div>';
            str += '<div class="clearfix"></div>';
            str += '</div>';
            str += '</div>';
        }
        $('.shopping_cart').html(str);
    }
};











