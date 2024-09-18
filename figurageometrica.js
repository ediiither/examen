class FiguraGeometrica {
    calcularArea() {
        throw new Error("Este método debe ser sobrescrito en las subclases");
    }
}

class Cuadrado extends FiguraGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    calcularArea() {
        return this.lado * this.lado;
    }
}

class Triangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}

class Rectangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return this.base * this.altura;
    }
}

function clasificarFigura(figura) {
    const area = figura.calcularArea();
    if (area < 20) {
        return "Pequeña";
    } else {
        return "Grande";
    }
}

// Ejemplo de uso
const cuadrado = new Cuadrado(4);
const triangulo = new Triangulo(3, 5);
const rectangulo = new Rectangulo(8, 6);

console.log(cuadrado.calcularArea()); // 16
console.log(clasificarFigura(cuadrado)); // "Pequeña"

console.log(triangulo.calcularArea()); // 7.5
console.log(clasificarFigura(triangulo)); // "Pequeña"

console.log(rectangulo.calcularArea()); // 48
console.log(clasificarFigura(rectangulo)); // "Grande"