import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { provideHttpClient } from '@angular/common/http';
import { CharactersListComponent } from './components/characters-list/characters-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiclesListComponent,
    CharactersListComponent,
    CharactersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
