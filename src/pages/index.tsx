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

export default function index() {
  return (
    <Container>
        
      <PageStyles />
      <IntroductionSection />
      <ExperienceSection />
      <PastWorkSampleSection />
      <RecommendationSection />
      <CredentialsSection />
      <MainSection>
        {({ Title, Divider }) => (
          <div>
            <Title>Extracurricular</Title>

            <Divider />

            <Subsection>
              {({ Header, Title, Lead, Tags, Tag }) => (
                <div>
                  <Header>
                    <Title>Photography</Title>
                    <Lead>
                      Since 2012 I do event photography as a hobby. My interest is in portraits, so I often end up doing
                      corporate mugshots as well.
                    </Lead>
                  </Header>
                  <Tags>
                    <Tag>Events</Tag>
                    <Tag>Image Processing</Tag>
                    <Tag>Retouching</Tag>
                  </Tags>
                </div>
              )}
            </Subsection>

            <Divider />

            <Subsection>
              {({ Header, Title, Lead, Tags, Tag }) => (
                <div>
                  <Header>
                    <Title>Playwriting</Title>
                    <Lead>
                      Co-wrote the script for <A href="http://www.teekkarispeksi.fi">Teekkarispeksi</A> 2015.
                      Teekkarispeksi is a large-scale student theatre production with approximately 200 volunteer
                      participants each year.
                    </Lead>
                  </Header>
                  <Tags>
                    <Tag>Volunteering</Tag>
                    <Tag>Creative Writing</Tag>
                  </Tags>
                </div>
              )}
            </Subsection>

            <Divider />

            <Subsection>
              {({ Header, Title, Lead, Tags, Tag }) => (
                <div>
                  <Header>
                    <Title>Songwriting</Title>
                    <Lead>
                      Since serving as toastmaster / master of ceremony for the Information Networks' student guild,{' '}
                      <A href="http://www.athene.fi">Athene</A> (2011-2013), I've come to be known for writing numerous
                      songs. The most iconic of them are part of the canonical Aalto University student union songbook
                      since 2017.
                    </Lead>
                  </Header>
                  <Tags>
                    <Tag>Performing in Public</Tag>
                    <Tag>Creative Writing</Tag>
                  </Tags>
                </div>
              )}
            </Subsection>
          </div>
        )}
      </MainSection>
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
