class Square {
  constructor(origin, side) {
    this.origin = origin;
    this.side = side;
  }

  diagonalEdge() {
    const x = this.origin.x + this.side;
    const y = this.origin.y - this.side;
    this.bottomRight = { x, y };
    return this.bottomRight;
  }

  isNumberInRange(start, end, number) {
    return start < number < end;
  }

  isPointInsideSquare(point) {
    this.diagonalEdge();
    const xCoOrdinates = [this.origin.x, this.bottomRight.x, point.x];
    const yCoOrdinates = [this.origin.y, this.bottomRight.y, point.y];
    return this.isNumberInRange(...xCoOrdinates) && this.isNumberInRange(...yCoOrdinates);
  }
}

const origin = { x: 2, y: 4 };
const sqr = new Square(origin, 3);

let point = { x: 3, y: 9 };
console.log(sqr.isPointInsideSquare(point)); // false

point = { x: 3, y: 2 };
console.log(sqr.isPointInsideSquare(point)); // true
