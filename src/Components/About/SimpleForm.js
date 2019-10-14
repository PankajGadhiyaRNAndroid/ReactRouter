import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './Form.css';


const SimpleForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div className="mt-5">
                <label>First Name</label>
                <div>
                    <Field
                        className="form-control"
                        name="firstName"
                        component="input"
                        type="text"
                        placeholder="First Name"
                    />
                </div>
            </div>
            <div className="mt-3">
                <label>Last Name</label>
                <div>
                    <Field
                        className="form-control"
                        name="lastName"
                        component="input"
                        type="text"
                        placeholder="Last Name"
                    />
                </div>
            </div>
            <div className="mt-3">
                <label>Email</label>
                <div className="input-group mb-3">
                    <Field
                        className="form-control"
                        name="email"
                        component="input"
                        type="email"
                        placeholder="Email"
                    />
                    <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">@example.com</span>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <label>Sex</label>
                <div>
                    <label className="mr-4">
                        <Field name="sex" component="input" type="radio" value="male" />
                        {' '}
                        Male
                    </label>
                    <label>
                        <Field name="sex" component="input" type="radio" value="female" />
                        {' '}
                        Female
                    </label>
                </div>
            </div>
            <div className="mt-3">
                <label>Favorite Color</label>
                <div>
                    <Field name="favoriteColor" component="select">
                        <option />
                        <option value="ff0000">Red</option>
                        <option value="00ff00">Green</option>
                        <option value="0000ff">Blue</option>
                    </Field>
                </div>
            </div>
            <div className="input-group mb-3 mt-3">
                <label htmlFor="employed">Employed</label>

                <div className="input-group-append">
                    <Field
                        className="form-check-input ml-2 "
                        name="employed"
                        id="employed"
                        component="input"
                        type="checkbox"
                    />
                </div>
            </div>
            <div>
                <label>Notes</label>
                <div>
                    <Field className="foo form-control" name="notes" component="textarea" />
                </div>
            </div>
            <div className="mt-4">
                <button type="submit" className="btn btn-primary mr-4" disabled={pristine || submitting}>Submit</button>
                <button type="button" className="btn btn-primary" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
        </button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'simple', // a unique identifier for this form
})(SimpleForm);