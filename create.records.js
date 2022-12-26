const Passenger = require("./model/passenger");
const Driver = require("./model/driver");
const passengerDataBase = require("../database/passenger-database");
const driverDataBase = require("./database/driver-database");

const printBookingHistory = require("./lib/print-booking-history");

const ali = new Passenger({ name: "Ali", location: "Kreuzberg" });
const mert = new Passenger({ name: "Mert", location: "Mitte" });
const stefan = new Driver({ name: "Stefan", location: "Treptower Park" });

ali.book(stefan, "Kreuzberg", "Neukolln");
ali.book(stefan, "Neukolln", "Mitte");
ali.book(stefan, "Mitte", "Kreuzberg");
ali.book(stefan, "Kreuzberg", "SXF");
mert.book(stefan, "Mitte", "Kreuzberg");

passengerDataBase.save([ali, mert]);
driverDataBase.save([stefan]);

const betul = Passenger.create({ name: "Betul", location: "Tegel" });

passengerDataBase.insert(betul);

const passengers = passengerDataBase.load();

passengers.forEach(printBookingHistory);
