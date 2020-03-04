import * as React from 'react';

import { Container, PageStyles } from '../components/Layout';
import { A } from '../components/Typography';
import MainSection from '../components/MainSection';
import Subsection from '../components/Subsection';
import Profile from '../components/Profile';
import FontAwesomeIcon, { heart } from '../components/FontAwesomeIcon';

import IntroductionSection from './index/IntroductionSection';
import ExperienceSection from './index/ExperienceSection';
import PastWorkSampleSection from './index/PastWorkSampleSection';
import RecommendationSection from './index/RecommendationSection';
import CredentialsSection from './index/CredentialsSection';
import ExtracurricularSection from './index/ExtracurricularSection';

export default function index() {
  return (
    <Container>
        
      <PageStyles />
      <IntroductionSection />
      <ExperienceSection />
      <PastWorkSampleSection />
      <RecommendationSection />
      <CredentialsSection />
      <ExtracurricularSection />
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
      <Profile>
        {({ Header, Image, Title, Subtitle, Lead }) => (
          <div id="contact">
            <Header>
              <Image src={require('./index/ezku-1024.jpg').default} />
              <Title>So, that's me.</Title>
              <Subtitle>
                <A
                  href="mailto:eevert.novius+ezku.github.io@gmail.com?subject=We%20would%20love%20to%20have%20a%20chat"
                  title="Shoot me a message"
                >
                  What could we do together?
                </A>
              </Subtitle>
            </Header>
            <Lead>
              <A key="twitter" href="http://twitter.com/Ezku">
                Twitter
              </A>{' '}
              /{' '}
              <A key="github" href="http://github.com/Ezku">
                Github
              </A>{' '}
              /{' '}
              <A key="linkedin" href="https://www.linkedin.com/in/eevert-novius/">
                LinkedIn
              </A>
            </Lead>
          </div>
        )}
      </Profile>
    </Container>
  );
}
