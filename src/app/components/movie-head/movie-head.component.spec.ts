import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieHeadComponent } from './movie-head.component';

describe('MovieHeadComponent', () => {
  let component: MovieHeadComponent;
  let fixture: ComponentFixture<MovieHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieHeadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
