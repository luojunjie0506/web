var that // 全局变量储存最大盒子
class Tab {
    constructor(id) {
        // 获取元素
        that = this
        this.main = document.querySelector(id)   
        this.add = this.main.querySelector('.tabadd>span')
        this.ul = this.main.querySelector('.fisrtnav ul:first-child')
        this.section = this.main.querySelector('.tabscon')
        this.init()
    }
    init() {
        that.updateNode()
        // init 初始化操作让相关元素绑定事件
        for(var i=0; i<this.lis.length; i++) {
            this.lis[i].index = i
            this.lis[i].onclick = this.toggleTab    
        }
        this.add.onclick = this.addTab
    }
    // 获取所有的li和section
    updateNode() {
        this.lis = this.main.querySelectorAll('li')
        this.sections = this.main.querySelectorAll('section')
    }
    // 1.切换
    toggleTab() {
        // this这里指向的是li
        that.clearClass()
        this.className = 'liactive'
        that.sections[this.index].className = 'conactive'
    }
    // 2.添加
    addTab() {
        that.clearClass()
        var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-close"></span></li>'
        var section = '<section class="conactive">新选项卡</section>'
        that.ul.insertAdjacentHTML('beforeend',li)
        that.section.insertAdjacentHTML('beforeend',section)
        that.init()
    }
    // 3.删除
    delTab() {

    }
    // 4.修改
    editTab() {

    }
    // 清除类方法
    clearClass() {
        for(var i=0; i<this.lis.length; i++) {
            this.lis[i].className = ''
            this.sections[i].className = ''
        }
    }
 }

 var tab1 = new Tab('#tab');