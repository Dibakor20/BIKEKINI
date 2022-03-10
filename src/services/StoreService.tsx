import request from "../services/httpServices";

class storeService {
  getStore(): Promise<any> {
    return request.get("/store");
  }

  getStoreById(id: string): Promise<any> {
    return request.get(`/store/${id}`);
  }

  addStore(body: {}): Promise<any> {
    return request.post("/store/", body);
  }

  deleteStore(id: string): Promise<any> {
    return request.delete(`/store/${id}`);
  }
}

export default new storeService();
