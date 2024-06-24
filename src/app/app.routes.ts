import { Routes } from '@angular/router';
import {ContenuAcceuilComponent} from "./contenu-acceuil/contenu-acceuil.component";
import {AcceuilComponent} from "./acceuil/acceuil.component";
import {FormulaireComponent} from "./formulaire/formulaire.component";

export const routes: Routes = [
  { path: 'contenu' , component: ContenuAcceuilComponent},
  { path: 'acceuil' , component: AcceuilComponent},
  {path:'formulaire', component:FormulaireComponent},
];
