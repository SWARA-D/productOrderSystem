import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', {
    state: () => ({
        items: [
            {
                itemId: -1,
                itemTitle: "",
                itemImage: "",
                itemPrice: -1,
                itemQuantity: 0
            }
        ]
    }),
    actions: {
        addItem(item:any) {
            this.items.push(item);
        },
        deleteItem(itemId:number) {
            const index = this.items.findIndex(item => item.itemId === itemId);
            if (index !== -1) {
              this.items.splice(index, 1);
            }
        }
    }
})