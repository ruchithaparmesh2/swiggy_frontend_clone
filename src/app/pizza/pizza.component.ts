import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-pizza',
  standalone: true,
  imports: [HttpClientModule, CommonModule,RouterModule],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.css'
})
export class PizzaComponent {
  constructor(private http: HttpClient) {}

  // Mock API endpoint URLs
  private apiUrl = 'https://672b6bc01600dda5a9f4f052.mockapi.io/cart';
  private favoriteApiUrl = 'https://672b6bc01600dda5a9f4f052.mockapi.io/fav';

  items = [
    { title: 'Panner Pizza', price: 370, isAdded: false, isFavorited: false, image: 'https://tse1.mm.bing.net/th?id=OIP.2dhr5Ln6cMHIu9SmwE_uBgHaE7&pid=Api&P=0&h=180' },
    { title: 'Chicken Pizza', price: 150, isAdded: false, isFavorited: false, image: 'https://tse3.mm.bing.net/th?id=OIP.YKn0QOkg9GvS2_bIHIJWpgHaEx&pid=Api&P=0&h=180' },
    { title: 'Volcono Pizza', price: 480, isAdded: false, isFavorited: false, image: 'https://tse4.mm.bing.net/th?id=OIP.njfFzcygAaV7rkkKOcBvTAHaD4&pid=Api&P=0&h=180' }
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
