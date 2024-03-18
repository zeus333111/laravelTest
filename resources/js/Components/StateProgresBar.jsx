import react, { useState } from "react";

export default function StatePrograsBar() {
    const states = ['creado', 'cocinando', 'Listo para entrega'];

    const [currentState, setCurrentState] = useState(0);

    const progressPercentage = (currentState / (states.leng -1)) * 100;

    const nextState = () => {
        if (currentState === states.leng -1) {
            setCurrentState(0);
        } else {
            setCurrentState(currentState + 1);
        }
    };

    return (
        <div>
            <div style={{ width: '100%', background: '#ddd'}}>
                <div style={{
                    height: '24px',
                    width: `${progressPercentage}%`,
                    backgroundColor: 'green',
                    transition: 'width 0.5s'
                }}
                />
            </div>
            <button onClick={ nextState }>Sigiente Estado</button>
            <p>Estado actual: {states[currentState]}</p>
        </div>
    );
}