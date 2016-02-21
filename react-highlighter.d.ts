/// <reference path="typings/main.d.ts" />

declare module "highlighter" {
  import { ComponentClass, Props, CSSProperties } from 'react';

  export interface IHighlighterProps {
    search: string | number | boolean;
    caseSensitive?: boolean;
    matchElement?: string;
    matchClass?: string;
    matchStyle?: CSSProperties;
  }

  interface Highlighter extends ComponentClass<IHighlighterProps> {
  }
  const Highlighter:Highlighter;

  export = Highlighter;
}
