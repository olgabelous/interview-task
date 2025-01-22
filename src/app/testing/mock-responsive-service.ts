export class MockResponsiveService {
    constructor(
      private mobile: boolean,
      private tablet: boolean,
      private desktop: boolean
    ) {}
  
    isMobile = () => this.mobile;
    isTablet = () => this.tablet;
    isDesktop = () => this.desktop;
  }