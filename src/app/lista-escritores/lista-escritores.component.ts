import { Component, OnInit } from '@angular/core';
import { EscritoresService } from '../escritores.service';
import { Escritor } from '../models/escritor.model';

@Component({
  selector: 'app-lista-escritores',
  templateUrl: './lista-escritores.component.html',
  styleUrls: ['./lista-escritores.component.css'],

})
export class ListaEscritoresComponent implements OnInit {

   arrEscritores: Escritor[];

  constructor(private escritoresService : EscritoresService) {

    this.arrEscritores = []
   }

  async ngOnInit(){
    // this.arrEscritores = this.escritoresService.getAll()
    // console.log(this.arrEscritores);

    // this.escritoresService.getAllPromise()
    // .then(escritores =>{
    //   this.arrEscritores = escritores
    // })

    // CON ASYNc AWAIT

    this.arrEscritores = await this.escritoresService.getAllPromise()
  }

  async onChange($event:any){
     //console.log($event.target.value);
     if($event.target.value === 'todos'){
      this.arrEscritores = await this.escritoresService.getAllPromise()
     }else{

       this.arrEscritores = await this.escritoresService.getByPais($event.target.value)
     }
  }

}
