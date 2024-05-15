import { Component, OnInit } from '@angular/core';
import {TicketService} from "../../../services/ticket.service";
import {Router} from "@angular/router";
import {Ticket} from "../../../models/ticket";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent implements OnInit{
    tickets! : Array<Ticket>;
    ticketPorExtranjeros! : Array<Ticket>;
    ticketPorNacionales! : Array<Ticket>;
  contNacionalidad: number = 0;
  contGenero: number = 0;

    constructor(private ticketService: TicketService, private router: Router) {
    }
    ngOnInit() {
      this.tickets = this.ticketService.getTickets();
    }

    volverFormulario(){
      this.router.navigate(['/punto5TicketForm']);
    }

    calcularTotalTicketsExtranjeros(){
      this.ticketPorExtranjeros = this.tickets.filter(ticket => ticket.tipoEspectador.toString() === 'e');
      return this.ticketPorExtranjeros.length;
    }
    calcularTotalTicketsNacionales(){
      this.ticketPorNacionales = this.tickets.filter(ticket => ticket.tipoEspectador.toString() === 'l');
      return this.ticketPorNacionales.length;
    }
    getEspectadorTipo(tipo: string): string {
      return tipo === 'e' ? 'Extranjero' : 'Local';
    }
}
