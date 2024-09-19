import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { Router } from '@angular/router';
import{register} from 'swiper/element/bundle';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


register();

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AboutComponent implements OnInit {


  
  ngOnInit() {
    const options = {
      strings: ['Welcome to My <span style="color: #09c;">Portfolio</span>',  'Keep It <span style="color: #09c;">Natural</span>'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };

    const typed = new Typed('#typed-output', options);
  }


  cards = [
    { id: 1, image: '../../assets/images/cases/c1.jpg', title: 'Card 1', description: 'This is the first card' },
    { id: 2, image: '../../assets/images/cases/c2.jpg', title: 'Card 2', description: 'This is the first card' },
    { id: 3, image: '../../assets/images/cases/c3.jpg', title: 'Card 3', description: 'This is the first card' },
    { id: 4, image: '../../assets/images/cases/c4.jpg', title: 'Card 4', description: 'This is the first card' },
    { id: 5, image: '../../assets/images/cases/c5.jpg', title: 'Card 5', description: 'This is the first card' },
    { id: 6, image: '../../assets/images/cases/c6.jpg', title: 'Card 6', description: 'This is the first card' },
    { id: 7, image: '../../assets/images/cases/c7.jpg', title: 'Card 7', description: 'This is the second card' }
  ];

  breakpoints = {
    0: { slidesPerView: 1.5, spaceBetween: 25 },
    768: { slidesPerView: 4, spaceBetween: 90 }
  };


  constructor(private router: Router) {}

  goToCases() {
    this.router.navigate(['/cases']); 
  }

}
