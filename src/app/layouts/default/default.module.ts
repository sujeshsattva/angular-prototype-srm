import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { AuthComponent } from 'src/app/screens/auth/auth.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';

import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { AuthenticateService } from 'src/app/screens/services/authenticate.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from 'src/app/screens/dashboard/dashboard.component';
import { NotifierComponent } from 'src/app/screens/notifier/notifier.component';
import { NotifierService } from 'src/app/screens/notifier/notifier.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AuthComponent,
    DefaultComponent,
    DashboardComponent,
    NotifierComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    HttpClientModule ,
    MatSnackBarModule,
  ],
  providers:[AuthenticateService,NotifierService]
})
export class DefaultModule { }
