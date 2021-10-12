

class UsersQueries {

    constructor (UserModel){
        this.UserModel = UserModel
    };

    async getUsers(){
        return await this.UserModel.findAll({raw: true});
    }

    async getUsersById(id){
        return await this.UserModel.findAll({
            raw: true,
            where : {
                user_id : id
            }
        });
    }

    async createUser (user_name, password, first_name, last_name, email, phone,address_id, dob, gender) {
        await this.UserModel.create({
            user_name: user_name,
            password: password,
            first_name: first_name, 
            last_name: last_name, 
            email : email,
            phone : phone,
            address_id: address_id,
            level: 0,
            dob : dob,
            gender: gender
        })
        .then(()=>console.log('true'))
        .catch(err=>console.log(err.message))

    }

    async showColumns (columns){
        return await this.UserModel.findAll({
            attributes : columns
        });
    } 



}


module.exports = UsersQueries;