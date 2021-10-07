const connect  = require('./models');

// model_maintain();

const test = async () => {
    const db = await connect();
    // let user = await db.Users.findOne({where: {user_id : 'skdfjkjalksjd;fjaosjdlkfjl'}});
    // user.da
    // console.log(await db.sequelize.sync());
    console.log(await db.sequelize.drop());

    // console.log(db)


}

test();

// app.listen(3000, ()=>{console.log('the server is listening on port 3000')})
