/** @jsx React.DOM **/

'use strict'

var data = [
		{ id: 1, author: 'Tom Jones', text: 'Tom\'s comment.' },
		{ id: 2, author: 'Pete Rose', text: 'Pete\'s comment.' }
	],
	React = require('react'),
	ReactDOM = require('react-dom'),

	CommentBox = React.createClass({
		handleCommentFormSubmit: (comment) => {
			comment.id = this.props.data[this.props.data.length - 1].id + 1;
			this.props.data.push(comment);
			this.setState({ data: this.props.data });
		},
		displayName: 'CommentBox',
		render: function () {
			return (
				<div className="commentBox">
					<CommentList data={ this.props.data } />
					<CommentForm onCommentSubmit={ this.handleCommentFormSubmit }/>
				</div>
			);
		}
	}),

	CommentList = React.createClass({
		displayName: 'CommentList',
		render: function () {
			var commentNodes = this.props.data.map((comment) => {
				return (
					<Comment key={ comment.id } author={ comment.author }>
						{ comment.text }
					</Comment>
				);
			});

			return (
				<div className="commentList">
					<h1>Comments</h1>
					{ commentNodes }
				</div>
			);
		}
	}),

	CommentForm = React.createClass({
		getInitialState: () => {
			return { author: '', text: '' };
		},
		handleAuthorChange: (evt) => {
			this.setState({ author: evt.target.value });
		},
		handleTextChange: (evt) => {
			this.setState({ text: evt.target.value });
		},
		handleSubmit: (evt) => {
			evt.preventDefault();
			var comment = {
				author: this.state.author.trim(),
				text: this.state.text.trim()
			}

			this.props.onCommentSubmit(comment);

			this.setState({ author: '', text: '' });
		},
		displayName: 'CommentForm',
		render: function () {
			return (
				<form className="commentForm" onSubmit={ this.handleSubmit }>
					<input type="text" placeholder="Your name" value={ this.state.author } onChange={ this.handleAuthorChange } />
					<input type="text" placeholder="Say something..." value={ this.state.text } onChange={ this.handleTextChange } />
					<input type="submit" value="Post" />
				</form>
			);
		}
	}),

	Comment = React.createClass({
		displayName: 'Comment',
		render: function () {
			return (
				<div className="comment">
					<h2 className="commentAuthor">{ this.props.author }</h2>
					{ this.props.children }
				</div>
			);
		}
	});

ReactDOM.render(
	<CommentBox data={ data } />,
	document.getElementById('content')
)