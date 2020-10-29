Vue.component("filter_catalog", {
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
});
