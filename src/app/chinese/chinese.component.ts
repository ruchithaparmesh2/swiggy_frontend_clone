import { Component } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core'; 

@Component({
  selector: 'app-chinese',
  standalone: true,
  imports: [HttpClientModule, CommonModule,RouterModule],
  templateUrl: './chinese.component.html',
  styleUrl: './chinese.component.css'
})
export class ChineseComponent {
  constructor(private http: HttpClient) {}

  // Mock API endpoint URLs
  private apiUrl = 'https://672b6bc01600dda5a9f4f052.mockapi.io/cart';
  private favoriteApiUrl = 'https://672b6bc01600dda5a9f4f052.mockapi.io/fav';

  items = [
    { title: 'Veg Hakka Noodles', price: 370, isAdded: false, isFavorited: false, image: 'https://life-in-the-lofthouse.com/wp-content/uploads/2019/04/Easy-Thai-Noodles-700x1024.jpg' },
    { title: 'Manchurian', price: 370, isAdded: false, isFavorited: false, image: 'https://tse2.mm.bing.net/th?id=OIP.4LHFAsXkUNSso2BxEKCLlQHaE6&pid=Api&P=0&h=180' },
    { title: 'Chickhen Pasta', price: 480, isAdded: false, isFavorited: false, image: 'https://tse4.mm.bing.net/th?id=OIP.3qiOYdcpu2jl8G9ln1phLgHaE8&pid=Api&P=0&h=180' }
  ];
  
  // Method to handle the click event for adding to cart
  addToCart(item: any) {
    item.isAdded = !item.isAdded; 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // Send the data to the mock API
    this.http.post(this.apiUrl, item, { headers }).subscribe(
      response => {
        console.log('Item added to cart:', response);
      },
      error => {
        console.error('Error adding item to cart:', error);
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
