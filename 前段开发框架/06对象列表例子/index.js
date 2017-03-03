/**
 * Created by xdyuan on 17/1/12.
 */


function Product(json) {
    this._init(json);
}

Product.prototype = {
    _init : function (json) {
        this.bg = json.bg;
        this.zhekou = json.zhekou;
        this.price = json.price;
        this.shouliang = json.shouliang;  //output
    },
    bindDom : function () {
        var str = '';
        str += '<li class="item">';
        str += '<div class="bg" style="background: url('+this.bg+')"></div>';
        str += '<div class="zhekou">'+this.zhekou+'</div>';
        str += '<div class="jiageshouliang">';
        str += '<span class="price">'+this.price+'</span>';
        str += '<span class="shouliang">'+this.shouliang+'</span>';
        str +=  '</div>';
        str += '</li>';

        return str;
    }

};



window.onload = function () {

    //模拟服务器下载的数据
    var dataArr = [
        {

            bg:"img/boutque01_r2_c2.jpg",
            zhekou:"3.5折/玉兰油",
            price:"$1120",
            shouliang:"售量:300"
        },
        {
            bg:"img/boutque02_r2_c2.jpg",
            zhekou:"3.5折/玉兰油",
            price:"$1120",
            shouliang:"售量:3000"
        },
        {
            bg:"img/boutque03_r2_c2.jpg",
            zhekou:"3.5折/玉兰油",
            price:"$1140",
            shouliang:"售量:200"
        },
        {
            bg:"img/boutque04_r2_c2.jpg",
            zhekou:"3折/玉兰油",
            price:"$1140",
            shouliang:"售量:5500"
        },
        {
            bg:"img/boutque05_r2_c2.jpg",
            zhekou:"3折/玉兰油",
            price:"$1140",
            shouliang:"售量:5500"
        },
        {
            bg:"img/boutque06_r2_c2.jpg",
            zhekou:"3折/玉兰油",
            price:"$1140",
            shouliang:"售量:5500"
        },
        {
            bg:"img/boutque06_r2_c2.jpg",
            zhekou:"3折/玉兰油",
            price:"$1140",
            shouliang:"售量:5500"
        },
        {
            bg:"img/boutque06_r2_c2.jpg",
            zhekou:"3折/玉兰油",
            price:"$1140",
            shouliang:"售量:5500"
        },
        {
            bg:"img/boutque06_r2_c2.jpg",
            zhekou:"3折/玉兰油",
            price:"$1140",
            shouliang:"售量:5500"
        }
    ];



    var items = [];
    var item = {};
    for(var i = 0; i < dataArr.length; i++){
        item = new Product(dataArr[i]);
        items.push(item);
        item = null;//置空
    }

    //拼接DOM
    var  str = '';

    for(i = 0; i < items.length; i++){
       str += items[i].bindDom();
    }

    console.log(str);

    //首先获取一下DOM对象  ul
    var list = document.getElementById('list');
    list.innerHTML = str;






};

