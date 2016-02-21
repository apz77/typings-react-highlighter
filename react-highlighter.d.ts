/// <reference path="typings/main.d.ts" />

declare module hightlighter {
  import * as React from "react";

  export interface IHighlighterProps {
    search: string | number | boolean;
    caseSensitive?: boolean;
    matchElement?: string;
    matchClass?: string;
    matchStyle?: React.CSSProperties;
  }

  export class Highlighter extends React.Component<IHighlighterProps, {}> {
  }
}

export = hightlighter;
