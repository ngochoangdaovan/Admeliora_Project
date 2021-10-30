'use strict';

const db = require('../api/models')();
const UserModel = db.Users
const AddressesModel = db.Addresses
const phoneModel = db.PhoneNumbers
const Categories = db.Categories



const initialDB = async () => {
    
    const users = [
        { 
            "user_name": "hoangdao",
            "password": "hoangdao@236",
            "first_name": "hoang",
            "last_name": "dao", 
            "email": "hoangdao@gmail.com",
            "dob": "2001-23-06",
            "gender": "male",
        },
        { 
            "user_name": "tuantran",
            "password": "tuantran@236",
            "first_name": "tuan",
            "last_name": "tran", 
            "email": "tuantran@gmail.com",
            "dob": "2001-20-01",
            "gender": "male",
        },
        { 
            "user_name": "namnguyen",
            "password": "namnguyen@236",
            "first_name": "nam",
            "last_name": "nguyen", 
            "email": "namnguyen@gmail.com",
            "dob": "2001-01-01",
            "gender": "male",
        },
        { 
            "user_name": "chauhoaivu",
            "password": "chauhoaivu@236",
            "first_name": "vu",
            "last_name": "chau", 
            "email": "chauhoaivu@gmail.com",
            "dob": "2001-29-02",
            "gender": "male",
        },
        { 
            "user_name": "quangthai",
            "password": "quangthai@236",
            "first_name": "thai",
            "last_name": "le", 
            "email": "quangthai@gmail.com",
            "dob": "2001-04-04",
            "gender": "male",
        },
        { 
            "user_name": "marcustuyt",
            "password": "marcustuyt@236",
            "first_name": "tuyt",
            "last_name": "marcus", 
            "email": "marcustuyt@gmail.com",
            "dob": "2001-19-10",
            "gender": "male",
        },
        { 
            "user_name": "tuankiet",
            "password": "tuankiet@236",
            "first_name": "kiet",
            "last_name": "nguyen", 
            "email": "tuankiet@gmail.com",
            "dob": "2001-30-02",
            "gender": "male",
        },
        { 
            "user_name": "dienpham",
            "password": "dienpham@236",
            "first_name": "dien",
            "last_name": "pham", 
            "email": "dienpham@gmail.com",
            "dob": "1999-16-11",
            "gender": "male",
        }
    ];
    
    await UserModel.bulkCreate(users)


    const categories = [
        {name: ""}
    ]

    await Categories.bulkCreate(categories)

}










