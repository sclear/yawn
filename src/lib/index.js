import button from './button/button.vue';
// import calendar from './calendar/calendar.vue';
import input from './input/input.vue';
import pagin from './pagin/pagin.vue';
import radio from './radio/radio.vue';

const components = [
    button,
    // calendar,
    input,
    pagin,
    radio
]

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  button,
//   calendar,
  input,
  pagin,
  radio,
}