import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { userLoginRequest, userLoginResponse } from '../models/authModel';
import { backendUrl } from '../../constants/backendUrls';

@Service()
export class AuthService {
    private baseUrl:string = backendUrl;
    private httpClient = inject(HttpClient);

    userLogin(payload:userLoginRequest){
        return this.httpClient.post<userLoginResponse>(this.baseUrl+"api/user/login",payload);
    }
}
