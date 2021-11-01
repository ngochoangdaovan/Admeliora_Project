'use strict';

const db = require('../api/models')();
const UserModel = db.Users
const phoneModel = db.PhoneNumbers
const addressModel = db.Addresses
const bcrypt = require('bcrypt')







module.exports =  async () => {

    // encrypt password
    const salt1 =  await bcrypt.genSalt();
    const hoangpsw = await bcrypt.hash("hoangdao@236", salt1);

    const salt2 =  await bcrypt.genSalt();
    const tuanpsw = await bcrypt.hash("tuantran@123", salt2);


    const salt3 =  await bcrypt.genSalt();
    const nampsw = await bcrypt.hash('namnguyen@123', salt3);

    const salt4 =  await bcrypt.genSalt();
    const vupsw = await bcrypt.hash('chauhoaivu@123', salt4);

    const salt5 =  await bcrypt.genSalt();
    const thaipsw = await bcrypt.hash('quangthai@123', salt5);

    const salt6 =  await bcrypt.genSalt();
    const tuytpsw = await bcrypt.hash('marcustuyt@123', salt6);

    const salt7 =  await bcrypt.genSalt();
    const dienphampsw = await bcrypt.hash('dienpham@123', salt7);

    
    const users = [
        {   
            user_id: 1,
            user_name: "hoangdao",
            password: hoangpsw,
            first_name: "hoang",
            last_name: "dao", 
            email: "hoangdao@gmail.com",
            level: 0,
            dob: "2001-23-06",
            gender: "male",
            is_admin: true
        },
        { 
            user_id: 2,
            user_name: "tuantran",
            password: tuanpsw,
            first_name: "tuan",
            last_name: "tran", 
            email: "tuantran@gmail.com",
            level: 0,
            dob: "2001-20-01",
            gender: "male",
        },
        { 
            user_id: 3,
            user_name: "namnguyen",
            password: nampsw,
            first_name: "nam",
            last_name: "nguyen", 
            email: "namnguyen@gmail.com",
            level: 0,
            dob: "2001-01-01",
            gender: "male",
        },
        { 
            user_id: 4,
            user_name: "chauhoaivu",
            password: vupsw,
            first_name: "vu",
            last_name: "chau", 
            email: "chauhoaivu@gmail.com",
            level: 0,
            dob: "2001-29-02",
            gender: "male",
        },
        { 
            user_id: 5,
            user_name: "quangthai",
            password: thaipsw,
            first_name: "thai",
            last_name: "le", 
            email: "quangthai@gmail.com",
            level: 0,
            dob: "2001-04-04",
            gender: "male",
        },
        { 
            user_id: 6,
            user_name: "marcustuyt",
            password: tuytpsw,
            first_name: "tuyt",
            last_name: "marcus", 
            email: "marcustuyt@gmail.com",
            level: 0,
            dob: "2001-19-10",
            gender: "male",
        },
        { 
            user_id: 7,
            user_name: "dienpham",
            password: dienphampsw,
            first_name: "dien",
            last_name: "pham", 
            email: "dienpham@gmail.com",
            level: 0,
            dob: "1999-16-11",
            gender: "male",
        }
    ];
    
    await UserModel.bulkCreate(users)


// insert phone number
    const Phone = [
        {
            phone_number : '0352855144',
            default : true,
            user_id : 1
        },
        {
            phone_number : '0849413688',
            default : false,
            user_id : 1
        },
        {
            phone_number : '01686242819',
            default : false,
            user_id : 1
        },
        {
            phone_number : '03889388994',
            default : true,
            user_id : 2
        },{
            phone_number : '03495829984',
            default : false,
            user_id : 2
        },{
            phone_number : '02344543566',
            default : true,
            user_id : 3
        },{
            phone_number : '05897767837',
            default : true,
            user_id : 4
        },{
            phone_number : '04424245367',
            default : true,
            user_id : 5
        },{
            phone_number : '04456354544',
            default : true,
            user_id : 6
        },{
            phone_number : '01234567890',
            default : true,
            user_id : 7
        }
    ]

    await phoneModel.bulkCreate(Phone)


    const Address = [
        {
            province: "Gia Lai",
            district: "Chu Se",
            street    : "H'BONG",
            detail_address: "Thon IASA",
            user_id : 1,
            default : true,
        },{
            province: "HCM",
            district: "Q7",
            street    : "Tân Phú",
            detail_address: "801 Nguyễn Văn Linh",
            user_id : 1,
            default : false,
        },{
            province: "Hue",
            district: "Q1",
            street    : "Xa A",
            detail_address: "Thon A",
            user_id : 2,
            default : true,
        },{
            province: "Binh Thuan",
            district: "Q2",
            street    : "Xa B",
            detail_address: "Thon B",
            user_id : 3,
            default : true,
        },{
            province: "L A",
            district: "Q6",
            street    : "Xa C",
            detail_address: "Thon C",
            user_id : 4,
            default : true,
        },{
            province: "Binh Thuan",
            district: "Q10",
            street    : "Xa D",
            detail_address: "Thon 3",
            user_id : 5,
            default : true,
        },{
            province: "Lam Dong",
            district: "Da Lat",
            street    : "Xa F",
            detail_address: "Thon 10",
            user_id : 6,
            default : true,
        },{
            province: "Ca Mau",
            district: "Q8",
            street    : "Xa A",
            detail_address: "Thon 3",
            user_id : 7,
            default : true,
        }
    ]

    await addressModel.bulkCreate(Address)
}
   









