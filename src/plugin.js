export default {
  install: function(Vue, options) {
    Vue.myGlobalMethod = function() {
    }

    Vue.directive('my-directive', {
      bind(el, binding, vnode, oldVnode) {
      },
    })

    Vue.mixin({
      created: function() {
      },
    })

    Vue.prototype.$myMethod = function(methodOptions) {
    }
  },
}
