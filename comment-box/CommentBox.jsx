/** @jsx React.DOM **/

'use strict'

var React = require('react')
var ReactDOM = require('react-dom')

var CommentBox = React.createClass({
	displayName: 'CommentBox',
	render: function () {
		return (
			<div className="commentBox">
				<CommentList />
				<CommentForm />
			</div>
		)
	}
})

var CommentList = React.createClass({
	displayName: 'CommentList',
	render: function () {
		return (
			<div className="commentList">
				<h1>Comments</h1>
				<Comment author="Tom Jones">Tom's comment</Comment>
				<Comment author="Pete Rose">Pete's comment</Comment>
			</div>
		)
	}
})

var CommentForm = React.createClass({
	displayName: 'CommentForm',
	render: function () {
		return (
			<div className="commentForm">
				Hello, world!  I am a CommentForm.
			</div>
		)
	}
})

var Comment = React.createClass({
	displayName: 'Comment',
	propTypes: {
	},
	render: function () {
		return (
			<div className="comment">
				<h2 className="commentAuthor">{ this.props.author }</h2>
				{ this.props.children }
			</div>
		)
	}
})

ReactDOM.render(
	<CommentBox />,
	document.getElementById('content')
)