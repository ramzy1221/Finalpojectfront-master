import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { ForgetComponent } from './forget/forget.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { PasswordconfirmedComponent } from './passwordconfirmed/passwordconfirmed.component';
import { PopComponent } from './pop/pop.component';
import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
  declarations: [
    AppComponent,
    ForgetComponent,
    
    LoginComponent,
    ForgetComponent,
    NewpasswordComponent,
    PasswordconfirmedComponent,
    PopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
