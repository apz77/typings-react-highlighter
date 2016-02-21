/// <reference path="typings/main.d.ts" />

declare module "react-highlighter" {
  import * as React from 'react';

  interface IHighlighterProps extends React.Props<Highlighter> {
    search: string | number | boolean;
    caseSensitive?: boolean;
    matchElement?: string;
    matchClass?: string;
    matchStyle?: React.CSSProperties;
  }

  interface Highlighter extends React.ComponentClass<IHighlighterProps> {
  }
  const Highlighter:Highlighter;

  export = Highlighter;
}
