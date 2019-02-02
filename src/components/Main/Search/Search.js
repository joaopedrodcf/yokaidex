import React, { Component } from 'react';

export default class Search extends Component {
    render() {
        const { handleText, name } = this.props;
        return (
            <>
                <label htmlFor="name">
                    <h2>Find your yo-kai</h2>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleText}
                />
            </>
        );
    }
}
