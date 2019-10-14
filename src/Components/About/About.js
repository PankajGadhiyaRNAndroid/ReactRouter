import React from 'react';

import showResults from "../AppRedux/showResults";
import SimpleForm from "./SimpleForm";
// import { Values } from "redux-form-website-template";


class About extends React.Component {

    render() {
        return (
            <div style={{ padding: 15 }}>
                <h2>Simple Form</h2>
                <SimpleForm onSubmit={getValue} 
                />
                {/* <Values form="simple" /> */}
            </div>
        )
    }
}

async function getValue(values) {
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
}

export default About;