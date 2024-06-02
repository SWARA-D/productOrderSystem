<template>
    <div>
        <h3 class="text-3xl font-bold p-4">Cart Items: </h3>
        <ul v-for="item in cartStore.items" :key="item.id" class="grid">
            <li class="grid grid-cols-2 gap-10 bg-white border-b-2" v-if="item.itemQuantity !== 0">
                <div class="p-7">
                    <img :src="`${item.itemImage}`" class="mx-auto my-7" />
                </div>
                <div class="p-14">
                    <p class="text-2xl my-7">Name: {{ item.itemTitle }}</p>
                    <p class="text-xl my-7">Quantity: {{ item.itemQuantity }}</p>
                    <p class="text-xl my-7">Price: {{ item.itemQuantity * item.itemPrice }}</p>
                    <button class="btn my-4" @click="removeProduct(item.itemId)">Remove</button>
                </div>
            </li>
        </ul>
    </div>
  
</template>

<script setup>
import { useCartStore } from '~/store/CartStore';

const cartStore = useCartStore()

function removeProduct(id)
{
    cartStore.deleteItem(id)
}
</script>


<style scoped>
img {
    max-width: 200px;
}
</style>