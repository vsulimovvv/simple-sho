import { createStore } from 'vuex';

export default createStore({
  state: {
    shopList: [
      {
        id: 1,
        title: 'Nike Red',
        descr:
          'DEPRECIATION - The cushioned midsole is made from cushioning foam; STRENGTH - Extra overlays all over for durability.; SURFACE GRIP - Durable and flexible rubber outsole provides excellent traction.',
        img: require('../assets/img/1.png'),
        gallery: [
          {
            name: 'Nike boost First',
            img: require('../assets/img/1.png'),
          },
          {
            name: 'Nike boost First',
            img: require('../assets/img/2.png'),
          },
          {
            name: 'Nike boost First',
            img: require('../assets/img/3.png'),
          },
        ],
      },
      {
        id: 2,
        title: 'Nike Orange',
        descr:
          'DEPRECIATION - The cushioned midsole is made from cushioning foam; STRENGTH - Extra overlays all over for durability.; SURFACE GRIP - Durable and flexible rubber outsole provides excellent traction.',
        img: require('../assets/img/4.png'),
        gallery: [
          {
            name: 'Nike boost First',
            img: require('../assets/img/4.png'),
          },
          {
            name: 'Nike boost First',
            img: require('../assets/img/5.png'),
          },
          {
            name: 'Nike boost First',
            img: require('../assets/img/6.png'),
          },
        ],
      },
      {
        id: 3,
        title: 'Nike Green',
        descr:
          'DEPRECIATION - The cushioned midsole is made from cushioning foam; STRENGTH - Extra overlays all over for durability.; SURFACE GRIP - Durable and flexible rubber outsole provides excellent traction.',
        img: require('../assets/img/7.png'),
        gallery: [
          {
            name: 'Nike boost First',
            img: require('../assets/img/7.png'),
          },
          {
            name: 'Nike boost First',
            img: require('../assets/img/8.png'),
          },
          {
            name: 'Nike boost First',
            img: require('../assets/img/9.png'),
          },
        ],
      },
      {
        id: 4,
        title: 'Nike White',
        descr:
          'DEPRECIATION - The cushioned midsole is made from cushioning foam; STRENGTH - Extra overlays all over for durability.; SURFACE GRIP - Durable and flexible rubber outsole provides excellent traction.',
        img: require('../assets/img/10.png'),
        gallery: [
          {
            name: 'Nike boost First',
            img: require('../assets/img/10.png'),
          },
          {
            name: 'Nike boost First',
            img: require('../assets/img/11.png'),
          },
          {
            name: 'Nike boost First',
            img: require('../assets/img/12.png'),
          },
        ],
      },
    ],
  },
  getters: {
    getShopList(state) {
      return state.shopList;
    },
    getItem: (state) => (id) => {
      return state.shopList.find((item) => item.id === id);
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
