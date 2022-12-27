const BaseDataBase = require("./base-database");
const Driver = require("../model/driver");

class DriverDataBase extends BaseDataBase {}

module.exports = new DriverDataBase(Driver);
