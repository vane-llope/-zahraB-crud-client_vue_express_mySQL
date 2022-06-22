<template>
<div>
  <transition name="fade" appear>
      <toast v-if="showToast" :msg='message' :clr='color' />
    </transition>
 <router-view v-slot="{ Component , route}">
    <transition name="route" mode="out-in"> 
      <div :key="route.name">  
      <component :is="Component" @badValue="triggerToast"></component>
    </div>
      </transition>
  </router-view>
</div>
</template>
<script>
import { ref } from '@vue/reactivity';
import navbarView from './components/navbarView.vue'
import toast from './components/toastView.vue'
export default {
  components : {
    navbarView,
    toast,
  },
  setup() {
    const message = ref('')
    const color = ref('')
    const showToast = ref(false);
    const triggerToast = (msg ,clr) => {
      color.value = clr
      message.value = msg
      showToast.value = true;
      setTimeout(() => (showToast.value = false), 3000);
    };
    console.log(color)
    return {
      showToast,
      triggerToast,
      message,
      color
    };
  },
}
</script>
<style>

.route-enter-from{
  opacity: 0;
  transform: translateX(100px);
}
.route-leave-to{
  opacity: 0;
  transform: translateX(-100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
/*fade*/
.fade-enter-active{
  animation: wobble 0.5s ease;
}
.fade-leave-from{opacity: 1; transform: translateY(0)}
.fade-leave-to{opacity: 0; transform: translateY(-60px)}
.fade-leave-active{transition: all 0.8s ease;}


/*.fade-leave-active {transition: all 2s ease;}*/
@keyframes wobble {
  0% {transform: translateY(-60px);}
  50% {transform: translateY(0);}
  60% {transform: translateX(8px);}
  70% {transform: translateX(-8px);}
  80% {transform: translateX(4px);}
  90% {transform: translateX(-4px);}
  100% {transform: translateX(0);}
}
</style>
