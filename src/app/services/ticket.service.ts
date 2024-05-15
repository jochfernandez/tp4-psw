import { Injectable } from '@angular/core';
import {Ticket} from "../models/ticket";

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private tickets:Array<Ticket> = [];

  getTickets():Ticket[]{
    return this.tickets;
  }



  agregarTicket(ticket:Ticket){
    console.log(ticket);
    this.tickets.push(ticket);
    window.alert("Ticket agregado exitosamente!");
    console.log("Tickets: "+ this.tickets.length);
  }

  eliminarTicket(ticket:Ticket){
    let index = this.tickets.indexOf(ticket);
    if (index > -1){
      this.tickets.splice(index,1);
    }
  }
  constructor() {

  }
}
