import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { FoodOptionsComponent } from '../food-options/food-options.component';
import { InstamartComponent } from '../instamart/instamart.component';
import { FooterComponent } from '../footer/footer.component';
import { RescardsComponent } from '../rescards/rescards.component';



@Component({
  selector: 'app-after',
  standalone: true,
  imports: [RouterModule,SearchComponent,FoodOptionsComponent,InstamartComponent,FooterComponent,RescardsComponent],
  templateUrl: './after.component.html',
  styleUrl: './after.component.css'
})
export class AfterComponent {

}
