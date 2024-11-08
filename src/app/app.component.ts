import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component'
import {SearchComponent} from './search/search.component'
import {FoodOptionsComponent} from './food-options/food-options.component'
import { InstamartComponent } from './instamart/instamart.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,SearchComponent,FoodOptionsComponent,InstamartComponent,FavoritesComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
}

