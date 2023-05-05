import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private apiURL =   'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  loadPokemon(pokeId : number): Observable<any>{
const url = `${this.apiURL}/${pokeId}`;
return this.http.get(url);

  }
}
