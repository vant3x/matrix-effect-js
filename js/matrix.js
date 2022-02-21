const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

let cw = window.innerWidth;
let ch = window.innerHeight;

let charArr = [];

let maxCharCount = 1000;
let fallingCharArr = [];
let fontSize = 15;
let maxColumns = cw/fontSize;
canvas.width = cw;
canvas.height = ch;

let frames = 0;


class FallingChar {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw(ctx) {
        this.value = charArr[Math.floor(Math.random() * (charArr.length - 1))].toUpperCase();
        this.speed = Math.random() * fontSize * 3 / 4 + fontSize * 3 / 4;
        ctx.fillStyle = "rgba(0,255,0)";
        ctx.font = fontSize + "px san-serif";
    }
}