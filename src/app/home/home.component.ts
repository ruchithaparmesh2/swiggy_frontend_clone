import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from '../navbar/navbar.component'
import {SearchComponent} from '../search/search.component'
import {FoodOptionsComponent} from '../food-options/food-options.component'
import { InstamartComponent } from '../instamart/instamart.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RescardsComponent } from '../rescards/rescards.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,SearchComponent,FooterComponent,FoodOptionsComponent,InstamartComponent,RouterModule,RescardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
