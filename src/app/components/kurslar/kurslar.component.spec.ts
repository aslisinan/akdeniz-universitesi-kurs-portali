import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurslarComponent } from './kurslar.component';

describe('KurslarComponent', () => {
  let component: KurslarComponent;
  let fixture: ComponentFixture<KurslarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KurslarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KurslarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
