/// <reference path="../typings/react/react.d.ts" />

import * as React from 'react';
import { CommentElement } from './CommentBox'

export interface IComments {
	comments: Array<ICommentProp>
}

export interface ICommentProp extends React.Props<CommentElement> {
	id: number,
	name: string,
	text: string;
}

export interface ICommentState extends React.StatelessComponent<CommentElement>{
	name: string,
	text: string;
}