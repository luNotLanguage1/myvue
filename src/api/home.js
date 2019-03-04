var adList = new Promise(function(resolve){
        //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
        //在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.
        setTimeout(function(){
            var data = [
                {img:'/img/slice.jpg'},
                {img:'/img/slide.jpg'},
                {img:'/img/slice.jpg'}
            ];
            resolve(data); //代码正常执行！
        }, 250);
    });

    var movieList = new Promise(function(resolve){
        setTimeout(function(){
            var data = [
                {
                    "filmNo":"10002653",
                    "cName":"江海渔童之巨龟奇缘",
                    "filmType":"动画片",
                    "firstDate":"2019-03-15",
                    "showType":"2D",
                    "remark":"",
                    "thumbnail":"http://yx.mopon.cn:8564/Upload/FilmPic/201903/laogongqunale/170-240.jpg",
                    "averageDegree":6,
                    "mainActors":"杨光普照/张磊/郭政建",
                    "status":2,
                    "filmviewUrl":"/v4.0/index.php?r=film%2Ffilmview&filmNo=10002653&status=2&_target=blank"
                },
                {
                    "filmNo":"10002683",
                    "cName":"老公去哪了",
                    "filmType":"爱情喜剧",
                    "firstDate":"2019-03-15",
                    "showType":"2D",
                    "remark":"",
                    "thumbnail":"http://yx.mopon.cn:8564/Upload/FilmPic/201903/laogongqunale/170-240.jpg",
                    "averageDegree":6,
                    "mainActors":"黄俊鹏/黄小蕾/沈梦辰/彭宇",
                    "status":2,
                    "filmviewUrl":"/v4.0/index.php?r=film%2Ffilmview&filmNo=10002683&status=2&_target=blank"
                },
                {
                    "filmNo":"10002685",
                    "cName":"舞台",
                    "filmType":"都市/爱情/励志",
                    "firstDate":"2019-03-15",
                    "showType":"2D",
                    "remark":"",
                    "thumbnail":"http://yx.mopon.cn:8564/Upload/FilmPic/201903/wutai/170-240.jpg",
                    "averageDegree":6,
                    "mainActors":"孙楚鸿/董妮娜/侍宣如/吴汉钧",
                    "status":2,
                    "filmviewUrl":"/v4.0/index.php?r=film%2Ffilmview&filmNo=10002685&status=2&_target=blank"
                },
                {
                    "filmNo":"10002689",
                    "cName":"阳台上",
                    "filmType":"剧情",
                    "firstDate":"2019-03-15",
                    "showType":"2D",
                    "remark":"",
                    "thumbnail":"http://yx.mopon.cn:8564/Upload/FilmPic/201903/yangtaishang/170-240.jpg",
                    "averageDegree":7.4,
                    "mainActors":"周冬雨/王锵/曹瑞",
                    "status":2,
                    "filmviewUrl":"/v4.0/index.php?r=film%2Ffilmview&filmNo=10002689&status=2&_target=blank"
                }
            ];
            resolve(data); //代码正常执行！
        }, 250);
    });


var list = {adList,movieList}
export default list;