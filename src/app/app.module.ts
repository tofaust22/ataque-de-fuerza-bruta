import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimuladorComponent } from './simulador/simulador.component';
import { FormsModule } from '@angular/forms';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SimuladorComponent,
    PasswordGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    SimuladorComponent,
    PasswordGeneratorComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
