import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {pokemon} from "../models/pokemonModel";
import {PokeDataService} from "../service/poke-data.service";

@Injectable({
  providedIn: 'root'
})
export class PokeDataResolverResolver implements Resolve<pokemon> {

  constructor(private _pokeService : PokeDataService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<pokemon> {
    return this._pokeService.getPikachu()
  }
}
