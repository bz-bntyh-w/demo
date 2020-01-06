class Main extends egret.DisplayObjectContainer {
    public offsetX: number;
    public offsetY: number;
    public _shape: egret.Shape = new egret.Shape;
    constructor() {
        super();
        this.once(egret.Event.ADDED_TO_STAGE, this.onload, this);
    }
    // 加载资源
    private async loadResource() {
        try {
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("preload");
        } catch(err) {
            console.log(err)
        }
    }
    private async onload() {
        // 加载资源组
        await this.loadResource();
        //事件机制
        this.doEvent()
        //文本类型
        // this.texts();
        // 碰撞检测-像素
        // this.isHit();
        // 遮罩
        // this.maskDemo()
        // 重新设置显示对象的深度
        // this.objectZIndex();
        // 加载实例，bitmap移动
        // this.shapeResource();
    }
    // 男女向女朋友派送事件
    private doEvent() {
        //创建一个男朋友
        var boy:Boy = new Boy();
        boy.name = "男朋友";
        //创建一个女朋友
        var girl:Girl = new Girl();
        girl.name = "女朋友";
        //注册侦听器
        boy.addEventListener(DateEvent.DATE,girl.getDate,girl);
        //男朋友发送要求
        boy.order();
        //约会邀请完成后，移除侦听器
        boy.removeEventListener(DateEvent.DATE,girl.getDate,girl);
    }
    // 文本类型
    private texts() {
        var textIput:egret.TextField = new egret.TextField();
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
        textIput.textFlow = new egret.HtmlTextParser().parse(
            "<font color=0xff0000 size=12>妈妈再也不用担心我在</font>"+
            "<font color='#336699' size=60 strokecolor='#6699cc' stroke=2>Egret</font>"
        );
        textIput.bold = true
        textIput.italic = true
    }
    // 碰撞检测
    private isHit() {
        let shpe:egret.Shape = new egret.Shape();
        shpe.graphics.beginFill(0xff0000);
        shpe.graphics.drawCircle(100,100,50);
        shpe.graphics.endFill();
        this.addChild(shpe);
        let isHit:Boolean = shpe.hitTestPoint(50,150,true);
        console.log(`像素碰撞检测：${isHit}`);
    }
    /**
     * 根据name关键字创建一个Bitmap对象。
     */
    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    private maskDemo() {
        let _bitmap = new egret.Bitmap;
        _bitmap.texture = RES.getRes("bg_jpg");
        _bitmap.mask = new egret.Rectangle(10, 10, 100, 100);
        this.addChild(_bitmap);
    }
    // 重新设置显示对象的深度
    private objectZIndex() {
        let container = new egret.Sprite();
        container.sortableChildren = true;//注意，一定要设置为true
        this.addChild(container);
        let texture: egret.Texture = RES.getRes("bg_jpg");
        let b1 = new egret.Bitmap();
        b1.texture = texture;
        b1.width = 100;
        b1.height = 100;
        b1.x = 10;
        container.addChild(b1)
        let b2 = new egret.Bitmap();
        b2.texture = texture;
        b2.x = 50;
        b2.width = 100;
        b2.height = 100;
        container.addChild(b2)
        let b3 = new egret.Bitmap();
        b3.texture = texture;
        b3.x = 100;
        b3.width = 100;
        b3.height = 100;
        container.addChild(b3)
        b2.zIndex = 3;//将第二个图片设置到顶部
    }
    // 显示对象和显示容器
    private shapeResource() {
        this._shape.graphics.beginFill(0xff0000);
        this._shape.graphics.drawRect(0,0,100,100);
        this._shape.graphics.endFill();
        this._shape.x = 200;
        this._shape.y = 200;
        this._shape.scaleX = 2; // 缩放
        this._shape.scaleY = 2; // 缩放
        // this._shape.rotation = 45; // 旋转
        // this._shape.skewX = 20; // 斜切
        this._shape.skewY = 20; // 斜切
        var targetPoint: egret.Point = this._shape.localToGlobal(0,0);
        // console.log(targetPoint)
        this.addChild(this._shape);
        this. _shape.touchEnabled = true;
        this._shape.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.startMove, this);
        this._shape.addEventListener(egret.TouchEvent.TOUCH_END, this.startMove, this);
    }
    private startMove(e: egret.TouchEvent) {
        this.offsetX = e.stageX - this._shape.x;
        this.offsetY = e.stageY - this._shape.y;
        this._shape.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
    }
    private onMove(e: egret.TouchEvent) {
        this._shape.x = e.stageX - this.offsetX;
        this._shape.y = e.stageY - this.offsetY;
        console.log(this._shape.hitTestPoint(100,100)); // 碰撞
    }
}