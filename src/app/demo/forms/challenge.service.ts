import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Challenge {
  id?: number;
  challengeName: string;
  challengeDescription: string;
  startDate: string;
  endDate: string;
  weeklyRideLimits: number;
  newUsersOnly: boolean;
  allUsers: boolean;
  filePath?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
  private apiUrl = 'http://localhost:8080/api/challenges';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Challenge[]> {
    return this.http.get<Challenge[]>(this.apiUrl);
  }

  getById(id: number): Observable<Challenge> {
    return this.http.get<Challenge>(`${this.apiUrl}/${id}`);
  }

  create(challenge: Challenge): Observable<Challenge> {
    return this.http.post<Challenge>(this.apiUrl, challenge);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
