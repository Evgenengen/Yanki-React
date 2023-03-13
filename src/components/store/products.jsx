let initStateList = {
  products: [
    {
      id: 1,
      price: 6990,
      img: "images/categories-1.jpg",
      active: false,
      title: "Кремовое пальто",
      sum: "6990 грн",
      size1: "",
      size2: "",
      size3: "",
      size4: "M",
      size5: "L",
      rating: 2,
      count: 2,
      sizeBasket: "XS",
      color: "",
    },
    {
      id: 2,
      price: 2990,
      img: "images/categories-2.jpg",
      active: true,
      title: "Синее пальто",
      sum: "2990 грн",
      size1: "XXS",
      size2: "",
      size3: "",
      size4: "M",
      size5: "L",
      rating: 7,
      count: 0,
      sizeBasket: "",
      color: "",
    },
    {
      id: 3,
      price: 5990,
      img: "images/categories-3.jpg",
      active: true,
      title: "Белое пальто",
      sum: "5990 грн",
      size1: "XXS",
      size2: "XS",
      size3: "",
      size4: "",
      size5: "",
      rating: 4,
    },
    {
      id: 4,
      price: 2980,
      img: "images/categories-4.jpg",
      active: false,
      title: "Синяя куртка",
      sum: "2980 грн",
      // size: 'XXS XS S M L',
      size1: "XXS",
      size2: "",
      size3: "S",
      size4: "",
      size5: "L",
      rating: 7,
    },
    {
      id: 5,
      price: 2900,
      img: "images/categories-1.jpg",
      active: false,
      title: "Белая куртка",
      sum: "2900 грн",
      size1: "",
      size2: "",
      size3: "",
      size4: "M",
      size5: "L",
      rating: 4,
    },
    {
      id: 6,
      price: 2990,
      img: "images/categories-2.jpg",
      active: false,
      title: "Синее пальто",
      sum: "2990 грн",
      size1: "XXS",
      size2: "XS",
      size3: "",
      size4: "",
      size5: "",
      rating: 5,
    },
    {
      id: 7,
      price: 5990,
      img: "images/categories-3.jpg",
      active: false,
      title: "Белое пальто",
      sum: "5990 грн",
      size1: "",
      size2: "XS",
      size3: "",
      size4: "",
      size5: "L",
      rating: 10,
    },
    {
      id: 8,
      price: 3990,
      img: "images/categories-4.jpg",
      active: false,
      title: "Синяя куртка",
      sum: "3990 грн",
      size1: "XXS",
      size2: "XS",
      size3: "",
      size4: "M",
      size5: "",
      rating: 9,
    },
    {
      id: 9,
      price: 6990,
      img: "images/categories-1.jpg",
      active: false,
      title: "Белая куртка",
      sum: "6990 грн",
      size1: "XXS",
      size2: "XS",
      size3: "S",
      size4: "",
      size5: "",
      rating: 6,
    },
    {
      id: 10,
      price: 2590,
      img: "images/categories-2.jpg",
      active: false,
      title: "Синее пальто",
      sum: "2590 грн",
      size1: "",
      size2: "XS",
      size3: "S",
      size4: "",
      size5: "L",
      rating: 2,
    },
    {
      id: 11,
      price: 9900,
      img: "images/categories-3.jpg",
      active: false,
      title: "Белое пальто",
      sum: "9900 грн",
      size1: "XXS",
      size2: "",
      size3: "S",
      size4: "M",
      size5: "",
      rating: 3,
    },
    {
      id: 12,
      price: 1990,
      img: "images/categories-4.jpg",
      active: false,
      title: "Синяя куртка",
      sum: "1990 грн",
      size1: "XXS",
      size2: "",
      size3: "S",
      size4: "",
      size5: "L",
      rating: 1,
    },
  ],
};
const updateProducts = (products, item, idx) => {
  return [...products.slice(0, idx), item, ...products.slice(idx + 1)];
};

export const productsReducer = (state = initStateList, action) => {
  switch (action.type) {
    case "ADD_LIKE":
      let itemId = action.payload;
      let itemIndex = state.products.findIndex(({ id }) => id === itemId);
      let item = state.products[itemIndex];

      let newItem;

      if (item) {
        newItem = {
          ...item,
          active: !item.active,
        };
      }
      return {
        ...state,
        products: updateProducts(state.products, newItem, itemIndex),
      };
    case "DELETE_PRODUCT_FAVORITES":
      const delItemId = action.payload;
      const delItemIndex = state.products.findIndex(
        ({ id }) => id === delItemId
      );
      const delItem = state.products[delItemIndex];

      let newDelItem;
      if (delItem) {
        newDelItem = {
          ...delItem,
          active: !delItem.active,
        };
      }
      return {
        ...state,
        products: updateProducts(state.products, newDelItem, delItemIndex),
      };
    case "ADD_PRODUCT_BASKET":
      const itemTitle = action.payload.title;
      const itemSize = action.payload.size;
      const BasketItemIndex = state.products.findIndex(
        ({ title }) => title === itemTitle
      );
      const itemBasket = state.products[BasketItemIndex];
      let newItemBasket;
      if (itemBasket) {
        newItemBasket = {
          ...itemBasket,
          sizeBasket: itemSize,
          count: itemBasket.count + 1,
        };
      }
      console.log(newItemBasket);
      return {
        ...state,
        products: updateProducts(
          state.products,
          newItemBasket,
          BasketItemIndex
        ),
      };
    case "DELETE_PRODUCT_BASKET":
      const delProduct = action.payload.title;
      const delProductIndex = state.products.findIndex(
        ({ title }) => title === delProduct
      );
      const delProductItem = state.products[delProductIndex];
      let newDelItemBasket;
      if (delProductItem) {
        newDelItemBasket = {
          ...delProductItem,
          count: "",
          classBasket: "",
        };
      }
      return {
        ...state,
        products: updateProducts(
          state.products,
          newDelItemBasket,
          delProductIndex
        ),
      };
    case "COUNT_DEC":
      const couneDec = action.payload.title;
      const countDecIndex = state.products.findIndex(
        ({ title }) => title === couneDec
      );
      const countDecItem = state.products[countDecIndex];
      let newCountDec;
      if (countDecItem) {
        newCountDec = {
          ...countDecItem,
          count: countDecItem.count + 1,
        };
      }
      return {
        ...state,
        products: [
          ...state.products.slice(0, countDecIndex),
          newCountDec,
          ...state.products.slice(countDecIndex + 1),
        ],
      };
    case "COUNT_INC":
      const couneInc = action.payload.title;
      const countIncIndex = state.products.findIndex(
        ({ title }) => title === couneInc
      );
      const countIncItem = state.products[countIncIndex];
      let newCountInc;
      if (countIncItem) {
        newCountInc = {
          ...countIncItem,
          count: countIncItem.count - 1,
        };
      }
      return {
        ...state,
        products: [
          ...state.products.slice(0, countIncIndex),
          newCountInc,
          ...state.products.slice(countIncIndex + 1),
        ],
      };

    default:
      return state;
  }
};
