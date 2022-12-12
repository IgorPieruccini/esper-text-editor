import React from 'react';
import { Command } from "../sharedTypes";

export const baseCommands: Command[] = [
  {
    code: "/divider",
    render: <p>Divider</p>
  },
  {
    code: "/h1",
    render: <p>Heading 1</p>
  },
]