module.exports = {
  "development": {
    "username": "root",
    "password": "",
    //OJO ACA QUE NO ES MOVIES_DB, ES EL NOMBRE QUE LE PUSIMOS AL SQL!!!!!!!
    "database": "integradorgrupo4",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
