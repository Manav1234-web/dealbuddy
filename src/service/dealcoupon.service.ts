import { Service } from "./service";

export class DealCouponService extends Service {

  
    url = 'dealcoupon';
  
    getAll(request?:any) {
      return this.instanceApi.get(`${this.url}`,{params :request});
    }
    

}