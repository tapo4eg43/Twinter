import "./App.css"
import React, {Component} from "react";
import {AppHeader} from "../App-header/app-header";
import {SearchPanel} from "../Search-panel/search-panel";
import {PostList} from "../Post-list/post-list";
import styled from "styled-components";
import {PostAddForm} from "../Post-add-form/post-add-form";
import {PostListItem} from "../Post-list-item/post-list-item";

const Body = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Body>
          <AppHeader/>
          <SearchPanel/>
          {/*<PostListItem/>*/}
          <PostAddForm/>
        </Body>
    )
  }
}
