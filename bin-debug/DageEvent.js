var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var DateEvent = (function (_super) {
    __extends(DateEvent, _super);
    function DateEvent(type, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        var _this = _super.call(this, type, bubbles, cancelable) || this;
        _this._year = 0;
        _this._month = 0;
        _this._date = 0;
        _this._where = '';
        _this._todo = '';
        return _this;
    }
    DateEvent.DATE = '约会';
    return DateEvent;
}(egret.Event));
__reflect(DateEvent.prototype, "DateEvent");
var Boy = (function (_super) {
    __extends(Boy, _super);
    function Boy() {
        return _super.call(this) || this;
    }
    Boy.prototype.order = function () {
        //生成约会事件对象
        var daterEvent = new DateEvent(DateEvent.DATE);
        //添加对应的约会信息
        daterEvent._year = 2014;
        daterEvent._month = 8;
        daterEvent._date = 2;
        daterEvent._where = "肯德基";
        daterEvent._todo = "共进晚餐";
        //发送要求事件
        this.dispatchEvent(daterEvent);
    };
    return Boy;
}(egret.Sprite));
__reflect(Boy.prototype, "Boy");
var Girl = (function (_super) {
    __extends(Girl, _super);
    function Girl() {
        return _super.call(this) || this;
    }
    Girl.prototype.getDate = function (evt) {
        console.log("得到了" + evt.target.name + "的邀请！");
        console.log("会在" + evt._year + "年" + evt._month + "月" + evt._date + "日，在" + evt._where + evt._todo);
    };
    return Girl;
}(egret.Sprite));
__reflect(Girl.prototype, "Girl");
