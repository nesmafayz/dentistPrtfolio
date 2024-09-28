import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { Router } from '@angular/router';
import{register} from 'swiper/element/bundle';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DetailsDepthComponent } from '../cases/details-depth/details-depth.component';


register();

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,DetailsDepthComponent],
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
    { id: 1, image: '../../assets/images/cases/dd3.jpg', title: 'Inderict Biomimetic', description: 'This is the first card',
      cases: [
        { id: 1, image: '../../../assets/images/case1.jpg', title: 'Case 1 for Indirect Biomimetic', description: 'Description for Case 1' },
        { id: 2, image: '../../../assets/images/case2.jpg', title: 'Case 2 for Indirect Biomimetic', description: 'Description for Case 2' },
      ]
     },
    { id: 2, image: '../../assets/images/cases/dd7.jpg', title: 'Conventional post.Crown', description: 'This is the first card',
      cases: [
        { id: 3, image: '../../../assets/images/case1.jpg', title: 'Case 1 for Indirect Biomimetic', description: 'Description for Case 1' },
        { id: 4, image: '../../../assets/images/case2.jpg', title: 'Case 2 for Indirect Biomimetic', description: 'Description for Case 2' },
      ]
     },
    { id: 3, image: '../../assets/images/cases/dd5.jpg', title: 'Direct Posterior', description: 'This is the first card',
      cases: [
        { id: 5, image: '../../../assets/images/case1.jpg', title: 'Case 1 for Indirect Biomimetic', description: 'Description for Case 1' },
        { id: 6, image: '../../../assets/images/case2.jpg', title: 'Case 2 for Indirect Biomimetic', description: 'Description for Case 2' },
      ]
     },
    { id: 4, image: '../../assets/images/cases/dd6.jpg', title: 'Direct Anterior', description: 'This is the first card',
      cases: [
        { id: 7, image: '../../../assets/images/case1.jpg', title: 'Case 1 for Indirect Biomimetic', description: 'Description for Case 1' },
        { id: 8, image: '../../../assets/images/case2.jpg', title: 'Case 2 for Indirect Biomimetic', description: 'Description for Case 2' },
      ]
     },
    { id: 5, image: '../../assets/images/cases/dd4.jpg', title: 'Inderict Anterior', description: 'This is the first card',
      cases: [
        { id: 9, image: '../../../assets/images/case1.jpg', title: 'Case 1 for Indirect Biomimetic', description: 'Description for Case 1' },
        { id: 10, image: '../../../assets/images/case2.jpg', title: 'Case 2 for Indirect Biomimetic', description: 'Description for Case 2' },
      ]
     },
    { id: 6, image: '../../assets/images/cases/dd2.jpg', title: 'Minimally Invasive', description: 'This is the first card',
      cases: [
        { id: 11, image: '../../../assets/images/case1.jpg', title: 'Case 1 for Indirect Biomimetic', description: 'Description for Case 1' },
        { id: 12, image: '../../../assets/images/case2.jpg', title: 'Case 2 for Indirect Biomimetic', description: 'Description for Case 2' },
      ]
     },
    { id: 7, image: '../../assets/images/cases/dd1.jpg', title: 'Endodontic', description: 'This is the second card',
      cases: [
        { id: 13, image: '../../../assets/images/case1.jpg', title: 'Case 1 for Indirect Biomimetic', description: 'Description for Case 1' },
        { id: 14, image: '../../../assets/images/case2.jpg', title: 'Case 2 for Indirect Biomimetic', description: 'Description for Case 2' },
      ]
     }
  ];

  breakpoints = {
    0: { slidesPerView: 1.5, spaceBetween: 30 },
    768: { slidesPerView: 4.7, spaceBetween: 100 }
  };


  constructor(private router: Router) {}

  goToCases(id:number) {
    this.router.navigate(['/details-depth',id]); 
  }

}
