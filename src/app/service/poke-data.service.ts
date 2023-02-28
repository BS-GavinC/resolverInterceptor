import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {pokemon} from "../models/pokemonModel";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokeDataService {

  constructor(private _http : HttpClient) { }

  getPikachu() : Observable<pokemon>{
      return this._http.get<pokemon>('https://pokeapi.co/api/v2/pokemon/mew')
  }
}
