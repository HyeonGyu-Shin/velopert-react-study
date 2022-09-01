import React, { useState, createContext, useMemo, useContext } from 'react';

const ModalValueContext = createContext();
const ModalActionsContext = createContext();

const ModalProvider = ({ children }) => {
    const [modal, setModal] = useState({
        visible: false,
        message: '',
    });

    const actions = useMemo(
        () => ({
            open(message) {
                setModal({
                    visible: true,
                    message,
                });
            },
            close() {
                setModal((prev) => ({
                    ...prev,
                    visible: false,
                }));
            },
        }),
        []
    );

    return (
        <ModalActionsContext.Provider value={actions}>
            <ModalValueContext.Provider value={modal}>
                {children}
            </ModalValueContext.Provider>
        </ModalActionsContext.Provider>
    );
};

function useModalValue() {
    const value = useContext(ModalValueContext);
    if (value === undefined) {
        throw new Error('useModalValue should be used within ModalProvider');
    }
    return value;
}

function useModalActions() {
    const value = useContext(ModalActionsContext);
    if (value === undefined) {
        throw new Error('useModalActions should be used within ModalProvider');
    }
    return value;
}

function Open() {
    const { open } = useModalActions();

    return <button onClick={open}>button</button>;
}

const ModalContextExample = () => {
    return (
        <div>
            <ModalProvider>
                <Open />
            </ModalProvider>
        </div>
    );
};

export default ModalContextExample;
