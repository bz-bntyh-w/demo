class DateEvent extends egret.Event {
    public static DATE:string = '约会';
    public _year: number = 0;
    public _month: number = 0;
    public _date: number = 0;
    public _where: string = '';
    public _todo: string = '';
    public constructor(type: string, bubbles:boolean=false, cancelable:boolean=false) {
        super(type,bubbles,cancelable);
    }
}

class Boy extends egret.Sprite
{
    public constructor()
    {
        super();
    }
    public order()
    {
        //生成约会事件对象
        var daterEvent:DateEvent = new DateEvent(DateEvent.DATE);
        //添加对应的约会信息
        daterEvent._year = 2014;
        daterEvent._month = 8;
        daterEvent._date = 2;
        daterEvent._where = "肯德基";
        daterEvent._todo = "共进晚餐";
        //发送要求事件
        this.dispatchEvent(daterEvent);
    }
}

class Girl extends egret.Sprite
{
    public constructor()
    {
        super();
    }
    public getDate(evt:DateEvent)
    {
        console.log("得到了" + evt.target.name + "的邀请！" );
        console.log("会在" + evt._year + "年" + evt._month + "月" + evt._date + "日，在"+ evt._where+ evt._todo);
    }
}