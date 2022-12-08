import React, { useState } from 'react';
import { EsperBlock } from '../sharedTypes';
import './EditorContainer.scss';

export const EditorContainer = ()=> {

    const [ blocks, setBlocks ] = useState<Array<EsperBlock>>([]);

    const OnClickEditorContainer = ()=> {
        setBlocks((old)=> [...old, { id: Math.random().toString()}])
    }

    return (
        <div 
            className='EditorContainer'
            onClick={OnClickEditorContainer}
            >
            Editor container
            <div>
                {blocks.map((block)=> <p key={block.id}>new block: {block.id}</p>)}
            </div>
        </div>
    )
}

/**
 * 
 * if the user clicks at the container
 * create a block
 * 
 */