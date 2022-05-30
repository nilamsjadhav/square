class Square {
  constructor(origin, side) {
    this.origin = origin;
    this.side = side;
  }

  diagonalEdge() { // bottomRightDiagonalEdge
    const x = this.origin.x + this.side;
    const y = this.origin.y - this.side;
    this.bottomRight = { x, y };
  }

  isNumberInRange(start, end, number) {
    return start < number < end;
  }

  isPointInRange(point) {
    const xCoOrdinates = [this.origin.x, this.bottomRight.x, point.x];
    const yCoOrdinates = [this.origin.y, this.bottomRight.y, point.y];

    return this.isNumberInRange(...xCoOrdinates)
      && this.isNumberInRange(...yCoOrdinates);
  }

  isPointInsideSquare(point) {
    this.diagonalEdge();
    return this.isPointInRange(point);
  }
}

const origin = { x: 2, y: 4 };
const side = 3;

const sqr = new Square(origin, side);

let point = { x: 3, y: 9 };
console.log(sqr.isPointInsideSquare(point)); // false

point = { x: 3, y: 2 };
console.log(sqr.isPointInsideSquare(point)); // true
