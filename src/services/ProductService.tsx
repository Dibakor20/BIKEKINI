import request from "../services/httpServices";
import { IProduct } from "./Type";

class ProductService {
  getProduct(): Promise<IProduct[]> {
    return request.get("/products");
  }
  getProductById(id: string): Promise<any> {
    return request.get(`/products/${id}`);
  }

  addProduct(body: {}): Promise<any> {
    return request.post("/products/", body);
  }

  deleteProduct(id:number): Promise<any> {
    return request.delete(`/products/${id}`);
  }
}

export default new ProductService();
