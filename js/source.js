window.onload = function () {
    //二维码显示隐藏
    setqrCode();

    download();
};



function download() {
    var btndownload = getElementsByClassName("download_file");

    for (var i = 0; i < btndownload.length; i++) {
        btndownload[i].onclick = function () {

            window.open("data/web.doc");
        };
    };
};

