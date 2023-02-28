import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowDataComponent} from "./component/show-data/show-data.component";
import {PokeDataResolverResolver} from "./resolver/poke-data-resolver.resolver";

const routes: Routes = [
  {path: 'show', component : ShowDataComponent, resolve : {monPoke : PokeDataResolverResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
