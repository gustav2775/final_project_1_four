Vue.component("backet", {
  props:["backet_products"],
  data(){
    return {
      showCard: true,
    };
  },
  methods: {
    addProduct(product){
        let find = this.backet_products.find(el => el.id_product === product.id_product);
        if(find){
            this.$parent.putJson(`/api/bas/${find.id_product}`, {quantity: 1});
            find.quantity++;
        } else {
            let prod = Object.assign({quantity: 1}, product);
            this.$parent.postJson('/api/bascet', prod)
                .then(data => {
                  console.log(data)
                  this.backet_products.push(prod);
                });
        }
    },
    remove(item) {
        if (item.quantity > 1) {
            this.$parent.putJson(`/api/cart/${item.id_product}`, {quantity: -1})
                .then(data => {
                data.quantity--;
                });
        } else {
            this.$parent.deleteJson(`/api/cart/${item.id_product}`)
                .then(data => {
                this.cartItems.splice(this.backet_products.indexOf(data), 1); 
                });
        }
    },
},
  mounted(){
    this.$root.getJson("/api/backet").then(data => {
      for (let el of data) {
        this.$root.backet_products.push(el);
      }
    });
  },
  template: `
  <div>
    <button class="topBasket" href="shopping card.html" @click="showCart = !showCart">
      <img src="./assets/img/market.png" alt="">
    </button>

    <div class="quantity_prod_in_backet" :v-if="this.$root.backet_products.length">{{this.$root.backet_products.length}}</div>   
    <div class= "backet_header">
      
    <backet_header_item v-for="product of  this.$root.backet_products"
        :key="product.id_product"
        :item="product"
        v-model="product.price">
    </backet_header_item>
    
    <div class="backet_total">
      <span>Total</span>
      <span> $</span>
    </div>
      <a href="#">CHECKOUT</a>
      <a href="#">GO TO CART</a>
    </div>  
  </div>`,
});

Vue.component("backet_header_item",{
  props:["item"],
  data(){
    return{
      img:"",
    }
  },
  mounted(){
    // Костыль чтобы получить путь у картинке
    this.img = `"../../assets/img/${this.item.img}"`
  },
  template: `
  <section>
  <img :src="img" alt="prod"></img>
  <div class="backet_top_inf">
    <p>{{item.product_name}}</p>
    <div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></div>
    <div class='price'> {{item.quantity }} X {{item.price}} $</p></div>
  </div>
  <button class="delbtn" @click="$emit('remove', item)">&times;</button>
  </section>  
  `
})