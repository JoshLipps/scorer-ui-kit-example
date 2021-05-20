import React from 'react';
import styled from 'styled-components';
import {Icon} from 'scorer-ui-kit';
import {IconSVGs} from '@future-standard/icons';

const Container = styled.div`
  margin: 100px 200px;
  display: grid;
  grid-template-columns: repeat(10, 28px);
  row-gap: 15px;
  column-gap: 15px;
`;

const CustomIconPage : React.FC = () => {


  return(
    <Container>
      {
        Object.keys(IconSVGs).map((iconName) => (
          <div title={iconName} key={iconName}>
            <Icon icon={iconName} weight='regular' color='mono' size={24}  ></Icon>
          </div>
        ))
      }
    </Container>
  );
}

export default CustomIconPage;