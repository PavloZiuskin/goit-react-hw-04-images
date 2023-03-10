import { Component } from 'react';
import PropTypes from 'prop-types';


import { fetchApi } from 'components/FetchAPI/fetchApi';
import { ImageItem } from 'components/ImageItem/ImageItem';
import {Loader} from 'components/Loader/LoaderSpiner'
import { Pagination } from 'components/Pagination/Pagination';
import {GalleryList,Pleaser} from 'components/ImageGallery/ImageGallery.styled'
export class ImageGallery extends Component {
    state = {
        searchValue: null,
        valueArr: null,
        loading: false,
        status: 'idle',
        error: '',
        page: 1,
        totalPages: null,
        openModal: null,
        searchPicture: null,
    }
    componentDidUpdate(prevProps, prevState) {
        const prevSearch = prevProps.searchName;
        const nextSearch = this.props.searchName;
        const prevPage = prevState.page;
        const nextPage = this.state.page;
        const openModal = this.props.onOpenModal;

        if (nextPage !== prevPage&&nextPage>1) {
            const { page, searchValue } = this.state;
            fetchApi(searchValue, page)
                .then(res => {

                    if (!res.ok) {
                        return Promise.reject(res.status)
                    }
                    return res.json()
                }
                )
                .then(data => {
                    this.setState(({ valueArr, status }) => {
                        return {
                            valueArr: [...valueArr, ...data.hits],
                            status: 'resolved'}
                    })
                }
            ).catch((error) => this.setState({ status: 'rejected', error }))
            return;
        }
        if (prevSearch !== nextSearch) {
            this.setState({openModal})
            this.setState({status: 'pending'})
            fetchApi(nextSearch, 1)
                .then(res => {
                    if (!res.ok) {
                        return Promise.reject(res.status)
                    }
                    return res.json()
                }
                )
                .then(data => {
                    
                    this.setState(
                        {
                            valueArr: data.hits,
                            searchPicture: data.total,
                            status: 'resolved',
                            searchValue: nextSearch,
                            totalPages: Number.parseInt(data.totalHits / 12),
                            page: 1
                        })
                }
                ).catch((error)=>this.setState({status:'rejected', error}))
                return
       }
        
    }

    handleClick = (nextPage) => {
        
        this.setState(
            ({ page }) => ({ page: page + nextPage }));
    }

    render() {
        const { status,
            error,
            valueArr,
            page,
            totalPages,
            openModal,
            searchPicture} = this.state;
        const onLoadMore = this.handleClick;

        if (status === 'rejected') {
            return(<p>{ error}</p>)
        }
        if (status === 'pending') {
            return(<Loader />)
        }
        if (status === 'idle') {
            return(<Pleaser>Please entre search value</Pleaser>)
        }
        if (status === 'resolved' && valueArr.length !== 0) {
            return (<div>
                        <GalleryList>
                                {valueArr.map(({id, tag, webformatURL,largeImageURL})=> {
                                    return (
                                            <ImageItem
                                                onClick={openModal}
                                                smallImg={webformatURL}
                                                tag={tag}
                                                key={id}
                                                largeImage={largeImageURL}
                                            />
                                        )
                                })}
                        </GalleryList>
                        {searchPicture>12 && <Pagination onLoadMore={onLoadMore} page={page} total={totalPages} />}
                    </div>)
        }
        
    }
} 

ImageGallery.propTypes = {
    searchName: PropTypes.string.isRequired,
    onOpenModal:PropTypes.func.isRequired
}