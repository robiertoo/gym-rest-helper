<template>
  <div class="bg-slate-800 h-screen">
    <div 
      class=" bg-slate-800 text-center h-[70vh] flex items-center justify-center"
    >
      <span
        class="text-9xl border-8 border-slate-500 rounded-full w-56 h-56 flex items-center justify-center"
        :class="counter ? 'text-slate-500' : 'text-red-400'"
      >
        {{ counter }}
      </span>
    </div>
  
    <div class="flex align-center justify-center">
      <button class="button stop-button" @click="stopTimer">Stop</button>
    </div>

    <div class="mt-5 flex justify-center items-center space-x-3">
      <button class="button add-button" @click="addSeconds(5)">+5s</button>
      <button class="button add-button" @click="addSeconds(10)">+10s</button>
      <button class="button add-button" @click="addSeconds(15)">+15s</button>
      <button class="button add-button" @click="addSeconds(30)">+30s</button>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      counter: 0,
      interval: null,
    };
  },
  methods: {
    addSeconds(seconds) {
      this.counter += seconds;

      this.startTimer();
    },
    startTimer() {
      clearInterval(this.interval);
      
      this.interval = setInterval(() => {
        if (this.counter === 0) {
          return clearInterval(this.interval);
        }
        
        this.counter--;
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.interval);
      this.counter = 0;
    },
  },
  watch: {
    counter(newCounter) {
      if (! newCounter) {
        console.log('The time is over!');

        const alarm = new Audio(require('@/assets/alarm-beep.wav'));

        alarm.play();

        setTimeout(() => alarm.pause(), 3500);
      }
    },
  }
}
</script>

<style scoped>
.button {
  @apply border-4 rounded-full w-20 h-20 text-xl flex items-center justify-center font-bold 
}

.stop-button {
  @apply bg-red-400 text-white
}

.add-button {
  @apply border-slate-500 text-slate-500  
}
</style>
