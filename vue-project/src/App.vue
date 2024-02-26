<template>
  <div id="app">
    <router-view @add-to-cart="addToCart"></router-view>
    <div class="cart">
      <h2>Cart</h2>
      <ul>
        <li v-for="item in cartItems" :key="item.product.title">
          <img :src="item.product.imageLink" alt="Product Image" class="product-image">
          {{ item.product.title }} ({{ item.quantity }})
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: [],
    };
  },
  methods: {
    addToCart(product) {
      const existingItemIndex = this.cartItems.findIndex(item => item.product.title === product.title);
      if (existingItemIndex !== -1) {
        this.cartItems[existingItemIndex].quantity++;
      } else {
        this.cartItems.push({ product: product, quantity: 1 });
      }
    },
  },
};
</script>

<style>
.home {
  text-align: center;
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
</style>
