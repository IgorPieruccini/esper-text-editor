import React from 'react';
import { EsperBlock } from '../sharedTypes';
import "./BlockContainer.scss";

type BlockContainerProps = EsperBlock;

export const BlockContainer = ({ id }: BlockContainerProps)=> {
    
    return (
        <div
            id={id}
            contentEditable={true}
            suppressContentEditableWarning={true}
            onClick={(e)=> {
                e.stopPropagation();
            }}
            className='BlockContainer'
            />
        )
}
