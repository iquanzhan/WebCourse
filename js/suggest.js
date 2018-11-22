window.onload = function () {
    //二维码显示隐藏
    setqrCode();
};


function suggest() {


    var a = checkTrue("suggestContent", "suggest_error");
    var b = checkTrue("suggestContent", "suggest_error");
    var c = checkRadio();
    var f = checkTrue("qqnum", "qqnum_error");
    var d = checkTrue("mail", "mail_error");
    var e = checkTrue("phonenum", "phonenum_error");

    if (a && b && c && d && e & f) {
        alert("提交成功");
    }



};


function checkTrue(labName, laberrorName) {
    var phonenum = document.getElementById(labName);

    var phonenum_error = document.getElementById(laberrorName);
    if (phonenum == null || phonenum.value == "") {
        phonenum_error.style.display = "inline";

        return false;
    }
    phonenum_error.style.display = "none";
    return true;
};

function checkRadio() {
    var manyi = document.getElementsByName("AllPopulation");


    var check = 0;
    for (var i = 0; i < manyi.length; i++) {
        if (manyi[i].checked) {
            check = 1;
        }

    }

    var manyi_error = document.getElementById("manyi_error")
    if (check == 0) {
        manyi_error.style.display = "inline";
        return false;
    }
    manyi_error.style.display = "none";
    return true;
};
