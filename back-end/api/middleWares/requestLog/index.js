
// white a request log to log the request host, method, url, body, query, headers, response, time, and date with UTC time.




module.exports = (req, res, next) => {
    const {
        method,
        url,
        body,
        query,
        headers,
    } = req;


    const date = new Date();
    const _date = date.getDate()
    const _month = date.getMonth()+1 ; 
    const _year = date.getFullYear();
    const _hour = Number(date.getHours()) + 7;
    const _GMT7_hour = _hour >= 24 ? `${_hour - 24}`  : _hour;
    const _minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const _dateTime = `${_date}/${_month}/${_year} ${_GMT7_hour}:${_minute} GTM-7`;
 

    const log = {
        method,
        url,
        body,
        query,
        headers,
        _dateTime,
    };
    let access ='method: '+log.method + '-- url:  ' + req.protocol + "://" + req.get('host') + req.originalUrl +  '  --date: ' + log._dateTime + '  -- use-agent: ' + headers['user-agent'] ;
    req.access=access;


    next();
    }













