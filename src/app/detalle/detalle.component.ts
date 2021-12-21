import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EscritoresService } from '../escritores.service';
import { Escritor } from '../models/escritor.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  
  escritor: any;
  constructor(private activatedRoute: ActivatedRoute, private escritoresServices: EscritoresService) {
   
   }

  ngOnInit(){
    this.activatedRoute.params.subscribe( async params =>{
      console.log(params['escritorId']);
      this.escritor = await this.escritoresServices.getById(parseInt(params['escritorId']))
      console.log(this.escritor);
    })
  }

}
