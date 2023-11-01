import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SociallinkComponent } from './sociallink.component';

describe('SociallinkComponent', () => {
  let component: SociallinkComponent;
  let fixture: ComponentFixture<SociallinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SociallinkComponent]
    });
    fixture = TestBed.createComponent(SociallinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
