<template>
  <div class="calendar">
    <div class="title">
      <span class="cus" @click="small">
          <img class="sMall" src="./../assets/left.png" alt="">
      </span>
      <span class="years">{{year}}年{{moth}}月</span>
      <span class="cus" @click="more">
          <img class="sMall" src="./../assets/right.png" alt="">
      </span>
    </div>
    <div class="doc-title">
        <div>日</div>
        <div>一</div>
        <div>二</div>
        <div>三</div>
        <div>四</div>
        <div>五</div>
        <div>六</div>
    </div>
    <div class="content">
        <div :class="[!item[1]?'col':'']" v-for="(item,index) in show" :key="index">
            <div @click="chose(index,item)" :class="[item[2]?'border':'']">{{item[0]}}</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ya-calendar',
  props: {
      timer: {
          type: Number,
          required: true
      }
  },
  watch: {
    timer() {
        this.getInfo()
    }  
  },
  data() {
    return {
        year:0,
        moth:0,
        days:0,
        num: 0,     //当月天数
        dis: 0,     //上一次天数
        doc:0,      //周几
        main:[],
        show: [],
    };
  },
  mounted () {
    this.getInfo()
  },
  methods: {
      //取得天数
      getInfo() {
          let o = new Date(this.timer)
          this.year = o.getFullYear();
          this.moth = o.getMonth()+1;
          this.days = o.getDate()
          this.mainDetail()
      },
      more() {
          this.moth === 12? (this.moth = 1,this.year++) : this.moth++
          this.mainDetail()
      },
      small() {
          this.moth === 1? (this.moth = 12,this.year--) : this.moth--
          this.mainDetail()
      },
      //获得该月上月天数
      mainDetail() {
           this.num = new Date(this.year,this.moth,0).getDate();
          this.doc = new Date(`${this.year}-${this.moth}-1`).getDay();
          let moths = this.moth;
          let years = this.year;
          if( moths === 1 ) {
              moths = 12;
              years--;
          }
          this.dis = new Date(years,moths,0).getDate();
          this.mainFn()
      },
      //main
      mainFn() {
          this.main.length = 42;
          for(let i = 0;i < this.num;i++) {
              this.main[i+this.doc] = [i+1,true,false];
              if(this.days === i+1) {
                  
                  this.main[i+this.doc] = [i+1,true,true];
              }
          }
          let nums = this.dis;
          let docs = this.doc-1;
          for( let i = 0;i < this.doc;i++ ) {
              this.main[docs] = [nums--,false,false];
              docs--;
          }
          for(let i = 0; i < (42-this.num-this.doc);i++) {
              this.main[i+this.num+this.doc] = [i+1,false,false];
              
          }
          this.show = this.main;

      },
      //选中 chose
      chose(index,item) {
          this.show.forEach( (val,i) => {
              let obj = [...val]
              obj.splice(2,1,false)
              this.$set( this.show,i, obj)
          });
        let ary = [...this.show[index]]
        ary.splice(2,1,true)
        this.$set( this.show,index, ary)
        

        let outYear = this.year;
        let outMoth = this.moth;
        let outDay = item[0];
        let outDoc  = index%7;
        if( !item[1] ) {
            if(index<15) {
                if( outMoth === 1 ) {
                    outMoth = 12;
                    outYear--
                }
                else outMoth--
            }
            else {
                if( outMoth === 12 ) {
                    outMoth = 1;
                    outYear++
                }
                else outMoth++
            }
        }
        this.$emit('getCardTime',[outYear,outMoth,outDay,outDoc])
      }
  },
  components: {}
};
</script>

<style scoped >
.calendar {
  width: 350px;
  height: 300px;
  color:rgb(19, 17, 17);
  box-sizing: border-box;
  box-shadow:0px 0px 9px #333333;
}
.title {
  line-height: 30px;
  box-sizing: border-box;
  border-bottom: 1px solid #3333334d;
  text-align: center;
  position: relative;
}
.title>.cus:nth-child(1) {
    left:50px;
}
.title>.cus:nth-child(2) {
    right:40px;
}
.cus{
    position: absolute;
    cursor: pointer;
    top:5px;
}
.years{
    margin: 0 30px;
}
/* 周 */
.doc-title{
    width:100%;
    height: 30px;
    overflow: hidden;
}
.doc-title > div{
    width:calc(100% / 7);
    float: left;
    text-align: center;
    line-height: 30px;
}
.content{
    width:100%;
    overflow: hidden;
}
.content > div{
    float: left;
    height: 30px;
    width:calc(100% / 7);
    text-align: center;
    line-height: 30px;
    transition: all .3s linear;
}
.content > div > div{
    height: 30px;
    width:30px;
    display: inline-block;
    cursor: pointer;
}
.col{
    color:#a6a6a8;
}

.border{
    background: #01beff;
    border-radius: 50%;
    color:white;
}
.sMall{
    width:20px;
}
</style>
