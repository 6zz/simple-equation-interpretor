import { useEffect, useState } from 'react';
import styles from './Prompt.module.scss';

function Prompt() {
    const [equation, setEquation] = useState('');

    function clearClicked(e) {
        setEquation('');
    }

    function inputChanged(e) {
        setEquation(e.target.value);
    }

    useEffect(()=>{
        const toID = setTimeout(()=>{
            if (!equation) { return; }
            console.log('computing')
        }, 500);

        return () => {clearTimeout(toID)}
    }, [equation])

    return (
        <header className={styles.prompt}>
            <input className={styles.field} value={equation} placeholder="5 + 3" onChange={inputChanged}></input>
            <button type='button' onClick={clearClicked} className={styles.clear}>&#10008;</button>
        </header>
    ) 
}
export default Prompt;