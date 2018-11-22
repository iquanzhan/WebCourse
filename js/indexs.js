window.onload = function () {



    /*显示手机二维码*/
    setqrCode();


    /*时间显示*/
    timeDisplay();

    SileAni();
};








function animate(obj, target) {
    clearInterval(obj.timer);

    var speed = obj.offsetLeft < target ? 15 : -15;
    obj.timer = setInterval(function () {
        var result = target - obj.offsetLeft;

        obj.style.left = obj.offsetLeft + speed + "px";
        if (Math.abs(result) <= 15) {
            obj.style.left = target + "px";
            clearInterval(obj.timer);
        }
    }, 10);
};
function autoplay() {
    key++;   // key == 1  先 ++

    if (key > ulLis.length - 1) {

        ul.style.left = 0;
        key = 1;

    }
    animate(ul, -key * ulLis[0].offsetWidth);

    square++;
    square = square > olLis.length - 1 ? 0 : square;

    for (var i = 0; i < olLis.length; i++) {
        olLis[i].className = "";
    }
    olLis[square].className = "current";

};
var timer = null;  // 定时器
var key = 0; // 用来控制图片的播放
var square = 0;  // 用来控制小方块
var ulLis;
var ul;
var olLis;


function SileAni() {
    var box = getElementsByClassName("banner_base")[0];  //   获得大盒子
    ul = box.children[0];  // 获取ul
    ulLis = ul.children;  //  ul 里面的所有  li


    ul.appendChild(ulLis[0].cloneNode(true));

    // 插入 ol 里面的li
    var ol = box.children[1];

    for (var i = 0; i < ulLis.length - 1 ; i++) {
        var li = document.createElement("li");
        li.innerHTML = i + 1;

        ol.appendChild(li);
    }

    olLis = ol.children;
    olLis[0].className = 'current';


    timer = setInterval(autoplay, 3000);


    //  动画部分  遍历小li ol
    for (var i = 0; i < olLis.length; i++) {
        olLis[i].index = i;  // 赋予索引号
        olLis[i].onmouseover = function () {
            // 清除所有人
            for (var j = 0; j < olLis.length; j++) {
                olLis[j].className = "";
            }
            this.className = 'current';
            animate(ul, -this.index * ulLis[0].offsetWidth);
            key = square = this.index;
        }
    }




    box.onmouseover = function () {
        clearInterval(timer);
    };

    box.onmouseout = function () {

        timer = setInterval(autoplay, 3000);

    };

};



//时间显示
function timeDisplay() {
    var weeks = [
      '星期日',
      '星期一',
      '星期二',
      '星期三',
      '星期四',
      '星期五',
      '星期六'
    ];
    setInterval(function () {
        var time = new Date();
        var now = document.getElementById("time");

        var year = time.getFullYear();
        var month = time.getMonth() + 1;
        var days = time.getDate();
        var hour = time.getHours();
        var minutes = time.getMinutes();
        var second = time.getSeconds();

        var index = time.getDay();

        now.innerHTML = year + "年" + month + "月" + days + "日" + "&nbsp;" + weeks[index] + "&nbsp;" + hour + ":" + minutes + ":" + second;

    }, 1000);
};
