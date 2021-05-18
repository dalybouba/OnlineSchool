import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AuthentificationComponent } from './layouts/authentification/authentification.component';
import { WelcomeComponent } from './auth/welcome/welcome.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { ClassCodeComponent } from './auth/class-code/class-code.component';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzTableModule } from 'ng-zorro-antd/table';
import { AuthInterceptor } from './services/AuthInterceptor';
import { SharedModule } from './shared/shared.module';
import { AcceuilComponent } from './auth/acceuil/acceuil.component';
import { StudentInformationComponent } from './auth/student-information/student-information.component';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { BackgroundComponent } from './auth/background/background.component';
import { LanguageComponent } from './auth/language/language.component';
import { AgeComponent } from './auth/age/age.component';
import { LevelComponent } from './auth/level/level.component';
import { CongratulationComponent } from './auth/congratulation/congratulation.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCardModule } from 'ng-zorro-antd/card';
import {  NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzRadioModule } from 'ng-zorro-antd/radio';


registerLocaleData(en);

@NgModule({
  declarations: [
    
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AuthentificationComponent,
    WelcomeComponent,
    ClassCodeComponent,
    AcceuilComponent,
    StudentInformationComponent,
    BackgroundComponent,
    LanguageComponent,
    AgeComponent,
    LevelComponent,
    CongratulationComponent,
  ],
  imports: [

    NzInputNumberModule,
    NzListModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzMessageModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    SharedModule,
    NzTableModule,
    NzStepsModule,
    NzSelectModule,
    NzCardModule,
    NzCheckboxModule,
    NzRadioModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptor, 
      multi: true
    },
    { provide: NZ_I18N, useValue: en_US }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
