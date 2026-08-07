import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

import { backendUrl } from '../../constants/backendUrls';
import { IUserLoginRequest, IUserLoginResponse } from '../models/authModel';

@Service()
export class AuthService {
    private baseUrl:string = backendUrl;
    private httpClient = inject(HttpClient);

    userLogin(payload:IUserLoginRequest){
        return this.httpClient.post<IUserLoginResponse>(this.baseUrl+"api/user/login",payload);
    }
}
