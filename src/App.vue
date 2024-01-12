<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'


</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/"><span>Home</span></RouterLink>
        <RouterLink to="/cats"><span>Cats</span></RouterLink>
        <RouterLink to="/dogs"><span>Dogs</span></RouterLink>
        <RouterLink to="/about"><span>Contact Us</span></RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  <Footer />
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #333;
  color: #fff;
  padding: 10px;
}

.wrapper {
  background-color: Black;
  color: white;
  text-align: center;

}

span {
  color: white;
  justify-content: space-around;
  margin: 20px;
  font-size: 1.5em;
  text-decoration: underline;
}

nav {
  background-color: black;
  color: white;
  width: 100vw;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  margin-left: 0px;
}
nav:hover{
  transform:scale(1.2) ;
}
</style>
