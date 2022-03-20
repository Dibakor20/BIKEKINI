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