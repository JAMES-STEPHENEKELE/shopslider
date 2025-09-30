import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('shopslider');
}