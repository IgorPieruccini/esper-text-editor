import React from 'react';
import { EsperBlock } from '../sharedTypes';

type BlockContainerProps = EsperBlock;

export const BlockContainer = ({ id }: BlockContainerProps)=> {
        
    return (
        <div
            contentEditable={true}
            suppressContentEditableWarning={true}
            onClick={(e)=> e.stopPropagation() }
            className='BlockContainer'
            >
                Block container: { id }
            </div>
    )
}