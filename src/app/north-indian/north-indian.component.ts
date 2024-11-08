import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-north-indian',
  standalone: true,
  imports: [HttpClientModule, CommonModule,RouterModule],
  templateUrl: './north-indian.component.html',
  styleUrl: './north-indian.component.css'
})
export class NorthIndianComponent {
  constructor(private http: HttpClient) {}

  // Mock API endpoint URLs
  private apiUrl = 'https://672b6bc01600dda5a9f4f052.mockapi.io/cart';
  private favoriteApiUrl = 'https://672b6bc01600dda5a9f4f052.mockapi.io/fav';

  items = [
    { title: 'Roti Sabzi', price: 370, isAdded: false, isFavorited: false, image: 'https://images.prabhasakshi.com/2022/2/should-we-reduce-rice-and-roti_large_1257_124.jpeg' },
    { title: 'Rajma Chaval', price: 150, isAdded: false, isFavorited: false, image: 'https://tse2.mm.bing.net/th?id=OIP.O9YvUfQCJM5CehCrYwpm3AHaEK&pid=Api&P=0&h=180' },
    { title: 'CholeBhature', price: 480, isAdded: false, isFavorited: false, image: 'https://2.bp.blogspot.com/-OU_L_dlS_G0/Wx9rVpMKeVI/AAAAAAAAAEE/lL6pyCPBVoQkBxbpYZg9wRt6-Lce51C7ACLcBGAs/s1600/imperial%2Binn.jpg' }
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
