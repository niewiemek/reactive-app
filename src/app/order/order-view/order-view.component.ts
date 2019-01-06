import { Component, OnInit } from '@angular/core';
import { Order, OrdersService } from 'src/app/core/rest/orders.service';

@Component({
  selector   : 'app-order-view',
  templateUrl: './order-view.component.html',
})
export class OrderViewComponent implements OnInit {

  orders: Order[] = [];

  constructor(private ordersService: OrdersService) {
  }

  ngOnInit() {
    // const ordersSubject = new BehaviorSubject<Order[]>([]);
    const orders$ = this.ordersService.stream();
    orders$.subscribe(o => {
      this.orders.push(o);
    });
  }

}
