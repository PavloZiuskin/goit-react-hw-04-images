import styled from 'styled-components';

export const GalleryList = styled.ul`
  display: flex;
  margin-bottom: 20px;
  gap: 8px;
  flex-wrap: wrap;
  width: 1200px;
`;
export const GalleryItem = styled.li`
  display: flex;
  width: calc((100% - 24px) / 4);
  img {
    width: 100%;
    object-fit: cover;
  }
`;
export const Pleaser = styled.p`
  display: block;
  text-align: center;
  width: 1200px;
  margin: 0;
`;
