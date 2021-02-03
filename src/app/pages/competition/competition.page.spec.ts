import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompetitionPage } from './competition.page';

describe('CompetitionPage', () => {
  let component: CompetitionPage;
  let fixture: ComponentFixture<CompetitionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompetitionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
