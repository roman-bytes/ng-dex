import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokeInfoComponent } from './poke-info/poke-info.component';
import { PokeDetailsComponent } from './poke-details/poke-details.component';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';
import {LoadingInterceptorService} from './loading-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    PokeInfoComponent,
    PokeDetailsComponent,
    HeaderComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
