import React from 'react';
import { Frame, StyledForm, StyledInput, StyledButton, StyledLabel } from './form';

function Colek() {
    const [name, setName] = React.useState('');
    const [enabled, setEnabled] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // do something
        console.log(name);
    }

    const nameEntered = (e) => {
        setName(e.target.value);
        // buttonEnabled(username, password)
    }

    const buttonEnabled = (name) => {
        if(name.length > 0 ) {
            setEnabled(true);
        } else {
            setEnabled(false);
        }
    }

    return (
        <Frame>
            <StyledForm onSubmit={handleSubmit}>
                <StyledLabel>Name:</StyledLabel>
                <StyledInput type="text" value={name} onChange={e => nameEntered(e)}/>
                <StyledButton type="submit" disabled={!name}>Send</StyledButton>
            </StyledForm>
        </Frame>
    )
}

export { Colek };