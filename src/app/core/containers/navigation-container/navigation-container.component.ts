import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { NavigationLink } from '../../models/navigation-link';
import { AppRoutes, SideNavTitles } from '../../constants/navigation';

@Component({
  selector: 'app-navigation-container',
  templateUrl: './navigation-container.component.html',
  styleUrls: ['./navigation-container.component.css']
})
export class NavigationContainerComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  links: NavigationLink[] = [
    {
      link: AppRoutes.default,
      title: SideNavTitles.default
    }
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {}
}
