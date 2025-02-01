import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoCadernetaComponent } from './projeto-caderneta.component';

describe('ProjetoCadernetaComponent', () => {
  let component: ProjetoCadernetaComponent;
  let fixture: ComponentFixture<ProjetoCadernetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetoCadernetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetoCadernetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
