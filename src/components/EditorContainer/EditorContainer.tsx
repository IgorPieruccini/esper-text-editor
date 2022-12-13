import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { BlockContainer } from '../BlockContainer';
import { CommandPanel } from '../CommandPanel';
import { baseCommands } from '../BaseCommands/BaseCommands';
import { Vector2 } from '../sharedTypes';
import './EditorContainer.scss';
import { UUID } from '../shared/utils';

export const EditorContainer = ()=> {

    const [ showCommandPanel, setShowCommandPanel ] = useState<{position: Vector2} | null>();
    const [ blocks, setBlocks ] = useState<Array<{id: string, element: ReactElement}>>([]);
    const editorRef = useRef<HTMLDivElement>();

    const addBlock = (element: ReactElement)=> {
        setBlocks((old)=> [...old, { id: UUID(), element }]);
    }

    const OnClickEditorContainer = ()=> {
        addBlock(<BlockContainer id={UUID()} />);
    }

    const openCommandPanel = (position: Vector2) => {
        setShowCommandPanel({position});
    }

    useEffect(()=> {
        /** detect when user want to open the command panel */
        if (editorRef.current) {
            editorRef.current.addEventListener('keyup', (ev)=> {
                if (ev.key === '/') {
                    const element = window.getSelection().focusNode.parentElement;
                    const position = {x: element.offsetLeft, y: element.offsetTop};
                    openCommandPanel(position);         
                }
            })
        }
        
    }, [editorRef.current])

    return (
        <div className='EditorContainer'>
            { showCommandPanel && 
                <CommandPanel 
                    {...showCommandPanel}
                    commands={baseCommands}
                    onClose={()=> setShowCommandPanel(null)}
                    onAddBlock={addBlock}
                    />
            }

            <div
                ref={editorRef}
                onClick={OnClickEditorContainer}
                >
                Editor container
            
                
                <div
                    className='editorTextArea'
                    id='editorTextArea'
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    >
                    { blocks.map(block => <div key={block.id}>{block.element}</div>) } 
                </div>

            </div>

        </div>
    )
}