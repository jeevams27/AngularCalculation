import { Component } from "@angular/core";

@Component({
    selector:'vol-cylinder',
    templateUrl:'./cylinder.component.html',

})
export class CylinderComponent{
    height:number;
    radius:number;
    volume:number;
    constructor(){
        this.height=15
        this.radius=25
        this.volume=(this.height*this.radius**2*22/7)

    }
    onCalculate(){
        this.volume=(this.height*this.radius**2*22/7)
    }
}

