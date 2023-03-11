interface Car{
    name:string
    model:string
    run():void;
}

class BMW implements Car
{
    name: string
    model: string
    run(): void {
        console.log("BMW is running")
    }
}

var aBMW = new BMW();
aBMW.run()
