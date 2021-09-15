import PagSeguroTransaction from "./PagSeguroTransaction";
import PagSeguroTransactionAdapter from "./PagSeguroTransactionAdapter";
import PaypalTransaction from "./PaypalTransaction";
import PaypalTransactionAdapter from "./PaypalTransactionAdapter";

test("Should make a Pagseguro payment", function() {
    const pagSeguroTransaction = new PagSeguroTransaction("UUAYGAHJSHHK", 1000, 2);
    const transaction = new PagSeguroTransactionAdapter(pagSeguroTransaction);
    expect(transaction.status).toBe("paid");
});

test("Should make a Paypal payment", function() {
    const paypalTransaction = new PaypalTransaction("89798798", 1000, 'S');
    const transaction = new PaypalTransactionAdapter(paypalTransaction);
    expect(transaction.status).toBe("paid");
});
