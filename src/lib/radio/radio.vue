<template>
  <div class="radio-inline" @click="setModel">
    <input :class="{notPot: abled}" :disabled='abled' :name="name" type="radio" :checked="checked">
    <label :class="{notPot: abled}">
      <slot></slot>
    </label>
  </div>
</template>

<script>
import Vue from 'vue'
function changes(_this,res) {
  _this.$emit('change',res)
}
export default {
  name: 'ya-radio',
  model: {
    prop: "model",
    event: "change"
  },
  props: {
    model: "",
    name: {
      type: String
    },
    label: {
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false
    }

  },
  data() {
    return {
    };
  },
  methods: {
    setModel(event) {
      if(this.abled) return
      changes.call(this,this,this.label)
    }
  },
  computed: {
    checked() {
      return this.model === this.label ? true : false
    },
    abled() {
      if(this.disabled === undefined || this.disabled === false) return false
      return true
    }
  }
};
</script>

<style lang='less' scoped >
@import url('./../../assets/public.less');
input[type="radio"] + label:before {
  content: "";
  display: inline-block;
  vertical-align: middle;
  width: 15px;
  height: 15px;
  width: 15px;
  box-sizing: border-box;
  height: 15px;
  margin-right: 5px;
  border-radius: 50%;
  text-indent: 0.15em;
  margin-bottom: 4px;
  border: 1px solid #cccccc;
  transition: all 0.2s linear;
  cursor: pointer;
}
input[type="radio"]:checked + label:before {
  content: "";
  background-color: #4a90e2;
  background-clip: content-box;
  padding: 2px;
}
input[type="radio"] {
  position: absolute;
  opacity: 0;
}
.radio-inline {
  padding-left: 0;
  cursor: pointer;
  display: inline-block;
  margin-right: 5px;
}
input[type="radio"][disabled]:checked + label::before {
  background-color: #cccccc;
  background-clip: content-box;
  padding: 2px;
}
input,label{
  cursor: pointer;
  float: left;
  color:@txtMain;
}
.notPot{
  cursor: not-allowed; 
  color: @ya-raAbled;
}
</style>
