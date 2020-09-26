import React from 'react';
import {Movie} from "../../services/MovieService";
import Field from "../Field";
import styles from './MovieForm.module.css';
import PrettyButton from "../PrettyButton";
import CategorySelector from "../CategorySelector";
import {MovieValidator} from "../../services/MovieValidator";
import {useFormik} from 'formik';
import DateInput from "../DateInput";

interface MovieFormProps {
    formType: string,
    initialMovie: Movie,
    submitHandler: (movie: Movie) => void
}

const MovieForm: React.FC<MovieFormProps> = ({formType, initialMovie, submitHandler}) => {

    const formik = useFormik({
        initialValues: initialMovie,
        validate: MovieValidator,
        onSubmit: submitHandler
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <h3>{formType} movie</h3>

            {formType === 'edit' &&
            <>
                <label>movie id</label>
                <div>{formik.values.id}</div>
            </>}

            <Field
                inputKey='title'
                label='title'
                type='text'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
                placeholder='enter title'
                error={formik.errors.title}/>

            <Field
                inputKey='overview'
                label='overview'
                type='text'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.overview}
                placeholder='enter overview'
                error={formik.errors.overview}/>

            <Field
                inputKey='runtime'
                label='runtime'
                type='number'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.runtime}
                placeholder='runtime text goes here'
                error={formik.errors.runtime}/>

            <DateInput
                startDate={formik.values.release_date}
                dateHandler={formik.setFieldValue}
            />

            <Field
                inputKey='poster_path'
                label='movie url'
                type='text'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.poster_path}
                placeholder='movie URL here'
                error={formik.errors.poster_path}/>

            <CategorySelector
                selectedCategories={formik.values.genres}
                chooseCategoryHandler={formik.setFieldValue}
            />

            <div className={styles.buttonsWrapper}>
                <div className={styles.buttonBalancer}>
                    <PrettyButton clickHandler={() => formik.resetForm()}
                                  text='reset'/>
                    <PrettyButton clickHandler={() => formik.handleSubmit()}
                                  text={formType === 'add' ? 'save' : 'submit'}/>
                </div>
            </div>
        </form>
    );

};

export default MovieForm;
