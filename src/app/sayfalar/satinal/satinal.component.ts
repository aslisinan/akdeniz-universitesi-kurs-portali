import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-satinal',
  templateUrl: './satinal.component.html',
  styleUrls: ['./satinal.component.css']
})
export class SatinalComponent implements OnInit {
  kursId:any="";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.kursId = this.route.snapshot.paramMap.get('id');
   
  }

}
