import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  loginKullanici:any=null;
  constructor(private router: Router) { }

  ngOnInit(): void {
   this.loginKullanici= localStorage.getItem("loginKullanici");
   if(this.loginKullanici){
    this.loginKullanici=JSON.parse(this.loginKullanici);
   }
  }

  cikis(){
    localStorage.removeItem("loginKullanici");
    window.location.href="/";
  }

}
