const colors = require("colors");
const Passenger = require("./passenger");
const Driver = require("./driver");
const { passengerDataBase, driverDataBase } = require("./database");

//const ali = new Passenger(null, "Ali", "Kreuzberg")
//const mert = new Passenger(null, "Mert", "Mitte")
const stefan = new Driver(null, "Stefan", "Treptower Park");
const betul = new Passenger(null, "Betul", "SFX");

betul.book(stefan, "Kreuzberg", "Neukolln");
betul.book(stefan, "Neukolln", "Mitte");
betul.book(stefan, "Mitte", "Kreuzberg");
//ali.book(stefan, "Kreuzberg", "SXF")
//mert.book(stefan, "Mitte", "Kreuzberg")

function printBooking(booking) {
  console.log(
    `${booking.passenger.name} booked ${booking.driver.name} to travel from ${booking.origin} to ${booking.destination}`
  );
}

function printBookingHistory(passenger) {
  if (passenger.booking.length == 0)
    return console.log(`${booking.passenger.name} has no bookings yet`);
  passenger.bookings.forEach(printBooking);
}

passengerDataBase.save([betul]);
//db.save('passengers', [{name:"ali",location:"Berlin"}])
//db.save('drivers', [stefan])
//passengers.forEach(printBookingHistory)

//const betul = new Passenger("betul", "Tegel")

//db.insert('passengers', betul)
//db.remove('passengers', 'betul')
//const ali2 = passengerDataBase.findByName('Ali')

//ali2.book(stefan, 'SXF', 'TXL')
//passengerDataBase.update(ali)
//printBookingHistory(ali2)

//passengers.forEach(p => console.log(p.name))

//db.save("passengers", [passengers[0]])

//passengers = db.load("passengers")

//console.log(ali.bookings[0].passenger.bookings[0])
//function createPassenger(name, location) {
// return{
//name,
//location,
// printBookingHistory(){
// this.bookings.forEach(printBooking)
// }
// }
//}

//const ali = createPassenger("ali", "Kreuzberg")

///const ali = {
//name: "ali",
//location: "Treptow"

//}

///const fatma = {
//name: "fatma",
//location: "Treptow"

//}

//printBooking(booking1)
//printBooking(booking2)
//printBooking(booking3)

//const bookingFromKreuzbergtoNeukolln = ali.book(stefan, "Kreuzberg", "Neukolln")
//stefan.drive(bookingFromKreuzbergtoNeukolln.origin)
//stefan.pickUp(ali)
//stefan.drive(bookingFromKreuzbergtoNeukolln.destination)
//ali.endBooking(bookingFromKreuzbergtoNeukolln)
//console.log(`//${ali.name} has ${ali.bookings.length} booking(s).`)
