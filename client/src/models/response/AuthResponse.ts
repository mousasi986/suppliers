import IUser from "../../interfaces/IUser";

export default interface AuthResponse{
    accessToken: string,
    refreshToken:string,
    user: IUser
}