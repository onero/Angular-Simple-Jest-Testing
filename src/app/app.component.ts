import { Component, OnInit } from '@angular/core';
import { MyTestService } from './my-test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'simple-jest-testing';

  constructor(private myTestServiceMock: MyTestService) { }

  ngOnInit(): void {
    this.doComponentStuff();
    this.myTestServiceMock.doServiceStuff();
  }

  doComponentStuff(): void {
    // Left empty on purpose
  }
}
