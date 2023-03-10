import PropTypes from 'prop-types';
import { useState } from "react";
import { SearchForm, Header, IconButton } from "components/Searchbar/SearchBar.styled";
import {FcSearch} from "react-icons/fc"

export const Searchbar = ({onSubmit}) => {
    const[searchName, setSearchName]=useState('')


    const handleInput = e => {
        setSearchName( e.currentTarget.value.toLowerCase())
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (searchName.trim() === '') {
            return
        }
        onSubmit(searchName)
    }
        return (<Header>
                <SearchForm onSubmit={handleSubmit}>
                    <IconButton>
                    <FcSearch/>
                    </IconButton>

                    <input
                        onChange={handleInput}
                        value={searchName}
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        />
                </SearchForm></Header>)}
Searchbar.propTypes = {
    onSubmit:PropTypes.func
}