import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dosa',
  standalone: true,
  imports: [HttpClientModule, CommonModule,RouterModule],
  templateUrl: './dosa.component.html',
  styleUrl: './dosa.component.css'
})
export class DosaComponent {
  constructor(private http: HttpClient) {}

  // Mock API endpoint URLs
  private apiUrl = 'https://672b6bc01600dda5a9f4f052.mockapi.io/cart';
  private favoriteApiUrl = 'https://672b6bc01600dda5a9f4f052.mockapi.io/fav';

  items = [
    { title: 'Ram ki Bandi Restaurant', price: 370, isAdded: false, isFavorited: false, image: 'https://tse2.mm.bing.net/th?id=OIP.te84WPFXWhpXTbfc7UJ2DgHaEf&pid=Api&P=0&h=180' },
    { title: 'Santosh Dhaba', price: 150, isAdded: false, isFavorited: false, image: 'https://i1.wp.com/www.evergreendishes.com/wp-content/uploads/2019/10/Dosa-1.jpg?fit=4288%2C2848&ssl=1' },
    { title: 'Mahalaxmi Tiffins', price: 480, isAdded: false, isFavorited: false, image: 'https://i.pinimg.com/originals/99/40/72/9940727be218793f5de3450a6cc9cd14.jpg' }
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
