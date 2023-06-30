import React from 'react';
import {useNavigate} from 'react-router-dom';

const NotFound: React.FC = () => {
	const navigate = useNavigate();
	return (
		<div>
			<h1>NotFound a ser construída</h1>
			<button
				onClick={() => {
					navigate('/');
				}}
				type='button'
			>
          voltar à página inicial
			</button>
		</div>
	);
};

export default NotFound;
