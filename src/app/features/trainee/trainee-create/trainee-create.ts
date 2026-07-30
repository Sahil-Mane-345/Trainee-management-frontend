import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { TextInput } from "../../../shared/components/text-input/text-input";
import { traineeCreateErrors } from '../errors/traineeCreateErrors';
import { SelectInput, SelectOption } from "../../../shared/components/select-input/select-input";
import { Button } from "../../../shared/components/button/button";
import { TraineeService } from '../../../core/services/trainee-service/trainee-service';
import { ITraineeCreate } from '../../../core/services/models/traineeModel';

@Component({
  selector: 'app-trainee-create',
  imports: [RouterLink, ReactiveFormsModule, TextInput, SelectInput, Button],
  templateUrl: './trainee-create.html',
  styleUrl: './trainee-create.css',
})
export class TraineeCreate {
  private fb: FormBuilder = inject(FormBuilder);
  private traineeService: TraineeService = inject(TraineeService);

  traineeErrors = traineeCreateErrors;

  traineeSelectOptions: SelectOption[] = [
    {
      label: "Active",
      value: "Active"
    },
    {
      label: "Inactive",
      value: "Inactive",
    },
    {
      label: "Completed",
      value: "Completed"
    }
  ];

  createTraineeForm = this.fb.nonNullable.group({
    firstName: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    lastName: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    email: ["", [Validators.required, Validators.email]],
    techStack: ["", [Validators.required]],
    status: ["",[Validators.required]]
  });

  onSubmit():void{
    if(this.createTraineeForm.valid){
      const payload : ITraineeCreate = this.createTraineeForm.getRawValue();
    
      this.traineeService.createTrainee(payload).subscribe((res) => {
        console.log(res);
        alert("Trainee Created Successfully");
      });

      this.createTraineeForm.reset();

    }
  }
}
