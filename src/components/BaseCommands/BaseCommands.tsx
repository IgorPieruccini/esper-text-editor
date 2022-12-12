import React from 'react';
import { Command } from "../sharedTypes";
import { Divider, Header1, Header2, Header3 } from './components';

export const baseCommands: Command[] = [
  {
    code: '/divider',
    render: <Divider/>
  },
  {
    code: '/h1',
    render: <Header1/>
  },
  {
    code: '/h2',
    render: <Header2/>
  },
  {
    code: '/h2',
    render: <Header3/>
  },
]