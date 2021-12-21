import { Injectable } from '@angular/core';

import { LIBROS } from './db/libros.db';
import { Libros } from './models/libro.model';


@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() { }
  
  getByEscritor(escritorId :any): Promise<Libros[]>{
    return new Promise((resolve,reject)=>{
      const arrFiltrado = LIBROS.filter(libro=>{
        return libro.escritor === escritorId
      })
      resolve(arrFiltrado)
    })

  }

}
