function ajax (options) {
    // 存储默认值
    var　dafaults = {
        type:'get',
        url:'',
        data:{},
        header:{
            'Content-Type':'application/json',
            'Access-Control-Allow-origin':'*'
        },
        success:function() {},
        error:function() {}
    }
    // 使用options对象中的属性覆盖defaults中的属性
    Object.assign(dafaults,options)
    // 创建ajax对象
    var xhr = new XMLHttpRequest()
    var params = ''
    for(var attr in dafaults.data) {
        params += attr + '=' + dafaults.data[attr] + '&'
    }
    params = params.substr(0,params.length-1)
    // 配置ajax对象
    if(dafaults.type =='get') {
        dafaults.url += '?' + params
    }
    xhr.open(dafaults.type,dafaults.url)
    if(dafaults.type =='post') {
        var contentType = dafaults.header['Content-Type']
        xhr.setRequestHeader('Content-Type',contentType)
        if(contentType =='application/json') {
            xhr.send(JSON.stringify(dafaults.data))
        }else {
            xhr.send(params)
        }
        
    } else {
        xhr.send()
    }
    
    xhr.onload = function() {
        // xhr.getResponseHeader 获取响应头中的数据
        var contentType1 =  xhr.getResponseHeader('Content-Type')
        var responseText = xhr.responseText
        if(contentType1.includes('application/json')) {
            responseText = JSON.parse(responseText)
        }
        if(xhr.status == '200') {
            dafaults.success(responseText,xhr)
        } else {
            dafaults.error(responseText,xhr)
        }
    }
}