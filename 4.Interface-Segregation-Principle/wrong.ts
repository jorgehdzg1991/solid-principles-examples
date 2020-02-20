// interface Shape {
//   x: number;
//   y: number;
//   z: number;

//   calculateArea: () => number;
//   calculateVolume: () => number;
// }

// class Rectangle implements Shape {
//   x: number;
//   y: number;
//   z: number;

//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }

//   calculateArea(): number {
//     return this.x * this.y;
//   }

//   calculateVolume(): number {
//     throw new Error('A rectangle is not a solid shape.');
//   }
// }

// class Box implements Shape {
//   x: number;
//   y: number;
//   z: number;

//   constructor(x: number, y: number, z: number) {
//     this.x = x;
//     this.y = y;
//     this.z = z;
//   }

//   calculateArea(): number {
//     return (2 * (this.x * this.y)) + 
//       (2 * (this.y * this.z)) +
//       (2 * (this.x * this.z));
//   }

//   calculateVolume(): number {
//     return this.x * this.y * this.z;
//   }
// }
