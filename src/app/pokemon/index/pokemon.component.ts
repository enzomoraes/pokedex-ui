import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from '../../core/model';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  form!: FormGroup;
  pokemons: Array<Pokemon> = [];
  error: any;

  constructor(
    private formBuilder: FormBuilder,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.setForm();
    this.findAll();
  }

  setForm(): void {
    this.form = this.formBuilder.group({
      // comentado para aparecer a validação do backend
      // name: [null, Validators.required],
      // image: [null, Validators.required],
      name: [null, null],
      image: [null, null],
    });
  }

  async findAll(): Promise<void> {
    try {
      const pokemons = await this.pokemonService.findAll();
      this.pokemons = pokemons
    } catch (e: any) {
      this.error = e.error.message
    }

  }

  async save(): Promise<void> {

    try {
      await this.pokemonService.create(this.form.value);
      this.form.reset();
      this.error = null;
      await this.findAll();

    } catch (e: any) {
      this.error = e.error.message
    }

  }
}
