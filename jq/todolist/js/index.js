$(function() {
    showLi()
    // 输入框
    $('input').on('keydown',function(e) {
        // 判断按下的键是否为回车
        if (e.keyCode == 13) {
            // 读取本地存储数据
            var local = getData()
            var ip = {}
            ip.title = $(this).val()
            ip.done = false
            local.push(ip)
            saveData(local)
            showLi()
        }
    })
    // 完成单条记录
    $('.demo-box, ul').on('click','input',function() {
        var data = getData()
        // 1.先得到被点击li的序号 
        var num = $(this).siblings('a').attr('id')
        // 2.从本地存储中取出数据
        var data = getData()
        // 3.在数组中修改被点击li的done为true
        data[num].done = $(this).prop('checked')
        // 4.将修改后的数据存到本地存储中
        saveData(data)
        showLi()
    })
    // 单条记录删除
    $('.demo-box, ul').on('click','a',function() {
        // 1.先得到被点击li的序号 
        var num = $(this).attr('id')
        // 2.从本地存储中取出数据 
        var data = getData()
        // 3.从本地数据中删除该数据 数组删除方法 splice(a,b) a为开始删除的位置,b是删除几个元素
        data.splice(num,1)
        // 4.将删除后的数据再储存到本地存储中
        saveData(data)
        showLi()
    })
    // 清空本地存储
    $('footer a').on('click',function() {
        localStorage.clear()
        showLi()
    })
    function showLi() {
        var li = getData()
        $('ul').html('')
        $('ol').html('')
        $.each(li,function(i,ele) {
            if(ele.done) {
                // ul显示(已完成)
                var cc = $('<li><input type="checkbox" checked><p id="p-'+ i+'"' + '>' + ele.title + '</p><a href="javascript:;" id="'+ i +'">-</a></li>')
                $('ul').prepend(cc)
            } else {
                // ol显示(未完成)
                var bb = $('<li><input type="checkbox"><p>' + ele.title + '</p><a href="javascript:;" id="'+i +'">-</a></li>')
                $('ol').prepend(bb)

            }
        })
        // 数量显示
        var ul_num = $('ul').children().length
        var ol_num = $('ol').children().length
        $('#todocount').html(ol_num)
        $('#donecount').html(ul_num)
    }

    // 读取本地存储的数据
    function getData() {
        var data = localStorage.getItem('todolist')
        if(data !== null) {
            return JSON.parse(data)
        } else {
            return []
        }
    }
    // 存储本地数据
    function saveData(a) {
        var cc = JSON.stringify(a)
        localStorage.setItem('todolist',cc) 
    }

})