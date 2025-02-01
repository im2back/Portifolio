import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoCreditapraiserComponent } from './projeto-creditapraiser.component';

describe('ProjetoCreditapraiserComponent', () => {
  let component: ProjetoCreditapraiserComponent;
  let fixture: ComponentFixture<ProjetoCreditapraiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetoCreditapraiserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetoCreditapraiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
