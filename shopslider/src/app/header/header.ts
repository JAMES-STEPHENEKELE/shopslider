import { NgForOf } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'app-header',
  imports: [NgForOf],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class header{
  topMenuItems: string[] = ['Help','Exchange','Order',
  'SignUp'];
  mainMenuItems: string[] = ['Home', 'Products', 'Sale', 'New-Arrivals', 'Contact'];
}