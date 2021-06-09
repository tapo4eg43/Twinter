import React, {Component} from 'react';
import {Button, InputGroup, Input} from 'reactstrap';
import {PostListItem} from '../Post-list-item/post-list-item';

export class SearchPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    return(
        <>
            <div>
                <InputGroup>
                    <Input
                        type="text"
                        placeholder="Поиск по записям"
                    />
                    <Button color="info">Все</Button>
                    <Button color="info">Понравилось</Button>
                </InputGroup>
            </div>
        </>
    )
    }
}