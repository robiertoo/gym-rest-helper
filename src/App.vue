<template>
  <div>
    {{ counter }}
  </div>

  <button @click="addSeconds(5)">5s</button>
  <button @click="addSeconds(30)">30s</button>
  <button @click="addSeconds(60)">1m</button>
  <button @click="addSeconds(90)">1m30s</button>
  <button @click="addSeconds(120)">2m</button>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addSeconds(seconds) {
      this.counter = seconds;

      this.startTimer();
    },
    startTimer() {      
      const interval = setInterval(() => {
        if (this.counter === 0) {
          return clearInterval(interval);
        }
        
        this.counter--;
      }, 1000);
    }
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

<style>
</style>
