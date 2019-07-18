import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  fetchUsers() {
    console.log('fetchUsers');
    return this.http.get('../../assets/data.json');
  }
}
