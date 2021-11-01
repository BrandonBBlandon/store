import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirProveedorComponent } from './anadir-proveedor.component';

describe('AnadirProveedorComponent', () => {
  let component: AnadirProveedorComponent;
  let fixture: ComponentFixture<AnadirProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnadirProveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
