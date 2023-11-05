import type {IEpisodeCard} from '../components/EpisodeCard';

export const getMostListenedEpisodes = async () => {
// Implementar a requisição da API
	const videos: IEpisodeCard[] = [
		{
			thumb: '/guests/banner_348.svg',
			title: 'Gestão de Riscos no Mundo Ágil',
			number: 'EPISÓDIO #348',
			description: '"Descrição episódio."',
			videoUrl: 'https://open.spotify.com/episode/5naTgkOG20MQezZTnBsm2o?si=51dcc10d3bb546fd',
		},
		{
			thumb: '/guests/banner_336.svg',
			title: 'Transição de Carreira',
			number: 'EPISÓDIO #336',
			description: '"Descrição episódio."',
			videoUrl: 'https://open.spotify.com/episode/1aW21jXPWVqiNbv4jMZxAb?si=j6GT7NpJQoSNpdY9HcQIKA',
		},
		{
			thumb: '/guests/banner_334.svg',
			title: 'Cheguei no meu primeiro time e...',
			number: 'EPISÓDIO #334',
			description: '"Descrição episódio."',
			videoUrl: 'https://open.spotify.com/episode/6V5nnNM84lvTPjB2ZWsIiK?si=bE1qR1OeSyqaZjnqq8LmWQ',
		},
		{
			thumb: '/guests/banner_447.svg',
			title: 'Conexões humanas através do Mana...',
			number: 'EPISÓDIO #447',
			description: '"Descrição episódio."',
			videoUrl: 'https://open.spotify.com/episode/0i9eG2dOHTTLrmcUu36tpL?si=c85e019dfd004643',
		},
		{
			thumb: '/guests/banner_397.svg',
			title: 'ENCONTRO ÁGIL - História de U...',
			number: 'EPISÓDIO #397',
			description: '"Descrição episódio."',
			videoUrl: 'https://open.spotify.com/episode/5wkmU7GqFlJjQbr3NNU1PY?si=KbRw1pVIRXeUALQBYz93eg',
		},
	];

	return videos;
};
