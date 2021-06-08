import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './global-components/header/header.component';
import { FooterComponent } from './global-components/footer/footer.component';
import { DashboardComponent } from './global-components/dashboard/dashboard.component';
import { LoginComponent } from './global-components/login/login.component';
import { SecureContainerComponent } from './global-components/secure-container/secure-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialImporterModule } from './app-material-importer.module';
import { SharedUtilitiesModule } from './modules/__shared-utilities/shared-utilities.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './app.interceptor';
import { BannerComponent } from './global-components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    SecureContainerComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialImporterModule,
    SharedUtilitiesModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
