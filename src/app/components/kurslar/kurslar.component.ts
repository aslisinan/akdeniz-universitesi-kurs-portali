import { Component, OnInit } from '@angular/core';
import { KursServis } from 'src/app/servisler/kurs-servis.service';

@Component({
  selector: 'app-kurslar',
  templateUrl: './kurslar.component.html',
  styleUrls: ['./kurslar.component.css']
})
export class KurslarComponent implements OnInit {
  kurslar:any[] = [];
  constructor(private kursService:KursServis) { }

  ngOnInit(): void {
    //this.kursOlustur();
    console.log("on init")
    this.kurslariGetir(); 
    //this.kursGuncelle();
  }

  

  kurslariGetir(){
    this.kursService.kurslariGetir().subscribe(res => {
            this.kurslar=res;
            res.forEach(element => {
              console.log(element.payload.doc.data())
              //this.kursGuncelle(element);
            });
         });
  }

  sepeteEkle(kurs:any){
    
  }



}
