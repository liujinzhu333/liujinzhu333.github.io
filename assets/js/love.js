// 定义
var canvas = document.getElementById("love-canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var width = window.innerWidth;
var height = window.innerHeight;

// 数据绘制
var drawList = []
// 文本绘制
function drawText(obj) {
  ctx.font = obj.font;
  ctx.fillStyle = obj.color;
  ctx.fillText(obj.text, obj.x, obj.y);
}
function drawData(obj) {
  /** 数据设置 */
  /** 清空画布 */
  /** 绘制数据 */
  ctx.beginPath();
}
drawText({
  text: "I love you",
  x: 10,
  y: 20,
  font: "12px",
  color: "red"
})

document.addEventListener('click', function(event) {
  const box = document.createElement('div');
  box.className = 'love-m';
});
