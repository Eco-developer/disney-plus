import Bookmark from '../bookmark/index.js';
import { Button } from '../../global-styles/index.js';
import {
	BackgroundImage,
	BannerContainer,
	Title,
	Genres,
	Overview,
	Buttons,
	MoreContainer,
	MoreInnerContainer,
	TextContainer,
	Footerbase,
	ImageContainer,
	Play,
} from './style.js';

const base_url = 'https://image.tmdb.org/t/p/original/';

const toString = (arr) => (
	arr.reduce((string, current) => `${string}, ${current.name}`, '').slice(1)
)

export const Background = ({movie}) => (
	<BackgroundImage>
        <img 
        	alt='background' 
        	src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        />
      </BackgroundImage>
)

export const Banner = ({movie, handlePlay}) => (
	<BannerContainer>
		<div>
			<Title>
				<p>
					{movie.title || movie.name}
				</p>
			</Title>
			<Buttons>
				<Button onClick={handlePlay}>
					TRAILER <Play/>
				</Button>
				<Bookmark movie={movie}/>
			</Buttons>
			<Genres>
				<p>
					{movie.release_date || movie.first_air_date || null} {movie.genres && toString(movie.genres)}
				</p>
			</Genres>
			<Overview>
				<p>
					{movie.overview}
				</p>
			</Overview>
		</div>
	</BannerContainer>
)

export const MoreDetails = ({movie}) => (
	<MoreContainer>
		<TextContainer>
			<h6>
				More details
			</h6>
		</TextContainer>
		<MoreInnerContainer>
			<TextContainer>
				<p>
					Original name: {movie.original_title || movie.name}
				</p>
			</TextContainer>
			{movie.homepage && 
				<TextContainer>
					<p>
						Visit homepage <a href={movie.homepage} target='_blank' rel='noreferrer'>here</a>
					</p>
				</TextContainer>
			}
			{movie.production_countries ?
				<TextContainer>
					<p>
						Production countries: {toString(movie.production_countries)}
					</p>
				</TextContainer>
			: null}
			{movie.spoken_languages ?
				<TextContainer>
					<p>
						Spoken languages: {toString(movie.spoken_languages)}
					</p>
				</TextContainer>
			: null}
			{movie.production_companies ?
				<TextContainer>
					<p>
						Production companies: {toString(movie.production_companies)}
					</p>
				</TextContainer>
			: null}
		</MoreInnerContainer>
	</MoreContainer>
)

export const Footer = () => (
	<Footerbase>
		<span>
			<p>
				Created by Jose Quesada
			</p>
		</span>
		<span>
			<ImageContainer>
				<img 
					src="/images/logo.svg" 
					alt="Disney+"
				/>
			</ImageContainer>
		</span>
	</Footerbase>
)