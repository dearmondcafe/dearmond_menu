let app = new Vue({
  el: "#app",
  data: {
    selectedFilter: "all",
    dearMondLogo: "./images/dearmond_logo.jpeg",
    kindOfList: {
      all: "전부",
      bingsu: "빙수",
      bread: "빵",
      coffee: "커피",
      latte: "라떼",
      dutch: "더치",
      smoothie: "스무디",
      ade: "에이드",
      fruitJuice: "과일쥬스",
      tea: "티",
      frappe: "프라페",
      additional: "추가메뉴",
    },
    menus: menuArray,
    basket: [],
  },
  methods: {
    selectFilter(kindOf) {
      this.selectedFilter = kindOf;
    },
    filteredMenus() {
      if (this.selectedFilter === "all") return this.menus;
      return this.menus.filter((menu) => menu.kindOf === this.selectedFilter);
    },
    addItemToBasket(menu) {
      this.basket.push(menu);
      console.log(this.basket);
    },
    caculateTotalPrice() {
      return this.basket.reduce((acc, cur) => {
        return bigDecimal.add(acc, cur.price);
      }, 0);
    },
    removeItemAtBasket(index) {
      this.basket.splice(index, 1);
    },
  },
});
