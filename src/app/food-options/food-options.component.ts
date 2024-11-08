import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-options.component.html',
  styleUrl: './food-options.component.css'
})
export class FoodOptionsComponent {
  foodItems = [
    { name: 'North Indian', image: 'https://www.foodbylalita.com/wp-content/uploads/2021/05/aca0cc00-aa90-4bf3-8c39-f39d67859d3f.jpeg', route: '/north-indian' },
    { name: 'Biryani', image: 'https://5.imimg.com/data5/SELLER/Default/2022/6/CO/PS/WD/88425674/biryani-handi-serveware-stainless-steel-biryani-handi-hotel-ware-for-ser-ving-dish-biryani-bowl-1000x1000.jpg', route: '/biryani' },
    { name: 'Pizza', image: 'https://tse4.mm.bing.net/th?id=OIP.YCXNIX971ixAhZwz46AcAwHaHg&pid=Api&P=0&h=180', route: '/pizza' },
    { name: 'Chole Bhature', image: 'https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/07/12135352/chole-bhature.jpg', route: '/chole-bhature' },
    { name: 'Chinese', image: 'https://tse1.mm.bing.net/th?id=OIP.LxBvAnQt_KDI6fIGtLSpegAAAA&pid=Api&P=0&h=180', route: '/chinese' },
    { name: 'Burger', image: 'https://tse2.mm.bing.net/th?id=OIP.JIM4hSPw19HzGjD4nqN6twHaHa&pid=Api&P=0&h=180', route: '/burger' },
    { name: 'Dosa', image: 'https://i.pinimg.com/originals/99/40/72/9940727be218793f5de3450a6cc9cd14.jpg', route: '/dosa' },
    { name: 'Paratha', image: 'https://tse1.mm.bing.net/th?id=OIP.5m6Uub0Uvnukqzc30E1XUgHaHa&pid=Api&P=0&h=180', route: '/paratha' },
    { name: 'South Indian', image: 'https://d1oh9y2nmj4y5b.cloudfront.net/uploads/photo/filename/7580/Authentic_South_Indian_Meal_Served_for_guests.jpg', route: '/south-indian' },
    { name: 'Pav Bhaji', image: 'https://tse2.mm.bing.net/th?id=OIP.ug7S-Sr_UPyUtXFvvnkzKAHaHa&pid=Api&P=0&h=180', route: '/pav-bhaji' },
  ];
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
