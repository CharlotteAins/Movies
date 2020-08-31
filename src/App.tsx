import React, {useState} from 'react';
import HomePage from './components/HomePage';
import ModalEditMovie from './components/ModalEditMovie/ModalEditMovie';
import ModalAddMovie from './components/ModalAddMovie/ModalAddMovie';
import ModalDeleteMovie from './components/ModalDeleteMovie/ModalDeleteMovie';
import Context from './services/Context';
import {MovieService} from './services/MovieService';

const App: React.FC = () => {
    const [showDeletePopup, setDeletePopupState] = useState(false);
    const [showEditPopup, setEditPopupState] = useState(false);
    const [showAddPopup, setAddPopupState] = useState(false);
    const [processingMovieId, setProcessingMovieId] = useState(0);

    const deleteHandler = () => {
        MovieService.deleteMovie(processingMovieId);
        setDeletePopupState(false);
    };

    const handleDeletePopup = () => {
        setDeletePopupState((prevState) => !prevState);
    };

    const handleEditPopup = () => {
        setEditPopupState((prevState) => !prevState);
    };

    const handleAddPopup = () => {
        setAddPopupState((prevState) => !prevState);
    };

    const setMovieId = (id: number) => {
        setProcessingMovieId(id);
    };

    return (
        <Context.Provider value={{handleDeletePopup, handleEditPopup, handleAddPopup, setMovieId, processingMovieId}}>
            {showDeletePopup && <ModalDeleteMovie deleteHandler={deleteHandler}/>}
            {showEditPopup && <ModalEditMovie />}
            {showAddPopup && <ModalAddMovie/>}
            <HomePage/>
        </Context.Provider>
    );
};

export default App;
