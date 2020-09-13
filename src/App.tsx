import React, {useState} from 'react';
import HomePage from './components/HomePage';
import ModalEditMovie from './components/ModalEditMovie/ModalEditMovie';
import ModalAddMovie from './components/ModalAddMovie/ModalAddMovie';
import ModalDeleteMovie from './components/ModalDeleteMovie/ModalDeleteMovie';
import Context from './services/Context';
import {useSelector} from 'react-redux'

const App: React.FC = () => {
    const showDeletePopup = useSelector(state => state.app.showDeletePopup);
    const showEditPopup = useSelector(state => state.app.showEditPopup);
    const showAddPopup = useSelector(state => state.app.showAddPopup);
    const [processingMovieId, setProcessingMovieId] = useState(0);

    const setMovieId = (id: number) => {
        setProcessingMovieId(id);
    };

    return (
        <Context.Provider value={{setMovieId, processingMovieId}}>
            {showDeletePopup && <ModalDeleteMovie />}
            {showEditPopup && <ModalEditMovie />}
            {showAddPopup && <ModalAddMovie/>}
            <HomePage/>
            {/*<MovieDetailsPage />*/}
        </Context.Provider>
    );
};

export default App;
