import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { traineeCreateErrors } from '../errors/traineeCreateErrors';
import { SelectOption } from "../../../shared/components/select-input/select-input";
import { TraineeService } from '../../../core/services/trainee-service/trainee-service';
import { ITraineeCreate } from '../../../core/services/models/traineeModel';
import { SHARED_UI } from '../../../shared/components';

@Component({
  selector: 'app-trainee-create',
  imports: [RouterLink, ReactiveFormsModule, ...SHARED_UI],
  templateUrl: './trainee-create.html',
  styleUrl: './trainee-create.css',
})
export class TraineeCreate {
  private fb: FormBuilder = inject(FormBuilder);
  private traineeService: TraineeService = inject(TraineeService);

  loaderState:boolean = false;

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
      this.loaderState = true;
      const payload : ITraineeCreate = this.createTraineeForm.getRawValue();
      
        this.traineeService.createTrainee(payload).subscribe((res) => {
          alert("Trainee Created Successfully");
          this.createTraineeForm.reset();
        });
      this.loaderState = false;
    
    }
  }
}
