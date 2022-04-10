import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeClientComponent } from './pages/client/home-client/home-client.component';
import { HomeRestaurantComponent } from './pages/restaurant/home-restaurant/home-restaurant.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterHandlerComponent } from './pages/router-handler/router-handler.component';
import { SaisiePlatComponent } from './components/plats/saisie-plat/saisie-plat.component';
import { FichePlatComponent } from './components/plats/fiche-plat/fiche-plat.component';
import { UpdatePlatComponent } from './components/plats/update-plat/update-plat.component';
import { ListePlatComponent } from './components/plats/liste-plat/liste-plat.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'inscription',
    component:InscriptionComponent
  },
  {
    path:'client',
    children:[
      {
        path:'',
        component:HomeClientComponent
      }
    ]
  },
  {
    path:'restaurant',
    component:HomeRestaurantComponent,
    children:[
      {
        path:'',
        children:[
          {
            path:'',
            component:ListePlatComponent
          },
          {
            path:'fiche/:data',
            component:FichePlatComponent
          },
          {
            path:'update/:data',
            component:UpdatePlatComponent
          },
          {
            path:'saisie',
            component:SaisiePlatComponent
          }
        ]
      }
    ]  
  },
  {
    path:'routerHandler',
    component:RouterHandlerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
