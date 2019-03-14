/**
 * 设置全局指令
 */
import Vue from 'vue'

const title = Vue.directive('title',{
    update:function(el,binding,vnode,oldVnode){
        window.document.title = binding.value.title
    }
})

export {title}