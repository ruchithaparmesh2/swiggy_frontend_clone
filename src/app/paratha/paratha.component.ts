import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-paratha',
  standalone: true,
  imports: [HttpClientModule, CommonModule,RouterModule],
  templateUrl: './paratha.component.html',
  styleUrl: './paratha.component.css'
})
export class ParathaComponent {
  constructor(private http: HttpClient) {}

  // Mock API endpoint URLs
  private apiUrl = 'https://672b6bc01600dda5a9f4f052.mockapi.io/cart';
  private favoriteApiUrl = 'https://672b6bc01600dda5a9f4f052.mockapi.io/fav';

  items = [
    { title: 'Panner Parata', price: 370, isAdded: false, isFavorited: false, image: 'https://tse3.mm.bing.net/th?id=OIP.dUWVNOoymaec9Zf0Gva3NwHaE8&pid=Api&P=0&h=180' },
    { title: 'Aloo parata', price: 150, isAdded: false, isFavorited: false, image: 'https://i0.wp.com/vegecravings.com/wp-content/uploads/2016/12/mooli-paratha-recipe-step-by-step-instructions.jpg?fit=1704,1450&quality=65&strip=all&ssl=1' },
    { title: 'Gobi Parata', price: 480, isAdded: false, isFavorited: false, image: 'https://tse3.mm.bing.net/th?id=OIP.b0p3il-5JoRIkhi1MWmjAQHaJ3&pid=Api&P=0&h=180' }
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
