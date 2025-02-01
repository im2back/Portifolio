import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafiosComponentComponent } from './desafios-component.component';

describe('DesafiosComponentComponent', () => {
  let component: DesafiosComponentComponent;
  let fixture: ComponentFixture<DesafiosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesafiosComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesafiosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
