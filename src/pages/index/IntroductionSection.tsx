import * as React from 'react';

import { A } from '../../components/Typography';
import Jumbotron from '../../components/Jumbotron';
import FontAwesomeIcon, { chevronDoubleRight } from '../../components/FontAwesomeIcon';

export default function() {
  return (
    <Jumbotron>
      {({ Header, Title, Subtitle, Lead, Aside, Tags, Tag }) => (
        <div>
          <Header>
            <Subtitle>Hi, I'm</Subtitle>
            <Title>Eevert Novius,</Title>
            <Subtitle>Full Stack Developer, Facilitator and Methodology Coach</Subtitle>
          </Header>

          <Lead>
            I build things for the web. I'm known for being able to craft digital services with users and business in
            mind. I love learning about new things, solving problems and helping find ways to do things better.
          </Lead>
          <Lead>They tell me I'm buzzword-compliant, too.</Lead>
          <Tags>
            <Tag>fullstack</Tag>
            <Tag>cloud</Tag>
            <Tag>architecture</Tag>
            <Tag>functional-programming</Tag>
            <Tag>test-automation</Tag>
            <Tag>nodejs</Tag>
            <Tag>devops</Tag>
            <Tag>deployment-automation</Tag>
            <Tag>containers</Tag>
            <Tag>lean</Tag>
            <Tag>kanban</Tag>
            <Tag>facilitation</Tag>
          </Tags>
          <Aside>
            Sounds like exactly what you need?{' '}
            <A href="#contact">
              Skip the intros, cut to the chase <FontAwesomeIcon icon={chevronDoubleRight} />
            </A>
          </Aside>
        </div>
      )}
    </Jumbotron>
  );
}
