import React, { useEffect, useState } from 'react';
import { BlockContainer } from '../BlockContainer';
import { EsperBlock } from '../sharedTypes';
import './EditorContainer.scss';

export const EditorContainer = ()=> {

    const [ blocks, setBlocks ] = useState<Array<EsperBlock>>([]);

    const OnClickEditorContainer = ()=> {
        setBlocks((old)=> [...old, { id: Math.random().toString()}])
    }

    useEffect(()=> {
        // eslint-disable-next-line no-undef
        document.addEventListener('keypress', (ev: KeyboardEvent) => {
            if (ev.key === 'Enter') {
                setBlocks((old)=> [...old, { id: Math.random().toString()}])
            }
        });
    }, [])

    return (
        <div 
            className='EditorContainer'
            onClick={OnClickEditorContainer}
            >
            Editor container
            <div>
                {blocks.map((block)=> <BlockContainer key={block.id} {...block} />)}
            </div>
        </div>
    )
}