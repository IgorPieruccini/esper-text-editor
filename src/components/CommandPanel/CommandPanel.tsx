import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Command, Vector2 } from '../sharedTypes';
import './CommandPanel.scss';

/** max of attempts to filter a result before closing command panel */
const MAX_FILTER_ATTEMPT = 3;
interface CommandPanelProps {
    position: Vector2,
    commands: Command[],
    onClose: ()=> void
}

export const CommandPanel = ({position, commands, onClose}: CommandPanelProps)=> {

    const [ commandText, setCommandText ] = useState<string>('');
    const [ filterAttempt, setFilterAttempt ] = useState(0);

    const filteredCommands = useMemo(()=> {
        const result = commands.filter(cmd => cmd.code.includes(commandText));
        if (result.length === 0) setFilterAttempt(old => old + 1);
        if (result.length > 0) setFilterAttempt(0); 
        return commands.filter(cmd => cmd.code.includes(commandText));
    }, [commandText])

    const onType = useCallback((ev: KeyboardEvent)=> {
        if (ev.key === 'Escape') {
            onClose();
            return;
        }

        const element = window.getSelection().focusNode.parentElement;

        if (element.id === 'editorTextArea') {
            onClose();
            return;
        }

        const text = element.innerHTML;

        if (!text.includes('/')) {
            onClose();
            return;
        }

        const allCommands = text.split('/');
        if (allCommands.length === 0) return;

        const lastCommandText = `/${allCommands[allCommands.length -1]}`;

        if (lastCommandText) {
            if(lastCommandText) {
                setCommandText(lastCommandText);
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
                            key={cmd.code}
                            className='commandOption'
                            >
                            {cmd.render}
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}