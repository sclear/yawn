<script>
export default {
  name:'ya-input',
  props: {
    type: {
      type: String,
      default: 'input'
    },
    size: {
      type: String,
      default: null
    }
  },
  data() {
    return {};
  },
  render(h) {
    return h(this.type, {
      class: {
        [this.size]: true
      }
    });
  }
};
</script>

<style lang='less' scoped >
@import url("./../../assets/public.less");
input {
  height: 39px;
  width: 180px;
  box-sizing: border-box;
  outline: none;
  border: 1px solid @ya-border;;
  border-radius: 4px;
  padding: 0 15px !important;
  color: @txtMain;
  position: relative;
  &::placeholder {
    color: #dcdfe6;
  }
  &:disabled{
      background: @ya-disabled;
  }
  &:focus {
    outline: 0.5px solid @ya-primary;
  }
}
textarea {
  padding: 5px 15px;
  border: 1px solid @ya-border;
  &::placeholder {
    color: #dcdfe6;
  }
  &:disabled{
      background: @ya-disabled;
  }
}
.small {
  height: 35px;
}
.mini {
  height: 30px;
}
</style>
