import React, {Component} from 'react';
import './post-add-form.css'
import {PostListItem} from '../Post-list-item/post-list-item';

export class PostAddForm extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <form
                className="bottom-panel d-flex"
            >
                <input
                    type="text"
                    placeholder="О чем вы думаете сейчас?"
                    className="form-control new-post-label"
                />
                <button type="submit" className="btn btn-outline-secondary" onClick={this.addItem}>Добавить</button>
            </form>
        )
    }
}