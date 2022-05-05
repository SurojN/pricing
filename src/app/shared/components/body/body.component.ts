import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class AppBody {
  @Input() title: string = '';
  @Input() content: string = '';
}
