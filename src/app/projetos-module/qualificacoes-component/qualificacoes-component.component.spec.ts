import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificacoesComponentComponent } from './qualificacoes-component.component';

describe('QualificacoesComponentComponent', () => {
  let component: QualificacoesComponentComponent;
  let fixture: ComponentFixture<QualificacoesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualificacoesComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QualificacoesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
