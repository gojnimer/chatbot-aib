import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaComponentComponent } from './diretiva-component.component';

describe('DiretivaComponentComponent', () => {
  let component: DiretivaComponentComponent;
  let fixture: ComponentFixture<DiretivaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
