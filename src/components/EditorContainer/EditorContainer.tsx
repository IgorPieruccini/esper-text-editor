import React, { useEffect, useRef, useState } from 'react';
import { BlockContainer } from '../BlockContainer';
import { CommandPanel } from '../CommandPanel';
import { EsperBlock, Vector2 } from '../sharedTypes';
import './EditorContainer.scss';

export const EditorContainer = ()=> {

    const [ showCommandPanel, setShowCommandPanel ] = useState<{position: Vector2} | null>();
    const [ blocks, setBlocks ] = useState<Array<EsperBlock>>([]);
    const editorRef = useRef<HTMLDivElement>();

    const addBlock = ()=> {
        setBlocks((old)=> [...old, { id: Math.random().toString()}])
    }

    const OnClickEditorContainer = ()=> {
        addBlock();
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
                    commands={['/divider', '/h3']}
                    onClose={()=> setShowCommandPanel(null)}
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
                    { blocks.map((block)=> 
                        <BlockContainer
                            key={block.id}
                            {...block} 
                        />
                    )}
                </div>

            </div>

        </div>
    )
}
