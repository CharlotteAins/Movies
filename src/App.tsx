import React from 'react';
import HomePage from './components/HomePage';
import ModalEditMovie from './components/ModalEditMovie/ModalEditMovie';
import ModalAddMovie from './components/ModalAddMovie/ModalAddMovie';
import ModalDeleteMovie from './components/ModalDeleteMovie/ModalDeleteMovie';
import {useSelector} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage";
import ErrorPage from "./components/ErrorPage";

const App: React.FC = () => {
    const showDeletePopup = useSelector(state => state.app.showDeletePopup);
    const showEditPopup = useSelector(state => state.app.showEditPopup);
    const showAddPopup = useSelector(state => state.app.showAddPopup);

    return (
        <Router>
                {showDeletePopup && <ModalDeleteMovie/>}
                {showEditPopup && <ModalEditMovie/>}
                {showAddPopup && <ModalAddMovie/>}
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/search/:category/:sortBy/:search' component={HomePage}/>
                    <Route path='/film/:id' component={MovieDetailsPage}/>
                    <Route path='*' >
                        <ErrorPage/>
                    </Route>
                </Switch>
        </Router>
    );
};

export default App;
