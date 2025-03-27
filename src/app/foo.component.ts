import { Component, input } from '@angular/core';

@Component({
  selector: 'app-foo',
  template: '<div>I am just a simple component with an input</div>',
})
export class FooComponent {
  public $stringValue = input<string>('');
}
