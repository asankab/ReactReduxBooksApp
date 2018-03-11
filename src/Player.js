import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WithLinkHOC from './components/hoc/WithToolTipHOC'
import SimpleLink from './components/SimpleLink'
import TextEntry from './components/TextEntry'
import Button from "./components/Button";
import BookContainer from './components/bookContainer'
import Book from "./components/Book"

class App extends Component {

    constructor(){
        super()

        this.textConfig = {
            "id": 1,
            "placeHolderText": "Type your answer here...",
            "CssClassName": ""
        }

        this.saveButtonConfig = {
            "id": 2,
            "buttonText": "Save",
            "CssClassName": "",
            "disabled": "disabled"
        }

        this.submitButtonConfig = {
            "id": 3,
            "buttonText": "Submit",
            "CssClassName": "",
            "disabled": "disabled"
        }

        this.onSave = this.onSave.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.posts = [
            {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
            {
                "userId": 1,
                "id": 2,
                "title": "qui est esse",
                "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            }];
    }

    onSave(){
        alert('Save Clicked')
    }

    onSubmit(){
        alert('Submit Clicked')
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        </p>
          <div>
              <Book posts={[]} isFetching={false} />
          </div>
      </div>
    );
  }
}

export default App;