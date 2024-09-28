import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-depth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-depth.component.html',
  styleUrl: './details-depth.component.css'
})
export class DetailsDepthComponent {
  cards = [
    {
      id: 1,
      image: '../../../assets/images/case1.jpg',
      title: 'Case 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    {
      id: 2,
      image: '../../../assets/images/case2.jpg',
      title: 'Case 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      image: '../../../assets/images/case3.jpg',
      title: 'Case 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
      id: 4,
      image: '../../../assets/images/case4.jpg',
      title: 'Case 4',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
    },
    {
      id: 5,
      image: '../../../assets/images/case5.jpg',
      title: 'Case 5',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
    },
  ];

  goToCaseDetail(card: any) {
    this.router.navigate(['/cases-details', card.id]);
  }

  constructor(private router: Router) {}

}
