import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentantesComboComponent } from './representantes-combo.component';

describe('RepresentantesComboComponent', () => {
  let component: RepresentantesComboComponent;
  let fixture: ComponentFixture<RepresentantesComboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepresentantesComboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepresentantesComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
