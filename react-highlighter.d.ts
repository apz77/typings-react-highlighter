/// <reference path="typings/main.d.ts" />


declare module reactHighlighter {
  import * as React from "react";

  interface IHighlighterProps extends React.Props<Highlighter> {
    search: string | number | boolean;
    caseSensitive?: boolean;
    matchElement?: string;
    matchClass?: string;
    matchStyle?: React.CSSProperties;
  }

  //interface Highlighter extends React.ComponentClass<IHighlighterProps> {
  //}
  //export const Highlighter:Highlighter;
  export class Highlighter extends React.Component<IHighlighterProps, {}> {
  }

}

export = reactHighlighter;
