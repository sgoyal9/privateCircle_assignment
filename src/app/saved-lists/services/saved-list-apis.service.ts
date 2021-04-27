import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ListItemViewModel } from '../models/list-item-view.model';

@Injectable({
  providedIn: 'root',
})
export class SavedListApisService {
  constructor(private http: HttpClient) {}

  public getDummyData(): Observable<ListItemViewModel[]> {
    return this.http.get<ListItemViewModel[]>('./assets/dummyData.json');
  }
}
