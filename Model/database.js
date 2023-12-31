const products = [
  {
    id: 1,
    name: "mouse",
    description: "chuot may tinh",
    price: 10,
    oldPrice: 5,
    images: ["product1.jpg", "product2.jpg", "product3.jpg", "product4.jpg"],
    in_stock: 1000,
    code: "mouse1",
    date_in: "1/6/2023",
    date_out: "1/7/2023",
    category: 4,
    new: true,
  },
  {
    id: 2,
    name: "USB 2.0",
    description: "luu tru du lieu di dong",
    price: 18,
    oldPrice: 30,
    images: ["product5.jpg", "product6.jpg", "product7.jpg", "product8.jpg"],
    in_stock: 1000,
    code: "usb1",
    date_in: "1/9/2023",
    date_out: "1/10/2023",
    category: 1,
    new: true,
  },
  {
    id: 3,
    name: "pc1",
    description: "case may tinh",
    price: 100,
    oldPrice: 75,
    images: ["product9.jpg", "product10.jpg", "product11.jpg", "product12.jpg"],
    in_stock: 1000,
    code: "case1",
    date_in: "1/7/2023",
    date_out: "1/8/2023",
    category: 2,
    best_deal: true,
  },
  {
    id: 4,
    name: "day nguon",
    description: "day nguon may tinh",
    price: 5,
    oldPrice: 3,
    images: ["product13.jpg", "product14.jpg", "product1.jpg", "product2.jpg"],
    in_stock: 1000,
    code: "daynguon1",
    date_in: "1/9/2023",
    date_out: "1/10/2023",
    category: 1,
    best_deal: true,
  },
  {
    id: 5,
    name: "sandisck",
    description: "o cung luu tru du lieu",
    price: 16,
    oldPrice: 12,
    images: ["product3.jpg", "product4.jpg", "product5.jpg", "product6.jpg"],
    in_stock: 1000,
    code: "usb2",
    date_in: "1/9/2023",
    date_out: "1/10/2023",
    category: 1,
    best_deal: true,
  },
  {
    id: 6,
    name: "o cung ssd",
    description: "o cung luu tru du lieu",
    price: 38,
    oldPrice: 25,
    images: ["product7.jpg", "product8.jpg", "product9.jpg", "product10.jpg"],
    in_stock: 1000,
    code: "ssd1",
    date_in: "1/9/2023",
    date_out: "1/10/2023",
    category: 1,
    best_deal: true,
  },
  {
    id: 7,
    name: "tay cam choi game",
    description: "tay cam choi game ps4",
    price: 58,
    oldPrice: 89,
    images: [
      "product11.jpg",
      "product12.jpg",
      "product13.jpg",
      "product14.jpg",
    ],

    in_stock: 1000,
    code: "taycamchoigame1",
    date_in: "1/9/2023",
    date_out: "1/10/2023",
    category: 4,
  },
  {
    id: 8,
    name: "laptop acer",
    description: "laptop acer",
    price: 120,
    oldPrice: 125,
    images: [
      "product11.jpg",
      "product12.jpg",
      "product13.jpg",
      "product14.jpg",
    ],
    in_stock: 1000,
    code: "laptop1",
    date_in: "1/9/2023",
    date_out: "1/10/2023",
    category: 3,
    new: true,
    best_sell: true,
  },
  {
    id: 9,
    name: "mouse",
    description: "chuot may tinh",
    price: 15,
    oldPrice: 18,
    images: ["product1.jpg", "product2.jpg", "product3.jpg", "product4.jpg"],
    in_stock: 1000,
    code: "mouse1",
    date_in: "1/6/2023",
    date_out: "1/7/2023",
    category: 4,
    best_sell: true,
    best_deal: true,
  },
  {
    id: 10,
    name: "USB 2.0",
    description: "luu tru du lieu di dong",
    price: 18,
    images: ["product5.jpg", "product6.jpg", "product7.jpg", "product8.jpg"],
    in_stock: 1000,
    code: "usb1",
    date_in: "1/9/2023",
    date_out: "1/10/2023",
    category: 1,
    best_sell: true,
  },
  {
    id: 11,
    name: "pc1",
    description: "case may tinh",
    price: 100,
    oldPrice: 89,
    images: ["product8.jpg", "product9.jpg", "product10.jpg", "product11.jpg"],
    in_stock: 1000,
    code: "case1",
    date_in: "1/7/2023",
    date_out: "1/8/2023",
    category: 2,
    best_sell: true,
  },
  {
    id: 12,
    name: "day nguon",
    description: "day nguon may tinh",
    price: 5,
    oldPrice: 4,
    images: ["product12.jpg", "product13.jpg", "product1.jpg", "product14.jpg"],
    in_stock: 1000,
    code: "daynguon1",
    date_in: "1/9/2023",
    date_out: "1/10/2023",
    category: 1,
    best_sell: true,
  },
  {
    id: 13,
    name: "sandisck",
    description: "o cung luu tru du lieu",
    price: 16,
    images: ["product4.jpg", "product2.jpg", "product3.jpg", "product5.jpg"],
    in_stock: 1000,
    code: "usb2",
    date_in: "1/9/2023",
    oldPrice: 14,
    date_out: "1/10/2023",
    category: 1,
    best_sell: true,
  },
  {
    id: 14,
    name: "o cung ssd",
    description: "o cung luu tru du lieu",
    price: 38,
    images: ["product6.jpg", "product7.jpg", "product8.jpg", "product9.jpg"],
    in_stock: 1000,
    code: "ssd1",
    date_in: "1/9/2023",
    date_out: "1/10/2023",
    category: 1,
    best_sell: true,
    oldPrice: 35,
  },
];
localStorage.setItem("products", JSON.stringify(products));

//checkout

let checkout = [
  {
    id: "id oder",
    email_user: "email nguoi mua",
    date: "ngay mua",
    listProduct: [
      {
        idProduct: "id san pham",
        quantity: "so luong san pham",
        price: "gia san pham",
      },
    ],
    total: "tong gia",
    status: "mac dinh la 0 : chua mua",
  },
];

//LIST USER
const list = [
  {
    email: "vietvo@gmail.com",
    address: "quang binh",
    name: "viet",
    password: "123456",
    phone: "0354909360",
    status: "active",
  },
  {
    email: "haduyhuan@gmail.com",
    address: "da nang",
    name: "anh",
    password: "123456",
    phone: "0354909360",
    status: "block",
  },
  {
    email: "lethibich@gmail.com",
    address: "quang nam",
    name: "bich",
    password: "123456",
    phone: "0354909360",
    status: "active",
  },
];

localStorage.setItem("listUsers", JSON.stringify(list));

/**
 * productIdElement.value = product.id;
  productNameElement.value = product.name;
  productPriceElement.value = product.price;
  productOldPriceElement.value = product.oldPrice || "";
  productCategoryElement.value = product.category;
  productDateInElement.value = product.date_in;
  productDateOutElement.value = product.date_out;
  productNewElement.value = product.new || "";
  productBestbest_sellElement.value = product.best_best_sell || "";
  productBestDealElement.value = product.best_deal || "";
  productDescElement.value = product.description;
  productCodeElement.value = product.code;
  productStockElement.value = product.in_stock || "";
 */
