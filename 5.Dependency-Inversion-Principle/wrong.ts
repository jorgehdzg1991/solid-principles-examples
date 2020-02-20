// import {
//   Shape
// } from '../4.Interface-Segregation-Principle/correct';

// class Rectangle implements Shape {
//   x: number;
//   y: number;

//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }

//   calculateArea(): number {
//     return this.x * this.y;
//   }
// }

// class Square implements Shape {
//   x: number;
//   y: number;

//   constructor(x: number) {
//     this.x = x;
//     this.y = x;
//   }

//   calculateArea(): number {
//     return this.x * this.x;
//   }
// }

// class AreaCalculator {
//   outputRectangleArea(x: number, y: number) {
//     const rectangle = new Rectangle(x, y);
//     console.log('Area is: ', rectangle.calculateArea());
//   }
// }
