
 import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  pokemon : any;
  pokeId: number = 1;

  constructor(private http: HttpClient){}

ngOnInit(): void {
this.loadPokemon;
}

loadPokemon(): void{

  this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.pokeId}`).subscribe(
    (response) => {
      this.pokemon = response;
    },
    (error) =>{
      console.log(error);
    }
    );
}

aumentaPoke(): void{
this.pokeId++;
if(this.pokeId >1008){
  this.pokeId = 1;
}
this.loadPokemon();
}

diminuiPoke(): void{
  this.pokeId--;
  if(this.pokeId <=0){
    this.pokeId = 1008;
  }
  this.loadPokemon();
  }
pokeTipo(): string{

  return this.pokemon.types[0].type.name;
}

pokeImg(): string{
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemon.id}.png`;
}

}
