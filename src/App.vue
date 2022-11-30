<!--filters that can be used to apply common text formatting-->

<template>
 <div>
  <h1>{{$filters.currencyUSD(name)}}</h1>
  <filterVue/>
 </div>
</template>

<script>
import filterVue from './components/filter.vue'

export default {
  name: 'App',
  components: {
    filterVue
  },
  data() {
    return {name:"kannan s"}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
