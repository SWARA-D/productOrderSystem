<template>
    <div class="card text-center grid grid-rows-1 content-center">
      <img :src="`${product.image}`" class="thumb" />
      <p class="font-bold text-black m-4 truncate">{{ product.title }}</p>
      <NuxtLink :to="`/products/${product.id}`">
        <p class="btn my-4">View Details</p>
      </NuxtLink>
    </div>
  </template>
  
  <script setup>
    const { product } = defineProps(['product'])
  </script>
  
  <style scoped>
    .thumb {
      max-height: 120px;
      max-width: 70%;
      margin: 0 auto;
    }
  </style>