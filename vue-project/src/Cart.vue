<template>
    <div class="cart">
        <h2>Cart</h2>
        <ul>
            <li v-for="(item, index) in cartItems" :key="index">
                <img :src="item.bladees.imageLink" alt="bladeeimage" class="bladee-image">
                {{ item.bladees.title }} ({{ item.quantity }})
                <button @click="removeFromCart(index)">Remove</button>
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    props: {
        cartItems: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        removeFromCart(index) {
            this.$emit('remove-from-cart', index);
        }
    }
};
</script>

<style scoped>
.home {
  text-align: center;
}

.cart ul {
  list-style-type: none;
}

.featured-albums {
  margin-top: 2rem;
}

.album-card {
  display: inline-block;
  margin: 0 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.album-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
}

.album-price {
  font-weight: bold;
  color: #333;
}

.album-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.bladee-image {
  width: 250px; 
  height: 250px; 
  object-fit: cover;
  border-radius: 5px;
}
</style>