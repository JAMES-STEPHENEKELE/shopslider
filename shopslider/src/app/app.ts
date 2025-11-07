import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { header } from './header/header';
import { TopHeader } from './top-header/top-header';
import { MainContainer} from './mainContainer/maincontainer';



@Component({
  selector: 'app-root',
  imports: [header,TopHeader, MainContainer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('shopslider');
}