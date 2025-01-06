import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacaoUpdateComponent } from './aplicacao-update.component';

describe('AplicacaoUpdateComponent', () => {
  let component: AplicacaoUpdateComponent;
  let fixture: ComponentFixture<AplicacaoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AplicacaoUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AplicacaoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
