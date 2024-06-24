import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {AcceuilComponent} from "./acceuil/acceuil.component";
import {ContenuAcceuilComponent} from "./contenu-acceuil/contenu-acceuil.component";
import {FormulaireComponent} from "./formulaire/formulaire.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AcceuilComponent,
    ContenuAcceuilComponent,
    RouterLink,
    FormulaireComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projet-angular2';


}
