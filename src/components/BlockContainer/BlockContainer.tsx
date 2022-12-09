import React, { useEffect, useRef } from 'react';
import { EsperBlock } from '../sharedTypes';
import "./BlockContainer.scss";

type BlockContainerProps = EsperBlock;

export const BlockContainer = ({ id }: BlockContainerProps)=> {
    
    const ref = useRef<HTMLDivElement>();

    useEffect(()=> {
        if (ref.current) {
            ref.current.focus();
            setTimeout(()=>  ref.current.removeChild(ref.current.childNodes[0]) , 1);
        }
    }, [])

    return (
        <div
            id={id}
            ref={ref}
            contentEditable={true}
            suppressContentEditableWarning={true}
            onClick={(e)=> e.stopPropagation() }
            className='BlockContainer'
            />
    )
}