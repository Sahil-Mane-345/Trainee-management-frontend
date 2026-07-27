import { Component, Input } from '@angular/core';
import { ErrorMessage } from "../error-message/error-message";
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  imports: [ErrorMessage, ReactiveFormsModule],
  templateUrl: './text-input.html',
  styleUrl: './text-input.css',
})
export class TextInput {
  @Input({required:true}) id!:string;

  @Input({required:true}) inputControl!: FormControl;

  @Input({required:true}) inputErrors!:Record<string,string>;

  @Input({required:true}) inputLabel!:string;

  @Input() inputType: "text" | "number" | "email" | "password" | "tel" = "text";

  @Input() maxLength?:number;

  @Input() placeholder?: string;

  i = 0;
  get errorId():string{
    return `${this.id}-errors`;
  }

  get shouldShowErrors():boolean{
    console.log(this.i++);
    console.log(this.inputControl.errors);
    return (this.inputControl.touched || this.inputControl.dirty) && this.inputControl.invalid;
  }

  get activeErrorMessages(): string[]{
    const errors = this.inputControl.errors;

    if(!errors){
      return [];
    }
    
    let new1 = Object.keys(errors).map(key => this.inputErrors[key]).filter((message): message is string => !!message);
    console.log(new1);
    return new1;
  }
}
