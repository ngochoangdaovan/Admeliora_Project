const products = [
  {
    title: 'Áo thun Dinosaur 01',

    price: '189000',

    image01: 'images/products/product-01a.jpg',

    image02: 'images/products/product-01b.jpg',

    categorySlug: 'ao-thun',

    colors: ['white', 'red', 'orange'],

    slug: 'ao-thun-dinosaur-01',

    size: ['s', 'm', 'l', 'xl'],
  },

  {
    title: 'Áo thun Dinosaur 02',

    price: '159000',

    image01: 'images/products/product-02a.jpg',

    image02: 'images/products/product-02b.jpg',

    categorySlug: 'ao-thun',

    colors: ['white', 'red', 'blue'],

    slug: 'ao-thun-dinosaur-02',

    size: ['s', 'm'],
  },

  {
    title: 'Áo thun Dinosaur 03',

    price: '190000',

    image01: 'images/products/product-03a.jpg',

    image02: 'images/products/product-03b.jpg',

    categorySlug: 'ao-thun',

    colors: ['white', 'red', 'orange', 'yellow'],

    slug: 'ao-thun-dinosaur-03',

    size: ['m'],
  },

  {
    title: 'Áo thun Polo 04',

    price: '194000',

    image01: 'images/products/product-04a.jpg',

    image02: 'images/products/product-04b.jpg',

    categorySlug: 'ao-thun',

    colors: ['white', 'orange', 'blue'],

    slug: 'ao-thun-polo-04',

    size: ['xl'],
  },

  {
    title: 'Áo thun Polo 05',

    price: '194000',

    image01: 'images/products/product-05a.jpg',

    image02: 'images/products/product-05b.jpg',

    categorySlug: 'ao-thun',

    colors: ['white', 'pink'],

    slug: 'ao-thun-polo-05',

    size: ['xxl'],
  },

  {
    title: 'Áo thun Polo 06',

    price: '194000',

    image01: 'images/products/product-06a.jpg',

    image02: 'images/products/product-06b.jpg',

    categorySlug: 'ao-thun',

    colors: ['black'],

    slug: 'ao-thun-polo-06',

    size: ['s', 'm', 'xl'],
  },

  {
    title: 'Áo somi caro 07',

    price: '194000',

    image01: 'images/products/product-07a.jpg',

    image02: 'images/products/product-07b.jpg',

    categorySlug: 'ao-somi',

    colors: ['white', 'red', 'orange', 'blue'],

    slug: 'ao-somi-caro-07',

    size: ['l', 'xl'],
  },

  {
    title: 'Áo somi dài tay 08',

    price: '194000',

    image01: 'images/products/product-08a.jpg',

    image02: 'images/products/product-08b.jpg',

    categorySlug: 'ao-somi',

    colors: ['white', 'red', 'black'],

    slug: 'ao-somi-dai-tay-08',

    size: ['s', 'm', 'xl'],
  },

  {
    title: 'Áo somi tay dài 09',

    price: '194000',

    image01: 'images/products/product-09a.jpg',

    image02: 'images/products/product-09b.jpg',

    categorySlug: 'ao-somi',

    colors: ['white', 'blue'],

    slug: 'ao-somi-tay-dai-09',

    size: ['m'],
  },

  {
    title: 'Quần jean phong cách 10',

    price: '194000',

    image01: 'images/products/product-10a.jpg',

    image02: 'images/products/product-10b.jpg',

    categorySlug: 'quan-jean',

    colors: ['blue', 'black'],

    slug: 'quan-jean-phong-cach-10',

    size: ['l'],
  },

  {
    title: 'Quần jean 11',

    price: '194000',

    image01: 'images/products/product-11a.jpg',

    image02: 'images/products/product-11b.jpg',

    categorySlug: 'quan-jean',

    colors: ['blue', 'black'],

    slug: 'quan-jean-11',

    size: ['s', 'm', 'xl'],
  },

  {
    title: 'Quần jean 12',

    price: '194000',

    image01: 'images/products/product-12a.jpg',

    image02: 'images/products/product-12b.jpg',

    categorySlug: 'quan-jean',

    colors: ['blue'],

    slug: 'quan-jean-12',

    size: ['s', 'm', 'xl'],
  },
]

// const getAllProducts = () => products

// const getProducts = (count) => {
//   const max = products.length - count

//   const min = 0

//   const start = Math.floor(Math.random() * (max - min) + min)

//   return products.slice(start, start + count)
// }

// const productData = {
//   getAllProducts,
//   getProducts,
// }

module.exports = products
