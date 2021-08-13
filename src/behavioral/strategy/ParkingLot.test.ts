import AirportTicketCalculator from "./AirportTicketCalculator";
import BeachTicketCalculator from "./BeachTicketCalculator";
import ParkingLot from "./ParkingLot";
import ShoppingTicketCalculator from "./ShoppingTicketCalculator";

test("Should calculate ticket for 3 hours in the beach", function() {
    const beachTicketCalculator = new BeachTicketCalculator();
    const parkingLot = new ParkingLot("beach", beachTicketCalculator);
    parkingLot.checkin("ABC-9876", new Date("2021-08-10T10:00:00"));
    const ticket = parkingLot.checkout("ABC-9876", new Date("2021-08-10T13:00:00"))
    expect(ticket.amount).toBe(15);
});

test("Should calculate ticket for 10 hours in the airport", function() {
    const airportTicketCalculator = new AirportTicketCalculator();
    const parkingLot = new ParkingLot("airport", airportTicketCalculator);
    parkingLot.checkin("ABC-9876", new Date("2021-08-10T10:00:00"));
    const ticket = parkingLot.checkout("ABC-9876", new Date("2021-08-10T20:00:00"))
    expect(ticket.amount).toBe(31);
});

test("Should calculate ticket for 5 hours in shopping free", function() {
    const shoppingTicketCalculator = new ShoppingTicketCalculator();
    const parkingLot = new ParkingLot("shopping", shoppingTicketCalculator);
    parkingLot.checkin("ABC-9876", new Date("2021-08-10T10:00:00"));
    const ticket = parkingLot.checkout("ABC-9876", new Date("2021-08-10T20:00:00"))
    expect(ticket.amount).toBe(0);
});