import {Component} from '@angular/core';
import {Ticket, TipoEspectador} from "../../../models/ticket";
import {TicketService} from "../../../services/ticket.service";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.css'
})
export class TicketFormComponent{
  ticket: Ticket = new Ticket();
  tickets: Array<Ticket> = [];


  constructor(protected ticketService: TicketService,  private router: Router) {
  }
  calcularPrecioCobrado(): number {
    if (this.ticket.tipoEspectador === TipoEspectador.Tipo1) {
      this.ticket.precioCobrado=this.ticket.precioReal * 0.8; // Aplica un descuento del 20%
    } else {
      this.ticket.precioCobrado=this.ticket.precioReal; // No aplica descuento
    }
    return this.ticket.precioCobrado;
  }
  protected readonly TicketService = TicketService;
  resetearTicket() {
    this.ticket = new Ticket();
  }
  verTabla() {
    this.router.navigate(['/punto5TicketList']);
  }


}
