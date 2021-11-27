import { 
	Container,
	ImageContainer,
	DetailsContainer,
	Detail,
	DetailTitle,
	DetailContent,
} from './styled.js';
import { CatalogueLoyout } from '../../global-styles/index.js'
import { useSelector } from "react-redux";
import { selectUser } from '../../features/user/userSlice.js';
const ProfilePage = () => {
	const user = useSelector(selectUser);
	return (
		<CatalogueLoyout>
			<Container>
				<ImageContainer>
					<div>
						<img 
							src="/images/logo.svg" 
							alt="Disney+"
						/>
					</div>
				</ImageContainer>
				<DetailsContainer>
					<Detail>
						<h5>
							{user.user_name}
						</h5>
					</Detail>
					<Detail>
						<DetailTitle>
							<h6>
								Email
							</h6>
						</DetailTitle>
						<DetailContent>
							<p>
								{user.user_email}
							</p>
						</DetailContent>
					</Detail>
					<Detail>
						<DetailTitle>
							<h6>
								Phone
							</h6>
						</DetailTitle>
						<DetailContent>
							<p>
								{user.phone_number || 'add a phone number'}
							</p>
						</DetailContent>
					</Detail>
				</DetailsContainer>
			</Container>
		</CatalogueLoyout>
	)
}

export default ProfilePage;