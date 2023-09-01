import { App } from "./app";
import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";


const user1 = new User('Joao','joao@gmail.com','jooj')
const user2 = new User('Paulo','paulo@gmail.com','jeej')
const user3 = new User('Carlos', 'carlos@gmail.com', 'jiij');
const bike1 = new Bike('bike1','mountain', 123, 500, 100.5, 'desc', 5, [])
const bike2 = new Bike('bike2','speed', 321, 500, 150.5, 'desc', 10, [])
const today = new Date()
const twoDaysFromToday = new Date()
twoDaysFromToday.setDate(twoDaysFromToday.getDate() + 2)
const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)
const sevenDaysFromToday = new Date()
sevenDaysFromToday.setDate(sevenDaysFromToday.getDate() + 7)
const eightDaysFromToday = new Date();
eightDaysFromToday.setDate(eightDaysFromToday.getDate() + 8);
const tenDaysFromToday = new Date();
tenDaysFromToday.setDate(tenDaysFromToday.getDate() + 10);
const app = new App()
app.registerUser(user1)
app.registerUser(user2)
console.log(app.users)
app.registerBike(bike1)
app.registerBike(bike2)
console.log(app.bikes)
const rent1 = app.rentBike(bike1,user1,today,sevenDaysFromToday)
const rent2 = app.rentBike(bike2, user2, tomorrow, sevenDaysFromToday)
console.log(app.rents)
app.returnBike(bike1,user1)
console.log(app.rents)
const rent3 = app.rentBike(bike1, user3,eightDaysFromToday,tenDaysFromToday)
console.log(app.users)
console.log(app.rents)

