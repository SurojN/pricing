import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Component } from '@angular/core';
import { INavigationLinks } from '../../contracts/NavigationLinks';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class AppHeader {
  @Input() navigation?: INavigationLinks[];

  @Output() onNavClick: EventEmitter<string> = new EventEmitter();

  showName(name: string) {
    this.onNavClick.emit(name);
  }
}
