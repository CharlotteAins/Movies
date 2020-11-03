import React from 'react';
import { useSelector } from 'react-redux';
import ModalAddMovie from './components/ModalAddMovie/ModalAddMovie';
import ModalDeleteMovie from './components/ModalDeleteMovie/ModalDeleteMovie';
import ModalEditMovie from './components/ModalEditMovie/ModalEditMovie';

const App: React.FC = ( { children } ) => {
    const showDeletePopup = useSelector( ( state ) => state.app.showDeletePopup );
    const showEditPopup = useSelector( ( state ) => state.app.showEditPopup );
    const showAddPopup = useSelector( ( state ) => state.app.showAddPopup );

    return (
        <>
            {showDeletePopup && <ModalDeleteMovie />}
            {showEditPopup && <ModalEditMovie />}
            {showAddPopup && <ModalAddMovie />}
            {children}
        </>
    );
};

export default App;
