import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'search-box',
  imports: [FormsModule],
  templateUrl: './search-box.html',
  styleUrl: './search-box.css'
})
export class SearchBox {
  searchItem: string = "";

  updateSearchItem(event: any){
    this.searchItem = event.target.value
  }
}
