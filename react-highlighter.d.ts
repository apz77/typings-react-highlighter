/// <reference path="typings/main.d.ts" />

declare module "react-highlighter" {
  import { ComponentClass, Props, CSSProperties } from 'react';

  interface IHighlighterProps extends Props<Highlighter> {
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
