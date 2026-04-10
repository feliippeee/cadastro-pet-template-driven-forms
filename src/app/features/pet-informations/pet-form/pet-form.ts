import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ShelterNameValidatorDirective } from '../../../shared/directives/shelter-name-validator-directive';
import { IPetData } from '../../../shared/models/pet-data';

@Component({
  selector: 'app-pet-form',
  imports: [FormsModule, ShelterNameValidatorDirective],
  templateUrl: './pet-form.html',
  styleUrl: './pet-form.css',
})
export class PetForm {
  private readonly _router = inject(Router);

  submitForm(form: NgForm) {
    if (form.status === 'VALID') {
      this._router.navigate(['/pet-summary'], {
        state: { petData: form.value as IPetData },
      });
    }
  }
}

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
