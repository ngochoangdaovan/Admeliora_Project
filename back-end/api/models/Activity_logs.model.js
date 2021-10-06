

module.exports = (connector, module_db) => {
    
    const ActivityLogs = connector.define('ActivityLogs', {

        user_id : {
            type : module_db.UUID,
            allowNull   : false,
        },
        date_time : {
            type : module_db.DATE,
            defaultValue : module_db.NOW
        },
        message : {
            type : module_db.STRING,
            allowNull : false
        }
    });

    return ActivityLogs;

}



