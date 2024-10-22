import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'vehicles', component: VehiclesListComponent },
  { path: 'people', component: CharactersListComponent },
  { path: '', component: PageNotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
