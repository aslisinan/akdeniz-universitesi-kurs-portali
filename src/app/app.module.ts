import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KurslarComponent } from './components/kurslar/kurslar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { AnasayfaComponent } from './sayfalar/anasayfa/anasayfa.component';
import { BannerComponent } from './components/banner/banner.component';
import { LoginComponent } from './sayfalar/login/login.component';
import { KullaniciKayitComponent } from './sayfalar/kullanici-kayit/kullanici-kayit.component';
import { KursYonetimiComponent } from './sayfalar/kurs-yonetimi/kurs-yonetimi.component';
import { HakkimizdaComponent } from './sayfalar/hakkimizda/hakkimizda.component';
import { IletisimComponent } from './sayfalar/iletisim/iletisim.component';
import { SatinalComponent } from './sayfalar/satinal/satinal.component';

@NgModule({
  declarations: [
    AppComponent,
    KurslarComponent,
    MenuComponent,
    FooterComponent,
    AnasayfaComponent,
    BannerComponent,
    LoginComponent,
    KullaniciKayitComponent,
    KursYonetimiComponent,
    HakkimizdaComponent,
    IletisimComponent,
    SatinalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
