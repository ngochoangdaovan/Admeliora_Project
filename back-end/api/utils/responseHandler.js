fs = require('fs');


module.exports = new class responseHandler {

    log(des, msg){
        if (msg!==null && msg!==undefined){
            fs.appendFile(des, '\n'+msg, function (err) {
                if (err) return console.log(err);
            });
        }
    
    }

    sendFailure(req, res, sttCode, err) {
        let newToken = this.checkNewToken(req);
        this.log('./logs/access.log', req.access);
        this.log('./logs/error.log', typeof err !== 'string' ? err.message : err);

        res.status(sttCode).send({
            newToken: (newToken !== (null ||undefined) ? newToken : null),
            success: false,
            message: (typeof err !== 'string' ? err.message : err)
        })
    }

    sendSuccess(req, res, sttCode, data){
        let newToken = this.checkNewToken(req) 

        this.log('./logs/access.log', req.access);
        res.status(sttCode).send({
            newToken: (newToken !== (null ||undefined) ? newToken : null),
            success: true,
            data: data
        })

    }

    checkNewToken(req){
        
        if(req.newAuthorization !== (null || undefined || '')){
            return req.newAuthorization;
        }
        return null;
    }


}