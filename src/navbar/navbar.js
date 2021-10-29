

import React from 'react';
import { Button } from 'react-bootstrap';

function NavBar(props) {
    return (
        <div>
            <Button as="input" type="button" value="Input" />
            <Button as="input" type="submit" value="Submit" />
            
            <Button as="input" type="reset" value="Reset" />

        </div>
    );
}

export default NavBar;