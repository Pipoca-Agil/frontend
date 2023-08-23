/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import React, {useState, useRef, useEffect} from 'react';
import * as S from '../../styles/AudioMessage/styled';
import SoundWaves from '../../assets/audioMessage/sound-wave.svg';
import audioFile from '../../assets/sounds/audiomessage.mp3';
import FaceImage from '../../assets/audioMessage/ibson-audio-message.svg';
import Pause from '../../assets/icons/pause.svg';
import Play from '../../assets/icons/play.svg';

export default function AudioMessage() {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [progress, setProgress] = useState(0);
	const [currentTimeAudio, setCurrentTimeAudio] = useState(0);

	const togglePlay = () => {
		setIsPlaying(!isPlaying);
	};

	useEffect(() => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.play().catch(error => {
					console.error('Error playing audio:', error);
				});
			} else {
				audioRef.current.pause();
			}
		}
	}, [isPlaying]);

	const handleTimeUpdate = () => {
		if (audioRef.current) {
			const {currentTime} = audioRef.current;
			const {duration} = audioRef.current;
			const percentage = (currentTime / duration) * 100;
			if (percentage === 100) {
				setProgress(0);
				setIsPlaying(false);
				setCurrentTimeAudio(0);
				return;
			}

			setProgress(percentage);
			setCurrentTimeAudio(currentTime);
		}
	};

	const formatTime = (timeInSeconds: number): string => {
		const minutes = Math.floor(timeInSeconds / 60);
		const seconds = Math.floor(timeInSeconds % 60);
		return `${minutes}:${seconds.toString().padStart(2, '0')}`;
	};

	return (
		<S.Wrapper>
			<S.AudioMessage>
				<S.Title>O Ibson tem um recado para você</S.Title>
				<S.CardWrapper>
					<audio ref={audioRef} onTimeUpdate={handleTimeUpdate}>
						<source src={audioFile} type='audio/mpeg' />
					</audio>
					<S.PlayPauseButton>
						<S.PlayPauseIcon
							src={isPlaying ? Pause : Play}
							onClick={togglePlay}
						/>
					</S.PlayPauseButton>
					<S.SoundWaveContainer>
						<S.UnderDiv>
							<S.UnderWaveImage src={SoundWaves} />
						</S.UnderDiv>
						<S.TopDiv>
							<S.TopWaveImage
								src={SoundWaves}
								clipPathPercentage={progress}
							/>
						</S.TopDiv>
					</S.SoundWaveContainer>
					<S.AudioTimer>{formatTime(currentTimeAudio)}</S.AudioTimer>
				</S.CardWrapper>
			</S.AudioMessage>
			<S.FaceImage src={FaceImage} />
		</S.Wrapper>
	);
}
