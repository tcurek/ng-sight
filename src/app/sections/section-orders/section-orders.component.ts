import { Component, OnInit } from '@angular/core';
import { Order } from '../../Models/Orders';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    {id:1, customer:{id:1, name:'Tim', email:'Tim@gmail.com', state: 'PA'}, total:1, placed: new Date(2019, 12, 1), fulfilled: new Date(2019, 12, 5), status: 'Completed'},
    {id:2, customer:{id:2, name:'Matt', email:'Matt@gmail.com', state: 'CA'}, total:11, placed: new Date(2019, 11, 1), fulfilled: new Date(2019, 12, 5), status: 'Completed'},
    {id:3, customer:{id:3, name:'Bob', email:'Bob@gmail.com', state: 'NY'}, total:5, placed: new Date(2019, 10, 1), fulfilled: new Date(2019, 12, 5), status: 'Completed'},
    {id:4, customer:{id:4, name:'Steffi', email:'Steffi@gmail.com', state: 'MI'}, total:6, placed: new Date(2019, 9, 1), fulfilled: new Date(2019, 12, 5), status: 'Completed'},
    {id:5, customer:{id:5, name:'John', email:'John@gmail.com', state: 'CO'}, total:16, placed: new Date(2019, 12, 7), fulfilled: new Date(2019, 12, 5), status: 'Completed'},
    {id:6, customer:{id:6, name:'Aaron', email:'Aaron@gmail.com', state: 'FL'}, total:14, placed: new Date(2019, 3, 1), fulfilled: new Date(2019, 12, 5), status: 'Completed'},
    {id:7, customer:{id:7, name:'Loe', email:'Loe@gmail.com', state: 'TX'}, total:12, placed: new Date(2019, 12, 1), fulfilled: new Date(2019, 12, 5), status: 'Completed'},
    {id:8, customer:{id:8, name:'Goku', email:'Goku@gmail.com', state: 'KA'}, total:8, placed: new Date(2019, 12, 1), fulfilled: new Date(2019, 12, 5), status: 'Completed'}
  ];

  ngOnInit() {
  }

}
