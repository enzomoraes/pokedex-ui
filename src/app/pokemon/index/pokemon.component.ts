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
  ) {}

  ngOnInit(): void {
    this.setForm();
    this.findAll();
  }

  setForm(): void {
    this.form = this.formBuilder.group({
      // name: [null, Validators.required],
      // image: [null, Validators.required],
      name: [null, null],
      image: [null, null],
    });
  }

  findAll(): void {
    this.pokemonService.findAll().subscribe({
      next: (pokemons) => {
        this.pokemons = pokemons;
      },
      error: (err) => {
        this.error = err.error.message;
      },
    });
  }

  save(): void {
    this.pokemonService.create(this.form.value).subscribe({
      next: () => {
        this.form.reset();
        this.error = null;
        this.findAll();
      },
      error: (err) => (this.error = err.error.message),
    });
  }
}
