



module.exports = async (db) => {
    const insert_product = require('./ProductLayer')
    const insert_user = require('./userLayer')
    const insert_image = require('./imageUpload')

    
    await db.sequelize.drop();
    await db.sequelize.sync();
    await insert_user(db)
    await insert_product(db)
    await insert_image(db)

}
