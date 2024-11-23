import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimuladorComponent } from './simulador/simulador.component';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';


const routes: Routes = [
  { path: '', component: PasswordGeneratorComponent },
  { path: 'simulador', component: SimuladorComponent },
  // { path: 'password', component: PasswordGeneratorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
