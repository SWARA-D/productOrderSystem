<template>
    <div class="card">
      <div class="grid grid-cols-2 gap-10">
        <div class="p-7">
          <img :src="`${product.image}`" class="mx-auto my-7" />
        </div>
        <div class="p-7">
          <h2 class="text-4xl my-7">{{ product.title }}</h2>
          <p class="text-xl my-7">Price - ${{ product.price }}</p>
          <h3 class="font-bold border-b-2 mb-4 pb-2">Product description:</h3>
          <p class="mb-7">{{ product.description }}</p>
          <button @click="decrementQuantity">-</button>
          <span :v-model="quantity" class="w-24 bg-white text-center m-8 px-4">{{ quantity }}</span>
          <button @click="incrementQuantity">+</button>
          <button class="btn my-4 w-32 flex justify-center" @click="addToCart">Add To Cart</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue'
import { useCartStore } from '~/store/CartStore';
    const { product } = defineProps(['product'])
    var quantity = ref(1)

    function decrementQuantity() {
      if(quantity.value > 1)
      {
        quantity.value--;
      }
    }

    function incrementQuantity() {
      quantity.value++;
    }

    function addToCart() {
      const cart = useCartStore()
      cart.addItem({ 
          itemId: product.id,
          itemTitle: product.title,
          itemImage: product.image,
          itemPrice: product.price,
          itemQuantity: quantity.value
      })
    }
  </script>
  
  <style scoped>
    img {
      max-width: 400px;
    }
  </style>