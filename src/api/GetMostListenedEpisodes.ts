import type {IEpisodeCard} from '../components/EpisodeCard';

export const getMostListenedEpisodes = async () => {
// Implementar a requisição da API
	const videos: IEpisodeCard[] = [
		{
			thumb: 'https://i.ytimg.com/vi/qAZJNETOQ3I/hq720.jpg?sqp=-…RUAAIhCGAE=&rs=AOn4CLCwg4TWSJhuFkHjsfxJfczmHNQ28w',
			title: 'Conexões humanas através do Management 3.0',
			number: 'EPISÓDIO 447',
			description: '"Descrição episódio."',
			videoUrl: 'https://www.youtube.com/watch?v=qAZJNETOQ3I',
		},
		{
			thumb: 'https://i.ytimg.com/vi/qAZJNETOQ3I/hq720.jpg?sqp=-…RUAAIhCGAE=&rs=AOn4CLCwg4TWSJhuFkHjsfxJfczmHNQ28w',
			title: 'Conexões humanas através do Management 3.0',
			number: 'EPISÓDIO 447',
			description: '"Descrição episódio."',
			videoUrl: 'https://www.youtube.com/watch?v=qAZJNETOQ3I',
		},
		{
			thumb: 'https://i.ytimg.com/vi/qAZJNETOQ3I/hq720.jpg?sqp=-…RUAAIhCGAE=&rs=AOn4CLCwg4TWSJhuFkHjsfxJfczmHNQ28w',
			title: 'Conexões humanas através do Management 3.0',
			number: 'EPISÓDIO 447',
			description: '"Descrição episódio."',
			videoUrl: 'https://www.youtube.com/watch?v=qAZJNETOQ3I',
		},
		{
			thumb: 'https://i.ytimg.com/vi/qAZJNETOQ3I/hq720.jpg?sqp=-…RUAAIhCGAE=&rs=AOn4CLCwg4TWSJhuFkHjsfxJfczmHNQ28w',
			title: 'Conexões humanas através do Management 3.0',
			number: 'EPISÓDIO 447',
			description: '"Descrição episódio."',
			videoUrl: 'https://www.youtube.com/watch?v=qAZJNETOQ3I',
		},
	];

	return videos;
};
