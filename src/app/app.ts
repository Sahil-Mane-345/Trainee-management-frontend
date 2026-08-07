import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SHARED_UI } from './shared/components';

export interface SelectOption {
  label: string,
  value: string
};

@Component({
  selector: 'app-root',
  imports: [...SHARED_UI, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
