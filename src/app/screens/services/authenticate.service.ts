import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SrmConstant } from "src/app/util/SrmConstant";
import { SrmUtil } from "../../util/SrmUtil";
 

@Injectable()
export class AuthenticateService {
  srmUtil = new SrmUtil();
  srmConstant = new SrmConstant();
  
  constructor(private http:HttpClient) { }

  ipAuthenticate(params:any){
    console.log(">>"+params);
    return this.http.post(this.srmConstant.SRM_LOGIN_IP,params,{
      headers:this.srmUtil.serviceHeader(),
       observe:'response'
    });
  }

  authenticate(params:any):Observable<HttpResponse<any>>{
    return this.http.post(this.srmConstant.SRM_LOGIN,params ,{headers:this.srmUtil.serviceHeader(),observe:'response'});
  }


  // {login-time=1633077702211, login-status=SUCCESS, secret-key=5d4b4725-f37e-473d-8d38-7f2b4d896a7b, user=admin}
}
