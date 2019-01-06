import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscriber } from 'rxjs/src/internal/Subscriber';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieStreamService {

  readonly STREAM_ALL_URL = `${environment.FLUX_URL}movies/streamAll`;

  constructor(private httpClient: HttpClient) {
  }

  allMovies(): Observable<Object> {
    return Observable.create((obs: Subscriber<Object>) => {
      const es = new EventSource(this.STREAM_ALL_URL);
      es.addEventListener('message', (evt: any) => {
        console.log(evt.data);
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
