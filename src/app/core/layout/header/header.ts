import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  @Input({required:true}) toggleState!:boolean;

  @Output() toggleSidebar = new EventEmitter();
}
