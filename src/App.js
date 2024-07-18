import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

export default function App() {
	const date = new Date();
	return createElement(
		'div',
		{ class: 'App', alt: 'logo' },
		createElement(
			'header',
			{ class: 'App-header' },
			createElement('img', {
				src: logo,
				class: 'App-logo',
				alt: 'logo',
			}),
			createElement(
				'p',
				{},
				'Edit',
				createElement('code', {}, ' src/App.js '),
				'and save to reload.'
			),
			createElement(
				'a',
				{
					class: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React'
			),
			createElement('p', {}, date.getFullYear())
		)
	);
}
