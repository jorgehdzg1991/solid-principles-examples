import {
  Shape
} from '../4.Interface-Segregation-Principle/correct';

class Rectangle implements Shape {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  calculateArea(): number {
    return this.x * this.y;
  }
}

class Square implements Shape {
  x: number;
  y: number;

  constructor(x: number) {
    this.x = x;
    this.y = x;
  }

  calculateArea(): number {
    return this.x * this.x;
  }
}

class AreaCalculator {
  outputArea(shape: Shape) {
    console.log('Area is: ', shape.calculateArea());
  }
}

const rectangle = new Rectangle(5, 10);
const square = new Square(4);

const calculator = new AreaCalculator();

calculator.outputArea(rectangle);
calculator.outputArea(square);
