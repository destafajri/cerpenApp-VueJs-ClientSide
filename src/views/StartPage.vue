<script setup>
import {RouterLink} from "vue-router"
</script>

<template>
<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">E-Cerpen Web</h1>
      <p class="text-lg py-6">Tempat Berbagi Cerpen Sedih, Lucu, Galau, Dan Masih Banyak Lagi.. <span class="font-bold">COME AND JOIN US</span></p>
      <RouterLink class="btn btn-primary" to="/welcome">Get Started</RouterLink>
    </div>
  </div>
</div>
</template>

<style>
.welcome{
  font-size: x-large;
  font-style:initial;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  padding-bottom: 1em;
}
</style>