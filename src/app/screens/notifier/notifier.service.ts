import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotifierComponent } from './notifier.component';


@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private snackBar:MatSnackBar){}

  showNotification(message:any,btnText:any,messageType:'error'|'success'|'warning'){
    this.snackBar.openFromComponent(NotifierComponent,{
      data:{
        message:message,
        buttonText:btnText,
        type:messageType
      },
      duration:5000,
      verticalPosition:'top',
      horizontalPosition:'right',
      panelClass:messageType,
    });
  }
}