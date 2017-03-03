/**
 * Created by huiwen on 17/1/17.
 */
(function (window) {


    var $$ = function () {

    };

    $$.prototype = {
        //DOM
        $id : function (id) {
            return document.getElementById(id);
        },
        $tag : function (tag) {
            return document.getElementsByTagName(tag);
        },
        //类型判断
        isNumber : function (val) {
            //isFinite判断一个数是否有限。
            return typeof val === 'number' && isFinite(val);
        },
        isBoolean : function () {
            return typeof val === 'boolean';
        },
        isString : function () {
            return typeof val === 'string';
        },
        isObj : function (val) {
            if(val === null || typeof val === 'undefined'){
                return false;
            }
            return typeof  val === 'object';
        },
        isNull : function (val) {
            return val === null;
        },
        isArray : function (val) {
            if(val === null || typeof val === 'undefined'){
                return false;
            }
            return val.constructor == Array;
        },

        ltrim : function (str) {
            var reg = /(^\s*)/g;
            //var reg = new RegExp('(^\\s*)', 'g');
            return str.replace(reg, '');//替换掉匹配的内容
        },
        rtrim : function (str) {
            var reg = /(\s*$)/g;
            return str.replace(reg, '');//替换掉匹配的内容
        },
        trim : function (str) {
            var reg = /(^\s*)|(\s*$)/g;
            return str.replace(reg, '');//替换掉匹配的内容
        },
        checkNull :  function (input) {
            //return input!='' ? true : false;
            return input != '';
        },
        checkNull2 :  function (input) {

            return input.length != 0;
        },
        checkNum : function (input) {
            //检测数字
            var reg = /^[0-9]{5,12}$/g;
            return input.match(reg);
        },
        checkEmail: function (input){
            /*表示必须是1或者多个数字*/
            var regex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            /*if (input.match(regex)) {
             return true;
             } else {
             return false;
             }*/
            return input.match(regex);
        }
    };


    window.xdyuan = window.$$  = new $$();



})(window);