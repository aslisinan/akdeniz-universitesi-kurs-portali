import { Component, OnInit } from '@angular/core';
import { KursServis } from '../../servisler/kurs-servis.service';

@Component({
  selector: 'app-kurs-yonetimi',
  templateUrl: './kurs-yonetimi.component.html',
  styleUrls: ['./kurs-yonetimi.component.css']
})
export class KursYonetimiComponent implements OnInit {
  kurslar:any=[];
  constructor(private kursServis:KursServis) { }
  kurs:any={
    ad:'',
    sahip:'',
    fiyat:'',
    kategori:'',
    seviye:''
  };
  formGoster:boolean=false;

  kursIslem:string="yeni";
  guncellenenKurs:any={};
  yetki:boolean=false;
  ngOnInit(): void {
    let loginKullanici= localStorage.getItem("loginKullanici");
   if(loginKullanici){
    this.yetki=true;
   }
   else{
     this.yetki=false;
   }
    this.kurslariGetir();
  }

  kurslariGetir(){
    this.kursServis.kurslariGetir().subscribe(res=>{
      this.kurslar=res;
    })
  }

  kursIslemBelirle(islem:string){
      this.kursIslem=islem;
      this.formGoster=true;
      this.kurs={
        ad:'',
        sahip:'',
        fiyat:'',
        kategori:'',
        seviye:''
      };
  }

  kursKaydet(){

    if(this.kurs.ad.length<1){
      alert('kurs adı alanı boş geçilemez');
      return;
    }
    if(this.kurs.sahip.length<1){
      alert('kurs sahibi alanı boş geçilemez');
      return;
    }

    if(this.kurs.fiyat.length<1){
      alert('fiyat alanı boş geçilemez');
      return;
    }

    if(this.kurs.kategori.length<1){
      alert('kategori alanı boş geçilemez');
      return;
    }

    if(this.kurs.seviye.length<1){
      alert('kategori seviye alanı boş geçilemez');
      return;
    }
    if(this.kursIslem=='yeni'){
      this.kursServis.kursOlustur(this.kurs).then(res=>{
        alert("Kurs kaydedildi...");
        this.kurslariGetir();
        this.formGoster=false;
      });
    }

    else if(this.kursIslem=='guncelle'){
      this.kursServis.kursGuncelle(this.guncellenenKurs.payload.doc.id,this.kurs).then(res=>{
        alert("Kurs güncellendi...");
        this.kurslariGetir();
        this.formGoster=false;
      });
    }
   
  }

  kursSil(data:any){

    let cevap=confirm("kursu silmek istediğinize emin misiniz?");
    if(cevap){
      this.kursServis.kursSil(data).then(res=>{
        alert("kurs silindi");
        this.kurslariGetir();
      });
    }
  }

  kursGuncelle(data:any){
   this.kursIslem='guncelle';
   this.guncellenenKurs=data;
   this.kurs.ad=data.payload?.doc.data().ad;
   this.kurs.sahip=data.payload?.doc.data().sahip;
   this.kurs.fiyat=data.payload?.doc.data().fiyat;
   this.kurs.kategori=data.payload?.doc.data().kategori;
   this.kurs.seviye=data.payload?.doc.data().seviye;
   this.formGoster=true;
  }

}
