<script>
export default {
  name: 'ya-button',
  props: {
    type: {
      type: String,
      default: 'defaults'
    },
    size: {
      type: String,
      default: 'default'
    },
    round: {
      
    }
  },
  data() {
    return {};
  },
  methods: {
    hand() {
      this.$emit('click')
    },
    classs() {
      return {
      }
    }
  },
  render(h) {
    return h(
      "button",
      {
        class:{
          [this.size]: true,
          [this.type]: true,
          roundBtn: this.round === ''
        },
        on: {
          click: this.hand
        }
      },
      this.$slots.default
    );
  }
};
</script>

<style lang='less' scoped >
@import url("./../../assets/public.less");
.danger {
  background: @ya-danger;
}
.roundBtn{
  border-radius: 20px;
}
.small{
  height: 35px;
  min-width:97px;
}
.mini{
  height: 30px;
  min-width: 85px;
}
.default{
  height: 37px;
  min-width:97px;
}
button{
  border:1px solid black;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  background: none;
  box-sizing: border-box;
  padding: auto 10px;
}
.default{
  border: 1px solid #dcdfe6;
}
.danger{
  background: #F56C6C;
  transition: all .1s linear;
  cursor: pointer;
  border: none;
  color:#fff;
  font-size: 14px;
  &:disabled{
    cursor: not-allowed; 
    background: #f89898;
  }
  &:active{
    background: @ya-danger !important;
    border:none;
  }
  &:hover{
    background: rgba(245, 108, 108, 0.699);
  }
}
.info{
  background: @ya-info;
  transition: all .1s linear;
  cursor: pointer;
  border: none;
  color:#fff;
  font-size: 14px;
  &:disabled{
    cursor: not-allowed; 
    background: #a6a9ad;
  }
  &:active{
    background: @ya-info !important;
    border:none;
  }
  &:hover{
    background: #a6a9ad;
  }
}
.waring{
  background: @ya-waring;
  transition: all .1s linear;
  cursor: pointer;
  border: none;
  color:#fff;
  font-size: 14px;
  &:disabled{
    cursor: not-allowed; 
    background: #ebb563;
  }
  &:active{
    background: @ya-waring !important;
    border:none;
  }
  &:hover{
    background: #ebb563;
  }
}

.success{
  background: @ya-success;
  transition: all .1s linear;
  cursor: pointer;
  border: none;
  color:#fff;
  font-size: 14px;
  &:disabled{
    cursor: not-allowed; 
    background: #85ce61;
  }
  &:active{
    background: @ya-success !important;
    border:none;
  }
  &:hover{
    background: #85ce61;
  }
}

.primary{
  background: @ya-primary;
  transition: all .1s linear;
  cursor: pointer;
  border: none;
  color:#fff;
  font-size: 14px;
  &:disabled{
    cursor: not-allowed; 
    background: #66b1ff;
  }
  &:active{
    background: @ya-primary !important;
    border:none;
  }
  &:hover{
    background: #66b1ff;
  }
}
.defaults{
  border:1px solid #ada9ad !important;
  transition: all .1s linear;
  cursor: pointer;
  border: none;
  color:@ya-info;
  font-size: 14px;
  &:disabled{
    cursor: not-allowed; 
    background: #66b1ff;
  }
  &:active{
    border:1px solid #ada9ad !important;
    color:#ada9ad;
  }
  &:hover{
    background: #ecf5ff;
  }
}
</style>