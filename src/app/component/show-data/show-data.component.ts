import {Component, OnInit} from '@angular/core';
import {PokeDataService} from "../../service/poke-data.service";
import {pokemon} from "../../models/pokemonModel";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.scss']
})
export class ShowDataComponent implements OnInit{

  constructor(private _activatedRoute : ActivatedRoute) {
  }

  monPokemon! : pokemon;

  ngOnInit(): void {

    this.monPokemon = this._activatedRoute.snapshot.data['monPoke']

  }

}
