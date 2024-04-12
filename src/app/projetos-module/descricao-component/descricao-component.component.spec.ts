import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaoComponentComponent } from './descricao-component.component';

describe('DescricaoComponentComponent', () => {
  let component: DescricaoComponentComponent;
  let fixture: ComponentFixture<DescricaoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescricaoComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescricaoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
