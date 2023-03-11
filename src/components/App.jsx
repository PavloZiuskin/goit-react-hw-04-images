import { useState,useEffect } from "react";
import { Searchbar } from "components/Searchbar/Searchbar";
import { fetchApi } from 'components/FetchAPI/fetchApi';
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Modal } from 'components/Modal/Modal';
import { Loader } from 'components/Loader/LoaderSpiner';
import { Pagination } from 'components/Pagination/Pagination';
import {Pleaser} from 'components/ImageGallery/ImageGallery.styled'

export const App =()=> {

  const [searchName, setSerchName] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [currentImageUrl, setCurrentImageUrl] = useState(null)
  const [currentImageTag, setCurrentImageTag] = useState(null)
  const [valueArr, setValueArr] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPAges] = useState(null);
  const [searchPicture, setSearchPicture] = useState(null);

  useEffect(() => {
        if (!searchName) {
            return;
        }
        
        fetchApi(searchName, page)
            .then(res => res)
            .then(({data}) => {
              if (data.totalHits !== 0 && page === 1) {
                    setStatus('pending')
                    setPage(1)
                    setSearchPicture(data.total)
                    setValueArr(data.hits);
                    setTotalPAges(Number.parseInt(data.totalHits / 12));
                    setStatus('resolved')
                } else {
                    setValueArr(valueArr => { return [...valueArr, ...data.hits] })
                    setStatus('resolved')
                }
            }
            )
            .catch((error) => {
                setError(error);
                setStatus('rejected')
            });
    },
    [searchName, page])
  
  const handleClick = (nextPage) => {
        setPage(state => state + nextPage);
    }


  const handleFormSubmit = (newSearchName) => {
    setSerchName(newSearchName)
    setPage(1);
    setValueArr([])
  }
  const onToggleModal = () => {
    setShowModal( showModal  => !showModal );
    };

  const onOpenModal = event => {
        const currentImageUrl = event.target.dataset.large;
        const currentImageTag = event.target.alt;

    if (event.target.nodeName === 'IMG') {
          setCurrentImageUrl(currentImageUrl )
          setCurrentImageTag(currentImageTag)
        setShowModal( showModal  => (
            !showModal
        ))
        }
  };
  if (status === 'rejected') {
     
    return (<div>
      <Searchbar onSubmit={handleFormSubmit} />
      <p>{error}</p>
    </div>)
    }
    if (status === 'pending') {
      return (
        <div>
          <Searchbar onSubmit={handleFormSubmit} />
          <Loader />
        </div>)
    }
    if (status === 'idle') {
      return (<div>
        <Searchbar onSubmit={handleFormSubmit} />
        <Pleaser>Please entre search value</Pleaser>
          </div>)
    }
  if (status === 'resolved' && valueArr.length !== 0) {return (
    <div>
          <Searchbar onSubmit={handleFormSubmit } />
          <ImageGallery searchName={valueArr} onOpenModal={onOpenModal} />
          {searchPicture > 12 && <Pagination onLoadMore={handleClick} page={page} total={totalPages} />}
            {showModal&&
            (<Modal
              onClose={onToggleModal}
              currentImageUrl={currentImageUrl}
              currentImageTag={currentImageTag}/>)
            }
      </div>) }
  
}
