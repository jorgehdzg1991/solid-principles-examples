class Rectangle {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public calculateArea(): number {
    return this.width * this.height;
  }
}

class AreaCalculator {
  private rectangle: Rectangle;

  constructor(rectangle: Rectangle) {
    this.rectangle = rectangle;
  }

  public outputArea(): void {
    console.log('Area is: ', this.rectangle.calculateArea());
  }
}

const myRectangle = new Rectangle(5, 10);
const myAreaCalculator = new AreaCalculator(myRectangle);
myAreaCalculator.outputArea();
