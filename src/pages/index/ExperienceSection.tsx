import * as React from 'react';

import { A, Small, Abbr } from '../../components/Typography';
import MainSection from '../../components/MainSection';
import Subsection from '../../components/Subsection';

export default function() {
  return (
    <MainSection>
      {({ Title, Divider }) => (
        <div>
          <Title>Experience</Title>
          <Divider />

          <Subsection>
            {({ Header, Title, Link, Lead, Tags, Tag }) => (
              <div>
                <Header>
                  <Title>
                    <Link href="https://www.luotocompany.fi">Luoto Company</Link> <Small>2019–</Small>
                  </Title>
                  <Lead>
                    <strong>Full stack developer</strong>, consultant and partner in a new-school consultancy company
                    with equality, a sense of community, and learning in its <Abbr>DNA</Abbr>.
                  </Lead>
                </Header>
                <Tags>
                  <Tag>Node.js</Tag>
                  <Tag>React Native</Tag>
                  <Tag>AWS</Tag>
                  <Tag>Serverless</Tag>
                  <Tag>Industrial IoT</Tag>
                </Tags>
              </div>
            )}
          </Subsection>
          <Divider />

          <Subsection>
            {({ Header, Title, Link, Lead, Description, DescriptionLine, Tags, Tag }) => (
              <div>
                <Header>
                  <Title>
                    <Link href="https://www.venuu.fi">Venuu</Link> <Small>2016–2018</Small>
                  </Title>
                  <Lead>
                    <strong>Full stack developer</strong> on a <Abbr>B2B2C</Abbr> marketplace platform for event
                    organization
                  </Lead>
                </Header>
                <Description>
                  <DescriptionLine>
                    Chief architect on an in-house software development team, with specific efforts towards Javascript
                    development support and containerization
                  </DescriptionLine>
                  <DescriptionLine>
                    Facilitator and process coach for the development team, its stakeholders and the company at large
                  </DescriptionLine>
                </Description>
                <Tags>
                  <Tag>ES6+</Tag>
                  <Tag>Node.js</Tag>
                  <Tag>Flowtype</Tag>
                  <Tag>Ruby on Rails</Tag>
                  <Tag>React</Tag>
                  <Tag>CircleCI</Tag>
                  <Tag>AWS</Tag>
                  <Tag>Docker</Tag>
                  <Tag>Continuous Delivery</Tag>
                  <Tag>Kanban</Tag>
                </Tags>
              </div>
            )}
          </Subsection>

          <Divider />

          <Subsection>
            {({ Header, Title, Link, Lead, Description, DescriptionLine, Tags, Tag }) => (
              <div>
                <Header>
                  <Title>
                    <Link href="http://www.appgyver.com">AppGyver</Link> <Small>2013–2016</Small>
                  </Title>
                  <Lead>
                    <strong>Platform developer</strong> for hybrid mobile application tooling and{' '}
                    <strong>architect</strong> for a Javascript library ecosystem
                  </Lead>
                </Header>
                <Description>
                  <DescriptionLine>
                    Led the development for and architected <A href="http://www.appgyver.io/supersonic">Supersonic</A>,
                    a library for building HTML5 hybrid applications on the AppGyver platform.
                  </DescriptionLine>
                  <DescriptionLine>
                    Authored <A href="http://www.appgyver.io/supersonic/data">Supersonic Data</A>, a data access layer
                    for AppGyver Cloud.
                  </DescriptionLine>
                  <DescriptionLine>
                    Co-developed architecture and individual modules for{' '}
                    <A href="http://composer2.appgyver.com/">AppGyver Composer</A>, a visual tool for building business
                    applications.
                  </DescriptionLine>
                  <DescriptionLine>Regularly facilitated development team dailies.</DescriptionLine>
                </Description>
                <Tags>
                  <Tag>Node.js</Tag>
                  <Tag>CoffeeScript</Tag>
                  <Tag>Ruby on Rails</Tag>
                  <Tag>AngularJS</Tag>
                  <Tag>npm</Tag>
                  <Tag>TravisCI</Tag>
                  <Tag>Heroku</Tag>
                  <Tag>Open Source</Tag>
                  <Tag>Kanban</Tag>
                  <Tag>FRP</Tag>
                </Tags>
              </div>
            )}
          </Subsection>

          <Divider />

          <Subsection>
            {({ Header, Title, Link, Lead, Description, DescriptionLine, Tags, Tag }) => (
              <div>
                <Header>
                  <Title>
                    <Link href="http://www.futurice.com">Futurice</Link> <Small>2013/5–9</Small>
                  </Title>
                  <Lead>
                    <strong>Software craftsman</strong> and IT consultant for medium-sized to large multinational client
                    companies
                  </Lead>
                </Header>
                <Description>
                  <DescriptionLine>Acted as modern web technology specialist in projects.</DescriptionLine>
                  <DescriptionLine>Engaged in client-facing software development process facilitation.</DescriptionLine>
                  <DescriptionLine>Drafted and led the creation of proposals for clients.</DescriptionLine>
                </Description>
                <Tags>
                  <Tag>Node.js</Tag>
                  <Tag>AngularJS</Tag>
                  <Tag>Selenium</Tag>
                  <Tag>Scrum</Tag>
                  <Tag>Lean Startup</Tag>
                </Tags>
              </div>
            )}
          </Subsection>

          <Divider />

          <Subsection>
            {({ Header, Title, Lead, Description, DescriptionLine, Tags, Tag }) => (
              <div>
                <Header>
                  <Title>
                    Ideapalveluksi.fi <Small>2013/4–5</Small>
                  </Title>
                  <Lead>
                    <strong>Software architect</strong> in a small team crafting boutique software
                  </Lead>
                </Header>
                <Description>
                  <DescriptionLine>
                    Automated frontend testing of a business intelligence application for a client in engineering and
                    manufacturing.
                  </DescriptionLine>
                  <DescriptionLine>
                    Lead the service design for a new responsive brand frontpage and was responsible for its
                    implementation.
                  </DescriptionLine>
                </Description>
                <Tags>
                  <Tag>Javascript</Tag>
                  <Tag>AngularJS</Tag>
                  <Tag>Ruby</Tag>
                  <Tag>Karma</Tag>
                  <Tag>Sass</Tag>
                  <Tag>Heroku</Tag>
                  <Tag>Service Design</Tag>
                </Tags>
              </div>
            )}
          </Subsection>

          <Divider />

          <Subsection>
            {({ Header, Title, Link, Lead, Description, DescriptionLine, Tags, Tag }) => (
              <div>
                <Header>
                  <Title>
                    <Link href="http://reaktor.fi">Reaktor</Link> <Small>2012/5–8</Small>
                  </Title>
                  <Lead>
                    <strong>Software developer</strong> and IT consultant for large domestic and multinational client
                    companies
                  </Lead>
                </Header>
                <Description>
                  <DescriptionLine>Worked in client projects with a kanban-inspired agile workflow.</DescriptionLine>
                  <DescriptionLine>Crafted single page applications and responsive pages.</DescriptionLine>
                  <DescriptionLine>
                    Made decisions on architecture and technology stack levels in project work.
                  </DescriptionLine>
                </Description>
                <Tags>
                  <Tag>Scala</Tag>
                  <Tag>CoffeeScript</Tag>
                  <Tag>Selenium</Tag>
                  <Tag>Heroku</Tag>
                  <Tag>Functional Programming</Tag>
                  <Tag>Kanban</Tag>
                  <Tag>Continuous Integration</Tag>
                </Tags>
              </div>
            )}
          </Subsection>

          <Divider />

          <Subsection>
            {({ Header, Title, Link, Lead, Description, DescriptionLine, Tags, Tag }) => (
              <div>
                <Header>
                  <Title>
                    <Link href="http://soprano.fi">Soprano</Link> <Small>2006–2012</Small>
                  </Title>
                  <Lead>
                    <strong>Software architect</strong> and <strong>agile evangelist</strong> in a team of a dozen
                    developers
                  </Lead>
                  <Lead>
                    <strong>Software developer</strong> and IT consultant for clients ranging from small US-based
                    startups to large domestic enterprises
                  </Lead>
                </Header>
                <Description>
                  <DescriptionLine>
                    Organized TDD workshops and presentations on other tech subjects to disseminate information.
                  </DescriptionLine>
                  <DescriptionLine>
                    Spearheaded a corporate-endorsed open source code sharing effort to reduce repeated effort and
                    improve company profile internally.
                  </DescriptionLine>
                  <DescriptionLine>
                    Was responsible for an in-house application boilerplate used in a multitude of different projects.
                  </DescriptionLine>
                </Description>
                <Tags>
                  <Tag>PHP</Tag>
                  <Tag>Zend Framework</Tag>
                  <Tag>Doctrine ORM</Tag>
                  <Tag>PHPUnit</Tag>
                  <Tag>Javascript</Tag>
                  <Tag>TDD</Tag>
                  <Tag>Agile</Tag>
                  <Tag>Open Source</Tag>
                </Tags>
              </div>
            )}
          </Subsection>
        </div>
      )}
    </MainSection>
  );
}
