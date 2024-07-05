import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FileUploadComponent } from './file-upload/file-upload.component';

import { MatButtonModule } from '@angular/material/button';  // for angular-material
import { MatCardModule } from '@angular/material/card';      // for angular-material
import { HttpClientModule } from '@angular/common/http';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    NavigationBarComponent  // for file-upload component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule, // for angular-material
    MatButtonModule,  // for angular-material
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
