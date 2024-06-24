import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.scss'
})
export class FormulaireComponent implements OnInit{

  form ={
    email:null,
    password:null,
    option:null,
  }

  optionList: string[]= [];

  ngOnInit() {
    this.optionList = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];
  }

  onSubmit(){
    console.log(this.form)
  }

  protected readonly onsubmit = onsubmit;
}
