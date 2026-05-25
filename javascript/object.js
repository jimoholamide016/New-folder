function Transaction (name, amount, date, payment_method) {
    this.name = name;
    this.amount = amount;
    this.date = date;
    this.payment_method = payment_method;
}  

const Transaction1 = new Transaction("Shopping", 150, "2024-06-01", "Credit Card");

console.log(Transaction1);