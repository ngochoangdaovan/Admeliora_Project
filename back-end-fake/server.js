const express = require('express')
const products = require('./data/products')
const heroSliderData = require('./data/hero-slider')
const feedback = require('./data/feedback')




const app = express()

app.get('/api/feedback', (req, res) => {
  res.json(feedback)
})

// app.get('/', (req, res) => {
//   res.send('API is running ')
// })

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/heroSliderData', (req, res) => {
  res.json(heroSliderData)
})


app.get('/api/policy', (req, res) => {
  res.json(policyData)
})


app.get('/api/products/:slug', (req, res) => {
  const product = products.find((p) => p.slug === req.params.slug)
  res.json(product)
})




app.get('/catalog/images/products/:slug', (req, res) => {
  const catalog = products.find((p) => p.slug === req.params.slug)
  res.json(catalog)
})


app.get('/catalog/images/products', (req, res) => {
  res.json(products)
})

app.get('catalog/:slug', (req, res) => {
  const product = products.find((p) => p.slug === req.params.slug)
  res.json(product)
})

app.listen(5000, console.log('Server running on port 5000'))
