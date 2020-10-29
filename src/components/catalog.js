Vue.component("catalog", {
    props: ["positiveFilter", "products"],
  data() {
    return {
        catalogUrl:'../json/catalog.json'
    };
  },
  mounted() {
    this.$parent.getJson(`${API + this.catalogUrl}`).then((data) => {
      for (let el of data) {
        this.$root.products.push(el);
        this.$root.positiveFilter.push(el);
      }
    });
  },
  template: ` 
    <section v-for="product of this.$root.positiveFilter"
    :key="product.id_product"
    :img="imgCatalog"
    :product="product">
        <div class="addCardwrap">
            <button class="addCard">
                Add to Card
            </button>
        </div>
        <div class="productDisable">
            <img src="img/product7.jpg" alt="">
            <p>Mango People T-shirt</p>
            <p class='price'>52.00$</p>
        </div>
    </section>`,
});
