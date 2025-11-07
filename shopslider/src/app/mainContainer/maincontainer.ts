import { Component } from '@angular/core';
import { SearchBox } from './search-box/search-box';
import { Productlist } from './productlist/productlist';


@Component({
  selector: 'app-maincontainer',
  imports: [SearchBox,Productlist],
  templateUrl: './maincontainer.html',
  styleUrl: './maincontainer.css'
})
export class Maincontainer {
//   name = 'product'
//   addToStore: number = 0
//   product = {name: 'iPhone 13',
//   price: 999,
//   color: 'black',
//   discount : 15,
//   inStock: 20,
//   newImage: '/Assets/image/redGrown.png'
// }
//   getDiscountedPrice(){
//     return this.product.price -(this.product.price * this.product.discount / 100)
//   }
// onChangeName(event: any){
//   this.name = event.target.value;
// }

// decrementStore(){
//   if(this.addToStore > 0){
//     this.addToStore--;
//   }
// }
// incrementStore(){
//   if(this.addToStore < this.product.inStock){
//   this.addToStore++;
//   }
// }

}
