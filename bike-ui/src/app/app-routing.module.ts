import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import { CallbackComponent } from './componens/callback/callback.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, 
  {
    path: 'admin/view/:id',
    component: ViewRegistrationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',

    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'callback',

    component: CallbackComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
