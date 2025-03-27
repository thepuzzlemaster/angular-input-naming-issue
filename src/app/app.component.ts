import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooComponent } from "./foo.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-signals-issue';
}
