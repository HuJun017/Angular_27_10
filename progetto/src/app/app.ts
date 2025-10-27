import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Pagina1 } from './pagina1/pagina1';
import { Pagina2 } from './pagina2/pagina2';
import { CommonModule } from '@angular/common';
import { Pagina3 } from './pagina3/pagina3';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pagina2, Pagina1, CommonModule, RouterLink, Pagina3],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
