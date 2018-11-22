//显示二维码
function setqrCode() {
    var phone = document.getElementById("phone_link");
    var qr = document.getElementById("img_qrcode");

    phone.onmouseover = function () {

        qr.style.display = "inline";
    };
    phone.onmouseout = function () {

        qr.style.display = "none";
    };

};

function getElementsByClassName(className, root, tagName) {
    if (root) {
        root = typeof root == "string" ? document.getElementById(root) : root;
    } else {
        root = document.body;
    }
    tagName = tagName || "*";
    if (document.getElementsByClassName) {                    //如果浏览器支持getElementsByClassName，就直接的用
        return root.getElementsByClassName(className);
    } else {
        var tag = root.getElementsByTagName(tagName);    //获取指定元素
        var tagAll = [];                                    //用于存储符合条件的元素
        for (var i = 0; i < tag.length; i++) {                //遍历获得的元素
            for (var j = 0, n = tag[i].className.split(' ') ; j < n.length; j++) {    //遍历此元素中所有class的值，如果包含指定的类名，就赋值给tagnameAll
                if (n[j] == className) {
                    tagAll.push(tag[i]);
                    break;
                }
            }
        }
        return tagAll;
    }
};