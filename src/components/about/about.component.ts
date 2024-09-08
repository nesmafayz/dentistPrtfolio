import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
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

}
