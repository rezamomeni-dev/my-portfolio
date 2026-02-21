import { render, screen } from '@testing-library/react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuViewport
} from './navigation-menu';
import { expect, test } from 'vitest';

test('NavigationMenu renders all components', () => {
  render(
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
          <NavigationMenuContent>Content</NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink>Link</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuIndicator />
      <NavigationMenuViewport />
    </NavigationMenu>
  );
  expect(screen.getByText('Link')).toBeDefined();
  expect(screen.getByText('Trigger')).toBeDefined();
});
