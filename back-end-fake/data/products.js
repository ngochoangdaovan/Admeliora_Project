const products = [
  {
    title: 'Áo thun Dinosaur 01',

    price: '189000',

    image01: 'images/products/product-01 (1).jpg',

    image02: 'images/products/product-01 (2).jpg',

    categorySlug: 'ao-thun',

    colors: ['white', 'red', 'orange'],

    slug: 'ao-thun-dinosaur-01',

    size: ['s', 'm', 'l', 'xl'],
  },

  {
    title: 'Áo thun Dinosaur 02',

    price: '159000',

    image01: 'images/products/product-02 (1).jpg',

    image02: 'images/products/product-02 (2).jpg',

    categorySlug: 'ao-thun',

    colors: ['white', 'red', 'blue'],

    slug: 'ao-thun-dinosaur-02',

    size: ['s', 'm'],
  },

  {
    title: 'Áo thun Dinosaur 03',

    price: '190000',

    image01: 'images/products/product-03 (1).jpg',

    image02: 'images/products/product-03 (2).jpg',

    categorySlug: 'ao-thun',

    colors: ['white', 'red', 'orange', 'yellow'],

    slug: 'ao-thun-dinosaur-03',

    size: ['m'],
  },

  {
    title: 'Áo thun Polo 04',

    price: '194000',

    image01: 'images/products/product-04 (1).jpg',

    image02: 'images/products/product-04 (2).jpg',

    categorySlug: 'ao-thun',

    colors: ['white', 'orange', 'blue'],

    slug: 'ao-thun-polo-04',

    size: ['xl'],
  },

  {
    title: 'Áo thun Polo 05',

    price: '194000',

    image01: 'images/products/product-05 (1).jpg',

    image02: 'images/products/product-05 (2).jpg',

    categorySlug: 'ao-thun',

    colors: ['white', 'pink'],

    slug: 'ao-thun-polo-05',

    size: ['xxl'],
  },

  {
    title: 'Áo thun Polo 06',

    price: '194000',

    image01: 'images/products/product-06 (1).jpg',

    image02: 'images/products/product-06 (2).jpg',

    categorySlug: 'ao-thun',

    colors: ['black'],

    slug: 'ao-thun-polo-06',

    size: ['s', 'm', 'xl'],
  },

  {
    title: 'Áo somi caro 07',

    price: '194000',

    image01: 'images/products/product-07 (1).jpg',

    image02: 'images/products/product-07 (2).jpg',

    categorySlug: 'ao-somi',

    colors: ['white', 'red', 'orange', 'blue'],

    slug: 'ao-somi-caro-07',

    size: ['l', 'xl'],
  },

  {
    title: 'Áo somi dài tay 08',

    price: '194000',

    image01: 'images/products/product-08 (1).jpg',

    image02: 'images/products/product-08 (2).jpg',

    categorySlug: 'ao-somi',

    colors: ['white', 'red', 'black'],

    slug: 'ao-somi-dai-tay-08',

    size: ['s', 'm', 'xl'],
  },

  {
    title: 'Áo somi tay dài 09',

    price: '194000',

    image01: 'images/products/product-09 (1).jpg',

    image02: 'images/products/product-09 (2).jpg',

    categorySlug: 'ao-somi',

    colors: ['white', 'blue'],

    slug: 'ao-somi-tay-dai-09',

    size: ['m'],
  },

  {
    title: 'Quần jean phong cách 10',

    price: '194000',

    image01: 'images/products/product-10 (1).jpg',

    image02: 'images/products/product-10 (2).jpg',

    categorySlug: 'quan-jean',

    colors: ['blue', 'black'],

    slug: 'quan-jean-phong-cach-10',

    size: ['l'],
  },

  {
    title: 'Quần jean 11',

    price: '194000',

    image01: 'images/products/product-11 (1).jpg',

    image02: 'images/products/product-11 (2).jpg',

    categorySlug: 'quan-jean',

    colors: ['blue', 'black'],

    slug: 'quan-jean-11',

    size: ['s', 'm', 'xl'],
  },

  {
    title: 'Quần jean 12',

    price: '194000',

    image01: 'images/products/product-12 (1).jpg',

    image02: 'images/products/product-12 (2).jpg',

    categorySlug: 'quan-jean',

    colors: ['blue'],

    slug: 'quan-jean-12',

    size: ['s', 'm', 'xl'],
  },

  {
    title: 'Áo thun Dinosaur 13',

    price: '189000',

    image01: 'images/products/product-13 (1).jpg',

    image02: 'images/products/product-13 (2).jpg',

    categorySlug: 'ao-thun',

    colors: ['white', 'red'],

    slug: 'ao-thun-dinosaur-13',

    size: ['s', 'm', 'xl'],
  },

  {
    title: 'Áo thun Dinosaur 14',

    price: '159000',

    image01: 'images/products/product-14 (1).jpg',

    image02: 'images/products/product-14 (2).jpg',

    categorySlug: 'ao-thun',

    colors: ['white', 'blue'],

    slug: 'ao-thun-dinosaur-14',

    size: ['s', 'm'],
  },

  {
    title: 'Áo thun Dinosaur 15',

    price: '190000',

    image01: 'images/products/product-15 (1).jpg',

    image02: 'images/products/product-15 (2).jpg',

    categorySlug: 'ao-thun',

    colors: ['red', 'blue'],

    slug: 'ao-thun-dinosaur-15',

    size: ['xl'],
  },

  {
    title: 'Áo somi dài tay 16',

    price: '194000',

    image01: 'images/products/product-16 (1).jpg',

    image02: 'images/products/product-16 (2).jpg',

    categorySlug: 'ao-somi',

    colors: ['blue', 'black'],

    slug: 'ao-somi-dai-tay-16',

    size: ['m', 'xl'],
  },

  {
    title: 'Áo somi tay dài 17',

    price: '194000',

    image01: 'images/products/product-17 (1).jpg',

    image02: 'images/products/product-17 (2).jpg',

    categorySlug: 'ao-somi',

    colors: ['white', 'blue'],

    slug: 'ao-somi-tay-dai-17',

    size: ['s', 'l', 'xl'],
  },

  {
    title: 'Quần jean phong cách 18',

    price: '194000',

    image01: 'images/products/product-18 (1).jpg',

    image02: 'images/products/product-18 (2).jpg',

    categorySlug: 'quan-jean',

    colors: ['blue', 'black'],

    slug: 'quan-jean-phong-cach-18',

    size: ['s', 'm', 'l', 'xl'],
  },

  // 18 products
]

const getAllProducts = () => products

const getProducts = (count) => {
  const max = products.length - count

  const min = 0

  const start = Math.floor(Math.random() * (max - min) + min)

  return products.slice(start, start + count)
}

const productData = {
  getAllProducts,
  getProducts,
}

module.exports = products
