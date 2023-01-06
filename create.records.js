const Passenger = require("./model/passenger");
const Driver = require("./model/driver");
const passengerDataBase = require("./database/passenger-database");
const driverDataBase = require("./database/driver-database");

const printBookingHistory = require("./lib/print-booking-history");

const ali = Passenger.create({ name: "Ali", location: "Kreuzberg" });
const mert = Passenger.create({ name: "Mert", location: "Mitte" });
const stefan = Driver.create({ name: "Stefan", location: "Treptower Park" });

ali.book(stefan, "Kreuzberg", "Neukolln");
ali.book(stefan, "Neukolln", "Mitte");
ali.book(stefan, "Mitte", "Kreuzberg");
ali.book(stefan, "Kreuzberg", "SXF");
mert.book(stefan, "Mitte", "Kreuzberg");

// console.log("writedbs");
// passengerDataBase.save([ali, mert], () => {
//   console.log("wrote passenger");
//   driverDatabase.save([stefan], () => {
//     console.log("done");
//   });
// });
async function main() {
  try {
    await passengerDataBase.save;
    [ali, mert];
    await driverDataBase.save([stefan]);

    const betul = Passenger.create({ name: "Betul", location: "Tegel" });

    await passengerDataBase.insert(betul);
    const passengers = await passengerDataBase.load();
    passengers.forEach(printBookingHistory);
  } catch (e) {
    return console.log(e);
  }
}

main();
