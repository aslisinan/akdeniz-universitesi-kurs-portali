import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class KursServis {

  constructor(private firestore: AngularFirestore) { }
  form = new FormGroup({        
    customerName: new FormControl(''),
    orderNumber: new FormControl(''),
    coffeeOrder: new FormControl(''), 
    completed: new FormControl(false)
});

kursOlustur(data:any) {
  return this.firestore
          .collection("kurslar")
          .add(data);
  
}

kurslariGetir() {
  return  this.firestore.collection("kurslar").snapshotChanges();
}

kursGuncelle(id:any,kurs:any) {
  return this.firestore
      .collection("kurslar")
      .doc(id)
      .set(kurs, { merge: true });
}


  kursSil(data:any) {
    return this.firestore
        .collection("kurslar")
        .doc(data.payload.doc.id)
        .delete();
 
}

kullaniciAra(user:any) {
  return this.firestore
      .collection("kullanicilar",x=>(x.where("username","==",user.username) && x.where("password","==",user.password) ).limit(1)).valueChanges();

}

kullaniciKaydet(data:any) {
  return  this.firestore
          .collection("kullanicilar")
          .add(data);
 
}


  

}
