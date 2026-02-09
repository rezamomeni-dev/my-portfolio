import { render, screen } from '@testing-library/react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from './navigation-menu';
import { expect, test } from 'vitest';

test('NavigationMenu renders correctly', () => {
  render(
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="/">Home</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );

  expect(screen.getByText('Home')).toBeDefined();
});
