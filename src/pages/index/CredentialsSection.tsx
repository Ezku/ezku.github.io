import * as React from 'react';

import { Small } from '../../components/Typography';
import MainSection from '../../components/MainSection';
import EducationalAchievement from '../../components/EducationalAchievement';

export default function() {
  return (
    <MainSection>
      {({ Title, Divider }) => (
        <div>
          <Title>Education</Title>
          <Divider />

          <EducationalAchievement>
            {({ Title, Provenance, Description, Tags, Tag }) => (
              <div>
                <Title>Master's degree</Title>
                <Provenance>Information Networks study programme, Aalto University School of Science</Provenance>
                <Description>
                  Graduated with honours in 2017. Master's studies with major in Business Networks, focusing on how
                  knowledge intensive organizations work. Bachelor's studies with major in Knowledge Intensive Business.
                </Description>
                <Tags>
                  <Tag>Process Development</Tag>
                  <Tag>Shaping Institutions</Tag>
                  <Tag>Knowledge Work</Tag>
                  <Tag>User Centered Design</Tag>
                </Tags>
              </div>
            )}
          </EducationalAchievement>

          <EducationalAchievement>
            {({ Title, Description, Link, Tags, Tag }) => (
              <div>
                <Title>
                  <Link href="https://aaltodoc.aalto.fi/handle/123456789/23956">Master's thesis</Link>{' '}
                  <Small>2016–2017</Small>
                </Title>
                <Description>
                  &quot;What exactly is the use of dailies: A practice-based perspective on continuous improvement in
                  software development.&quot;
                </Description>
                <Tags>
                  <Tag>Continuous Improvement</Tag>
                  <Tag>Social Innovation</Tag>
                </Tags>
              </div>
            )}
          </EducationalAchievement>

          <EducationalAchievement>
            {({ Title, Link, Description, Tags, Tag }) => (
              <div>
                <Title>
                  <Link href="https://aaltodoc.aalto.fi/handle/123456789/8722">Bachelor's thesis</Link>{' '}
                  <Small>2011</Small>
                </Title>
                <Description>
                  Scaling agile software development by applying software architecture practices
                </Description>
                <Tags>
                  <Tag>Software Practices</Tag>
                  <Tag>Agile</Tag>
                </Tags>
              </div>
            )}
          </EducationalAchievement>
        </div>
      )}
    </MainSection>
  );
}
