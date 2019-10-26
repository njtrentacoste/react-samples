/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="../typings/redux/redux.d.ts" />
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
        return (React.createElement("div", {"className": "commentBox"}, React.createElement(CommentList, {"comments": this.props.comments}), React.createElement(CommentForm, null)));
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
var CommentForm = (function (_super) {
    __extends(CommentForm, _super);
    function CommentForm() {
        var _this = this;
        _super.call(this);
        this.nameChanged = function (evt) {
            _this.setState({ name: evt.target.value, text: _this.state.text });
        };
        this.commentChanged = function (evt) {
            _this.setState({ name: _this.state.name, text: evt.target.value });
        };
        this.addComment = function (evt) {
        };
        this.state = { name: '', text: '' };
    }
    CommentForm.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", {"className": "commentForm"}, "Hello, world!I'm a CommentForm.", React.createElement("label", null, "Name: "), React.createElement("input", {"value": this.state.name, "onChange": function (evt) { return _this.nameChanged(evt); }}), React.createElement("label", null, "Comment: "), React.createElement("textarea", {"value": this.state.text, "onChange": function (evt) { return _this.commentChanged(evt); }}), React.createElement("button", {"onClick": function (evt) { return _this.addComment(evt); }}, "Add Comment")));
    };
    return CommentForm;
})(React.Component);
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
var CommentCreator = (function () {
    function CommentCreator() {
    }
    return CommentCreator;
})();
(function (state, action) {
    initialState = {
        name: '',
        text: ''
    };
    constructor();
    { }
});
ReactDOM.render(React.createElement(CommentBox, {"comments": comments}), document.getElementById('content'));
