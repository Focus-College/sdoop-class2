class WaterBottle {

    isOpen: boolean = false;
    isTipped: boolean = false;

    constructor( public height:number, public width:number, public depth:number ){

    }

    pressTrigger(){
        this.isOpen = true;
    }

    letGoOfTrigger(){
        this.isOpen = false;
    }

    tipUp(){
        this.isTipped = true;
    }

    tipDown(){
        this.isTipped = false;
    }

    isLiquidLeaving(){
        return this.isOpen && this.isTipped;
    }

    volume(){
        return this.height * this.width * this.depth;
    }

}

class RoundWaterBottle extends WaterBottle {

    constructor( height:number, diameter:number ){
        super( height, diameter, diameter );
    }

    volume(){
        return Math.PI * Math.pow((this.width / 2), 2) * this.height;
    }

}