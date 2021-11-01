const db = require('./index');



const test = async () => {

    const test = await db();
    // console.log(test.sequelize.drop());
    // await test.sequelize.sync();

    test.sequelize.authenticate();

}

test()