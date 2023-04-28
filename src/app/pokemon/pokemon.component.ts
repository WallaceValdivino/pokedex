import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemon : Pokemon = {} as Pokemon;
ngOnInit(): void {
this.pokemon.message = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png";
}

getBreed(): string[]{
return this.pokemon.message.split("/")[4].split("-");

}

}
