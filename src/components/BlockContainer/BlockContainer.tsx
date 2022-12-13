import React from 'react';
import "./BlockContainer.scss";

type BlockContainerProps = {
    id: string
};

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
