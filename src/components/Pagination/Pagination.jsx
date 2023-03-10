import PropTypes from 'prop-types';
import { IconButton,PaginationContainer } from "components/Pagination/Pagination.styled"
export const Pagination =({onLoadMore, page, total})=>{  
    return (<PaginationContainer>
    <IconButton  type="button" onClick={()=>{onLoadMore(1)}}>Load more</IconButton></PaginationContainer>)
    
}
Pagination.propTypes = {
    onLoadMore: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
}