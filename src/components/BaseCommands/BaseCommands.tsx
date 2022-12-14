import React from 'react';
import { Command } from "../sharedTypes";
import Block from './Blocks';
import { Divider, Header1, Header2, Header3 } from './components';

export const baseCommands: Command[] = [
  {
    code: '/divider',
    render: <Divider/>,
    block: <Block.Divider />
  },
  {
    code: '/h1',
    render: <Header1/>,
    block: <p>Header1</p>
  },
  {
    code: '/h2',
    render: <Header2/>,
    block: <p>Header2</p>
  },
  {
    code: '/h3',
    render: <Header3/>,
    block: <p>Header3</p>
  },
]