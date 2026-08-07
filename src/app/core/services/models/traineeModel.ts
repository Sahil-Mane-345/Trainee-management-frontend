export interface ITrainee{
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    techStack: string,
    status: string,
    createdAt: Date,
    updatedAt? : Date | null
}

export interface ITraineeGetAllPayload{
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

export interface ITraineeUpdate{
    firstName: string,
    lastName: string,
    email: string,
    teachStack: string,
    status: string
}


export interface IPagedResponse<T>{
    pageNumber: number,
    pageSize: number,
    totalRecords: number,
    data? : T
}
