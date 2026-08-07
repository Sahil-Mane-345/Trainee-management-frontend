import { Component, inject, OnInit, signal } from '@angular/core';
import { TraineeService } from '../../../core/services/trainee-service/trainee-service';
import { ITrainee, ITraineeGetAllPayload } from '../../../core/services/models/traineeModel';
import { TableColumn } from '../../../shared/components/data-table/data-table-interfaces';
import { DataTable } from "../../../shared/components/data-table/data-table";
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-trainee-list',
  imports: [DataTable, RouterLink],
  templateUrl: './trainee-list.html',
  styleUrl: './trainee-list.css',
})
export class TraineeList implements OnInit {
  private traineeService: TraineeService = inject(TraineeService);

  columns:TableColumn<ITrainee>[] = [
    { key: 'id', label: 'Id'},
    { key: 'firstName', label: 'First Name'},
    { key: 'lastName', label: 'Last Name'},
    { key: 'email', label: 'Email'},
    { key: 'techStack', label: 'Tech Stack'},
    { key: 'status', label: 'Status'},
    { key: 'createdAt', label: 'Created At'},
    { key: 'updatedAt', label: 'Updated At'}
  ];

  traineeData = signal<ITrainee[] | undefined>(undefined);

  ngOnInit(): void {
    const payload: ITraineeGetAllPayload = {
      search: "",
      status: "",
      pageNumber: 0,
      pageSize: 0
    }
    this.traineeService.getAllTrainee(payload).subscribe((next)=> {
      console.log(next.data);
      this.traineeData.set(next?.data?.data); 
    });
  }

}
