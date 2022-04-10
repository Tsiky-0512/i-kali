import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './module/material/material.module';
import { HomeClientComponent } from './pages/client/home-client/home-client.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './pages/login/login.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { SaveUserComponent } from './components/save-user/save-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { RouterHandlerComponent } from './pages/router-handler/router-handler.component';
import { HomeRestaurantComponent } from './pages/restaurant/home-restaurant/home-restaurant.component';
import { NavigationVertivalComponent } from './components/navigation-vertival/navigation-vertival.component';
import { SaisiePlatComponent } from './components/plats/saisie-plat/saisie-plat.component';
import { FichePlatComponent } from './components/plats/fiche-plat/fiche-plat.component';
import { ListePlatComponent } from './components/plats/liste-plat/liste-plat.component';
import { UpdatePlatComponent } from './components/plats/update-plat/update-plat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeClientComponent,
    NavigationComponent,
    BannerComponent,
    ProductComponent,
    LoginComponent,
    InscriptionComponent,
    SaveUserComponent,
    VerifyEmailComponent,
    RouterHandlerComponent,
    HomeRestaurantComponent,
    NavigationVertivalComponent,
    SaisiePlatComponent,
    FichePlatComponent,
    ListePlatComponent,
    UpdatePlatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
