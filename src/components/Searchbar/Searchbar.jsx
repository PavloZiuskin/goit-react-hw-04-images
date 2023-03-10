import PropTypes from 'prop-types';
import { Component } from "react";
import { SearchForm, Header, IconButton } from "components/Searchbar/SearchBar.styled";
import {FcSearch} from "react-icons/fc"

export class Searchbar extends Component {
    state = { 
        searchName: ''
    }

    handleInput = e => {
        this.setState({searchName: e.currentTarget.value.toLowerCase()})
    }
    handleSubmit = e => {
        
        e.preventDefault()
        const { searchName } = this.state;
        if (searchName.trim() === '') {
            return
        }
        this.props.onSubmit(searchName)
        
    }
    render() {
        return (<Header>
                <SearchForm onSubmit={this.handleSubmit}>
                    <IconButton>
                    <FcSearch/>
                    </IconButton>

                    <input
                        onChange={this.handleInput}
                        value={this.state.searchName}
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        />
                </SearchForm></Header>)}
}
Searchbar.propTypes = {
    onSubmit:PropTypes.func
}