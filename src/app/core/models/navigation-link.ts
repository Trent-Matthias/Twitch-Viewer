import { AppRoutes, SideNavTitles } from '../constants/navigation';

export interface NavigationLink {
  title?: SideNavTitles;
  link: AppRoutes;
}
