import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private POKEMON_API = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private httpClient: HttpClient) {

  }

  public getPokemon(url) {
    return this.httpClient.get(url);
  }

  public sendGetRequest() {
    return this.httpClient.get(`${this.POKEMON_API}?limit=150`);
  }
}
