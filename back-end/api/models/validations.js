const isUnique = (model, condition, next) => {

    model.findAll({
        where: condition
    }).then((value)=>{
        if (value.length > 0) {
            return next(`${Object.keys(condition)} is already in use`);
        }
        next()
    })
    .catch((err)=>{return next(err.message);});

}


module.exports = {isUnique}