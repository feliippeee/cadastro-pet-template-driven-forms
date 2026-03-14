import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShelterNameValidatorDirective } from '../../../shared/directives/shelter-name-validator-directive';

@Component({
  selector: 'app-pet-form',
  imports: [FormsModule, ShelterNameValidatorDirective],
  templateUrl: './pet-form.html',
  styleUrl: './pet-form.css',
})
export class PetForm {}

// {
//   petName: string;
//   species: string;
//   age: number;
//   vaccinated: boolean;
//   size: 'small' | 'medium' | 'large';
//   temperament: {
//     docile: boolean;
//     active: boolean;
//     protective: boolean;
//   };
//   shelterInfo: {
//     shelterName: string;
//     city: string;
//   };
//   bio: string;
// }
