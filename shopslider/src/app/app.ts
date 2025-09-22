import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { container } from "./containter/container";

@Component({
  selector: 'app-root',
  imports: [ container],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('shopslider');
}
