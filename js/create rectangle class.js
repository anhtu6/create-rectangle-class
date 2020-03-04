function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.setWidth = function (width) {
        this.width = width;
    };
    this.setHeight = function (height) {
        this.height = height;
    }
    this.calculateArea = function () {
        return this.width*this.height;
    };
    this.calculatePerimeter = function () {
        return 2*(this.width+this.height);
    };
    this.displayRectangle = function () {
        let ctx = document.getElementById('myCanvas').getContext('2d');
        ctx.beginPath();
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(20,20,this.width,this.height);

    }
}
let rectangle = new Rectangle(200,300);
rectangle.displayRectangle();
rectangle.setWidth(10);
rectangle.setHeight(20);
let area = rectangle.calculateArea();
let perimeter = rectangle.calculatePerimeter();
alert('dien tich la '+area+', chu vi la '+perimeter);