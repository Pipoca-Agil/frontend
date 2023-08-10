/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, {useState, useRef, useEffect} from 'react';
import * as S from '../../styles/AudioMessage/styled';
import SoundWaves from '../../assets/sound-wave.svg';
import audioFile from '../../assets/sounds/teste.mp3';
import FaceImage from '../../assets/face-audio-message.svg';
import Pause from '../../assets/icons/pause.svg';
import Play from '../../assets/icons/play.svg';

export default function AudioMessage() {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [progress, setProgress] = useState(0);

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
				return;
			}

			setProgress(percentage);
		}
	};

	return (
		<S.Wrapper>
			<S.Title>• UM RECADO PRA VOCÊ</S.Title>
			<S.AudioMessage>
				<S.FaceImage src={FaceImage} />
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
				</S.CardWrapper>
			</S.AudioMessage>
		</S.Wrapper>
	);
}
