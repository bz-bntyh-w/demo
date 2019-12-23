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
        this._shape.graphics.beginFill(0xff0000);
        this._shape.graphics.drawRect(0, 0, 100, 100);
        this._shape.graphics.endFill();
        this._shape.x = 200;
        this._shape.y = 200;
        var targetPoint = this._shape.localToGlobal(0, 0);
        console.log(targetPoint);
        this.addChild(this._shape);
        this._shape.touchEnabled = true;
        this._shape.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.startMove, this);
    };
    Main.prototype.startMove = function (e) {
        console.log(11111);
        this.offsetX = e.stageX - this._shape.x;
        this.offsetY = e.stageY - this._shape.y;
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
