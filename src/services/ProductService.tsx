import request  from "../services/httpServices";

class productService{
    getProduct():Promise<any> {
      return  request.get('/products')
    }

    getProductById(id:string):Promise<any> {
        return  request.get(`/products/${id}`)
    }
    
    addProduct(body:{}):Promise<any> {
        return  request.post('/products/',body)
      }
      
      deleteProduct(id:string):Promise<any> {
        return  request.delete(`/products/${id}`)
    }
}

export default new productService;