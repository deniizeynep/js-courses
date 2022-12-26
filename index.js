const { passengerDataBase, driverDataBase } = require("./database");
const printBookingHistory = require("./lib/print-booking-history");

const stefan = driverDataBase.findBy("name", "Stefan");
const ali = passengerDataBase.findByName("Ali");

ali.book(stefan, "Kreuzberg", "Wannsee");
passengerDataBase.update(ali);

printBookingHistory(ali);

console.log(passengerDataBase.findByName("location", "Mitte"));
