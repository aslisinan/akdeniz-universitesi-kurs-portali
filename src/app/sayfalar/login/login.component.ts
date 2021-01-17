import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KursServis } from '../../servisler/kurs-servis.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user:any={
   username:'',
   password:''
 };
 loading:boolean=false;
  hataliGiris:boolean=false;
  constructor(private kursServis:KursServis,private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    if(this.user.username.length<1){
      alert("Kullanıcı adı alanı boş geçilemez");
      return;
    }

    if(this.user.password.length<1){
      alert("Şifre  alanı boş geçilemez");
      return;
    }
    this.loading=true;
    this.kursServis.kullaniciAra(this.user).subscribe(res=>{
      if(res.length>0){//kullanıcı bulundu
        this.hataliGiris=false;
          localStorage.setItem("loginKullanici",JSON.stringify(res[0]));
          window.location.href="/";
      }
      else{
        this.hataliGiris=true;
      }
      this.loading=false;
    });
   
  }

}
