import React from 'react';
import { EsperBlock } from '../sharedTypes';
import "./BlockContainer.scss";

type BlockContainerProps = EsperBlock & {
    // eslint-disable-next-line no-unused-vars
    onFocus: (id: string)=> void,
};

export const BlockContainer = ({ id, onFocus }: BlockContainerProps)=> {
    
    return (
        <div
            id={id}
            contentEditable={true}
            suppressContentEditableWarning={true}
            onClick={(e)=> {
                e.stopPropagation();
                onFocus(id);
            }}
            className='BlockContainer'
            />
        )
}
