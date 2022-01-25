import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './index/pokemon.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [PokemonComponent, CardComponent],
  imports: [CommonModule, ReactiveFormsModule, PokemonRoutingModule],
})
export class PokemonModule {}
