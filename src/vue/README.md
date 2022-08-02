# Vue.js

## Question n°12
Here is a Vue.js sample code. Could you spot something that will trigger a warning in the console? Why is it not 
recommended and how would you fix it?

```js
export default {
  name: "printer",
  props: {
    model: {
      type: String,
      required: true
    },
    ip: {
      type: String,
      required: true
    },
    jobs: {
      type: Object,
      validator: (value) => ["inProgress", "done", "error"].every((status) => typeof value[status] === "number")
    },
    progress: {
      type: Number, 
      required: true
    },
    api: {
      type: Api,
      required: true
    }
  },
  data: () => ({
    timer: null
  }),
  methods: {
    async refreshProgress() {
      this.jobs = await this.api.getJobsNumbers({ model: this.model });
    }
  },
  created() {
    this.timer = setInterval(() => this.refreshProgress(), 30000);
  },
  destroyed() {
    clearInterval(this.timer);
  }
};
```

## Question n°13
Here is a Vue.js sample code. Enrich it with the following feature:
- Add a filter that reverse displayed words. (“return” will become “nruter”)
- When the control key and mouse click are pressed (and only this specific
  combination), the words should be written in a bigger size. Re-pressing this
  combination should reset the size.

```html
<template>
  <section id="app">
    <div class="filter">
      <button class="filter__button">Normal</button>
      <button class="filter__button" @click="">Inversé</button>
    </div>
    <p v-for="word in words" :key="word">{{ word }}</p>
  </section>
</template>

<script>
  export default {
    name: "App",
    data: function() {
      return {
        words: ["Level", "Kayak", "Madam"]
      };
    },
  };
</script>

<style>
  #app {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
}
</style>
```
