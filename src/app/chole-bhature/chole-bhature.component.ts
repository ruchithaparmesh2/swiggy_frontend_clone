import { Component } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-chole-bhature',
  standalone: true,
  imports: [HttpClientModule, CommonModule,RouterModule],
  templateUrl: './chole-bhature.component.html',
  styleUrl: './chole-bhature.component.css'
})
export class CholeBhatureComponent {
  constructor(private http: HttpClient) {}

  // Mock API endpoint URLs
  private apiUrl = 'https://672b6bc01600dda5a9f4f052.mockapi.io/cart';
  private favoriteApiUrl = 'https://672b6bc01600dda5a9f4f052.mockapi.io/fav';

  items = [
    { title: 'Ram ki Bandi Restaurant', price: 370, isAdded: false, isFavorited: false, image: 'https://tse3.mm.bing.net/th?id=OIP.pUmQnkIngDk7X1QkX7FycwHaEK&pid=Api&P=0&h=180' },
    { title: 'Santosh Dhaba', price: 150, isAdded: false, isFavorited: false, image: 'https://media.vogue.in/wp-content/uploads/2020/08/chole-bhature-recipe.jpg' },
    { title: 'Mahalaxmi Tiffins', price: 480, isAdded: false, isFavorited: false, image: 'https://static.vecteezy.com/system/resources/previews/015/933/617/non_2x/chole-bhature-is-a-north-indian-food-dish-a-combination-of-chana-masala-and-bhatura-or-puri-free-photo.jpg' }
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
