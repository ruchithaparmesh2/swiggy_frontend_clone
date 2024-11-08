import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';




// Import your components here
import { NorthIndianComponent } from './app/north-indian/north-indian.component';
import { BiryaniComponent } from './app/biryani/biryani.component';
import { PizzaComponent } from './app/pizza/pizza.component';
import { CholeBhatureComponent } from './app/chole-bhature/chole-bhature.component';
import { ChineseComponent } from './app/chinese/chinese.component';
import { BurgerComponent } from './app/burger/burger.component';
import { DosaComponent } from './app/dosa/dosa.component';
import { ParathaComponent } from './app/paratha/paratha.component';
import { SouthIndianComponent } from './app/south-indian/south-indian.component';
import { PavBhajiComponent } from './app/pav-bhaji/pav-bhaji.component';
import { HomeComponent } from './app/home/home.component';
import { CartComponent } from './app/cart/cart.component';
import { FavoritesComponent } from './app/favorites/favorites.component';
import { SingupComponent } from './app/singup/singup.component';
import { AfterComponent } from './app/after/after.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'cart', component:CartComponent},
  { path: 'favorite', component: FavoritesComponent },
{path:'singup' , component:SingupComponent},
{path:'after',component:AfterComponent},
  
  { path: 'north-indian', component: NorthIndianComponent },
  { path: 'biryani', component: BiryaniComponent },
  { path: 'pizza', component: PizzaComponent },
  { path: 'chole-bhature', component: CholeBhatureComponent },
  { path: 'chinese', component: ChineseComponent },
  { path: 'burger', component: BurgerComponent },
  { path: 'dosa', component: DosaComponent },
  { path: 'paratha', component: ParathaComponent },
  { path: 'south-indian', component: SouthIndianComponent },
  { path: 'pav-bhaji', component: PavBhajiComponent },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // Set up the router with the routes
  ]
}).catch(err => console.error(err));
