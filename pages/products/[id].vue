<template>
    <p v-if="pending">Loading...</p>
    <div v-else>
      <ProductDetails :product="product"/>
    </div>
  </template>
  
  <script setup>
    const { id } = useRoute().params
    const uri = 'https://fakestoreapi.com/products/' + id
  
    //  fetch the products
    const { pending, data: product } = await useLazyFetch(uri, { key: id })
  
    definePageMeta({
      layout: "products",
    })
  </script>