const app = new Vue ({
  el:"#app",
  data: {
    lists:[{
      id:1,
      name:"<牛1>",
      date:'2020-1',
      price:10.00,
      count:1
    }, {
      id:2,
      name:"<牛2>",
      date:'2020-2',
      price:20.00,
      count:1
    }, {
      id:3,
      name:"<牛3>",
      date:'2020-3',
      price:30.00,
      count:1
    }, {
      id:4,
      name:"<牛4>",
      date:'2020-4',
      price:40.00,
      count:1
    }],
  },
  computed: {
    getSum() {
      // 1.for循环求和
      // let sum = 0.0
      // for(let i of this.lists) {
      //   sum += (i.price * i.count)
      // } 

      // 2.reduce求和
      let sum = this.lists.reduce(function(prevValue,n) {
        return prevValue + n.price * n.count
      },0)
      return sum
    }

  },
  methods: {
    reduce(q1) {
      if(this.lists[q1].count>0) {
        this.lists[q1].count-- 
      } else {
        alert('不能再减了')
      }
    },
    add(q1) {
      this.lists[q1].count++
    },
    del(q1) {
      this.lists.splice(q1,1)
    }
  },
  // 过滤器
  filters: {
    showPrice(price) {
      return "$"+ price.toFixed(2)
    }
  }
})