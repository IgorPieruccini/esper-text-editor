import React, { useRef, useState } from 'react';
import { BlockContainer } from '../BlockContainer';
import { EsperBlock } from '../sharedTypes';
import './EditorContainer.scss';

export const EditorContainer = ()=> {

    const [ blocks, setBlocks ] = useState<Array<EsperBlock>>([]);
    const focusOn  = useRef<string | null>(null);

    const addBlock = ()=> {
        setBlocks((old)=> [...old, { id: Math.random().toString()}])
    }

    const OnClickEditorContainer = ()=> {
        addBlock();
    }

    const OnBlockFocus = (id: string)=> {
        focusOn.current = id;
    }
    
    return (
        <div
            className='EditorContainer'
            onClick={OnClickEditorContainer}
            >
            Editor container
            <div
                contentEditable={true}
                suppressContentEditableWarning={true}
            >
                { blocks.map((block)=> 
                    <BlockContainer
                        key={block.id}
                        onFocus={OnBlockFocus}
                        {...block} 
                    />
                )}
            </div>
        </div>
    )
}
