import { HttpHeaders } from "@angular/common/http"

export class SrmUtil{

    serviceHeader(){
        const header = new HttpHeaders({            
            'Content-Type':'application/json',            
            'key':this._secretKey(),
        });
        return header;
    }
    _secretKey(){
        if(!(localStorage.getItem("SECRET_KEY")===null)){
            const ky= localStorage.getItem("SECRET_KEY");
            return ky == null?"":ky;
        }else{
            return "{}";
        }
    }
}