export declare type HTMLElementProxy =
  | { [P in keyof HTMLElement]: (...args: any) => HTMLElementProxy }
  | { [key: string]: any }; // TODO: Account for `"set" + key.charAt(0).toUpperCase() + key.slice(1)` functions.

declare const _default: (tag: string) => HTMLElementProxy;

export default _default;
