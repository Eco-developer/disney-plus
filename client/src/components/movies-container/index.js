import MovieCard from '../movie-card/index.js';
import {
	Container,
	Content,
} from './style.js'
import { v4 as uuid } from 'uuid';

const MoviesContainer = ({movies=[]}) => {
	return (
	<Container>
      	<Content>
        	{movies.length ?
          		movies.map((movie) => (
          			<MovieCard 
          				movie={movie}
          				key={uuid()}
          			/>
          		)) 
          	: null}
      	</Content>
    </Container>
	)
}

export default MoviesContainer;