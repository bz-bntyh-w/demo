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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this._shape = new egret.Shape;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onload, _this);
        return _this;
    }
    // 加载资源
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload")];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // 加载资源组
                    return [4 /*yield*/, this.loadResource()];
                    case 1:
                        // 加载资源组
                        _a.sent();
                        //事件机制
                        this.doEvent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // 男女向女朋友派送事件
    Main.prototype.doEvent = function () {
        //创建一个男朋友
        var boy = new Boy();
        boy.name = "男朋友";
        //创建一个女朋友
        var girl = new Girl();
        girl.name = "女朋友";
        //注册侦听器
        boy.addEventListener(DateEvent.DATE, girl.getDate, girl);
        //男朋友发送要求
        boy.order();
        //约会邀请完成后，移除侦听器
        boy.removeEventListener(DateEvent.DATE, girl.getDate, girl);
    };
    // 文本类型
    Main.prototype.texts = function () {
        var textIput = new egret.TextField();
        textIput.type = egret.TextFieldType.INPUT;
        textIput.background = true;
        textIput.backgroundColor = 0xffffff;
        textIput.textColor = 0x000000;
        textIput.width = 400;
        textIput.height = 400;
        textIput.fontFamily = "Impact";
        textIput.textAlign = egret.HorizontalAlign.CENTER;
        textIput.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChild(textIput);
        // 加粗斜体
        // textIput.textFlow = <Array<egret.ITextElement>>[{text: "aaaa", style: {textColor: 0xff0000, size: 30}},{text: "\n"},{text: "bbbb", style: {textColor: 0x00ff00, size: 20}}]
        textIput.textFlow = new egret.HtmlTextParser().parse("<font color=0xff0000 size=12>妈妈再也不用担心我在</font>" +
            "<font color='#336699' size=60 strokecolor='#6699cc' stroke=2>Egret</font>");
        textIput.bold = true;
        textIput.italic = true;
    };
    // 碰撞检测
    Main.prototype.isHit = function () {
        var shpe = new egret.Shape();
        shpe.graphics.beginFill(0xff0000);
        shpe.graphics.drawCircle(100, 100, 50);
        shpe.graphics.endFill();
        this.addChild(shpe);
        var isHit = shpe.hitTestPoint(50, 150, true);
        console.log("\u50CF\u7D20\u78B0\u649E\u68C0\u6D4B\uFF1A" + isHit);
    };
    /**
     * 根据name关键字创建一个Bitmap对象。
     */
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    Main.prototype.maskDemo = function () {
        var _bitmap = new egret.Bitmap;
        _bitmap.texture = RES.getRes("bg_jpg");
        _bitmap.mask = new egret.Rectangle(10, 10, 100, 100);
        this.addChild(_bitmap);
    };
    // 重新设置显示对象的深度
    Main.prototype.objectZIndex = function () {
        var container = new egret.Sprite();
        container.sortableChildren = true; //注意，一定要设置为true
        this.addChild(container);
        var texture = RES.getRes("bg_jpg");
        var b1 = new egret.Bitmap();
        b1.texture = texture;
        b1.width = 100;
        b1.height = 100;
        b1.x = 10;
        container.addChild(b1);
        var b2 = new egret.Bitmap();
        b2.texture = texture;
        b2.x = 50;
        b2.width = 100;
        b2.height = 100;
        container.addChild(b2);
        var b3 = new egret.Bitmap();
        b3.texture = texture;
        b3.x = 100;
        b3.width = 100;
        b3.height = 100;
        container.addChild(b3);
        b2.zIndex = 3; //将第二个图片设置到顶部
    };
    // 显示对象和显示容器
    Main.prototype.shapeResource = function () {
        this._shape.graphics.beginFill(0xff0000);
        this._shape.graphics.drawRect(0, 0, 100, 100);
        this._shape.graphics.endFill();
        this._shape.x = 200;
        this._shape.y = 200;
        this._shape.scaleX = 2; // 缩放
        this._shape.scaleY = 2; // 缩放
        // this._shape.rotation = 45; // 旋转
        // this._shape.skewX = 20; // 斜切
        this._shape.skewY = 20; // 斜切
        var targetPoint = this._shape.localToGlobal(0, 0);
        // console.log(targetPoint)
        this.addChild(this._shape);
        this._shape.touchEnabled = true;
        this._shape.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.startMove, this);
        this._shape.addEventListener(egret.TouchEvent.TOUCH_END, this.startMove, this);
    };
    Main.prototype.startMove = function (e) {
        this.offsetX = e.stageX - this._shape.x;
        this.offsetY = e.stageY - this._shape.y;
        this._shape.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
    };
    Main.prototype.onMove = function (e) {
        this._shape.x = e.stageX - this.offsetX;
        this._shape.y = e.stageY - this.offsetY;
        console.log(this._shape.hitTestPoint(100, 100)); // 碰撞
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
