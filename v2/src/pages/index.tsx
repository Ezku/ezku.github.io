import * as React from 'react';

import { Container, PageStyles } from '../components/Layout';
import { A, Small, Abbr } from '../components/Typography';
import Jumbotron from '../components/Jumbotron';
import MainSection from '../components/MainSection';
import Subsection from '../components/Subsection';
import Profile from '../components/Profile';
import Recommendation from '../components/Recommendation';
import EducationalAchievement from '../components/EducationalAchievement';

export default function index() {
  return (
    <Container>
      <PageStyles />
      <Jumbotron>
        {({ Header, Title, Subtitle, Lead, Aside, Tags, Tag }) => (
          <div>
            <Header>
              <Subtitle>Hi, I'm</Subtitle>
              <Title>Eevert Saukkokoski,</Title>
              <Subtitle>Full Stack Developer, Facilitator and Methodology Coach</Subtitle>
            </Header>

            <Lead>
              I build things for the web. I'm known for being able to craft digital services with
              users and business in mind. I love learning about new things, solving problems and
              helping find ways to do things better. They tell me I'm buzzword-compliant, too. Here
              are a few, pick yours:
            </Lead>
            <Tags>
              <Tag>lean</Tag>
              <Tag>kanban</Tag>
              <Tag>servicedesign</Tag>
              <Tag>xp</Tag>
              <Tag>ci</Tag>
              <Tag>cd</Tag>
              <Tag>fp</Tag>
              <Tag>oss</Tag>
              <Tag>nodejs</Tag>
              <Tag>react</Tag>
              <Tag>docker</Tag>
              <Tag>devops</Tag>
              <Tag>fullstack</Tag>
            </Tags>
            <Aside>
              Sounds like exactly what you need?{' '}
              <A className="btn btn-lg btn-primary" href="#contact">
                Skip the intros, cut to the chase &raquo;&raquo;
              </A>
            </Aside>
          </div>
        )}
      </Jumbotron>

      <MainSection>
        {({ Title, Divider }) => (
          <div>
            <Title>Experience</Title>
            <Divider />

            <Subsection>
              {({ Header, Title, Link, Lead, Description, DescriptionLine, Tags, Tag }) => (
                <div>
                  <Header>
                    <Title>
                      <Link href="https://www.venuu.fi">Venuu</Link> <Small>2016–2018</Small>
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
                      Led the development for and architected{' '}
                      <A href="http://www.appgyver.io/supersonic">Supersonic</A>, a library for
                      building HTML5 hybrid applications on the AppGyver platform.
                    </DescriptionLine>
                    <DescriptionLine>
                      Authored <A href="http://www.appgyver.io/supersonic/data">Supersonic Data</A>,
                      a data access layer for AppGyver Cloud.
                    </DescriptionLine>
                    <DescriptionLine>
                      Co-developed architecture and individual modules for{' '}
                      <A href="http://composer2.appgyver.com/">AppGyver Composer</A>, a visual tool
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
              {({ Header, Title, Link, Lead, Description, DescriptionLine, Tags, Tag }) => (
                <div>
                  <Header>
                    <Title>
                      <Link href="http://www.futurice.com">Futurice</Link> <Small>2013/5–9</Small>
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
              {({ Header, Title, Link, Lead, Description, DescriptionLine, Tags, Tag }) => (
                <div>
                  <Header>
                    <Title>
                      <Link href="http://reaktor.fi">Reaktor</Link> <Small>2012/5–8</Small>
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
              {({ Header, Title, Link, Lead, Description, DescriptionLine, Tags, Tag }) => (
                <div>
                  <Header>
                    <Title>
                      <Link href="http://soprano.fi">Soprano</Link> <Small>2006–2012</Small>
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
              Samples from <A href="http://github.com/Ezku">GitHub</A>
            </Title>
            <Divider />

            <Subsection>
              {({ Header, Title, Link, Lead, Tags, Tag }) => (
                <div>
                  <Header>
                    <Title>
                      <Link href="https://github.com/Ezku/prerenderer-cli">prerenderer-cli</Link>{' '}
                      <Small>2018</Small>
                    </Title>
                    <Lead>
                      A command line tool for prerendering static sites without Server-Side
                      Rendering
                    </Lead>
                  </Header>
                  <Tags>
                    <Tag>Developer Experience</Tag>
                    <Tag>Static Deployments</Tag>
                  </Tags>
                </div>
              )}
            </Subsection>

            <Divider />

            <Subsection>
              {({ Header, Title, Link, Lead, Tags, Tag }) => (
                <div>
                  <Header>
                    <Title>
                      <Link href="https://github.com/Ezku/supersonic">Supersonic</Link>{' '}
                      <Small>2014-2016</Small>
                    </Title>
                    <Lead>
                      Supersonic is a JS library built for developer-friendly access to features in
                      the{' '}
                      <A href="http://www.appgyver.io/supersonic">
                        AppGyver Supersonic developer platform
                      </A>
                      . These include cloud data and native device APIs.
                    </Lead>
                  </Header>
                  <Tags>
                    <Tag>Developer Experience</Tag>
                    <Tag>Hybrid Mobile Development</Tag>
                  </Tags>
                </div>
              )}
            </Subsection>

            <Divider />

            <Subsection>
              {({ Header, Title, Link, Lead, Tags, Tag }) => (
                <div>
                  <Header>
                    <Title>
                      <Link href="https://github.com/Ezku/nodeboard">Nodeboard</Link>{' '}
                      <Small>2011, 2014</Small>
                    </Title>
                    <Lead>
                      Imageboard software that you can set up on Heroku with the press of a button.
                      Originally built as{' '}
                      <A href="https://github.com/Ezku/nodeboard#legacy">coursework</A> to
                      investigate{' '}
                      <A href="https://medium.com/@ghengeveld/isomorphism-vs-universal-javascript-4b47fb481beb">
                        "isomorphic"
                      </A>{' '}
                      JS in the early days of Node.js.
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
              {({ Header, Title, Link, Lead, Tags, Tag }) => (
                <div>
                  <Header>
                    <Title>
                      <Link href="https://xi-project.github.io">Xi Project</Link>{' '}
                      <Small>2011–2012</Small>
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
              {({ Title, Provenance, Description, Tags, Tag }) => (
                <div>
                  <Title>Master's degree</Title>
                  <Provenance>
                    Information Networks study programme, Aalto University School of Science
                  </Provenance>
                  <Description>
                    Graduated with honours in 2017. Master's studies with major in Business
                    Networks, focusing on how knowledge intensive organizations work. Bachelor's
                    studies with major in Knowledge Intensive Business.
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
                    <Link href="https://aaltodoc.aalto.fi/handle/123456789/23956">
                      Master's thesis
                    </Link>{' '}
                    <Small>2016–2017</Small>
                  </Title>
                  <Description>
                    &quot;What exactly is the use of dailies: A practice-based perspective on
                    continuous improvement in software development.&quot;
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
                    <Link href="https://aaltodoc.aalto.fi/handle/123456789/8722">
                      Bachelor's thesis
                    </Link>{' '}
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
                      Since 2012 I do event photography as a hobby. My interest is in portraits, so
                      I often end up doing corporate mugshots as well.
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
                      Co-wrote the script for{' '}
                      <A href="http://www.teekkarispeksi.fi">Teekkarispeksi</A> 2015. Teekkarispeksi
                      is a large-scale student theatre production with approximately 200 volunteer
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
                      Served as toastmaster for the Information Networks' student guild,{' '}
                      <A href="http://www.athene.fi">Athene</A>, in 2011-2013. My duties were to
                      serve as master of ceremony and first singer in academic dinner parties with
                      dozens to over a hundred guests. Since that time I've come to be known for
                      writing numerous songs, some of which are part of the canonical Aalto
                      University student union songbook since 2017.
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
                      Hugs <span className="glyphicon glyphicon-heart" />
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
              <Image src={require('./index/ezku-1024.jpg')} />
              <Title>So, that's me.</Title>
              <Subtitle>
                <A
                  className="btn btn-lg btn-success"
                  href="mailto:eevert.saukkokoski+ezku.github.io@gmail.com?subject=We%20would%20love%20to%20have%20a%20chat"
                  title="Shoot me a message"
                >
                  What could we do together?
                </A>
              </Subtitle>
            </Header>
            <Lead>
              <A href="http://twitter.com/Ezku">Twitter</A> /{' '}
              <A href="http://github.com/Ezku">Github</A> /{' '}
              <A href="https://fi.linkedin.com/in/eevert-saukkokoski-b8a4b830">LinkedIn</A>
            </Lead>
          </div>
        )}
      </Profile>
    </Container>
  );
}
