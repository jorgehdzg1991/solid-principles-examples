class RegularShape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    throw new Error('Not implemented.');
  }
}

class Rectangle extends RegularShape {
  calculateArea(): number {
    return this.width * this.height;
  }
}

class EquilateralTriangle extends RegularShape {
  calculateArea(): number {
    return (this.width * this.height) / 2;
  }
}

class AreaCalculator {
  shape: RegularShape;

  constructor(shape: RegularShape) {
    this.shape = shape;
  }

  outputArea(): void {
    console.log('Area is: ', this.shape.calculateArea());
  }
}

const rectangle = new Rectangle(5, 10);
const triangle = new EquilateralTriangle(3, 6);

new AreaCalculator(rectangle).outputArea();
new AreaCalculator(triangle).outputArea();
