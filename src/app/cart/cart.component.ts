import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  // Mapping of item titles to image URLs
  titleToImageMap: { [key: string]: string } = {
    'Tandoori Lollypop': 'https://tse4.mm.bing.net/th?id=OIP.vqZaS4O_D8smJ26c6saFDwHaHa&pid=Api&P=0&h=180',
    'Chicken Biryani': 'https://tse4.mm.bing.net/th?id=OIP.vqZaS4O_D8smJ26c6saFDwHaHa&pid=Api&P=0&h=180',
    'Chingari Paneer': 'https://tse4.mm.bing.net/th?id=OIP.vqZaS4O_D8smJ26c6saFDwHaHa&pid=Api&P=0&h=180'
  };

  // Mock API endpoint URL
  private apiUrl = 'https://672b6bc01600dda5a9f4f052.mockapi.io/cart';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      data => {
        console.log(data); 
        this.cartItems = data;
      },
      error => {
        console.error('Error fetching cart items:', error);
      }
    );
  }

  // Get image URL based on item title
  getImageUrl(title: string): string {
    return this.titleToImageMap[title] || 'https://tse4.mm.bing.net/th?id=OIP.vqZaS4O_D8smJ26c6saFDwHaHa&pid=Api&P=0&h=180'; // Use a default image if title is not found
  }

  // Delete item from cart
  deleteItem(id: string): void {
    this.cartItems = this.cartItems.filter(item => item.id !== id);

    this.http.delete(`${this.apiUrl}/${id}`).subscribe(
      () => {
        console.log(`Item with ID ${id} deleted successfully`);
      },
      error => {
        console.error('Error deleting item:', error);
      }
    );
  }
}
