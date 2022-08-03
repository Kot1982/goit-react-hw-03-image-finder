import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Searchbar extends React.Component {
    state = {
        name: '',
    }

    handleChange = event => {
           
        this.setState({ name: event.currentTarget.value.toLowerCase()});
    };
    
    handleSubmit = event => {
        event.preventDefault();
        if (this.state.name.trim() === '') {
            toast.error('Enter image name');
            return;
        }
    this.props.onSubmit(this.state.name);
    this.reset();
  };

    reset = () => {
    this.setState({ name: ''});
  };
    render() {
        return (
            <header>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">
                        <span>Search</span>
                    </button>

                    <input
                        onChange={this.handleChange}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}