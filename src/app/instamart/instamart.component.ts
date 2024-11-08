import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instamart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instamart.component.html',
  styleUrl: './instamart.component.css'
})
export class InstamartComponent {
  items = [
    { image: 'http://purepng.com/public/uploads/large/purepng.com-vegetablespotatocarrotbowlvegetable-961524597258qqcas.png', name: 'Vegetables' },
    { image: 'https://tse3.mm.bing.net/th?id=OIP.5lHAO0NBarXqyR_qpHd9rgHaHa&pid=Api&P=0&h=180', name: 'Fruits' },
    { image: 'https://www.jocooks.com/wp-content/uploads/2020/03/white-bread-1.jpg', name: 'Bread' },
    { image: 'https://tse2.mm.bing.net/th?id=OIP.OaxDs5qu-A323gIb2ZpUngHaG7&pid=Api&P=0&h=180', name: 'Spices' },
    { image: 'https://i5.walmartimages.com/asr/fab05394-7ef1-4653-aab5-0a5d087264ea.8f48bf68fd77ed12bd2236011234bd6c.jpeg', name: 'Chips' },
    { image: 'https://tse2.mm.bing.net/th?id=OIP.nT0_j2wdtNdnuyFMbgSv5QHaIx&pid=Api&P=0&h=180', name: 'Juice' },
    { image: 'https://tse3.mm.bing.net/th?id=OIP.a1aUvl3Yy6EOk1A5agnhVwHaGd&pid=Api&P=0&h=180', name: 'Biscuits' },
    // Add more items as needed
  ];
}
