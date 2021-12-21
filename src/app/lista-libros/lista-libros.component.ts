import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibrosService } from '../libros.service';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {

  libros:any // o puede ser libros:Libros[]

  constructor(private libroService : LibrosService , private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.parent?.params.subscribe(async params =>{
       this.libros =  await this.libroService.getByEscritor(parseInt(params['escritorId']))
      console.log(this.libros);
    })
  }

}
