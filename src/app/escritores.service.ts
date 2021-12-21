import { Injectable } from '@angular/core';


import { ESCRITORES } from './db/escritores.db';
import { Escritor } from './models/escritor.model';

@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

  constructor() { }

  getAll() :Escritor[]{
    return ESCRITORES
  }

  getAllPromise(): Promise<Escritor[]>{
    return new Promise((resolve, reject)=>{
      resolve(ESCRITORES)
    })
  }

  getByPais(pPais:string): Promise<Escritor[]> {
    return new Promise((resolve, reject)=>{
      const arrayFiltrado = ESCRITORES.filter(escritor =>{
        return escritor.pais === pPais;
      });
      resolve(arrayFiltrado);
    })
  }

  getById(pId:number): Promise<Escritor>{
    return new Promise((resolve,reject)=>{
      const escritorFound:any = ESCRITORES.find((escritor) =>{
        return escritor.id === pId;
      });
      resolve(escritorFound)
    })

  }

}

