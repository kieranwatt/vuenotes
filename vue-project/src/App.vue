<template>
  <div id="app">
    <router-view @add-to-cart="addToCart" @remove-from-cart="removeFromCart"></router-view>
    <div class="cart">
      <h2>sillyluhbladees</h2>
      <ul>
        <li v-for="(item, index) in cartItems" :key="index">
          <img :src="item.bladees.imageLink" alt="bladeeimage" class="bladee-image">
          {{ item.bladees.title }} ({{ item.quantity }})
          <button @click="removeFromCart(index)">Remove</button>
        </li>
      </ul>
      <div>total dabloons: {{ calculateTotalPrice }}</div>
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
    addToCart(bladees) {
      const existingItemIndex = this.cartItems.findIndex(item => item.bladees.title === bladees.title);
      if (existingItemIndex !== -1) {
        this.cartItems[existingItemIndex].quantity++;
      } else {
        this.cartItems.push({ bladees: bladees, quantity: 1 });
      }
    },
    removeFromCart(index) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity--;
      } else {
        this.cartItems.splice(index, 1);
      }
    }
  },
  computed: {
    calculateTotalPrice() {
      return this.cartItems.reduce((total, item) => total + (item.bladees.price * item.quantity), 0).toFixed(2);
    }
  }
};
</script>

<style>
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
