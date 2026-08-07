import { Component, Input } from '@angular/core';
import { TableColumn } from './data-table-interfaces';

@Component({
  selector: 'app-data-table',
  imports: [],
  templateUrl: './data-table.html',
  styleUrl: './data-table.css',
})
export class DataTable<T> {
  @Input({required: true}) columns! : TableColumn<T>[];

  @Input({required:true}) data!: T[] | undefined;
}
