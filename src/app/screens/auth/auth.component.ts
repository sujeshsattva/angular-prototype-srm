import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticateService } from 'src/app/screens/services/authenticate.service';
import { UserLogin } from '../model/UserLogin';
import { Router } from '@angular/router';
import { Authenticate } from '../model/Authenticate';
import { NotifierService } from '../notifier/notifier.service';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  showLogin?:boolean = true;
  login = new UserLogin();
  authenticate = new Authenticate();

  authForm = this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
  });

  resetForm = this.fb.group({
    username:['',Validators.required]
  });

  constructor(
    private fb:FormBuilder,
    private authenticateService:AuthenticateService,
    private router:Router,
    private notification:NotifierService) { }

  ngOnInit(): void {
    this.reset();
    this.showLogin = true;

// console.log(process.env['USERPROFILE']);
  }

  async userLogin(){
    this.castToLogin(true);
    try{
    const response = await this.authenticateService.ipAuthenticate(JSON.stringify(this.login)).toPromise();
    if(response!=null && response.status==200 && response.body!=null){
      this.authenticate =  response.body;
      if(this.authenticate.status=="ok"){
        this.userAuthenticate();
      }
     }
    }catch(error){
      console.log(error);
    }
  }

 async userAuthenticate(){
    this.castToLogin(false);
    try{
      console.log("Auth");
      const response = await this.authenticateService.authenticate(JSON.stringify(this.login)).toPromise();
      if(response!=null && response.status==200 && response.body!=null){
        if(response.body["login-status"]=="SUCCESS"){
          this.redirectToDashboard();
          this.notification.showNotification("Login Success!",'',"success");
        }else{
          this.notification.showNotification("Login Failed..!",'',"error");
        }
       }
    }catch(error){
      console.log(error);
    }
  }

  switchLogin(){
    this.reset();
    this.showLogin = !(this.showLogin);
  }

  reset(){
    this.authForm.reset();
    this.resetForm.reset();
  }

  castToLogin(ip:boolean){
    this.login = new UserLogin();
    if(ip)
    this.login.userName = this.authForm.get("username")?.value;
    else{
      this.login.userId = this.authForm.get("username")?.value;
      this.login.password = this.authForm.get("password")?.value;
    }
  }

  redirectToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
