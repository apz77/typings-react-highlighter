/// <reference path="typings/main.d.ts" />

import * as React from "react";

declare module reactHighlighter {

  interface IHighlighterProps extends React.Props<Highlighter> {
    search: string | number | boolean;
    caseSensitive?: boolean;
    matchElement?: string;
    matchClass?: string;
    matchStyle?: React.CSSProperties;
  }

  interface Highlighter extends React.ComponentClass<IHighlighterProps> {
  }
  export default Highlighter;

}

export = reactHighlighter;
