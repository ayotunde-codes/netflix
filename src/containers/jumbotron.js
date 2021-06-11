import React from 'react';
import jumoData from '../fixtures/jumbo.json'
import {Jumbotron} from '../components';


export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
        {jumoData.map((item) => (
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Case>
                <Jumbotron.Title>{item.title}</Jumbotron.Title>
                <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Case>

            <Jumbotron.Case>
              <Jumbotron.Image src={item.image} alt={item.alt} />
            </Jumbotron.Case>
          </Jumbotron>
        ))}
    </Jumbotron.Container>

  );
}

