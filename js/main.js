(function init(){
  const dom = document.getElementById('hello');
  if (!dom) return;
  const time = new Date().toLocaleDateString();
  dom.innerHTML = `Hello, World! It is ${time}`;
})()