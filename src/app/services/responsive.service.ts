import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable, signal } from '@angular/core';


const BREAKPOINTS = {
  mobile: '(max-width: 599.98px)',
  tablet: '(min-width: 600px) and (max-width: 959.98px)',
  desktop: '(min-width: 960px)',
};


@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  // Define signals for each screen size
  isMobile = signal(false);
  isTablet = signal(false);
  isDesktop = signal(false);

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe(Object.values(BREAKPOINTS))
      .subscribe((result) => {
        console.log(result);
        this.isMobile.set(result.breakpoints[BREAKPOINTS.mobile] ?? false);
        this.isTablet.set(result.breakpoints[BREAKPOINTS.tablet] ?? false);
        this.isDesktop.set(result.breakpoints[BREAKPOINTS.desktop] ?? false);
      });
  }
}
