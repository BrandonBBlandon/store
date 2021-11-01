import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirInventarioComponent } from './anadir-inventario.component';

describe('AnadirInventarioComponent', () => {
  let component: AnadirInventarioComponent;
  let fixture: ComponentFixture<AnadirInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnadirInventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
