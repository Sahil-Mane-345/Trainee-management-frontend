import { Component, EventEmitter, Input, Output } from '@angular/core';
import { required } from '@angular/forms/signals';
import { RouterLinkActive, RouterLinkWithHref } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  imports: [RouterLinkActive, RouterLinkWithHref],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  @Input({required:true}) sidebarState!: boolean;

  @Output() closeSidebar = new EventEmitter();
};
