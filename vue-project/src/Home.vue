<template>
    <div class="home">
        <h1>bladeecity.net</h1>
        <div class="featured-albums">
            <h2>Featured Albums</h2>
            <div class="album-list">
                <div v-for="bladees in bladeeproducts" :key="bladees.title" class="album-card">
                    <img :src="bladees.imageLink" alt="Album Image" class="album-image">
                    <h3>{{ bladees.title }}</h3>
                    <p>{{ bladees.description }}</p>
                    <span class="album-price">{{ bladees.price }}</span>
                    <button @click="addToCart(bladees)">Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(["add-to-cart"]);
const bladeeproducts = ref([
    {
        imageLink: "https://i1.sndcdn.com/artworks-000068528208-1w4h5h-t500x500.jpg",
        title: "Gluee",
        description: "The start.",
        price: 1999.99,
    },
    {
        imageLink: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Bladee_Eversince.jpg/220px-Bladee_Eversince.jpg",
        title: "Eversince",
        description: "#1 Winter Album.",
        price: 24000.00,
    },
    {
        imageLink: "https://upload.wikimedia.org/wikipedia/en/3/3a/Red_Light_Bladee.jpg",
        title: "Red Light",
        description: "r e d  l i g h t.",
        price: 3000.00,
    },
    {
        imageLink: "https://images.genius.com/5085bb85a1459e2edde86cdc3da324b3.1000x1000x1.jpg",
        title: "Icedancer",
        description: "THATS THE SONG!",
        price: 1800.00,
    },
    {
        imageLink: "https://media.pitchfork.com/photos/5e949f3eb09a5100092ba763/1:1/w_450%2Cc_limit/Exteter_Bladee.jpg",
        title: "Exeter",
        description: "Funny cover.",
        price: 1500.00,
    },
    {
        imageLink: "https://upload.wikimedia.org/wikipedia/en/8/84/Bladee_333_album_art.jpeg",
        title: "333",
        description: "Pretty good album.",
        price: 2900.00,
    },
    {
        imageLink: "https://i.scdn.co/image/ab67616d0000b2731dd1cc19e6daa9c2de504940",
        title: "Good Luck",
        description: "Its a luh goofy.",
        price: 999.99,
    },
    {
        imageLink: "https://media.pitchfork.com/photos/60b7947503d100f6ea2f7e4f/1:1/w_1500,h_1500,c_limit/Bladee:%20The%20Fool.jpeg",
        title: "The Fool",
        description: "Pinnacle.",
        price: 49999.99,
    },
    {
        imageLink: "https://upload.wikimedia.org/wikipedia/en/8/8f/Crest_by_Bladee_and_Ecco2K.jpg",
        title: "Crest",
        description: "Ecco2kwashere.",
        price: 2700.00,
    },
    {
        imageLink: "https://upload.wikimedia.org/wikipedia/en/3/35/Bladee_-_Spiderr.png",
        title: "Spiderr",
        description: "What is that cover.",
        price: 2100.00,
    },
    {
        imageLink: "https://upload.wikimedia.org/wikipedia/en/a/aa/Yung_Lean_%26_Bladee_-_Psykos.jpg",
        title: "Psykos",
        description: "f r o g",
        price: 8888.00,
    },
]);
const addToCart = (bladees) => {
    emit('add-to-cart', bladees);
}
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