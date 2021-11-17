import styled from "styled-components";

const CustomError = ({error, type}) => (
	error?.type === type ? 
		<P>
			{error.message}
		</P>
		:null
)

const P = styled.p`
	color: red;
	margin: 0;
	margin-top: 0.3rem;
`

export default CustomError;