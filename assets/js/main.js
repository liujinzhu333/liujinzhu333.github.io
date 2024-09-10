(function init(){
  const dom = document.getElementById('hello');
  if (!dom) return;
  // const time = new Date().toLocaleDateString();
  const hour = new Date().getHours();
  if (hour < 6 || hour >= 20) {
    dom.innerHTML = `深夜好`;
  } else if (hour < 12) {
    dom.innerHTML = `早上好！`
  } else if (hour < 18) {
    dom.innerHTML = `下午好`;
  } else {
    dom.innerHTML = `晚上好`;
  }
})()