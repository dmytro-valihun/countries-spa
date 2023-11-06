import styled from 'styled-components';
import CardImage from './CardImage';

const Wrapper = styled.article`;
    box-shadow: var(--shadow);
    cursor: pointer;
`;
const CardBody = styled.div``;
const CardTitle = styled.h3`;
    text-align: center;
`;
const CardList = styled.ul`
    list-style: none;
    padding: 0 20px;
`;
const CardListItem = styled.li``;



export default function Country({img, name, info=[], onClick}) {
  return (
    <Wrapper onClick={onClick}>
        <CardImage src={img} alt={name}/>
        <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardList>
                {info.map(el => (
                    <CardListItem key={el.title}>
                        <b>{el.title}:</b> {el.description}
                    </CardListItem>
                ))}
            </CardList>
        </CardBody>
    </Wrapper>
  )
}