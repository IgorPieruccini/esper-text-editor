import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Vector2 } from '../sharedTypes';
import './CommandPanel.scss';

/** max of attempts to filter a result before closing command panel */
const MAX_FILTER_ATTEMPT = 3;
interface CommandPanelProps {
    position: Vector2,
    commands: string[],
    onClose: ()=> void
}

export const CommandPanel = ({position, commands, onClose}: CommandPanelProps)=> {

    const [ commandText, setCommandText ] = useState<string>('');
    const [ filterAttempt, setFilterAttempt ] = useState(0);

    const filteredCommands = useMemo(()=> {
        const result = commands.filter(cmd => cmd.includes(commandText));
        if (result.length === 0) setFilterAttempt(old => old + 1);
        if (result.length > 0) setFilterAttempt(0); 
        return commands.filter(cmd => cmd.includes(commandText));
    }, [commandText])

    const onType = useCallback(()=> {
        const element = window.getSelection().focusNode.parentElement;
        const text = element.innerHTML;
                    
        if (!text.includes('/')) {
            onClose();
        }

        const regex = /\/\w+/g
        const commandText = text.match(regex);
        
        if (commandText) {
            if(commandText) {
                setCommandText(commandText[0]);
            }
        } else {
            setCommandText('');
        }
    }, [setCommandText])

    useEffect(()=> {
        window.addEventListener('keyup', onType);
        return ()=> window.removeEventListener('keyup', onType);
    }, [setCommandText])

    useEffect(()=> {
        if (filterAttempt >= MAX_FILTER_ATTEMPT) {
            onClose();
        }
    }, [filterAttempt])

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