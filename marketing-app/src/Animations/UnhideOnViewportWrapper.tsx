import React, { useRef, useEffect } from 'react';
import "Animations/animationsSimple.css"
import { unhideOnViewport } from './unhideOnViewport';


interface UnhideOnViewportWrapperInterface {
    children: React.ReactNode
}


const UnhideOnViewportWrapper = ({children}: UnhideOnViewportWrapperInterface) => {
    const viewportUnhideRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        unhideOnViewport({elementRef: viewportUnhideRef})
    })

    return (
        <div ref={viewportUnhideRef} className="animation-unhide-default">
            {children}
        </div>
    )
}

export default UnhideOnViewportWrapper;