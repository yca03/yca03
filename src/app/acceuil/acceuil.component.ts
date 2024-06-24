import {Component, Input, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {Modele} from "../modele/modele";



@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.scss'
})
export class AcceuilComponent implements OnInit{

@Input() modele!:Modele;
   // lien1 !:string;
   // lien2!: string;

   // ngOnInit() {
   //   this.modele.lien1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYDlukzbkh_QNvrB20vnjacpcuJQdkpJeDgQ&s"
   //   this.modele.lien2="https://img.freepik.com/photos-gratuite/ordinateur-portable-ecran-blanc-vierge_273609-16110.jpg"
   // }

  ngOnInit() {
    this.modele = new Modele(
      // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYDlukzbkh_QNvrB20vnjacpcuJQdkpJeDgQ&s",
      // "https://img.freepik.com/photos-gratuite/ordinateur-portable-ecran-blanc-vierge_273609-16110.jpg"
    );
  }

}
