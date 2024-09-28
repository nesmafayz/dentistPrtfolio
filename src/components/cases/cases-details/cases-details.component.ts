import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DetailsDepthComponent } from '../details-depth/details-depth.component';

@Component({
  selector: 'app-cases-details',
  standalone: true,
  imports: [CommonModule,DetailsDepthComponent,RouterLink],
  templateUrl: './cases-details.component.html',
  styleUrl: './cases-details.component.css'
})
export class CasesDetailsComponent implements OnInit {
  card: any;


  cards = [
    { id: 1, image: '../../../assets/images/case1.jpg', title: 'Card 1', description: 'Indirect anterior', images: [
        {url: '../../assets/images/case1.jpg', text: 'Description of image 1'},
        {url: '../../assets/images/case1.jpg', text: 'Description of image 2'}
      ]
    },
    { id: 2, image: '../../../assets/images/case2.jpg', title: 'Card 1', description: 'Indirect anterior', images: [
      {url: '../../assets/images/case1.jpg', text: 'Description of image 1'},
      {url: '../../assets/images/case1.jpg', text: 'Description of image 2'}
    ]
  },
  { id: 3, image: '../../../assets/images/case3.jpg', title: 'Card 1', description: 'Indirect anterior', images: [
    {url: '../../assets/images/case1.jpg', text: 'Description of image 1'},
    {url: '../../assets/images/case1.jpg', text: 'Description of image 2'}
  ]
},
{ id: 4, image: '../../../assets/images/case4.jpg', title: 'Card 1', description: 'Indirect anterior', images: [
  {url: '../../assets/images/case1.jpg', text: 'Description of image 1'},
  {url: '../../assets/images/case1.jpg', text: 'Description of image 2'}
]
},
{ id: 5, image: '../../../assets/images/case5.jpg', title: 'Card 1', description: 'Indirect anterior', images: [
  {url: '../../assets/images/case1.jpg', text: 'Description of image 1'},
  {url: '../../assets/images/case1.jpg', text: 'Description of image 2'}
]
},
{ id: 6, image: '../../../assets/images/case4.jpg', title: 'Card 1', description: 'Indirect anterior', images: [
  {url: '../../assets/images/case1.jpg', text: 'Description of image 1'},
  {url: '../../assets/images/case1.jpg', text: 'Description of image 2'}
]
},


    { id: 7, image: '../../../assets/images/case1.jpg', title: 'Card 2', description: 'Direct anterior restorations', images: [
        {url: 'assets/images/img3.jpg', text: 'Description of image 3'},
        {url: 'assets/images/img4.jpg', text: 'Description of image 4'}
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      this.card = this.cards.find(card => card.id === id);
    });
  }

}
