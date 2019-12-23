class Main extends egret.DisplayObjectContainer {
    public offsetX: Number;
    public offsetY:Number;
    public _shape: egret.Shape;
    constructor() {
        super();
        this.once(egret.Event.ADDED_TO_STAGE, this.onload, this);
    }
    private onload() {
        this._shape.graphics.beginFill(0xff0000);
        this._shape.graphics.drawRect(0,0,100,100);
        this._shape.graphics.endFill();
        this._shape.x = 200;
        this._shape.y = 200;
        var targetPoint: egret.Point = this._shape.localToGlobal(0,0);
        console.log(targetPoint)
        this.addChild(this._shape);
       this. _shape.touchEnabled = true;
        this._shape.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.startMove, this);
    }
    private startMove(e: egret.TouchEvent) {
        console.log(11111)
        this.offsetX = e.stageX - this._shape.x;
        this.offsetY = e.stageY - this._shape.y;
    }
}