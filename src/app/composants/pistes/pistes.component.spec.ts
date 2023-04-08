import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PistesComponent } from './pistes.component';

describe('PistesComponent', () => {
  let component: PistesComponent;
  let fixture: ComponentFixture<PistesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PistesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PistesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
