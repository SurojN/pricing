import { Component, EventEmitter } from '@angular/core';
import { INavigationLinks } from './shared/contracts/NavigationLinks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titles: string = 'Pricing';
  description: string =
    " Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.";

  navigationLinks: INavigationLinks[] = [
    {
      name: 'Features',
      link: '#',
    },
    {
      name: 'Enterprise',
      link: '#',
    },
    {
      name: 'Support',
      link: '#',
    },
    {
      name: 'Pricing',
      link: '#',
    },
  ];

  navClicked(name: string) {
    const newNavigationLinks = this.navigationLinks.map((nav) => {
      if (nav.name === name) {
        return {
          name: `Clicked ${name}`,
          link: nav.link,
        };
      }
      return nav;
    });
    this.navigationLinks = [...newNavigationLinks];
  }
}
