import { useState } from 'react';

import PropTypes from 'prop-types';
import { Button, Form, Input } from './Searchbar_css';

export function Searchbar({onSearchMovie, onChange}) {

    const [searchName, setSearchName] = useState('');

    const handleChange = (e) => {
        setSearchName(e.currentTarget.value.toLowerCase());
    };

    const handleSearch = (e) => {
        e.preventDefault();

        if (searchName.trim() === '') {
            return;
        };

        onSearchMovie(searchName.trim());
        
        setSearchName('');
    }
        return (
                <Form  onSubmit={handleSearch}>
                    <Input
                        name='name'
                        value={searchName}
                        onChange={handleChange}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movies"
                    />

                    <Button type="submit" >
                        <span >Search</span>
                    </Button>
                </Form>
    )
}
    
Searchbar.propTypes = {
    onSub: PropTypes.func,
}