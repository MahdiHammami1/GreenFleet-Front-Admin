import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { UserDash, UserDashModel } from '../models/user.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly endpoint = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<UserDashModel[]> {
    return this.http.get<UserDash[]>(this.endpoint).pipe(
      map(users => users.map(user => 
        new UserDashModel(
          user.userId,
          user.firstname,
          user.lastname,
          user.email,
          user.phoneNumber,
          user.gender,
          new Date(user.dateOfBirth), // Ensure proper Date conversion
          user.rating,
          user.gamificationPoints
        )
      ))
    );
  }
}