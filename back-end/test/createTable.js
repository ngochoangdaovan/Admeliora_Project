const db = require('../api/models')();
const ProductImages = db.ProductImages


ProductImages.sync()