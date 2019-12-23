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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onload, _this);
        return _this;
    }
    Main.prototype.onload = function () {
        var _shape = new egret.Shape;
        _shape.graphics.beginFill(0xff0000);
        _shape.graphics.drawRect(0, 0, 100, 100);
        _shape.graphics.endFill();
        _shape.x = 200;
        _shape.y = 200;
        var targetPoint = _shape.localToGlobal(0, 0);
        console.log(targetPoint);
        this.addChild(_shape);
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
