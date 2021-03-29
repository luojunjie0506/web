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
        console.log(obj.style.left)
    },15);
}