// let obj = {
//     a:1,
//     b:"Sachin"
// }

// console.log(obj)
// let animal = {
//     eats:true
// };
// let rabbit = {
//     jumps:true
// };

// rabbit.__proto__ = animal;
class Animal{
    constructor(name){
        this.name = name
        console.log("Object is created...")
    }
    eats(){
        console.log("Kha rha hun")
    }
    jumps(){
        console.log('Kud rha hun');
        
    }
}

class Lion extends Animal{
    constructor(name){
        super(name)
        console.log("Object is created and he is lion..")
    }
        eats(){
            super.eats
        console.log("Kha rha hun roaaaar")
    }

}

let a = new Animal("Bunny")
console.log(a)

let l = new Lion("Shera")
console.log(1)