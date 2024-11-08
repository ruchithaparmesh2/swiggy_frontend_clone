import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchQuery: string = '';
  searchItems: string[] = [
    'biryani', 'pizza', 'burger', 'dosa', 'chole-bhature', 
    'north-indian', 'south-indian', 'paratha', 'pav-bhaji', 'chinese'
  ];
  filteredItems: string[] = [];

  constructor(private router: Router) {}

  // Method to update filteredItems based on search input
  onSearchInputChange() {
    this.filteredItems = this.searchItems.filter(item =>
      item.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Method to navigate to the search result route
  navigateToItem() {
    if (this.searchItems.includes(this.searchQuery.toLowerCase())) {
      this.router.navigate([`/${this.searchQuery.toLowerCase()}`]);
    }
  }
}


