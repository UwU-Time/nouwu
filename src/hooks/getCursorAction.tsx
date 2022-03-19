import { useState, useEffect } from 'react';

//hook to get the status of the cursor on change and return it to the parent component
export default function useCursorStatus() {
    const [cursorStatus, setCursorStatus] = useState('');

    useEffect(() => {
        function handleCursorChange() {
            setCursorStatus(cursorStatus);
        }

        document.addEventListener('grab' || 'grabbing', handleCursorChange);

        return () => {
            document.removeEventListener('grab' || 'grabbing', handleCursorChange);
        };
    });

    return cursorStatus;
}