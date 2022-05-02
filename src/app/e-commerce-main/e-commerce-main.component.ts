import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-commerce-main',
  templateUrl: './e-commerce-main.component.html',
  styleUrls: ['./e-commerce-main.component.css']
})
export class ECommerceMainComponent implements OnInit {

  images = [
    {
      src:'../../assets/images/image-product-1.jpg',
      alt: 'img product'
    },

    {
      src:'../../assets/images/image-product-1-thumbnail.jpg',
      alt: 'img product'
    },
    {
      src:'../../assets/images/image-product-2-thumbnail.jpg',
      alt:'img product'
    }, 
    {
      src:'../../assets/images/image-product-3-thumbnail.jpg',
      alt:'img product'
    },
    {
      src:'../../assets/images/image-product-4-thumbnail.jpg',
      alt:'img product'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
