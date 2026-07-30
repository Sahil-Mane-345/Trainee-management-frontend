export interface Trainee{
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    teachStack: string,
    status: string,
    createdAt: Date,
    updatedAt? : Date
}

export interface TraineeGetAllPayload{
    search: string,
    status: string,
    pageNumber: number,
    pageSize: number
}

export interface ITraineeCreate{
    firstName: string,
    lastName: string,
    email: string,
    techStack: string,
    status: string
}

export interface TraineeUpdate{
    firstName: string,
    lastName: string,
    email: string,
    teachStack: string,
    status: string
}


export interface PagedResponse<T>{
    pageNumber: number,
    pageSize: number,
    totalRecords: number,
    data? : T
}
