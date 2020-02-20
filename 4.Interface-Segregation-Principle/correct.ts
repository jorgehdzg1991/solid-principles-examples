export interface Shape {
  x: number;
  y: number;

  calculateArea: () => number;
}

export interface SolidShape extends Shape {
  z: number;

  calculateVolume: () => number;
}

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

class Box implements SolidShape {
  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  calculateArea(): number {
    return (2 * (this.x * this.y)) + 
      (2 * (this.y * this.z)) +
      (2 * (this.x * this.z));
  }

  calculateVolume(): number {
    return this.x * this.y * this.z;
  }
}
