import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Command, Vector2 } from '../sharedTypes';
import './CommandPanel.scss';

/** max of attempts to filter a result before closing command panel */
const MAX_FILTER_ATTEMPT = 3;
interface CommandPanelProps {
    position: Vector2,
    commands: Command[],
    onClose: ()=> void,
    // eslint-disable-next-line no-unused-vars
    onAddBlock: (block: React.ReactElement)=> void,
}

export const CommandPanel = ({position, commands, onClose, onAddBlock}: CommandPanelProps)=> {
    
    const [ commandText, setCommandText ] = useState<string>('');
    const [ selectedCommand, setSelectedCommand ] = useState(0);
    const [ filterAttempt, setFilterAttempt ] = useState(0);
    
    const filteredCommands = useMemo(()=> {
        const result = commands.filter(cmd => cmd.code.includes(commandText));
        if (result.length === 0) setFilterAttempt(old => old + 1);
        if (result.length > 0) setFilterAttempt(0); 
        return commands.filter(cmd => cmd.code.includes(commandText));
    }, [commandText])

    const onKeyDown = useCallback((ev: KeyboardEvent)=> {
        if (ev.key === 'ArrowDown') {
            ev.preventDefault();
            setSelectedCommand((old) => {
                return old + 1 < commands.length ? old + 1 : old
            })
            return;
        }

        if (ev.key === 'ArrowUp') {
            ev.preventDefault();
            setSelectedCommand((old) => {
                return old -1 >= 0 ? old -1 : old
            })
            return;
        }

        if (ev.key === 'Enter') {
            ev.preventDefault();
            
            const command = commands[selectedCommand];
            if (!command) throw `Error adding a command`;

            onAddBlock(command.block);
            onClose();
            return;
        }
    },[]);

    const onKeyUp = useCallback((ev: KeyboardEvent)=> {

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
        window.addEventListener('keyup', onKeyUp);
        window.addEventListener('keydown', onKeyDown);
        return ()=> {
            window.removeEventListener('keyup', onKeyUp)
            window.removeEventListener('keydown', onKeyDown)
        }
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
                { filteredCommands.map((cmd, i) => {
                    const optionSelected = i === selectedCommand;
                    return (
                        <div
                            key={cmd.code}
                            className={`commandOption ${optionSelected ? 'selected' : ''}`}
                            >
                            {cmd.render}
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}