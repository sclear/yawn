<template>
  <div id="app">
    <btn size='mini' round @click="getCardTime('999')">危险按钮</btn>
    <btn type='info' size='small'  @click="getCardTime('999')">危险按钮</btn>
    <btn type='waring' @click="getCardTime('999')">危险按钮</btn>
    <btn type='success' @click="getCardTime('999')">危险按钮</btn>
    <btn type='primary' round @click="getCardTime('999')">危险按钮</btn>
    <int size='mini' placeholder='请输入内容'></int>
    <int disabled placeholder='请输入内容'></int>
    <int disabled size='small' type='textarea' placeholder='请输入内容'></int>
    <radio name='aa' disabled v-model="red1" label='1'>选择</radio>
    <radio name='aa' v-model="red1" label='2'>选择</radio>
    <radio name='aa' v-model="red1" label='3'>选择</radio>
  </div>
</template>

<script>
import btn from './lib/button/button'
import int from './lib/input/input'
import radio from './lib/radio/radio'
 export default {
  name: 'app',
  data () {
    return {
      red1:'1'
    }
  },
  methods: {
    getCardTime(res) {
      console.log(res)
    }
  },
  components: {
    btn,int,radio
  },
}
</script>

<style lang='less'>
@import url('./assets/public.less');
#app {
  // background: @ya-danger;
}
</style>
