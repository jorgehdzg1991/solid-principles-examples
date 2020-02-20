// class RegularShape {
//   width: number;
//   height: number;

//   constructor(width: number, height: number) {
//     this.width = width;
//     this.height = height;
//   }

//   calculateArea(): number {
//     throw new Error('Not implemented.');
//   }
// }

// class Rectangle extends RegularShape {
//   calculateArea(): number {
//     return this.width * this.height;
//   }
// }

// class EquilateralTriangle extends RegularShape {
//   calculateArea(): number {
//     return (this.width * this.height) / 2;
//   }
// }

// class RectangleAreaCalculator {
//   rectangle: RegularShape;

//   constructor(rectangle: Rectangle) {
//     this.rectangle = rectangle;
//   }

//   outputArea(): void {
//     console.log('Area is: ', this.rectangle.calculateArea());
//   }
// }

// class TriangleAreaCalculator {
//   triangle: RegularShape;

//   constructor(triangle: EquilateralTriangle) {
//     this.triangle = triangle;
//   }

//   outputArea(): void {
//     console.log('Area is: ', this.triangle.calculateArea());
//   }
// }

// const rectangle = new Rectangle(5, 10);
// const triangle = new EquilateralTriangle(3, 6);

// new RectangleAreaCalculator(rectangle).outputArea();
// new TriangleAreaCalculator(triangle).outputArea();
