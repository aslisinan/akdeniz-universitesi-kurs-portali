import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnasayfaComponent } from './sayfalar/anasayfa/anasayfa.component';
import { HakkimizdaComponent } from './sayfalar/hakkimizda/hakkimizda.component';
import { IletisimComponent } from './sayfalar/iletisim/iletisim.component';
import { KullaniciKayitComponent } from './sayfalar/kullanici-kayit/kullanici-kayit.component';
import { KursYonetimiComponent } from './sayfalar/kurs-yonetimi/kurs-yonetimi.component';
import { LoginComponent } from './sayfalar/login/login.component';
import { SatinalComponent } from './sayfalar/satinal/satinal.component';

const routes: Routes = [
  { path:'', component:AnasayfaComponent },
  {path:'login',component:LoginComponent},
  {path:'kayit',component:KullaniciKayitComponent},
  {path:'kursYonetimi',component:KursYonetimiComponent},
  {path:'hakkimizda',component:HakkimizdaComponent},
  {path:'iletisim',component:IletisimComponent},
  {path:'satinal/:id',component:SatinalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
