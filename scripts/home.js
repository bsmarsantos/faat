window.onload = function () {
    var ctx = document.getElementById('canvas').getContext('2d');

    ctx.fillStyle = "#FFAA00";

    ctx.beginPath();
    ctx.moveTo(123, 70);
    ctx.lineTo(111, 55);
    ctx.lineTo(123, 58);
    ctx.lineTo(135, 55);
    ctx.lineTo(123, 70);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}