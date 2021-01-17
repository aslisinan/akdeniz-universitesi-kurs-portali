import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KursYonetimiComponent } from './kurs-yonetimi.component';

describe('KursYonetimiComponent', () => {
  let component: KursYonetimiComponent;
  let fixture: ComponentFixture<KursYonetimiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KursYonetimiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KursYonetimiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
