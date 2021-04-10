import { AppComponent } from './app.component';
import { MyTestService } from './my-test.service';

describe('AppComponent', () => {
  let fixture: AppComponent;
  let myTestServiceMock: MyTestService;

  beforeEach(() => {
    myTestServiceMock = {
      doServiceStuff: jest.fn()
    }

    fixture = new AppComponent(myTestServiceMock)
  })

  describe('Setup component', () => {
    describe('ngOnInit', () => {

      it('should call doStuff', () => {
        // Arrange
        const doComponentStuffSpy = jest.spyOn(fixture, 'doComponentStuff');
        const doServiceStuffSpy = jest.spyOn(myTestServiceMock, 'doServiceStuff');

        // Act
        fixture.ngOnInit();

        // Assert
        expect(doComponentStuffSpy).toHaveBeenCalledTimes(1);
        expect(doServiceStuffSpy).toHaveBeenCalledTimes(1);
      })

    })
  })
})
