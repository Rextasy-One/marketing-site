'use client';

import { Header, type HeaderProps } from '@aws-rex/common-components';
import { usePathname } from 'next/navigation';

export interface NavigationProps extends Omit<HeaderProps, 'activeHref'> {
  /**
   * Prefix stripped from the pathname before matching nav items. The dashboard is
   * mounted under a `basePath` that Next does not include in `usePathname()`, so
   * pass it here for the active item to resolve correctly.
   */
  basePath?: string;
}

/**
 * Client wrapper that supplies the active route to the framework-agnostic
 * `Header`. Kept client-side because `usePathname` requires it.
 */
export function Navigation({ basePath = '', ...headerProps }: NavigationProps) {
  const pathname = usePathname();
  const activeHref =
    basePath && pathname.startsWith(basePath) ? pathname.slice(basePath.length) || '/' : pathname;

  return <Header {...headerProps} activeHref={activeHref} />;
}
