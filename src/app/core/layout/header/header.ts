import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  private router:Router = inject(Router);

  @Input({required:true}) toggleState!:boolean;

  @Output() toggleSidebar = new EventEmitter();

  logOut():void{
    if(localStorage.getItem("authToken")){
      localStorage.removeItem("authToken");
    }
    this.router.navigate(["/auth/login"]);
  }
}
