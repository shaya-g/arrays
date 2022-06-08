var friends = ["Sally", "Bob", "Tim", "Jill"]
var rent = [1500, 800, 2000, 1000]
var paidRent = "true"
var notPaid = "false"
var friendsPaid = [paidRent, notPaid, paidRent, notPaid]

console.log(friends)
console.log(rent)
console.log(friendsPaid)

//"Jill" will be removed from the friends array because it is the last element.
friends.pop()
//1500 will be removed from the rent array because it is the first element.
rent.shift()
//paidRent will be added to the end of the friendsPaid array.
friendsPaid.push(paidRent)
