import React, {Component} from "react";
import './post-list-item.css';
import styled from "styled-components";

export class PostListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {text: "Going to learn React", star: false, id: 1},
                {text: "That is so good", star: false, id: 2},
                {text: "I need a break...", star: false, id: 3}
            ],
        };
    }

    this.setState({})

    render() {
        return (
            <>
                <ul className="app-list list-group">
                    <li className="list-group-item">
                        <div className="app-list-item d-flex justify-content-between important">
                            <span className="app-list-item-label">Text</span>
                            <div className="d-flex justify-content-end">
                                <button type="butoon" className="btn-star btn-sm">
                                    <i className="fa fa-star"></i>
                                </button>
                                <button type="button" className="btn-trash btn-sm">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="app-list-item d-flex justify-content-between important">
                            <span className="app-list-item-label">Text</span>
                            <div className="d-flex justify-content-end">
                                <button
                                    type="butoon"
                                    className="btn-star btn-sm"
                                >
                                    <i
                                        className="fa fa-star"
                                        onClick={this.star}
                                    ></i>
                                </button>
                                <button type="button" className="btn-trash btn-sm">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="app-list-item d-flex justify-content-between important">
                            <span className="app-list-item-label">Text</span>
                            <div className="d-flex justify-content-end">
                                <button type="butoon" className="btn-star btn-sm">
                                    <i className="fa fa-star"></i>
                                </button>
                                <button type="button" className="btn-trash btn-sm">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </>
        )
    }
}