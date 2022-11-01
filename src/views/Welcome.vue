<script setup>
import {RouterLink} from "vue-router"
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen gap-4">
    <h1 class="welcome">Welcome to E-Cerpen Web</h1>
    <RouterLink class="btn btn-wide" to="/home">Viewer</RouterLink>
    <RouterLink class="btn btn-wide" to="/author">Author</RouterLink>
    <RouterLink class="btn btn-wide" to="/admin">Admin</RouterLink>
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