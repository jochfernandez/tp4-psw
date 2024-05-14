import { Routes } from '@angular/router';
import {Punto1Component} from "./components/punto1/punto1.component";
import {Punto2Component} from "./components/punto2/punto2.component";
import {HomeComponent} from "./components/home/home.component";
import {Punto3Component} from "./components/punto3/punto3.component";
import {GrillaComponent} from "./components/punto3/grilla/grilla.component";
import {MusicaComponent} from "./components/punto3/musica/musica.component";
import {ConversorComponent} from "./components/punto3/conversor/conversor.component";
import {CalendarioComponent} from "./components/punto3/calendario/calendario.component";
import {TicketFormComponent} from "./components/punto5/ticket-form/ticket-form.component";
import {TicketListComponent} from "./components/punto5/ticket-list/ticket-list.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'punto1', component: Punto1Component },
  { path: 'punto2', component: Punto2Component },
  { path: 'punto3',component: Punto3Component},
  { path: 'grilla',component: GrillaComponent},
  { path: 'musica',component: MusicaComponent},
  { path: 'conversor',component: ConversorComponent},
  { path: 'calendario',component: CalendarioComponent},
  { path: 'punto5TicketForm',component: TicketFormComponent},
  { path: 'punto5TicketList',component: TicketListComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];
