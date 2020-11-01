Vue.component("search", {
  props: ["positiveFilter", "products"],
  data() {
    return {
      userSearch: "",
    };
  },
  methods: {
    filterGoods() {
      //создаю регулярное выражение
      let regexp = new RegExp(this.userSearch, "i");
      //с помощью метода filter перебираю массив и ищу совпадения. Пложительные значение записываю в массив.
      this.$root.positiveFilter = this.$root.products.filter((e) =>
        regexp.test(e.product_name)
      );
      if (this.$root.positiveFilter.lenght === 0)
        this.$root.positiveFilter.lenght = this.$root.products;
    },
  },
  template: `
  <form action="" class="searchFormTop">
    <button class="browse">
      Browse <i class="fas fa-caret-down"></i>
    </button>

    <input type="text" placeholder="Search for item..." v-model="userSearch">

    <button class="searchTopBtn">
      <i class="fas fa-search"></i>
    </button>
  </form>
  `,
});
