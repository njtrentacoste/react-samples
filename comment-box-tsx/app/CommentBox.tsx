/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="../typings/redux/redux.d.ts" />
/// <reference path="./interfaces.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { IComments, ICommentProp, ICommentState } from './interfaces';

var comments = [
	{ id: 1, name: 'Tom Jones', text: 'Tom\'s comment.' },
	{ id: 2, name: 'Pete Rose', text: 'Pete\'s comment.' }
]

class CommentBox extends React.Component<IComments, {}>{
	constructor(props: IComments) {
		super(props);
	}
	render() {
		return (
			<div className="commentBox">
				<CommentList comments={ this.props.comments } />
				<CommentForm />
			</div>
		)
	}
}

class CommentList extends React.Component<IComments, {}>{
	constructor(props: IComments) {
		super(props);
	}
	render() {
		return (
			<div className="commentList">
				<h1>Comments</h1>
				{
					this.props.comments.map((comment: ICommentProp, index: number) => {
						return (
							<CommentElement key={ index } id={ comment.id } name={ comment.name } text={ comment.text } />
						);
					})
				}
			</div>
		)
	}
}

class CommentForm extends React.Component<any, ICommentState> {
	constructor() {
		super();
		this.state = { name: '', text: '' };
	}
	nameChanged = (evt) => {
		this.setState({ name: evt.target.value, text: this.state.text });
	}
	commentChanged = (evt) => {
		this.setState({ name: this.state.name, text: evt.target.value });
	}
	addComment = (evt) => {
		
	}
	render() {
		return (
			<div className="commentForm">
				Hello, world!I'm a CommentForm.
				<label>Name: </label>
				<input value={ this.state.name } onChange={ evt => this.nameChanged(evt) } />
				<label>Comment: </label>
				<textarea value={ this.state.text } onChange={ evt => this.commentChanged(evt) } />
				<button onClick={ evt => this.addComment(evt) }>Add Comment</button>
			</div>
		)
	}
}

export class CommentElement extends React.Component<ICommentProp, {}>{
	constructor(props: ICommentProp) {
		super(props);
	}
	render() {
		return (
			<div className="comment">
				<h2 className="commentAuthor">{ this.props.name }</h2>
				{ this.props.text }
			</div>
		)
	}
}

class CommentCreator(state, action) {
	private initialState = {
		name: '',
		text: ''
	};
	
	constructor() {}
	
}

ReactDOM.render(
	<CommentBox comments={ comments } />,
	document.getElementById('content')
);