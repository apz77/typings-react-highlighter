/// <reference path="typings/main.d.ts" />
/// <reference path="react-highlighter.d.ts" />
import * as React from "react";
import {Highlighter} from "react-highlighter";

function highlighter() {
  return (
    <Highlighter
      search="world">
      hello, world
    </Highlighter>
  );
}
