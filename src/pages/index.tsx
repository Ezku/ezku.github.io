import * as React from 'react';

import { Container, PageStyles } from '../components/Layout';
import { A, Small } from '../components/Typography';
import MainSection from '../components/MainSection';
import Subsection from '../components/Subsection';
import Profile from '../components/Profile';
import EducationalAchievement from '../components/EducationalAchievement';
import FontAwesomeIcon, { heart } from '../components/FontAwesomeIcon';

import IntroductionSection from './index/IntroductionSection';
import ExperienceSection from './index/ExperienceSection';
import PastWorkSampleSection from './index/PastWorkSampleSection';
import RecommendationSection from './index/RecommendationSection';

export default function index() {
  return (
    <Container>
        
      <PageStyles />
      <IntroductionSection />
      <ExperienceSection />
      <PastWorkSampleSection />
      <RecommendationSection />
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
                    knowledge intensive organizations work. Bachelor's studies with major in Knowledge Intensive
                    Business.
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
