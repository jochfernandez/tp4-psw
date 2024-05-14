import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicaComponent } from './musica.component';

describe('MusicaComponent', () => {
  let component: MusicaComponent;
  let fixture: ComponentFixture<MusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
