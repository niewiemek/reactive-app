import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscriber } from 'rxjs/src/internal/Subscriber';

@Injectable({
  providedIn: 'root'
})
export class SseObservableFactory {

  create<T>(url: string): Observable<T> {
    return Observable.create((obs: Subscriber<Object>) => {
      const es = new EventSource(url);
      es.addEventListener('message', (evt: any) => {
        console.log(`${evt.data}`);
        obs.next(JSON.parse(evt.data));
      }, false);
      es.onerror = (error) => {
        // readyState === 0 (closed) means the remote source closed the connection,
        // so we can safely treat it as a normal situation. Another way of detecting the end of the stream
        // is to insert a special element in the stream of events, which the client can identify as the last one.
        if (es.readyState === 0) {
          console.log('The stream has been closed by the server.');
          es.close();
          obs.complete();
        } else {
          obs.error('EventSource error: ' + error);
        }
      };
    });
  }
}
