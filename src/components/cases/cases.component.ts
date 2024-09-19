import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cases',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cases.component.html',
  styleUrl: './cases.component.css'
})
export class CasesComponent {
  cards = [
    { id: 1, image: '../../assets/images/cases/c1.jpg', title: 'Card 1', description: 'This is the first card' },
    { id: 2, image: '../../assets/images/cases/c2.jpg', title: 'Card 2', description: 'This is the first card' },
    { id: 3, image: '../../assets/images/cases/c3.jpg', title: 'Card 3', description: 'This is the first card' },
    { id: 4, image: '../../assets/images/cases/c4.jpg', title: 'Card 4', description: 'This is the first card' },
    { id: 5, image: '../../assets/images/cases/c5.jpg', title: 'Card 5', description: 'This is the first card' },
    { id: 6, image: '../../assets/images/cases/c6.jpg', title: 'Card 6', description: 'This is the first card' },
    { id: 7, image: '../../assets/images/cases/c7.jpg', title: 'Card 7', description: 'This is the second card' }
  ];

  constructor(private router: Router) {}

  navigateToDetails(card: any) {
    this.router.navigate(['/cases-details', card.id]);
  }

}
