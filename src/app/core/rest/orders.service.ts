import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SseObservableFactory } from 'src/app/core/rest/sse-observable.factory';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {

  readonly CREATE_URL = `${environment.FLUX_URL}orders`;

  constructor(private sseFactory: SseObservableFactory) {
  }

  stream(): Observable<Order> {
    return this.sseFactory.create<Order>(this.CREATE_URL);
  }
}

export interface Order {
  pizzaId: string;
  deliverTo: string;
}
