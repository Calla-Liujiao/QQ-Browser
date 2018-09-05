$(function () {
    $('#fullpage').fullpage({
        // 内容是否垂直居中
        verticalCentered: false,
        // 是否显示导航
        navigation: true,
        continuousVertical:true,

        onLeave: function (index, nextIndex) {
            /* 
            1  从第一屏离开的时候触发 背景旋转
            2  假如 下一屏 是第一屏的话  就不要旋转   移除class
             */

            // console.log("从这一屏离开"+index);
            // console.log("下一屏"+nextIndex);

            if (index == 1) {
                $(".bg").addClass("bg_rotate");
                $(".s1-box").addClass("s1-box-begin");

            }

            if (nextIndex == 1) {
                $(".bg").removeClass("bg_rotate");
            }
            if (index == 2) {
                $('.s2-box').addClass('s2-box-end');
            }
            if(index == 3){
                $('.s3-box').addClass('s3-box-begin');
            }
            if(index == 4){
                $('.s4-box').addClass('s4-box-begin');
            }
        },
        afterLoad: function (linkname, index) {
            if (index == 1) {
                $('.s1-box').removeClass('s1-box-begin');
            }
            if (index == 2) {
                $('.s2-box').removeClass('s2-box-begin');
            }
            if (index == 3) {
                $('.s3-box').removeClass('s3-box-begin');
            }
            if (index == 4) {
                $('.s4-box').removeClass('s4-box-begin');
            }
        }
    });
    // 给s2_box 绑定过渡结束事件
    $(".s2-box").on("transitionend", function () {
        // console.log(123);
        // 判断是否是 s2_box_end 过渡结束
        if ($(".s2-box").hasClass("s2-box-end")) {
            // console.log("aaaaaaa");
            $('.s2-box').css('transition','none');
            $(".s2-box").attr("class", " s2-box s2-box-begin");
            setTimeout(() => {
                $('.s2-box').css('transition','transform 1s'); 
            }, 1);
        }
    })
})

