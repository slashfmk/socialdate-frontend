import { Injectable, inject } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDto } from '../models/LoginDto';
import { UserDto } from '../models/UserDto';

@Injectable({
  providedIn: 'root',
})
//  @Injectable()
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:5001/api';

  constructor() {}

  public login(user: LoginDto): Observable<UserDto> {
    return this.http.post<UserDto>(`${this.apiUrl}/account/login`, user);
  }
}
