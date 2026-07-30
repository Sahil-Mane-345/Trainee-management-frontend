export interface userLoginRequest {
    userName: string ,
    password: string 
}

export interface userLoginResponse{
    token: string,
    expiresIn: number,
    user: {
        id: string,
        userName: string,
        role: string
    }
}