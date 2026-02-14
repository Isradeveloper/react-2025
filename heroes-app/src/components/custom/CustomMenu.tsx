import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '../ui/navigation-menu';
import { Link, useLocation } from 'react-router';

export const CustomMenu = () => {
  const { pathname } = useLocation();

  const isActive = (path: string) => pathname === path;

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              isActive('/') && 'bg-slate-200 hover:bg-slate-200! rounded-md',
              'p-2 rounded-md'
            )}>
            <Link to="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              isActive('/search') &&
                'bg-slate-200 hover:bg-slate-200! rounded-md',
              'p-2 rounded-md'
            )}>
            <Link to="/search">Search</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
