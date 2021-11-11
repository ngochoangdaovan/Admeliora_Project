


module.exports = new class responseHandler {


    sendFailure(req, res, sttCode, err) {
        let newToken = this.checkNewToken(req);
        res.status(sttCode).send({
            newToken: (newToken !== (null ||undefined) ? newToken : null),
            success: false,
            message: (typeof err !== 'string' ? err.message : err)
        })
    }

    sendSuccess(req, res, sttCode, data){
        let newToken = this.checkNewToken(req) 
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