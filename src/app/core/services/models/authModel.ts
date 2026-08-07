export interface IUserLoginRequest {
    userName: string ,
    password: string 
}

export interface IUserLoginResponse{
    token: string,
    expiresIn: number,
    user: {
        id: string,
        userName: string,
        role: string
    }
}