window.addEventListener('load',function() {
    var arrow_l = document.querySelector('.arrow-l') 
    var arrow_r = document.querySelector('.arrow-r')
    var fl = document.querySelector('.fl')

    // 左右按键的显示
    fl.addEventListener('mouseover',function() {
        arrow_l.style.display = 'block'
        arrow_r.style.display = 'block'
        arrow_r.addEventListener('click', function() {
            alert(1)
        })
    })
    fl.addEventListener('mouseout',function() {
        arrow_l.style.display = 'none'
        arrow_r.style.display = 'none'
    })

    // 动态生成小圆圈
    var lis_img = document.querySelector('.gun').querySelectorAll('li')
    var quan = document.querySelector('.quan')
    var ul = document.querySelector('.gun')
    for(var i=0; i<lis_img.length; i++) {
        // 创建li并添加一个自定义属性index
        var li = document.createElement('li')
        li.setAttribute('index',i)
        // 把li插入到ol里
        quan.appendChild(li)
        
        // 生成小圆圈的同时绑定点击事件,使小圆圈变色
        li.addEventListener('click',function() {
            for(var i=0; i<quan.children.length; i++) {
                quan.children[i].className = ''
            }
            this.className = 'current'
            var index = this.getAttribute('index')
            animate(ul, -index * fl.offsetWidth)
        })
    }

    // 把第一个小圆圈设置为选中状态，不知道为什么不能用firstChild
    quan.children[0].className = 'current'

    // 封装动画函数
    function animate(obj,target,callback) {
        clearInterval(obj.timer)
        var timer = setInterval(function() {
            var step = (target - obj.offsetLeft)/10
            step = step>0 ? Math.ceil(step):Math.floor(step)
            if(obj.offsetLeft == target) {
                clearInterval(obj.timer)
                if(callback) {
                    callback()
                }
            }
            obj.style.left = obj.offsetLeft + step + 'px'
            console.log(obj.style.left)
        },15)
    }

    function animate(obj, target, callback) {
        // callback因为实参是函数，所以调用的时候要写成callback()
        // callback是一个回调函数，所以要写在清除定时器后面 
        clearInterval(obj.timer)
        obj.timer = setInterval(function() {
            // 缓动步长公式 (目标值-现在位置)/10
            // 步长网上取整，这样才能到终点
            // var step = Math.ceil((target - obj.offsetLeft) /10)
            var step = (target - obj.offsetLeft) /10
            step = step >0 ? Math.ceil(step):Math.floor(step)
            if(obj.offsetLeft == target) {
                clearInterval(obj.timer)
                // 判断是否存在回调函数
                if(callback) {
                    callback()
                }
            }
        obj.style.left =  obj.offsetLeft + step + 'px'
    },15);
    }
})