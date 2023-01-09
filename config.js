config = {};

config.SAVE_TO_DB = true;

config.DB_HOST = $MYSQL_URL;
config.DB_USER = $MYSQLUSER;
config.DB_PASS = $MYSQLPASSWORD;
config.DB_NAME = "proxies";

module.exports = config;
