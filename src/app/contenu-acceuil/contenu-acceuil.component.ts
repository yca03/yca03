import {Component, Input, model, OnInit} from '@angular/core';
import {Modele} from "../modele/modele";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-contenu-acceuil',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './contenu-acceuil.component.html',
  styleUrl: './contenu-acceuil.component.scss'
})
export class ContenuAcceuilComponent implements OnInit{
@Input() modeleContenu!:Modele;

ngOnInit() {
  this.modeleContenu= new Modele();
  {

  }
}


  protected readonly model = model;
}
