import React, {Component} from 'react';
import './post-add-form.css'
import clsx from "clsx";

export class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {label: "Это был крутой день", star: false, id: 1},
                {label: "Саня наконец помог мне исправить ошибку!", star: false, id: 2}
            ], value: ''
        };
    }

    addItem = event => {
        this.state.items.push({label: this.state.value, star: false, id: Date.now()});
        this.setState({items: this.state.items});
        event.preventDefault();

    };

    handleChange = event => {
        this.setState({value: event.target.value});
    };

    render() {

        const list = this.state.items.map((item) => {
            return <li
                className="list-group-item"
                key={item.id}>
                <div className="app-list-item d-flex justify-content-between">
                <span className="app-list-item-label">{item.label}
                </span>
                    <div className="d-flex justify-content-end">
                        <button
                            type="butoon"
                            className="btn-star btn-sm"
                            onClick={e => {
                                item.star = !item.star;
                                this.setState({...this.state});
                            }}
                        >
                            <i className={clsx("fa fa-star post-like-btn", {
                                "post-like-btn--liked": item.star,
                            })}/>
                        </button>
                        <button type="button" className="btn-trash btn-sm">
                            <i className="fa fa-trash"/>
                        </button>
                    </div>
                </div>
            </li>;
        })
        return (
            <>
                <ul className="app-list list-group">
                    {list}
                </ul>
                <form
                    className="bottom-panel d-flex"
                    onSubmit={this.addItem}>
                    <input
                        type="text"
                        placeholder="О чем вы думаете сейчас?"
                        className="form-control new-post-label"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <input type="submit" сlassName="btn btn-outline-secondary"/>
                </form>
            </>
        )
    }
}
