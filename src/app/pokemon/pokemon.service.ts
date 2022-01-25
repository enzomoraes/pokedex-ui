import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../core/model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private POKEMON_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}
  create(pokemon: Pokemon): Observable<void> {
    return this.http.post<void>(this.POKEMON_URL, pokemon);
  }
  findAll(): Observable<Array<Pokemon>> {
    return this.http.get<Array<Pokemon>>(this.POKEMON_URL);
  }
}
