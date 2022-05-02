import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-modal',
  templateUrl: './products-modal.component.html',
  styleUrls: ['./products-modal.component.css']
})
export class ProductsModalComponent implements OnInit {

  // @Input() mainImagem: any = {}
  @Input() images:Array<{src:string, alt:string}> | null = []

  constructor() { }

  ngOnInit(): void {
  }

  teste() {
    console.log('teste')
  }

}
