import React, { useEffect, useMemo, useState } from 'react';
import { Vector2 } from '../sharedTypes';
import './CommandPanel.scss';

interface CommandPanelProps {
    position: Vector2,
    commands: string[],
}

export const CommandPanel = ({position, commands}: CommandPanelProps)=> {

    const [ commandText, setCommandText ] = useState<string>('');

    const filteredCommands = useMemo(()=> {
        return commands.filter(cmd => cmd.includes(commandText));
    }, [commandText])

    useEffect(()=> {
        window.addEventListener('keyup', ()=> {
            const element = window.getSelection().focusNode.parentElement;
            const text = element.innerHTML;
            if (text === '/') return;
            const regex = /\/\w+/g
            const commandText = text.match(regex);
            if (commandText) {
                if(commandText) {
                    setCommandText(commandText[0]);
                }
            } else {
                setCommandText('');
            }
        });
    }, [setCommandText])

    return (
        <div
            style={{top: position.y, left: position.x}}
            className='CommandPanel'
            >
            
            <div className='commandList'>
                { filteredCommands.map((cmd) => {
                    return (
                        <div
                            key={cmd}
                            className='commandOption'
                            >
                            {cmd}
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}