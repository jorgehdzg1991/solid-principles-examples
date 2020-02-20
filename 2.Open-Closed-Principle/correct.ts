class RegularShape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
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

const rectangle = new Rectangle(5, 10);
const area = rectangle.calculateArea();
