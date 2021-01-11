let Batterycharge=130;
let consumption= 0;
let color="blue";
let dacia = {
   make:"Dacia" ,
   model:1310,
   color: "verde",
   year: 1978,
   mileage: 525737,
   maxSpeed: 180,
   paint: function(color) {
      this.color = color;
}   
,move: function (distance) {
    consumption +=  this.averageconsumption * distance/100
    
    Batterycharge -= consumption; 
     this.mileage == distance;
    },
    recharge() {
     this.Batterycharge = this.Batterycapacity;
    },
    distance20() {
        return 100 * this.Batterycharge / this.averageconsumption
    }
}
   let Ferari = {
     make:"Ferari",
    model:"Dino",
    color:"Rosu",
    year:1978,
    mileage:525737,
    maxspeed:180,
    paint: function(color) {
        this.color= color
    }
}

dacia.paint("galben");
dacia.move(100);
console.log(dacia);
console.log(Ferari);
