export function unhideOnViewport({elementRef}: {elementRef: any}){
    /**
     * Place in useEffect(){}
     * Provide elementRef argument.
     * Define elementRef = useRef<HTMLParagraphElement>(null); first outside of useEffect()
     * assign the ref={elementRef} to the element of choosing
     */

    // First, we get the element from the ref
    const element = elementRef.current;

    if (element){
        // Next, we create an intersection observer instance
        const observer = new IntersectionObserver((entries) => {
            // The observer takes a callback function that is executed
            // whenever the target element (in this case, the element)
            // intersects with the viewport

            // We only want to do something if the element is intersecting
            // (i.e., is visible in the viewport)
            if (entries[0].isIntersecting === true) {
                // If the element is intersecting, we add a class to the element
                // that triggers an animation
                const classArray: Array<string> = [...element.classList];
                if (
                    !classArray.includes('animation-unhide-from-bottom') &&
                    !classArray.includes('animation-unhide')
                ){
                    if (element.offsetTop < (window.scrollY + window.innerHeight/2)){
                        // User scroll from bottom to top
                        element.classList.add('animation-unhide-from-bottom');
                    }else{
                        // User scroll from top to bottom
                        element.classList.add('animation-unhide');
                    }
                }
                
            }
        });

        // Finally, we start observing the element
        observer.observe(element);
    }
}
