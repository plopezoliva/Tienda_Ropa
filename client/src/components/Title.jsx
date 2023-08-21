import PropTypes from 'prop-types';
const Title = ({p, h1, }) => {
	return (
		<>
			<p  >{p}</p>
			<h1>{h1}</h1>
		</>
	)
};
Title.propTypes = {
	p: PropTypes.node,
	h1: PropTypes.node,
	// htmlFor: PropTypes.node,
 
  };

export default Title;
