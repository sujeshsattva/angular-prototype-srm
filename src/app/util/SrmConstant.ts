export class SrmConstant{
    private SRM_WS_ENDPONT:string="http://localhost:8443/srmws";

    public SRM_LOGIN_IP:string=this.SRM_WS_ENDPONT+"/security/ipcheck";
    public  SRM_LOGIN:string=this.SRM_WS_ENDPONT+"/login/access";
}