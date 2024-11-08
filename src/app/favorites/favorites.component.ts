import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit{
  favoriteItems: any[] = [];  // Renamed to 'favoriteItems' to avoid confusion

  // Mock API endpoint URL for favorites
  private favoriteUrl = 'https://672b6bc01600dda5a9f4f052.mockapi.io/fav';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>(this.favoriteUrl).subscribe(
      data => {
        console.log(data); 
        this.favoriteItems = data;  // Store fetched favorite items here
      },
      error => {
        console.error('Error fetching fav items:', error);
      }
    );
  }

  // Delete item from favorites
  deleteItem(id: string): void {
    // Remove item from local favorites array
    this.favoriteItems = this.favoriteItems.filter(item => item.id !== id);

    // Optional: Make an HTTP DELETE request to remove item from backend
    this.http.delete(`${this.favoriteUrl}/${id}`).subscribe(
      () => {
        console.log(`Item with ID ${id} deleted successfully`);
      },
      error => {
        console.error('Error deleting item:', error);
      }
    );
  }
}
