//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  isValid() {
    return (this.a + this.b > this.c) &&
           (this.b + this.c > this.a) &&
           (this.a + this.c > this.b)
  }

  isEquilateral() {
    return this.isValid() && (this.a === this.b && this.b === this.c);
  }

  isIsosceles() {
    return this.isValid() && !this.isScalene();
  }

  isScalene() {
    return this.isValid() && (this.a !== this.b && this.b !== this.c && this.a !== this.c); 
  }
}
