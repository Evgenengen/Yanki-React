import { configureStore, createSlice } from "@reduxjs/toolkit";
// let state = {
//   listProduct: [
//     {
//       id: 1,
//       price: 6990,
//       img: "images/categories-1.jpg",
//       active: false,
//       title: "Белая куртка",
//       sum: "6990 грн",
//       size1: "",
//       size2: "",
//       size3: "",
//       size4: "M",
//       size5: "L",

//       rating: 2,
//     },
//     {
//       id: 2,
//       price: 2990,
//       img: "images/categories-2.jpg",
//       active: false,
//       title: "Синее пальто",
//       sum: "2990 грн",
//       size1: "XXS",
//       size2: "",
//       size3: "",
//       size4: "M",
//       size5: "L",
//       rating: 7,
//     },
//     {
//       id: 3,
//       price: 5990,
//       img: "images/categories-3.jpg",
//       active: false,
//       title: "Белое пальто",
//       sum: "5990 грн",
//       size1: "XXS",
//       size2: "XS",
//       size3: "",
//       size4: "",
//       size5: "",
//       rating: 4,
//     },
//     {
//       id: 4,
//       price: 2980,
//       img: "images/categories-4.jpg",
//       active: false,
//       title: "Синяя куртка",
//       sum: "2980 грн",
//       // size: 'XXS XS S M L',
//       size1: "XXS",
//       size2: "",
//       size3: "S",
//       size4: "",
//       size5: "L",
//       rating: 7,
//     },
//     {
//       id: 5,
//       price: 2900,
//       img: "images/categories-1.jpg",
//       active: false,
//       title: "Белая куртка",
//       sum: "2900 грн",
//       size1: "",
//       size2: "",
//       size3: "",
//       size4: "M",
//       size5: "L",
//       rating: 4,
//     },
//     {
//       id: 6,
//       price: 2990,
//       img: "images/categories-2.jpg",
//       active: false,
//       title: "Синее пальто",
//       sum: "2990 грн",
//       size1: "XXS",
//       size2: "XS",
//       size3: "",
//       size4: "",
//       size5: "",
//       rating: 5,
//     },
//     {
//       id: 7,
//       price: 5990,
//       img: "images/categories-3.jpg",
//       active: false,
//       title: "Белое пальто",
//       sum: "5990 грн",
//       size1: "",
//       size2: "XS",
//       size3: "",
//       size4: "",
//       size5: "L",
//       rating: 10,
//     },
//     {
//       id: 8,
//       price: 3990,
//       img: "images/categories-4.jpg",
//       active: false,
//       title: "Синяя куртка",
//       sum: "3990 грн",
//       size1: "XXS",
//       size2: "XS",
//       size3: "",
//       size4: "M",
//       size5: "",
//       rating: 9,
//     },
//     {
//       id: 9,
//       price: 6990,
//       img: "images/categories-1.jpg",
//       active: false,
//       title: "Белая куртка",
//       sum: "6990 грн",
//       size1: "XXS",
//       size2: "XS",
//       size3: "S",
//       size4: "",
//       size5: "",
//       rating: 6,
//     },
//     {
//       id: 10,
//       price: 2590,
//       img: "images/categories-2.jpg",
//       active: false,
//       title: "Синее пальто",
//       sum: "2590 грн",
//       size1: "",
//       size2: "XS",
//       size3: "S",
//       size4: "",
//       size5: "L",
//       rating: 2,
//     },
//     {
//       id: 11,
//       price: 9900,
//       img: "images/categories-3.jpg",
//       active: false,
//       title: "Белое пальто",
//       sum: "9900 грн",
//       size1: "XXS",
//       size2: "",
//       size3: "S",
//       size4: "M",
//       size5: "",
//       rating: 3,
//     },
//     {
//       id: 12,
//       price: 1990,
//       img: "images/categories-4.jpg",
//       active: false,
//       title: "Синяя куртка",
//       sum: "1990 грн",
//       size1: "XXS",
//       size2: "",
//       size3: "S",
//       size4: "",
//       size5: "L",
//       rating: 1,
//     },
//   ],
//   product: [],
// };

const productsSlice = createSlice({
  name: "product",
  initialState:  {
    products: [
      {
        id: 1,
        price: 6990,
        img: "images/categories-1.jpg",
        active: false,
        title: "Белая куртка",
        sum: "6990 грн",
        size1: "",
        size2: "",
        size3: "",
        size4: "M",
        size5: "L",

        rating: 2,
      },
      {
        id: 2,
        price: 2990,
        img: "images/categories-2.jpg",
        active: false,
        title: "Синее пальто",
        sum: "2990 грн",
        size1: "XXS",
        size2: "",
        size3: "",
        size4: "M",
        size5: "L",
        rating: 7,
      },
      {
        id: 3,
        price: 5990,
        img: "images/categories-3.jpg",
        active: false,
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
    productsId: [],
  },
  reducers: {
    addLike(state, action) {
        const itemId = action.payload;
        const itemIndex = state.products.findIndex(({ id }) => id === itemId);
        const item = state.products[itemIndex];
        console.log(item);
      const productId = { id: itemId };
      if (item.active) {
        state = {
          ...state,
          product: state.productsId.filter((item) => item.id !== itemId),
        };
      } else {
        state.productsId.push(productId);
      }
      let newItem;
      if (item) {
        newItem = {
          ...item,
          active: !item.active,
        };

      }
      return {
        ...state,
        products: [
                ...state.products.slice(0, itemIndex),
                newItem,
                ...state.products.slice(itemIndex + 1),
            ],
        }
      
    },
  },
});

export const {addLike} = productsSlice.actions
export const productsReducer = productsSlice.reducer;

// const reducer = (state = initialState, action) => {

//     switch (action.type) {
//         case "ADD_LIKE":
//             const itemId = action.payload;
//             const itemIndex = state.listProduct.findIndex(({ id }) => id === itemId);
//             const item = state.listProduct[itemIndex];
//             const productId = { id: itemId };

//             if (item.active) {
//                 state = {
//                     ...state,
//                     product: state.product.filter((item) => item.id !== itemId),
//                 };
//             } else {
//                 state.product.push(productId);
//             }

//       let newItem;
//       if (item) {
//         newItem = {
//           ...item,
//           active: !item.active,
//         };
//       }
//       return {
//         ...state,
//         listProduct: [
//           ...state.listProduct.slice(0, itemIndex),
//           newItem,
//           ...state.listProduct.slice(itemIndex + 1),
//         ],
//       };

//     default:
//       return state;
//     }

// };
