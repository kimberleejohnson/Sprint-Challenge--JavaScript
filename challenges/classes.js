// 1. Copy and paste your prototype in here and refactor into class syntax.

// Copy and pasted prototype code 
// function CuboidMaker(attributes) {
//     this.length = attributes.length; 
//     this.width = attributes.width; 
//     this.height = attributes.height; 
//   }

//   CuboidMaker.prototype.volume = function (){
//     return this.length * this.width * this.height; 
//   }


//   CuboidMaker.prototype.surfaceArea = function (){
//     return (2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height))); 
//   }


class CuboidMaker {
    constructor(attributes){
        this.length = attributes.length; 
        this.width = attributes.width; 
        this.height = attributes.height;   
    }

    // Methods 
    volume(){
        return this.length * this.width * this.height; 
    }

    surfaceArea(){
        return (2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height))); 
    }
} // CuboidMaker 

// Creating a new Cuboid from my class 
const cuboid = new CuboidMaker ({
    length: 4, 
    width: 5, 
    height:5, 
  }); 

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130

// Stretch Task: 

// Extend the base class CuboidMaker with a sub class called CubeMaker.  

class CubeMaker extends CuboidMaker {
    constructor(cubeAttributes) {
        super(cubeAttributes); 
    }

    // Methods
    // Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.

    // Volume is actually the same as Cuboid (l * w * h), so no need to create that function. 

    cubeSurfaceArea(){
        return 6 * (this.length * this.width); 
    }
}

// Test your work by logging out your volume and surface area.

const cube = new CubeMaker({
    length: 2, 
    width: 2, 
    height: 2,
}); 

console.log(cube.volume()); 
console.log(cube.cubeSurfaceArea()); 