import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
    @Input() type: 'button' | 'submit' = "button";

    @Input() disabled: boolean = false;

    @Output() action = new EventEmitter<void>();

    onClick():void {
      this.action.emit();
    }
}
