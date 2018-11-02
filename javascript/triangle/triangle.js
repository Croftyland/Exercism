var Triangle = function(a, b, c) {
    if (this instanceof Triangle) {
        this.a = a;
        this.b = b;
        this.c = c;
    } else {
        return new Triangle(a, b, c);
    }
};

Triangle.prototype.kind = function() {
    if (this.a === 0 || this.b === 0 || this.c === 0) {
        throw new Error(
            "a triangle must have 3 sides with positive definate length");
    }
    if (this.a + this.b <= this.c) {
        throw new Error(
            "triangles with negative sides are illegal");
    }
    if (this.a + this.c <= this.b) {
        throw new Error(
            "triangles with negative sides are illegal");
    }
    if (this.b + this.c <= this.a) {
        throw new Error(
            "triangles with negative sides are illegal");
    }
    else if (this.a < 0 || this.b < 0 || this.c < 0) {
        return "illegal";
    }
    else if (this.a + this.b <= this.c || this.a + this.c <= this.b || this.b +
        this.c <= this.a) {
        return "illegal";
    }
    if (this.a == this.b && this.b == this.c) {
        return "equilateral";
    }
    else if (this.a === this.b || this.b === this.c || this.a === this.c) {
        return "isosceles";
    }
    else {
        return "scalene";
    }
};

module.exports = Triangle;