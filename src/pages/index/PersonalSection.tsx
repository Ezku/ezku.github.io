import * as React from 'react';

import MainSection from '../../components/MainSection';
import Subsection from '../../components/Subsection';
import FontAwesomeIcon, { heart } from '../../components/FontAwesomeIcon';

export default function() {
  return (
    <MainSection>
      {({ Title, Divider }) => (
        <div>
          <Title>Personal</Title>

          <Divider />

          <Subsection>
            {({ Header, Title, Tags, Tag }) => (
              <div>
                <Header>
                  <Title>In my work, I value&hellip;</Title>
                </Header>
                <Tags>
                  <Tag>Craftsmanship</Tag>
                  <Tag>Continuous Learning</Tag>
                  <Tag>Growing Together</Tag>
                  <Tag>Nonviolence</Tag>
                  <Tag>Empathy</Tag>
                </Tags>
              </div>
            )}
          </Subsection>

          <Divider />

          <Subsection>
            {({ Header, Title, Tags, Tag }) => (
              <div>
                <Header>
                  <Title>I hope your organization values&hellip;</Title>
                </Header>
                <Tags>
                  <Tag>Transparency</Tag>
                  <Tag>Continuous Improvement</Tag>
                  <Tag>Self-Organization</Tag>
                  <Tag>Playfulness</Tag>
                  <Tag>Open Source</Tag>
                </Tags>
              </div>
            )}
          </Subsection>

          <Divider />

          <Subsection>
            {({ Header, Title, Tags, Tag }) => (
              <div>
                <Header>
                  <Title>I love&hellip;</Title>
                </Header>
                <Tags>
                  <Tag>Functional Programming</Tag>
                  <Tag>Problem Solving</Tag>
                  <Tag>Working on Ideas</Tag>
                  <Tag>Feedback</Tag>
                  <Tag>Singing</Tag>
                  <Tag>Science Fiction</Tag>
                  <Tag>Photography</Tag>
                  <Tag>
                    Hugs <FontAwesomeIcon icon={heart} />
                  </Tag>
                </Tags>
              </div>
            )}
          </Subsection>
        </div>
      )}
    </MainSection>
  );
}
