import { create } from "domain";
import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";
import crypto from 'crypto'
// user.id = crypto.randomUUID()
// register bike OK
// remove bike OK
// rent bike
// return bike
// find bike

export class App {
    users: User[] = []
    bikes: Bike[] = []
    rents: Rent[] = []

    registerBike(bike: Bike): void {
        bike.id = crypto.randomUUID()
        this.bikes.push(bike)
    }

    removeUser(user: User): void {
        const index = this.users.indexOf(user, 0);
        if(index> -1){
            this.users.splice(index, 1)
        }
    }

    rentBike(bike: Bike, user: User, startDate: Date, endDate: Date) {
        bike = this.findBike(bike.id)
        user = this.findUser(user.email)
        let ResevBikes = this.rents.filter(rent => rent.bike == bike && !rent.dateReturned )
        this.rents.push(Rent.create(ResevBikes,bike,user,startDate,endDate))
        //recuperar a bike
        //recuperar o usuario
        //array somente com as reservas pra bike
        //tentar criar o rent com o array e as informaçoes da reserva
        //adicionar a reserva ao array de reservas
    }

    returnBike(bike: Bike, user: User): void {
        bike = this.findBike(bike.id)
        user = this.findUser(user.email)
        for(let i=0;i<this.rents.length;i++){
            if (this.rents[i].user == user && this.rents[i].bike == bike){
                this.rents[i].dateReturned = this.rents[i].dateTo
            }
        }

    }

    findBike(id: string): Bike {
        return this.bikes.find(bike => bike.id === id)
    }

    findUser(email: string): User {
        return this.users.find(user => user.email === email)
    }

    registerUser(user: User): void {
        for (const rUser of this.users) {
            if (rUser.email === user.email) {
                throw new Error('Duplicate user.')
            }
        }
        user.id = crypto.randomUUID()
        this.users.push(user)
    }

    addUser(user: User): void {
        if(this.users.some(rUser => { return rUser.email === user.email})){
            throw new Error('Duplicated user')
        }
        this.users.push(user)
    }

}