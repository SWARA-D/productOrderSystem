<template>
    <div>
      <div class="grid grid-cols-4 gap-5">
        <p v-if="pending">Loading...</p>
        <template v-else>
          <div v-for="product in products" :key="product.id">
            <ProductCard :product="product"/>
          </div>
        </template>
      </div>
    </div>
</template>
  
  <script setup>
    definePageMeta({
        layout: 'products'
    })
    const { pending, data: products } = await useLazyFetch('https://fakestoreapi.com/products')
  </script>
  
  <style scoped>
  
  </style>