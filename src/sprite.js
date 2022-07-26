class Sprite {
    constructor(x, y, largura, altura) {

        this.x = x;

        this.y = y;

        this.largura = largura;

        this.altura = altura;

        this.colorindo = function (xCanvas, yCanvas) {

            ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);

        };

    }
}

var fundoImg = new Sprite(0, 0, 800, 400);

var gramaImg = new Sprite(157, 402, 243, 29);

var grama2Img = new Sprite(489, 827, 310, 72);

var skateImg = new Sprite(209, 774, 133, 109);

var menuInicialImg = new Sprite(123, 445, 316, 254);

var menuPerdeuImg = new Sprite(442, 448, 313, 262);

var menuGanhouImg = new Sprite(776, 437, 307, 256);

var novoImg = new Sprite(0, 720, 160, 49);

var maxImg = new Sprite(529, 730, 86, 30);