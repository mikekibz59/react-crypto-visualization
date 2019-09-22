import React from 'react';

export default () => {
	return (
		<svg
			width='200px'
			height='200px'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 100 100'
			preserveAspectRatio='xMidYMid'
			class='lds-cube'
			style={{ background: 'none' }}>
			<g transform='translate(25,25)'>
				<rect
					ng-attr-x='{{config.dp}}'
					ng-attr-y='{{config.dp}}'
					ng-attr-width='{{config.blockSize}}'
					ng-attr-height='{{config.blockSize}}'
					ng-attr-fill='{{config.c1}}'
					x='-20'
					y='-20'
					width='40'
					height='40'
					fill='#1d3f72'
					transform='scale(1.00161 1.00161)'>
					<animateTransform
						attributeName='transform'
						type='scale'
						calcMode='spline'
						values='1.5;1'
						keyTimes='0;1'
						dur='1s'
						keySplines='0 0.5 0.5 1'
						begin='-0.3s'
						repeatCount='indefinite'></animateTransform>
				</rect>
			</g>
			<g transform='translate(75,25)'>
				<rect
					ng-attr-x='{{config.dp}}'
					ng-attr-y='{{config.dp}}'
					ng-attr-width='{{config.blockSize}}'
					ng-attr-height='{{config.blockSize}}'
					ng-attr-fill='{{config.c2}}'
					x='-20'
					y='-20'
					width='40'
					height='40'
					fill='#5699d2'
					transform='scale(1.00935 1.00935)'>
					<animateTransform
						attributeName='transform'
						type='scale'
						calcMode='spline'
						values='1.5;1'
						keyTimes='0;1'
						dur='1s'
						keySplines='0 0.5 0.5 1'
						begin='-0.2s'
						repeatCount='indefinite'></animateTransform>
				</rect>
			</g>
			<g transform='translate(25,75)'>
				<rect
					ng-attr-x='{{config.dp}}'
					ng-attr-y='{{config.dp}}'
					ng-attr-width='{{config.blockSize}}'
					ng-attr-height='{{config.blockSize}}'
					ng-attr-fill='{{config.c3}}'
					x='-20'
					y='-20'
					width='40'
					height='40'
					fill='#649ec8'
					transform='scale(1.04362 1.04362)'>
					<animateTransform
						attributeName='transform'
						type='scale'
						calcMode='spline'
						values='1.5;1'
						keyTimes='0;1'
						dur='1s'
						keySplines='0 0.5 0.5 1'
						begin='0s'
						repeatCount='indefinite'></animateTransform>
				</rect>
			</g>
			<g transform='translate(75,75)'>
				<rect
					ng-attr-x='{{config.dp}}'
					ng-attr-y='{{config.dp}}'
					ng-attr-width='{{config.blockSize}}'
					ng-attr-height='{{config.blockSize}}'
					ng-attr-fill='{{config.c4}}'
					x='-20'
					y='-20'
					width='40'
					height='40'
					fill='#7fbcc4'
					transform='scale(1.02333 1.02333)'>
					<animateTransform
						attributeName='transform'
						type='scale'
						calcMode='spline'
						values='1.5;1'
						keyTimes='0;1'
						dur='1s'
						keySplines='0 0.5 0.5 1'
						begin='-0.1s'
						repeatCount='indefinite'></animateTransform>
				</rect>
			</g>
		</svg>
	);
};
