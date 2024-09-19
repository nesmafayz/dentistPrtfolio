import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cases-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cases-details.component.html',
  styleUrl: './cases-details.component.css'
})
export class CasesDetailsComponent implements OnInit {
  card: any;

  // بيانات مؤقتة للاختبار، يمكنك تعديلها حسب الحاجة
  cards = [
    { id: 1, image: '../../assets/images/cases/c1.jpg', title: 'Card 1', description: 'Indirect anterior', images: [
        {url: '../../assets/images/case1.jpg', text: 'Description of image 1'},
        {url: '../../assets/images/case1.jpg', text: 'Description of image 2'}
      ]
    },
    { id: 1, image: '../../assets/images/cases/c2.jpg', title: 'Card 1', description: 'Indirect anterior', images: [
      {url: '../../assets/images/case1.jpg', text: 'Description of image 1'},
      {url: '../../assets/images/case1.jpg', text: 'Description of image 2'}
    ]
  },
  { id: 1, image: '../../assets/images/cases/c3.jpg', title: 'Card 1', description: 'Indirect anterior', images: [
    {url: '../../assets/images/case1.jpg', text: 'Description of image 1'},
    {url: '../../assets/images/case1.jpg', text: 'Description of image 2'}
  ]
},
{ id: 1, image: '../../assets/images/cases/c4.jpg', title: 'Card 1', description: 'Indirect anterior', images: [
  {url: '../../assets/images/case1.jpg', text: 'Description of image 1'},
  {url: '../../assets/images/case1.jpg', text: 'Description of image 2'}
]
},
{ id: 1, image: '../../assets/images/cases/c5.jpg', title: 'Card 1', description: 'Indirect anterior', images: [
  {url: '../../assets/images/case1.jpg', text: 'Description of image 1'},
  {url: '../../assets/images/case1.jpg', text: 'Description of image 2'}
]
},
{ id: 1, image: '../../assets/images/cases/c6.jpg', title: 'Card 1', description: 'Indirect anterior', images: [
  {url: '../../assets/images/case1.jpg', text: 'Description of image 1'},
  {url: '../../assets/images/case1.jpg', text: 'Description of image 2'}
]
},


    { id: 2, image: '../../assets/images/cases/c7.jpg', title: 'Card 2', description: 'Direct anterior restorations', images: [
        {url: 'assets/images/img3.jpg', text: 'Description of image 3'},
        {url: 'assets/images/img4.jpg', text: 'Description of image 4'}
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.card = this.cards.find(card => card.id === id);
  }

}
