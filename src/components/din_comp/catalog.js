Vue.component("catalog", {
  props: ["positiveFilter", "products"],
  data() {
    return {
      catalogUrl: "../../json/catalog.json",
    };
  },
  mounted() {
    this.$root.getJson(`${this.catalogUrl}`).then((data) => {
      for (let el of data) {
        this.$root.products.push(el);
        this.$root.positiveFilter.push(el);
        console.log(products)
      }
    });
  },
  template: `
  <div class="productBox">
    <product v-for="product of this.$root.positiveFilter"
    :key="product.id_product"
    :product="product">
    </product>
  </div>
    `,
});

Vue.component("product",{
  props:[],
  template:`
      <selection>
      <div class="addCardwrap">
      <button class="addCard" @click="$emit('remove', cartItem)>
          Add to Card
      </button>
  </div>
  <div class="productDisable">
      <img :src="img/{{product.img}}" alt="">
      <p>{{product.product_name}}</p>
      <p class='price'>{{product.price}} $</p>
  </div>
      </selection>
  `
})
