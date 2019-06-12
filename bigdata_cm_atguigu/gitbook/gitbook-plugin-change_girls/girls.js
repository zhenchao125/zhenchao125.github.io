var gitbook = window.gitbook;
var options;
var imgUrls;
var time;
gitbook.events.bind('start', function (e, config){
    // Save config data
    options = config['change_girls'] || {};
    imgUrls = options.urls;
    time = options.time || 5;
    imgUrls.push("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525951838982&di=7b7634a3a210401a4808479e7214839e&imgtype=0&src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F86%2Fa0%2Fba%2F86a0badf557c0df8754d71de7362aa7c.jpg",
"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525951838982&di=c6b3dacf6e2eff234eb5dfaba798f577&imgtype=0&src=http%3A%2F%2Ff7.topitme.com%2F7%2F27%2Fba%2F1125891165655ba277o.jpg",
"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525951838982&di=3b4ac0a0338a0203853fe18fff4e1bf9&imgtype=0&src=http%3A%2F%2Fuploadfile.bizhizu.cn%2F2014%2F0617%2F20140617023137471.jpg",
"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525952018257&di=0a6950a82270258270e04fa3ff17a9d8&imgtype=0&src=http%3A%2F%2Fdl.bizhi.sogou.com%2Fimages%2F2014%2F08%2F14%2F807801.jpg",
"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525952018257&di=35422591c0c33a024bc3ab3840374098&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201311%2F12%2F20131112122118_kwCT8.jpeg",
"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525952018257&di=1fecd25285cbde0685565d3690dae49a&imgtype=0&src=http%3A%2F%2Fp4.gexing.com%2Fshaitu%2F20120815%2F1414%2F502b3e2804104.jpg",
"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525952018257&di=31cdee6305aa0fe07b37d28662da4f5c&imgtype=0&src=http%3A%2F%2Fimg.newyx.net%2Fnews_img%2F201307%2F31%2F1375252345_1383080570.jpg",
"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525952018255&di=0aa1c6143bf2044e7723118b213201e5&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201608%2F21%2F20160821171452_KT2V4.jpeg",
"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525952018255&di=24a156848bf28086f8f4c1c2af3d7aef&imgtype=0&src=http%3A%2F%2Fimg2.a0bi.com%2Fupload%2Fttq%2F20160723%2F1469244123334.jpg",
"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525952018255&di=1f7dd45764799d74df915be16cf7b92e&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fblog%2F201509%2F05%2F20150905201655_AuXMN.thumb.700_0.jpeg",
"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525952018255&di=747c57728e58c0ed39af683dff51a1ed&imgtype=0&src=http%3A%2F%2Fupload.njdaily.cn%2F2017%2F0119%2F1484809578361.jpeg%3FimageView%26thumbnail%3D550x0")
});
var id;
gitbook.events.bind("page.change", function (){
    var index = randomInt(0, imgUrls.length - 1);
    clearInterval(id);
    $("<div>").addClass("girls").prependTo($(".book-body"));

    $(".girls").css("backgroundImage", "url(" + imgUrls[index] + ")");
    id = setInterval(function (){
        index = randomInt(0, imgUrls.length - 1);
        $(".girls").css("backgroundImage", "url(" + imgUrls[index] + ")");
    }, time * 1000);
});

function randomInt(from, to) {
    return parseInt(Math.random() * (to - from + 1) + from);
}