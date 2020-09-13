import React, {useState} from 'react';
import HomePage from './components/HomePage';
import ModalEditMovie from './components/ModalEditMovie/ModalEditMovie';
import ModalAddMovie from './components/ModalAddMovie/ModalAddMovie';
import ModalDeleteMovie from './components/ModalDeleteMovie/ModalDeleteMovie';
import Context from './services/Context';
import {MovieService} from './services/MovieService';
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage";
import {useToggle} from "./services/UtilHooks";

const App: React.FC = () => {
    const [showDeletePopup, setDeletePopupState] = useToggle();
    const [showEditPopup, setEditPopupState] = useToggle();
    const [showAddPopup, setAddPopupState] = useToggle();
    const [processingMovieId, setProcessingMovieId] = useState(0);

    const deleteHandler = () => {
        MovieService.deleteMovie(processingMovieId);
        setDeletePopupState(false);
    };

    const handleDeletePopup = () => {
        setDeletePopupState();
    };

    const handleEditPopup = () => {
        setEditPopupState();
    };

    const handleAddPopup = () => {
        setAddPopupState();
    };

    const setMovieId = (id: number) => {
        setProcessingMovieId(id);
    };

    return (
        <Context.Provider value={{handleDeletePopup, handleEditPopup, handleAddPopup, setMovieId, processingMovieId}}>
            {showDeletePopup && <ModalDeleteMovie deleteHandler={deleteHandler}/>}
            {showEditPopup && <ModalEditMovie />}
            {showAddPopup && <ModalAddMovie/>}
            {/*<HomePage/>*/}
            <MovieDetailsPage movieId={processingMovieId}/>
        </Context.Provider>
    );
};

export default App;
