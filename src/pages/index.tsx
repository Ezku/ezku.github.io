import * as React from 'react';

import { Container, PageStyles } from '../components/Layout';
import { A } from '../components/Typography';
import Profile from '../components/Profile';

import IntroductionSection from './index/IntroductionSection';
import ExperienceSection from './index/ExperienceSection';
import PastWorkSampleSection from './index/PastWorkSampleSection';
import RecommendationSection from './index/RecommendationSection';
import CredentialsSection from './index/CredentialsSection';
import ExtracurricularSection from './index/ExtracurricularSection';
import PersonalSection from './index/PersonalSection';

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
      <PersonalSection />
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
