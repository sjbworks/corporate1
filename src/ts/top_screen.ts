export default class TopScreen {
	breakPoint: number;
	minWidth: number;

	constructor(breakPoint,minWidth) {
		this.breakPoint = breakPoint;
		this.minWidth = minWidth;
	}

	view(): void {
		const breakPoint = this.breakPoint;
		const minWidth = this.minWidth;
		const ua = navigator.userAgent;
		let contents = '';
		let isTB = false;

		if ((ua.indexOf('Android') > 0 && ua.indexOf('Mobile') === -1) || ua.indexOf('iPad') > 0) {
			isTB = true;
		} else {
			if (window.innerWidth <= breakPoint) {
				isTB = false;
			} else {
				isTB = false;
			}
		}

		switch (isTB) {
			case true:
				contents = 'width=' + minWidth;
				break;
			case false:
				contents = 'width=device-width, initial-scale=1';
				break;
		}
		const _meta = document.createElement('meta');
		_meta.setAttribute('name', 'viewport');
		_meta.setAttribute('content', contents);
		document.getElementsByTagName('head')[0].appendChild(_meta);
	}

	toggleNav() :void {
		const body = document.body;
		const hamburger = document.getElementById('nav-hamburger');	
		hamburger.addEventListener('click', () => {
			body.classList.toggle('nav-open');
		});
	}
}
