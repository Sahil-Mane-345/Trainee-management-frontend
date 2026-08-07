import { inject, Service } from '@angular/core';
import { backendUrl } from '../../constants/backendUrls';
import { HttpClient } from '@angular/common/http';
import { IPagedResponse, ITrainee, ITraineeCreate, ITraineeGetAllPayload } from '../models/traineeModel';
import { IApiResponse } from '../models/apiResponseModel';


@Service()
export class TraineeService {
    private baseUrl: string = backendUrl;
    private httpClient: HttpClient = inject(HttpClient);

    getAllTrainee(payload:ITraineeGetAllPayload){
        return this.httpClient.get<IApiResponse<IPagedResponse<ITrainee[]>>>(this.baseUrl + 'api/trainee', {
            params: {
                search: payload.search,
                status: payload.status,
                pageNumber: payload.pageNumber,
                pageSize: payload.pageSize
            }
        });
    }

    createTrainee(payload:ITraineeCreate){
        return this.httpClient.post<IApiResponse<ITrainee>>(this.baseUrl + "api/trainee", payload);
    }
}
