import { Component, Input } from '@angular/core';
import { Header } from '../header/header';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from "../sidebar/sidebar";


@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Header, Sidebar],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  showSidebar:boolean = false;
  
  toggleSidebar():void {
    this.showSidebar = !this.showSidebar;
  }

  closeSidebar():void{
    this.showSidebar = false;
  }
}
