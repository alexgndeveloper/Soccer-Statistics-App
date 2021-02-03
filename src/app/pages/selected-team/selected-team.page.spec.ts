import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectedTeamPage } from './selected-team.page';

describe('SelectedTeamPage', () => {
  let component: SelectedTeamPage;
  let fixture: ComponentFixture<SelectedTeamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedTeamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectedTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
