import React, { useEffect, useRef, useState } from 'react';
import { BlockContainer } from '../BlockContainer';
import { EsperBlock } from '../sharedTypes';
import './EditorContainer.scss';

export const EditorContainer = ()=> {

    const [ blocks, setBlocks ] = useState<Array<EsperBlock>>([]);
    const editorRef = useRef<HTMLDivElement>();
    const [ showCommandPanel, setShowCommandPanel ] = useState<{position: {x: number, y: number}} | null>();

    const addBlock = ()=> {
        setBlocks((old)=> [...old, { id: Math.random().toString()}])
    }

    const OnClickEditorContainer = ()=> {
        addBlock();
    }

    const openCommandPanel = (position: { x: number, y: number }) => {
        setShowCommandPanel({position});
    }

    useEffect(()=> {
        /** detect when user want to open the command panel */
        if (editorRef.current) {
            editorRef.current.addEventListener("keyup", (ev)=> {
                if (ev.key === "/") {
                    const element = window.getSelection().focusNode.parentElement;
                    const position = {x: element.offsetLeft, y: element.offsetHeight};
                    openCommandPanel(position);         
                }
            })
        }
        
    }, [editorRef.current])

    return (
        <div
            ref={editorRef}
            className='EditorContainer'
            onClick={OnClickEditorContainer}
            >
            Editor container
            { showCommandPanel && <div>commandPanel</div>}
            <div
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
    )
}
