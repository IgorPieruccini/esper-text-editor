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
    block: <Block.Header1/>
  },
  {
    code: '/h2',
    render: <Header2/>,
    block: <Block.Header2/>
  },
  {
    code: '/h3',
    render: <Header3/>,
    block: <Block.Header3/>
  },
]