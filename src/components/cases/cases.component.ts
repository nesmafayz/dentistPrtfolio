import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsDepthComponent } from './details-depth/details-depth.component';

@Component({
  selector: 'app-cases',
  standalone: true,
  imports: [CommonModule,DetailsDepthComponent],
  templateUrl: './cases.component.html',
  styleUrl: './cases.component.css'
})
export class CasesComponent {
  cards = [
    { id: 1, image: '../../assets/images/cases/dd3.jpg', title: 'Inderict Biomimetic', description: 'This is the first card' },
    { id: 2, image: '../../assets/images/cases/dd7.jpg', title: 'Conventional post.Crown', description: 'This is the first card' },
    { id: 3, image: '../../assets/images/cases/dd5.jpg', title: 'Direct Posterior', description: 'This is the first card' },
    { id: 4, image: '../../assets/images/cases/dd6.jpg', title: 'Direct Anterior', description: 'This is the first card' },
    { id: 5, image: '../../assets/images/cases/dd4.jpg', title: 'Inderict Anterior', description: 'This is the first card' },
    { id: 6, image: '../../assets/images/cases/dd2.jpg', title: 'Minimally Invasive', description: 'This is the first card' },
    { id: 7, image: '../../assets/images/cases/dd1.jpg', title: 'Endodontic', description: 'This is the second card' }
  ];

  constructor(private router: Router) {}

  navigateToDetails(card: any) {
    this.router.navigate(['/details-depth', card.id]);
  }

}
