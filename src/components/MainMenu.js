import { useEffect, useRef } from "react";

export function MainMenu(props) {
    let ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
           props.onClickOutside && props.onClickOutside();
        }
    };

    
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    if (!props.show) return null;
    
    return (
        <div ref={ref} className='dd-menu'>
            {props.menu}
        </div>
    );
}