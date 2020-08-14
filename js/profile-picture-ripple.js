class ProfilePictureRipple {
	constructor() {
		this._profilePictureContainer = document.querySelector('#cp-profilePicture');
		this._profilePictureContainer.style.webkitAnimationPlayState = 'paused';
		this._profileAnimRunning = false;
		this._init();
	}

	// Register events
	_init() {
		this._onClickEvent();
		this._animationEndEvent();
	}

	// Ripple profile picture
	rippleProfilePicture() {
		// Remove anim class
		this._profilePictureContainer.classList.remove('rippleProfileAnim');

		// Triggering reflow
		void this._profilePictureContainer.offsetWidth;

		// Re-add animation class
		this._profilePictureContainer.classList.add('rippleProfileAnim');

		// Start ripple animation
		this._profilePictureContainer.style.webkitAnimationPlayState = 'running';
		this._profileAnimRunning = true;
	}

	// Re-enable animation after death
	_animationEndEvent() {
		this._profilePictureContainer.addEventListener(
			'animationend',
			() => {
				this._profileAnimRunning = false;
			}
		);
	}

	// On click event
	_onClickEvent() {
		this._profilePictureContainer.addEventListener(
			'click', 
			() => {
				if (this._profileAnimRunning) return;
				this.rippleProfilePicture();
			}
		);
	}

	getProfileAnimationStatus() {
		return this._profileAnimRunning;
	}
}
