import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-studente',
  imports: [CommonModule, RouterModule],
  templateUrl: './studente.html',
  styleUrl: './studente.css',
})
export class Studente {
  @Input() nome!: string;
  @Input() classe!: string;
  @Input() mediaVoti!: number;
  @Input() id!: number;

  mostraMedia = false;

  toggleMedia() {
    this.mostraMedia = !this.mostraMedia;
  }
}
