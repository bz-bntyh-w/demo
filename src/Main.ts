class Main extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.once(egret.Event.ADDED_TO_STAGE, this.onload, this);
    }
    private onload() {
        let _shape: egret.Shape = new egret.Shape;
        _shape.graphics.beginFill(0xff0000);
        _shape.graphics.drawRect(0,0,100,100);
        _shape.graphics.endFill();
        _shape.x = 200;
        _shape.y = 200;
        var targetPoint: egret.Point = _shape.localToGlobal(0,0);
        console.log(targetPoint)
        this.addChild(_shape);
    }
}