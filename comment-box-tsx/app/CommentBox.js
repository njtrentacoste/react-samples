/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="./interfaces.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactDOM = require('react-dom');
var comments = [
    { id: 1, name: 'Tom Jones', text: 'Tom\'s comment.' },
    { id: 2, name: 'Pete Rose', text: 'Pete\'s comment.' }
];
var CommentBox = (function (_super) {
    __extends(CommentBox, _super);
    function CommentBox(props) {
        _super.call(this, props);
    }
    CommentBox.prototype.render = function () {
        return (React.createElement("div", {"className": "commentBox"}, React.createElement(CommentList, {"comments": this.props.comments})));
    };
    return CommentBox;
})(React.Component);
var CommentList = (function (_super) {
    __extends(CommentList, _super);
    function CommentList(props) {
        _super.call(this, props);
    }
    CommentList.prototype.render = function () {
        return (React.createElement("div", {"className": "commentList"}, React.createElement("h1", null, "Comments"), this.props.comments.map(function (comment, index) {
            return (React.createElement(CommentElement, {"key": index, "id": comment.id, "name": comment.name, "text": comment.text}));
        })));
    };
    return CommentList;
})(React.Component);
// class CommentForm extends React.Component<any, ICommentState> {
// 	private initialState = {
// 		name: '',
// 		text: ''
// 	};
// 	
// 	constructor() {
// 		super();
// 		this.state = { name: '', text: '' };
// 	}
// 	nameChanged = (evt) => {
// 		this.setState({ name: evt.target.value, text: this.state.text });
// 	}
// 	commentChanged = (evt) => {
// 		this.setState({ name: this.state.name, text: evt.target.value });
// 	}
// 	render() {
// 		return (
// 			<div className="commentForm">
// 				Hello, world!I'm a CommentForm.
// 				<label>Name: </label>
// 				<input value={ this.state.name } onChange={ evt => this.nameChanged(evt) } />
// 				<label>Comment: </label>
// 				<input value={ this.state.text } onChange={ evt => this.commentChanged(evt) }/>
// 			</div>
// 		)
// 	}
// }
var CommentElement = (function (_super) {
    __extends(CommentElement, _super);
    function CommentElement(props) {
        _super.call(this, props);
    }
    CommentElement.prototype.render = function () {
        return (React.createElement("div", {"className": "comment"}, React.createElement("h2", {"className": "commentAuthor"}, this.props.name), this.props.text));
    };
    return CommentElement;
})(React.Component);
exports.CommentElement = CommentElement;
ReactDOM.render(React.createElement(CommentBox, {"comments": comments}), document.getElementById('content'));
