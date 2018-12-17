import * as React from 'react';

import { Container } from '../components/Layout';
import { Section, H3, H4, Small, P, Abbr } from '../components/Typography';
import Jumbotron from '../components/Jumbotron';
import MainSection from '../components/MainSection';
import Subsection from '../components/Subsection';
import Profile from '../components/Profile';
import Recommendation from '../components/Recommendation';
import EducationalAchievement from '../components/EducationalAchievement';

export default function index() {
  return (
    <Container>
      <Jumbotron>
        {({ Header, Title, Subtitle, Lead }) => (
          <div>
            <Header>
              <Subtitle>Hi, I'm</Subtitle>
              <Title>Eevert Saukkokoski,</Title>
              <Subtitle>software craftsman.</Subtitle>
            </Header>

            <Lead>
              <strong>Are you looking for someone to wear many hats?</strong> You want a developer
              who can craft quality software. Someone who can create digital services with users and
              business in mind. A generalist with deep technical skills and an eye for improvement.
            </Lead>
            <Lead>
              <strong>You're looking for someone like me.</strong> I can help you build reactive,
              scalable applications with modern tools and practices. I'm familiar with lean
              workflows and applying service design thinking to creating solutions. I'll support
              your performance with methodology insight and by finding ways to do things better.
            </Lead>

            <Lead>
              <a className="btn btn-lg btn-primary" href="#contact" title="Scroll down to the beef">
                Yes, that's exactly who we need!{' '}
                <span className="glyphicon glyphicon-chevron-right" />
              </a>
            </Lead>
          </div>
        )}
      </Jumbotron>

      <MainSection>
        {({ Title, Divider }) => (
          <div>
            <Title>Experience</Title>
            <Divider />

            <Subsection>
              {({ Header, Title, Lead, Description, DescriptionLine, Tags, Tag }) => (
                <div>
                  <Header>
                    <Title>
                      <a href="https://www.venuu.fi">Venuu</a> <Small>2016–2018</Small>
                    </Title>
                    <Lead>
                      <strong>Full stack developer</strong> on a <Abbr>B2B2C</Abbr> marketplace
                      platform for event organization
                    </Lead>
                  </Header>
                  <Description>
                    <DescriptionLine>
                      Chief architect on an in-house software development team, with specific
                      efforts towards Javascript development support and containerization
                    </DescriptionLine>
                    <DescriptionLine>
                      Facilitator and process coach for the development team, its stakeholders and
                      the company at large
                    </DescriptionLine>
                  </Description>
                  <Tags>
                    {/* Tech stack */}
                    <Tag className="language">ES6+</Tag>
                    <Tag>Node.js</Tag>
                    <Tag>Flowtype</Tag>

                    <Tag className="language">Ruby</Tag>
                    <Tag>Ruby on Rails</Tag>

                    <Tag>React</Tag>
                    <Tag>Redux</Tag>

                    <Tag>npm</Tag>
                    <Tag>CircleCI</Tag>
                    <Tag>AWS</Tag>
                    <Tag>Docker</Tag>

                    {/* Buzzwords */}
                    <Tag>Continuous Delivery</Tag>
                    <Tag>Kanban</Tag>
                    <Tag>Facilitation</Tag>
                    <Tag>Process Development</Tag>
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
                      <a href="http://www.appgyver.com">AppGyver</a> <Small>2013–2016</Small>
                    </Title>
                    <Lead>
                      <strong>Platform developer</strong> for hybrid mobile application tooling and{' '}
                      <strong>architect</strong> for a Javascript library ecosystem
                    </Lead>
                  </Header>
                  <Description>
                    <DescriptionLine>
                      Led the development for and architected{' '}
                      <a href="http://www.appgyver.io/supersonic">Supersonic</a>, a library for
                      building HTML5 hybrid applications on the AppGyver platform.
                    </DescriptionLine>
                    <DescriptionLine>
                      Authored <a href="http://www.appgyver.io/supersonic/data">Supersonic Data</a>,
                      a data access layer for AppGyver Cloud.
                    </DescriptionLine>
                    <DescriptionLine>
                      Co-developed architecture and individual modules for{' '}
                      <a href="http://composer2.appgyver.com/">AppGyver Composer</a>, a visual tool
                      for building business applications.
                    </DescriptionLine>
                    <DescriptionLine>
                      Regularly facilitated development team dailies.
                    </DescriptionLine>
                  </Description>
                  <Tags>
                    {/* Tech stack */}
                    <Tag className="language">CoffeeScript</Tag>
                    <Tag>Node.js</Tag>

                    <Tag className="language">Ruby</Tag>
                    <Tag>Ruby on Rails</Tag>

                    <Tag>AngularJS</Tag>
                    <Tag>Bacon.js</Tag>

                    <Tag>Grunt</Tag>
                    <Tag>npm</Tag>
                    <Tag>TravisCI</Tag>
                    <Tag>Heroku</Tag>

                    {/* Buzzwords */}
                    <Tag>Open Source</Tag>
                    <Tag>PaaS</Tag>
                    <Tag>Kanban</Tag>
                    <Tag>Reactive Functional Programming</Tag>
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
                      <a href="http://www.futurice.com">Futurice</a> <Small>2013/5–9</Small>
                    </Title>
                    <Lead>
                      <strong>Software craftsman</strong> and IT consultant for medium-sized to
                      large multinational client companies
                    </Lead>
                  </Header>
                  <Description>
                    <DescriptionLine>
                      Acted as modern web technology specialist in projects.
                    </DescriptionLine>
                    <DescriptionLine>
                      Engaged in client-facing software development process facilitation.
                    </DescriptionLine>
                    <DescriptionLine>
                      Drafted and led the creation of proposals for clients.
                    </DescriptionLine>
                  </Description>
                  <Tags>
                    {/* Tech stack */}
                    <Tag className="language">Javascript</Tag>
                    <Tag>Node.js</Tag>

                    <Tag>Grunt</Tag>
                    <Tag>AngularJS</Tag>
                    <Tag>Selenium</Tag>
                    <Tag>Bootstrap</Tag>
                    <Tag>Less</Tag>

                    {/* Buzzwords */}
                    <Tag>Scrum</Tag>
                    <Tag>Lean Startup</Tag>
                    <Tag>Responsive Web Design</Tag>
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
                      Automated frontend testing of a business intelligence application for a client
                      in engineering and manufacturing.
                    </DescriptionLine>
                    <DescriptionLine>
                      Lead the service design for a new responsive brand frontpage and was
                      responsible for its implementation.
                    </DescriptionLine>
                  </Description>
                  <Tags>
                    {/* Tech stack */}
                    <Tag className="language">Javascript</Tag>
                    <Tag>AngularJS</Tag>

                    <Tag className="language">Ruby</Tag>
                    <Tag>Sinatra</Tag>

                    <Tag>Karma</Tag>
                    <Tag>Sass</Tag>

                    <Tag>Heroku</Tag>

                    {/* Buzzwords */}
                    <Tag>Service Design</Tag>
                    <Tag>Responsive Web Design</Tag>
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
                      <a href="http://reaktor.fi">Reaktor</a> <Small>2012/5–8</Small>
                    </Title>
                    <Lead>
                      <strong>Software developer</strong> and IT consultant for large domestic and
                      multinational client companies
                    </Lead>
                  </Header>
                  <Description>
                    <DescriptionLine>
                      Worked in client projects with a kanban-inspired agile workflow.
                    </DescriptionLine>
                    <DescriptionLine>
                      Crafted single page applications and responsive pages.
                    </DescriptionLine>
                    <DescriptionLine>
                      Made decisions on architecture and technology stack levels in project work.
                    </DescriptionLine>
                  </Description>
                  <Tags>
                    {/* Tech stack */}
                    <Tag className="language">Scala</Tag>
                    <Tag className="language">CoffeeScript</Tag>

                    <Tag>Rx.js</Tag>
                    <Tag>Selenium</Tag>

                    <Tag>Heroku</Tag>
                    <Tag>Vagrant</Tag>

                    {/* Buzzwords */}
                    <Tag>Functional Programming</Tag>
                    <Tag>Kanban</Tag>
                    <Tag>Continuous Integration</Tag>
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
                      <a href="http://soprano.fi">Soprano</a> <Small>2006–2012</Small>
                    </Title>
                    <Lead>
                      <strong>Software architect</strong> and <strong>agile evangelist</strong> in a
                      team of a dozen developers
                    </Lead>
                    <Lead>
                      <strong>Software developer</strong> and IT consultant for clients ranging from
                      small US-based startups to large domestic enterprises
                    </Lead>
                  </Header>
                  <Description>
                    <DescriptionLine>
                      Organized TDD workshops and presentations on other tech subjects to
                      disseminate information.
                    </DescriptionLine>
                    <DescriptionLine>
                      Spearheaded a corporate-endorsed open source code sharing effort to reduce
                      repeated effort and improve company profile internally.
                    </DescriptionLine>
                    <DescriptionLine>
                      Was responsible for an in-house application boilerplate used in a multitude of
                      different projects.
                    </DescriptionLine>
                  </Description>
                  <Tags>
                    <Tag className="language">PHP</Tag>
                    <Tag>Zend Framework</Tag>
                    <Tag>Doctrine ORM</Tag>
                    <Tag>PHPUnit</Tag>

                    <Tag className="language">Javascript</Tag>
                    <Tag>jQuery</Tag>

                    <Tag>MySQL</Tag>
                    <Tag>Apache</Tag>

                    <Tag>TDD</Tag>
                    <Tag>XP</Tag>
                    <Tag>Agile</Tag>
                    <Tag>Open Source</Tag>
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
            <Title>
              Samples from <a href="http://github.com/Ezku">GitHub</a>
            </Title>
            <Divider />

            <Subsection>
              {({ Header, Title, Lead, Tags, Tag }) => (
                <div>
                  <Header>
                    <Title>
                      <a href="https://github.com/Ezku/agson">Agson</a> <Small>2014–2015</Small>
                    </Title>
                    <Lead>
                      A library inspired by functional lenses for querying and modifying JSON
                      graphs. Solved a problem having to do with manipulating complex incoming data
                      to fit an evolving schema in a part of AppGyver Composer.
                    </Lead>
                  </Header>
                  <Tags>
                    <Tag>Functional Programming</Tag>
                    <Tag>Property Based Testing</Tag>
                  </Tags>
                </div>
              )}
            </Subsection>

            <Divider />

            <Subsection>
              {({ Header, Title, Lead, Tags, Tag }) => (
                <div>
                  <Header>
                    <Title>
                      <a href="https://github.com/Ezku/nodeboard">Nodeboard</a>{' '}
                      <Small>2011, 2014</Small>
                    </Title>
                    <Lead>
                      Imageboard software that you can set up on Heroku with the press of a button.
                      Originally built as{' '}
                      <a href="https://github.com/Ezku/nodeboard#legacy">coursework</a> to
                      investigate "universal" JS in the early days of Node.js.
                    </Lead>
                  </Header>
                  <Tags>
                    <Tag>Node.js</Tag>
                    <Tag>Heroku</Tag>
                    <Tag>NoSQL</Tag>
                  </Tags>
                </div>
              )}
            </Subsection>

            <Divider />

            <Subsection>
              {({ Header, Title, Lead, Tags, Tag }) => (
                <div>
                  <Header>
                    <Title>
                      <a href="https://xi-project.github.io">Xi Project</a> <Small>2011–2012</Small>
                    </Title>
                    <Lead>
                      An open-source initiative in collaboration with lead developers at my
                      then-employer, aimed at reducing costs across projects. I contributed in both
                      code and efforts to build up capability to contribute among other developers.
                    </Lead>
                  </Header>
                  <Tags>
                    <Tag>Open Source</Tag>
                    <Tag>Technical Writing</Tag>
                    <Tag>Platform Building</Tag>
                  </Tags>
                </div>
              )}
            </Subsection>

            <Divider />

            <Subsection>
              {({ Header, Title, Lead, Tags, Tag }) => (
                <div>
                  <Header>
                    <Title>
                      <a href="https://github.com/Ezku/coffee-injector">Coffee-Injector</a>{' '}
                      <Small>2010–2012</Small>
                    </Title>
                    <Lead>An asynchronous dependency injection container for Node.js</Lead>
                  </Header>
                  <Tags>
                    <Tag>CommonJS Promises</Tag>
                    <Tag>Asynchronous Testing</Tag>
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
            <Title>Recommendations</Title>

            <Divider />

            <Recommendation>
              {({ Quote, Emphasis, Author, Link }) => (
                <div>
                  <Quote>
                    &ldquo;He’s bright, hard-working and has a both pragmatic and theoretic take on
                    his responsibilities &hellip; a vivid and enthusiastic personality &hellip;
                    super skilled developer &hellip;{' '}
                    <Emphasis>an excellent facilitator and communicator</Emphasis>&rdquo;
                  </Quote>
                  <Author>
                    <Link href="https://www.linkedin.com/in/tomi-h%C3%A4nninen-92a15364/">
                      Tomi Hänninen
                    </Link>
                    CEO, Venuu
                  </Author>
                </div>
              )}
            </Recommendation>

            <Recommendation>
              {({ Quote, Emphasis, Author, Link }) => (
                <div>
                  <Quote>
                    &ldquo;Hardworking, buzzword-compliant and well focused{' '}
                    <Emphasis>professional with a good sense of humour</Emphasis>. Specially good at
                    leading projects and helping junior developers to grow.&rdquo;
                  </Quote>
                  <Author>
                    <Link href="https://www.linkedin.com/in/jouini">Nizar Jouini</Link>
                    CEO, Ideapalveluksi.fi
                    <br />
                    Principal Consultant, Reaktor
                  </Author>
                </div>
              )}
            </Recommendation>

            <Recommendation>
              {({ Quote, Emphasis, Author, Link }) => (
                <div>
                  <Quote>
                    &ldquo;An extremely talented software developer &hellip;{' '}
                    <Emphasis>not just a dull techie</Emphasis>, but social, willing to help others,
                    observes and improves on how things get done&rdquo;
                  </Quote>
                  <Author>
                    <Link href="https://www.linkedin.com/in/mattipaksula">Matti Paksula</Link>
                    CTO, AppGyver
                  </Author>
                </div>
              )}
            </Recommendation>

            <Recommendation>
              {({ Quote, Emphasis, Author, Link }) => (
                <div>
                  <Quote>
                    &ldquo;Solid technical skills &hellip; expertise in software development
                    methodologies and facilitation. &hellip;{' '}
                    <Emphasis>A strong can-do attitude</Emphasis> &hellip; well-liked by
                    customers.&rdquo;
                  </Quote>
                  <Author>
                    <Link href="http://www.linkedin.com/profile/view?id=3814375">
                      Paavo Punkari
                    </Link>
                    Business Director, Futurice
                  </Author>
                </div>
              )}
            </Recommendation>

            <Recommendation>
              {({ Quote, Emphasis, Author, Link }) => (
                <div>
                  <Quote>
                    &ldquo;Ingenious problem solving skills and{' '}
                    <Emphasis>wide knowledge of different technologies</Emphasis> &hellip; very
                    passionate and enthusiastic about the work he does and strives constantly to do
                    things the right way.&rdquo;
                  </Quote>
                  <Author>
                    <Link href="http://www.linkedin.com/profile/view?id=129157140">Jetro Suni</Link>
                    Senior Software Specialist, Futurice
                  </Author>
                </div>
              )}
            </Recommendation>

            <Recommendation>
              {({ Quote, Emphasis, Author, Link }) => (
                <div>
                  <Quote>
                    &ldquo;Sharp, has a great attitude, and is always looking for serious
                    well-thought ways to improve and perform better.{' '}
                    <Emphasis>Level-headed thinker</Emphasis> &hellip; Dedicated ambition and a
                    serious strive towards professionalism.&rdquo;
                  </Quote>
                  <Author>
                    <Link href="http://www.linkedin.com/profile/view?id=48343">Taneli Tikka</Link>
                    CEO, Soprano Brain Alliance
                  </Author>
                </div>
              )}
            </Recommendation>
            <Divider />
          </div>
        )}
      </MainSection>

      <MainSection>
        {({ Title, Divider }) => (
          <div>
            <Title>Education</Title>
            <Divider />

            <EducationalAchievement>
              {({ Title, Description, Provenance, Link, Tags, Tag }) => (
                <div>
                  <Title>
                    <Link href="https://aaltodoc.aalto.fi/handle/123456789/23956">
                      Master's thesis
                    </Link>{' '}
                    <Small>2016–2017</Small>
                  </Title>
                  <Description>
                    What exactly is the use of dailies: A practice-based perspective on continuous
                    improvement in software development.{' '}
                    <Provenance>
                      Information Networks, Aalto University School of Science
                    </Provenance>
                  </Description>
                  <Tags>
                    <Tag>Continuous Improvement</Tag>
                    <Tag>Social Innovation</Tag>
                  </Tags>
                </div>
              )}
            </EducationalAchievement>

            <Section className="row">
              <header className="col-md-4">
                <H3>Information Networks</H3>
                <H4>Aalto University School of Science</H4>
              </header>
              <div className="col-md-8">
                <Section>
                  <H4>
                    Master of Science studies <Small>2011–2013</Small>
                  </H4>
                  <div className="row">
                    <div className="col-md-6">
                      <P>
                        Majored in Business Networks, focusing on how knowledge intensive
                        organizations work.
                      </P>
                    </div>
                    <ul className="col-md-6 tagcloud">
                      <li>Process Development</li>
                      <li>Shaping Institutions</li>
                    </ul>
                  </div>
                </Section>

                <Section>
                  <H4>
                    Bachelor's thesis <Small>2011</Small>
                  </H4>
                  <div className="row">
                    <div className="col-md-6">
                      <P>
                        Scaling agile software development by applying software architecture
                        practices
                      </P>
                    </div>
                    <ul className="col-md-6 tagcloud">
                      <li>Software Practices</li>
                      <li>Agile</li>
                    </ul>
                  </div>
                </Section>

                <Section>
                  <H4>
                    Bachelor of Science studies <Small>2008–2011</Small>
                  </H4>
                  <div className="row">
                    <div className="col-md-6">
                      <P>Majored in Knowledge Intensive Business.</P>
                    </div>
                    <ul className="col-md-6 tagcloud">
                      <li>Knowledge Work</li>
                      <li>User Centered Design</li>
                    </ul>
                  </div>
                </Section>
              </div>
            </Section>

            <Divider />
            <Section className="row">
              <header className="col-md-4">
                <H3>Extracurricular personas</H3>
              </header>
              <div className="col-md-8">
                <Section>
                  <H4>Photographer</H4>
                  <div className="row">
                    <div className="col-md-6">
                      <P>
                        Since 2012 I do event photography as a hobby. Close-up portraits and
                        informal situations are what I'd consider my forte, but I've been known to
                        reach for the camera whenever it's needed – be it birthdays, baptisms, or
                        business photography.
                      </P>
                    </div>
                    <ul className="col-md-6 tagcloud">
                      <li>Events</li>
                      <li>Image Retouching</li>
                    </ul>
                  </div>
                </Section>

                <Section>
                  <H4>Playwright</H4>
                  <div className="row">
                    <div className="col-md-6">
                      <P>
                        Co-wrote the script for{' '}
                        <a href="http://www.teekkarispeksi.fi">Teekkarispeksi</a> 2015.
                        Teekkarispeksi is a large-scale student theatre production with
                        approximately 200 volunteer participants each year.
                      </P>
                    </div>
                    <ul className="col-md-6 tagcloud">
                      <li>Theatre</li>
                      <li>Creative Writing</li>
                    </ul>
                  </div>
                </Section>

                <Section>
                  <H4>Toastmaster and songwriter</H4>
                  <div className="row">
                    <div className="col-md-6">
                      <P>
                        Served as toastmaster for the Information Networks' student guild,{' '}
                        <a href="http://www.athene.fi">Athene</a>, in 2011-2013. My duties were to
                        serve as master of ceremony and first singer in academic dinner parties with
                        dozens to over a hundred guests. Since that time I've come to be known for
                        numerous songs, some of which are part of the canonical Aalto University
                        student union songbook since 2017.
                      </P>
                    </div>
                    <ul className="col-md-6 tagcloud">
                      <li>Performing in Public</li>
                      <li>Creative Writing</li>
                    </ul>
                  </div>
                </Section>
              </div>
            </Section>
          </div>
        )}
      </MainSection>

      <MainSection>
        {({ Title, Divider }) => (
          <div>
            <Title>Personal</Title>

            <Section className="row">
              <header className="col-md-4">
                <H3>How do we fit?</H3>
              </header>
              <div className="col-md-8">
                <Section className="row">
                  <div className="col-md-6">
                    <H4>In my work, I value&hellip;</H4>
                  </div>
                  <ul className="col-md-6 tagcloud">
                    <li>Craftsmanship</li>
                    <li>Continuous Learning</li>
                    <li>Growing Together</li>
                    <li>Nonviolence</li>
                    <li>Empathy</li>
                  </ul>
                </Section>

                <Section className="row">
                  <div className="col-md-6">
                    <H4>I hope your organization values&hellip;</H4>
                  </div>
                  <ul className="col-md-6 tagcloud">
                    <li>Transparency</li>
                    <li>Continuous Improvement</li>
                    <li>Self-Organization</li>
                    <li>Playfulness</li>
                    <li>Open Source</li>
                  </ul>
                </Section>

                <Section className="row">
                  <div className="col-md-6">
                    <H4>I love&hellip;</H4>
                  </div>
                  <ul className="col-md-6 tagcloud">
                    <li>Functional Programming</li>
                    <li>Problem Solving</li>
                    <li>Working on Ideas</li>
                    <li>Feedback</li>
                    <li>Singing</li>
                    <li>Science Fiction</li>
                    <li>Photography</li>
                    <li>
                      Hugs <span className="glyphicon glyphicon-heart" />
                    </li>
                  </ul>
                </Section>
              </div>
            </Section>

            <Divider />
          </div>
        )}
      </MainSection>

      <Section id="contact">
        <div className="jumbotron">
          <Profile>
            {({ Image, Tagline }) => (
              <div>
                <Image src={require('./index/ezku-1024.jpg')} />
                <Tagline>Let's talk about what we could do together.</Tagline>
              </div>
            )}
          </Profile>
          <P>
            <a
              className="btn btn-lg btn-success"
              href="mailto:eevert.saukkokoski+ezku.github.io@gmail.com?subject=We%20would%20love%20to%20have%20a%20chat"
              title="Shoot me a message"
            >
              Shoot me a message
              <span className="glyphicon glyphicon-send" />
            </a>
          </P>
          <P>
            Follow <a href="http://twitter.com/Ezku">@Ezku</a> on Twitter
          </P>
          <P>
            Check out <a href="http://github.com/Ezku">Ezku</a> on GitHub
          </P>
          <P>
            Connect with{' '}
            <a href="https://fi.linkedin.com/in/eevert-saukkokoski-b8a4b830">Eevert Saukkokoski</a>{' '}
            on LinkedIn
          </P>
        </div>
      </Section>
    </Container>
  );
}
