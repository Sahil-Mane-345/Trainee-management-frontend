import { Component, EventEmitter, Input, Output } from '@angular/core';
import { required } from '@angular/forms/signals';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  @Input({required:true}) sidebarState!: boolean;

  @Output() closeSidebar = new EventEmitter();
};
