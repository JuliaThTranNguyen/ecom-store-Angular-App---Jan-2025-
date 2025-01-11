import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit {
 @Input() fullWidthMode: boolean = false;
 
constructor() {}  
ngOnInit(): void {}
}