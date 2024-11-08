import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-pav-bhaji',
  standalone: true,
  imports: [HttpClientModule, CommonModule,RouterModule],
  templateUrl: './pav-bhaji.component.html',
  styleUrl: './pav-bhaji.component.css'
})
export class PavBhajiComponent {
  constructor(private http: HttpClient) {}

  // Mock API endpoint URLs
  private apiUrl = 'https://672b6bc01600dda5a9f4f052.mockapi.io/cart';
  private favoriteApiUrl = 'https://672b6bc01600dda5a9f4f052.mockapi.io/fav';

  items = [
    { title: 'Shankar hotel', price: 100, isAdded: false, isFavorited: false, image: 'https://fitelo.co/wp-content/uploads/elementor/thumbs/Pav-Bhaji-1-p10mrpsol6m0k06409eo26o7t99l954hcfm9lpf18w.jpg' },
    { title: 'Raja Dhaba', price: 150, isAdded: false, isFavorited: false, image: 'https://i1.wp.com/polkapuffs.in/wp-content/uploads/2015/07/Mumbai-Pav-Bhaji-final-2.jpeg' },
    { title: 'Hero Tiifins', price: 80, isAdded: false, isFavorited: false, image: 'https://img.freepik.com/premium-photo/mumbai-style-pav-bhaji-is-fast-food-dish-from-india-consists-thick-vegetable-curry-served-with-soft-bread-roll-served-plate_466689-2229.jpg' }
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
