export interface IProduct{
    length: ReactNode;
    slice(arg0: number, arg1: number);
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: object;
}

export interface IAuthData {
    address: object;
    id: number;
    email: string;
    username: string;
    password: string;
    name:object;
    phone:string
}