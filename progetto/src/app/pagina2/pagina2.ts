import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';    
import { CommonModule } from '@angular/common';
import { StudentiService } from '../services/studenti-service';

@Component({
  selector: 'app-pagina2',
  standalone: true,                            
  imports: [CommonModule, FormsModule],          
  templateUrl: './pagina2.html'
})
export class Pagina2 {
  studenti: any[] = [];
  nome = '';
  classe = '';
  mediaVoti: number | null = null;

  constructor(private studentiService: StudentiService) {}

  ngOnInit() {
    this.studenti = this.studentiService.getStudenti();
  }

  aggiungiStudente() {
    const nuovoStudente = {
      nome: this.nome,
      classe: this.classe,
      mediaVoti: this.mediaVoti
    };

    this.studentiService.addStudente(nuovoStudente);
    this.studenti = this.studentiService.getStudenti();

    // pulisci i campi
    this.nome = '';
    this.classe = '';
    this.mediaVoti = null;
  }
}
