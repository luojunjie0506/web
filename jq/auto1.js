
// 通过app名字启动app
app.launchApp('手机淘宝')
var sec1 = className("android.widget.FrameLayout").desc("扫一扫").findOne().parent()
sec1.child(1).child(0).child(0).click()
className('android.widget.EditText').setText('天猫全明星')
id("searchbtn").findOne().click()
sleep(2000)
var sec2 = className("android.view.View").desc("天猫全明星榜").findOne().parent()
sec2.click()
var accc1 = currentActivity()
sleep(4000)
// 找到所有text是送星星的控件,通过他们的父控件点击它
var ii = 0
var sec3 = text('送星星').find()
for(var oo=0; oo<sec3.size(); oo++) {
    if(oo !=0) {
        sec3 = text('送星星').find()
    }
    var dianji =  0
    ii = ii + 1
    if(ii>0) {
        sec3[oo].parent().click()
        sleep(2000)
        click(800,1250)
        sleep(2000)
        if(className("android.view.View").text("继续打Call之旅").exists()){
            click(540,1700)
        }
        sleep(2000)
        var num = 0
        className("android.widget.ListView").depth(10).findOne().children().forEach(child => {
            var target = child.findOne(className("android.view.View"));
            num = num +1
        });
        console.log(num);   
        if(num==3) {
            var n = 0
            className("android.widget.ListView").depth(10).findOne().children().forEach(child => {
                sleep(2000)
                n = n +1
                var target = child.findOne(className("android.widget.Button"));
                if(n=2 && target.text() == '去完成') {
                    var  a1 = currentActivity()
                    sleep(1000)
                    target.click()
                    sleep(2000)
                    var a2 = currentActivity()
                    if(a1 == a2 ) {
                        target.click()
                    }
                    sleep(20000)
                    back()
                    sleep(1000)
                    target.click()
                    sleep(1000)
                    dianji = dianji +1
                }
            })
            var jj = 0
            className("android.widget.ListView").depth(10).findOne().children().forEach(child => {
                sleep(2000)
                jj = jj +1
                var target = child.findOne(className("android.widget.Button"));
                if(jj==2) {
                    target.click()
                    sleep(20000)
                    back()
                    sleep(1000)
                    target.click()
                    sleep(1000)
                    dianji = dianji +1
                }
            })
        } 
        if(num ==4 || num==5) {
            var nn = 0
            className("android.widget.ListView").depth(10).findOne().children().forEach(child => {
                nn = nn +1
                sleep(2000)
                var target = child.findOne(className("android.widget.Button"));
                if(target.text() == '关注领奖') {
                    target.click()
                    sleep(1000)
                    target.click()
                    dianji = dianji +1
                }
                if (target.text() == '去完成') {
                    if(n==1) {
                        target.click()
                        sleep(20000)
                        back()
                        sleep(1000)
                        target.click()
                        sleep(1000)
                        dianji = dianji +1
                    }
                    if(n==3) {
                        var  a1 = currentActivity()
                        sleep(1000)
                        target.click()
                        sleep(2000)
                        var a2 = currentActivity()
                        if(a1 == a2 ) {
                            target.click()
                        }
                        sleep(20000)
                        back()
                        sleep(1000)
                        target.click()
                        sleep(1000)
                        dianji = dianji +1
                    }
                }     
            })
            sleep(2000)
            var b = 0
            className("android.widget.ListView").depth(10).findOne().children().forEach(child => {
                sleep(2000)
                b = b + 1
                var target = child.findOne(className("android.widget.Button"));
                if(b==3) {
                    if (target.text() == '去完成') {
                        target.click()
                        sleep(20000)
                        back()
                        sleep(1000)
                        target.click()
                        sleep(1000)
                        dianji = dianji +1
                    }
                }
            })
            if(dianji == 2 || dianji ==3|| dianji ==4){
                click(63,192)
                sleep(1000)
                back()
                sleep(1000)
                sec2.click()
                sleep(6000)
            }
            else {
                click(63,192)
                sleep(1000)
                back()
                sleep(1000)
            }

        }
    } 
};
exit()
