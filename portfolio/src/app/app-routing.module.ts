import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FrontendComponent } from './frontend/frontend.component';
import { BackendComponent } from './backend/backend.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [{
  path: '',
  component: AppComponent,
  children: [
    { path: 'header', component: HeaderComponent },
    { path: 'home', component: HomeComponent},
    { path: 'frontend',component:FrontendComponent},
    { path: 'backend', component:BackendComponent},
    { path:'contact', component:ContactComponent},
    { path: '**', redirectTo: 'home' },]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
