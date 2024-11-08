import { Component } from '@angular/core';
import { PavBhajiComponent } from "../pav-bhaji/pav-bhaji.component";
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-biryani',
  standalone: true,
  imports: [PavBhajiComponent, HttpClientModule, CommonModule,RouterModule],
  templateUrl: './biryani.component.html',
  styleUrl: './biryani.component.css'
})
export class BiryaniComponent {
  constructor(private http: HttpClient) {}

  // Mock API endpoint URLs
  private apiUrl = 'https://672b6bc01600dda5a9f4f052.mockapi.io/cart';
  private favoriteApiUrl = 'https://672b6bc01600dda5a9f4f052.mockapi.io/fav';

  items = [
    { title: 'Tandoori Lollypop', price: 370, isAdded: false, isFavorited: false, image: 'https://www.madhuseverydayindian.com/wp-content/uploads/2022/11/easy-vegetable-biryani.jpg' },
    { title: 'Chicken Biryani', price: 370, isAdded: false, isFavorited: false, image: 'https://tse2.mm.bing.net/th?id=OIP.vXxRBDUn6oKUYCuwVti0ggHaE8&pid=Api&P=0&h=180' },
    { title: 'Chingari Paneer', price: 480, isAdded: false, isFavorited: false, image: 'https://tse1.mm.bing.net/th?id=OIP.aifT6BZPvmHhpeEy15nbDQHaFj&pid=Api&P=0&h=180' }
  ];
  
  // Method to handle the click event for adding to cart
  addToCart(item: any) {
    this.http.post(this.favoriteApiUrl, item).subscribe(
        (response) => {
          console.log('Item added to favorites:', response);
          item.isFavorited = true;  // Mark as favorited
        },
        (error) => {
          console.error('Error adding item to favorites:', error);
        }
      );
  }

  // Method to handle the click event for adding to favorites
  addToFavorites(item: any): void {
    
      this.http.post(this.favoriteApiUrl, item).subscribe(
        (response) => {
          console.log('Item added to favorites:', response);
          item.isFavorited = true;  // Mark as favorited
        },
        (error) => {
          console.error('Error adding item to favorites:', error);
        }
      );
    
  }
  
}
