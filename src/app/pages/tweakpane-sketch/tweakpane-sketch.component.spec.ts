import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TweakpaneSketchComponent } from './tweakpane-sketch.component';

describe('TweakpaneSketchComponent', () => {
  let component: TweakpaneSketchComponent;
  let fixture: ComponentFixture<TweakpaneSketchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TweakpaneSketchComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TweakpaneSketchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
