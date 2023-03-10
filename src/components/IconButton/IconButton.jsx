import PropTypes from 'prop-types';
export const IconButton = ({ children, onClick, ...allyProps }) => {
   return( <button type="button" onClick={onClick} {...allyProps}>{children }</button>)
}
IconButton.defaultProps = {
    onClick: () => { },
    children: null,
}
IconButton.propTypes = {
    onClick: PropTypes.func,
    allyProps: PropTypes.node
}