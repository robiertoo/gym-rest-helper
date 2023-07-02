<template>
  <div class="bg-slate-800 h-screen">
    <div 
      class=" bg-slate-800 text-center h-[80vh] flex items-center justify-center"
    >
      <span
        class="text-slate-500 text-9xl border-4 border-slate-500 rounded-full w-56 h-56 pt-10"
        :class="{ 'text-red-600': counter === 0 }"
      >
        {{ counter }}
      </span>
    </div>
  
    <div class="flex align-center justify-center">
      <button class="button bg-red-400" @click="stopTimer">Stop</button>
    </div>

    <div class="mt-10 flex justify-center items-center space-x-3">
      <button class="button" @click="addSeconds(5)">5s</button>
      <button class="button" @click="addSeconds(30)">30s</button>
      <button class="button" @click="addSeconds(60)">1m</button>
      <button class="button" @click="addSeconds(90)">1m30s</button>
      <button class="button" @click="addSeconds(120)">2m</button>
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
      this.counter = seconds;

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
  @apply border border-slate-700 rounded w-32 text-slate-200 text-xl p-2
}
</style>
