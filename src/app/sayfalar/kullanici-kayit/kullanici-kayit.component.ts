import { Component, OnInit } from '@angular/core';
import { KursServis } from '../../servisler/kurs-servis.service';

@Component({
  selector: 'app-kullanici-kayit',
  templateUrl: './kullanici-kayit.component.html',
  styleUrls: ['./kullanici-kayit.component.css']
})
export class KullaniciKayitComponent implements OnInit {
  user:any={
    username:'',
    password:'',
    email:''
  };
  loading:boolean=false;
  kullaniciKaydedildi:boolean=false;
  constructor(private kursServis:KursServis) { }

  ngOnInit(): void {
  }
  kayitol(){
    if(this.user.email.length<1){
      alert("email  alanı boş geçilemez");
      return;
    }
    if(this.user.username.length<1){
      alert("Kullanıcı adı alanı boş geçilemez");
      return;
    }

    if(this.user.password.length<1){
      alert("Şifre  alanı boş geçilemez");
      return;
    }
    
    this.loading=true;
    this.kursServis.kullaniciKaydet(this.user).then(res=>{
      this.kullaniciKaydedildi=true;
      this.user={};
  this.loading=false;
    });
  }

}
