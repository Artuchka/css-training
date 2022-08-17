export default class AudioPlayer {
	static setSong(songName) {
		this.audio = new Audio(songName)
	}

	static play() {
		this?.audio?.play()
	}
	static pause() {
		this?.audio?.pause()
	}
}
