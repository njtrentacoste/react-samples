/** @jsx React.DOM **/

'use strict'

var data = [
		{ author: 'Tom Jones', text: 'Tom\'s comment.' },
		{ author: 'Pete Rose', text: 'Pete\'s comment.' }
	],
	React = require('react'),
	ReactDOM = require('react-dom'),
	
	CommentBox = React.createClass({
		displayName: 'CommentBox',
		render: function () {
			return (
				<div className="commentBox">
					<CommentList data={ this.props.data } />
					<CommentForm />
				</div>
			);
		}
	}),
	
	CommentList = React.createClass({
		displayName: 'CommentList',
		render: function () {
			var commentNodes = this.props.data.map((comment) => {
				return (
					<Comment author={ comment.author }>
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
		displayName: 'CommentForm',
		render: function () {
			return (
				<div className="commentForm">
					Hello, world!  I am a CommentForm.
				</div>
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