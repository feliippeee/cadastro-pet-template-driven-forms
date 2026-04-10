import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IPetData } from '../../../shared/models/pet-data';

@Component({
  selector: 'app-pet-summary',
  imports: [RouterLink],
  templateUrl: './pet-summary.html',
  styleUrl: './pet-summary.css',
})
export class PetSummary {
  petData = signal<IPetData>(history.state.petData);
}
