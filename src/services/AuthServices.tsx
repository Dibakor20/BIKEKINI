import request from "../services/httpServices";
import { IAuthData } from "./Type";

class authService {

  login(body: {email:string, password:string}): Promise<IAuthData> {
    return request.post(`/users/`, body);
  }

  logout(): Promise<any> {
    return request.get(`/users/logout`);
  }
}

export default new authService();