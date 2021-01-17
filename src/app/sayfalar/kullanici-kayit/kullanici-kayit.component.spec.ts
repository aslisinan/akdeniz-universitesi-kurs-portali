import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KullaniciKayitComponent } from './kullanici-kayit.component';

describe('KullaniciKayitComponent', () => {
  let component: KullaniciKayitComponent;
  let fixture: ComponentFixture<KullaniciKayitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KullaniciKayitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KullaniciKayitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
