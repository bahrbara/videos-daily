import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class VideoService {
    constructor(private http: HttpClient) { }


    getVideosBySearch(title: string, time: string): Observable<any> {
        const href = `${environment.api.url}/playlists?term=${title}&dailyMin=${time}`;
        console.log('------', href);
        return this.http.get<any>(href);
    }
}
