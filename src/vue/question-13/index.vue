<template>
  <section id="app">
    <div class="filter">
      <button class="filter__button" :class="{ active: isReversed }" @click="reverseWords">Inversé</button>
    </div>
    <div class="words">
      <p class="word" :class="{ bigger: activeBiggerSizeIndex === index }" v-for="(word, index) in words" :key="word" @click.ctrl="biggerSizeWord(word, index)">{{ word }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      words: ["Level", "Kayak", "Madam"],
      isReversed: false,
      activeBiggerSizeIndex: null,
    };
  },
  methods: {
    reverseWords() {
      this.isReversed = !this.isReversed;
      this.words = this.words.map(word => word.split('').reverse().join(''));
    },
    biggerSizeWord(word, index) {
      if (this.activeBiggerSizeIndex === index) {
        this.activeBiggerSizeIndex = null;
      } else {
        this.activeBiggerSizeIndex = index;
      }
    }
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.filter__button {
  background-color: darkgrey;
  padding: 10px 20px;
  margin: 20px 10px;
}

.filter__button.active {
  background-color: crimson;
  color: white;
}

.words {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
}

.word.bigger {
  transform: scale(2);
}
</style>
