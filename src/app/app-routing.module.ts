import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RickMortyAlternativeComponent } from './rick-morty/rick-morty-alternative/rick-morty-alternative.component';
import { RickMortyComponent } from './rick-morty/rick-morty.component';

const routes: Routes = [
  {
    path: '', component: RickMortyComponent
  },
  {

    path: 'character/:name', component: RickMortyAlternativeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
