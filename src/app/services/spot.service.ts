import { Spot } from './../models/spot';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TouristSpotService {

  constructor() {}

  getList(): Observable<Spot[]> {
    return new Observable<Spot[]>(subscriber => {
      subscriber.next([{
        id: '0001',
        nome: 'UABSF Conjunto Itatiaia',
        telefone: '62 9 8765 4321',
        horarioAtend: ['08:00', '18:00'],
        coords: [-16.659728, -49.264421],
        distancia: 7.8,
        indicador: 0,
        vacinasIndisponiveis: [
          'hepatite B',
          'triplice viral'
        ],
        emdereco: 'Rua R 12, Conj. Itatiaia'
      }, {
        id: '0002',
        nome: 'UABSF Setor São Judas Tadeu',
        telefone: '62 9 8765 4321',
        horarioAtend: ['07:00', '19:00'],
        coords: [-16.615216, -49.248603],
        distancia: 2.3,
        indicador: 1,
        emdereco: 'Av. Brasília, St. São Judas Tadeu'
      }, {
        id: '0003',
        nome: 'CS Isabel Maria da Silva',
        telefone: '62 9 8765 4321',
        horarioAtend: ['08:00', '18:00'],
        coords: [-16.640644, -49.295195],
        distancia: 8.4,
        indicador: 2,
        itensAcessibilidade: [
          'rampa de acesso',
          'piso com auto-relevo'
        ],
        emdereco: 'Rua R 12, Conj. Itatiaia'
      }])
    });
  }

}
