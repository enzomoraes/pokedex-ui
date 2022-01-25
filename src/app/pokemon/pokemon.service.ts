import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../core/model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private POKEMON_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }
  create(pokemon: Pokemon): Promise<void> {
    return this.http.post<void>(this.POKEMON_URL, pokemon).toPromise();
  }
  findAll(): Promise<any> {
    return this.http.get(this.POKEMON_URL).toPromise();
  }
}
