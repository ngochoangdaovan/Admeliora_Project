const db = require('../api/models')();
const ProductImages = db.ProductImages
const insert_product = require('./ProductLayer')
const insert_user = require('./userLayer')


const initialDB = async () => {

    await db.sequelize.drop();
    await db.sequelize.sync();
    await insert_user()
    await insert_product()

}


initialDB()