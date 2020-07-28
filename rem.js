// rem适配
function setRem() {
  console.log(document.body);
  var whdef = 100 / 1920; // 表示1920的设计图,使用100PX的默认值
  var wW = document.body.clientWidth; //window.innerWidth;// 当前窗口的宽度
  var rem = wW * whdef; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
  // $('html').css('font-size', rem + "px");
  window.document.getElementsByTagName('html')[0].style.fontSize = rem + 'px';
}
window.onload = function () {
  setRem();
  window.addEventListener('load', setRem);
  window.addEventListener('resize', setRem);
}
