import styled from 'styled-components';

const CartImage = styled.img`
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
    box-shadow: var(--shadow);
`;

export default function CardImage({src, alt}) {
  return (
    <CartImage src={src} alt={alt}/>
  )
}
