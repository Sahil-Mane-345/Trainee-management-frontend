import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ErrorMessage } from "../error-message/error-message";

export interface SelectOption {
  label: string,
  value: string
};

@Component({
  selector: 'app-select-input',
  imports: [ReactiveFormsModule, ErrorMessage],
  templateUrl: './select-input.html',
  styleUrl: './select-input.css',
})
export class SelectInput {
  @Input({ required: true })
  id!: string;

  @Input({ required: true })
  inputLabel!: string;

  @Input({ required: true })
  inputControl!: FormControl;

  @Input({ required: true })
  options!: SelectOption[];

  @Input()
  inputErrors: Record<string, string> = {};

  @Input()
  placeholder = 'Select an option';

  get errorId(): string {
    return `${this.id}-errors`;
  }

  get shouldShowErrors(): boolean {
    return (
      this.inputControl.invalid &&
      (this.inputControl.touched || this.inputControl.dirty)
    );
  }

  get activeErrorMessages(): string[] {
    const errors = this.inputControl.errors;

    if (!errors) {
      return [];
    }

    return Object.keys(errors)
      .map(key => this.inputErrors[key])
      .filter((message): message is string => !!message);
  }

}
