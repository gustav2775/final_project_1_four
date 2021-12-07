Vue.component("catalog", {
  props: ["products","positiveFilter"],
  
  mounted(){
    this.$root.getJson("/api/catalog")
      .then(data => {
      for (let el of data) {
        this.$root.products.push(el);
        this.$root.positiveFilter.push(el);
      }
    });
    console.log(this.$root.positiveFilter)
   
  },
  template: `
  <div class="productBox">
    <catalog_item v-for="product_catalog of this.$root.positiveFilter" :key="product_catalog.id"
      :item ="product_catalog">
    </catalog_item>
  </div>
  `,
});

Vue.component("catalog_item",{
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
      <div class="addCardwrap"> 
        <button class="addCard" @click=""> Add to Card </button>
      </div>
      <div class="productDisable">
         <img :src=img alt="Some img">
         <p>{{item.product_name}}</p>
         <p class='price'>{{item.price}} $</p>
      </div>
  </section>  
  `
})