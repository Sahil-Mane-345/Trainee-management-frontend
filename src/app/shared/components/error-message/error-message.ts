import { KeyValuePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  imports: [KeyValuePipe],
  templateUrl: './error-message.html',
  styleUrl: './error-message.css',
})
export class ErrorMessage {
  @Input() control!:AbstractControl;

  @Input() id!:string;

  @Input() messages!: Record<string,string>;

  get shouldShowErrors():boolean{
    return ( this.control.invalid && (this.control.touched || this.control.dirty));
  }
}
