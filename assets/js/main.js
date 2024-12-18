function hello() {
  const dom = document.getElementById('hello');
  if (!dom) return;
  // const time = new Date().toLocaleDateString();
  const hour = new Date().getHours();
  let timeText = ''
  if (hour < 6 || hour >= 22) {
    timeText = `深夜好！`;
  } else if (hour < 12) {
    timeText = `早上好！`
  } else if (hour < 18) {
    timeText = `下午好！`;
  } else {
    timeText = `晚上好！`;
  }
  dom.innerHTML = `${timeText} 今天是 ${new Date().toLocaleDateString()}。`;
}
(function init(){
  hello()
})()