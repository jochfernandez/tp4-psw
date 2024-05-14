import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from "./layouts/footer/footer.component";
import {HeaderComponent} from "./layouts/header/header.component";
import {Punto1Component} from "./components/punto1/punto1.component";
import {Punto2Component} from "./components/punto2/punto2.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, Punto1Component, Punto2Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PSW004';
}
