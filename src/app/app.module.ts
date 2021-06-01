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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    SecureContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialImporterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
