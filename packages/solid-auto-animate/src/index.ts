import autoAnimateBase, { AutoAnimationPlugin, AutoAnimateOptions } from '@formkit/auto-animate';
import { createEffect } from 'solid-js';

declare module 'solid-js' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface Directives {
      autoAnimate: Partial<AutoAnimateOptions> | AutoAnimationPlugin | true;
    }
  }
}

export function autoAnimate<T extends HTMLElement>(
  el: T,
  options: () => (Partial<AutoAnimateOptions> | AutoAnimationPlugin | true),
): void {
  createEffect(() => {
    const currentOptions = options();
    autoAnimateBase(el, currentOptions === true ? {} : currentOptions);
  });
}

export function useAutoAnimate<T extends HTMLElement>(
  el: () => T,
  options: Partial<AutoAnimateOptions> | AutoAnimationPlugin,
) {
  createEffect(() => {
    autoAnimateBase(el(), options);
  });
}
