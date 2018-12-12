import * as React from 'react';

import Container from '../components/Container';
import { H1, H2, H3, H4, Small, P } from '../components/Typography';

export default function index() {
  return (
    <Container>
      <section id="intro">
        <div className="jumbotron">
          <H1>Eevert Saukkokoski,</H1>
          <H2>software craftsman.</H2>

          <div className="lead">
            <P className="row col-lg-10 col-lg-offset-1">
              <strong>Are you looking for someone to wear many hats?</strong> You want a developer
              who can craft quality software. Someone who can create digital services with users and
              business in mind. A generalist with deep technical skills and an eye for improvement.
            </P>
            <P className="row col-lg-10 col-lg-offset-1">
              <strong>You're looking for someone like me.</strong> I can help you build reactive,
              scalable applications with modern tools and practices. I'm familiar with lean
              workflows and applying service design thinking to creating solutions. I'll support
              your performance with methodology insight and by finding ways to do things better.
            </P>
          </div>

          <P className="hidden-xs visible-sm">
            <a className="btn btn-lg btn-primary" href="#contact" title="Scroll down to the beef">
              Yes, that's exactly who we need!{' '}
              <span className="glyphicon glyphicon-chevron-right" />
            </a>
          </P>
        </div>
      </section>

      <section id="experience">
        <div className="page-header">
          <H2>Experience</H2>
        </div>

        <H3 id="full-stack-developer-venuu-2016-">
          <a href="https://www.venuu.fi">Venuu</a> <Small>2016–2018</Small>
        </H3>
        <section className="row">
          <header className="col-md-4">
            <P>
              <strong>Full stack developer</strong> on a B2B2C marketplace platform for event
              organization
            </P>
          </header>
          <div className="col-md-4">
            <ul>
              <li>
                Chief architect on an in-house software development team, with specific efforts
                towards Javascript development support and containerization
              </li>
              <li>
                Facilitator and process coach for the development team, its stakeholders and the
                company at large
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="tagcloud">
              {/* Tech stack */}
              <li className="language">ES6+</li>
              <li>Node.js</li>
              <li>Flowtype</li>

              <li className="language">Ruby</li>
              <li>Ruby on Rails</li>

              <li>React</li>
              <li>Redux</li>

              <li>npm</li>
              <li>CircleCI</li>
              <li>AWS</li>
              <li>Docker</li>

              {/* Buzzwords */}
              <li>Continuous Delivery</li>
              <li>Kanban</li>
              <li>Facilitation</li>
              <li>Process Development</li>
            </ul>
          </div>
        </section>

        <hr />

        <H3 id="platform-developer-appgyver-2013-2016">
          <a href="http://www.appgyver.com">AppGyver</a> <Small>2013–2016</Small>
        </H3>
        <section className="row">
          <header className="col-md-4">
            <P>
              <strong>Platform developer</strong> for hybrid mobile application tooling and{' '}
              <strong>architect</strong> for a Javascript library ecosystem
            </P>
          </header>
          <div className="col-md-4">
            <ul>
              <li>
                Led the development for and architected{' '}
                <a href="http://www.appgyver.io/supersonic">Supersonic</a>, a library for building
                HTML5 hybrid applications on the AppGyver platform.
              </li>
              <li>
                Authored <a href="http://www.appgyver.io/supersonic/data">Supersonic Data</a>, a
                data access layer for AppGyver Cloud.
              </li>
              <li>
                Co-developed architecture and individual modules for{' '}
                <a href="http://composer2.appgyver.com/">AppGyver Composer</a>, a visual tool for
                building business applications.
              </li>
              <li>Regularly facilitated development team dailies.</li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="tagcloud">
              {/* Tech stack */}
              <li className="language">CoffeeScript</li>
              <li>Node.js</li>

              <li className="language">Ruby</li>
              <li>Ruby on Rails</li>

              <li>AngularJS</li>
              <li>Bacon.js</li>

              <li>Grunt</li>
              <li>npm</li>
              <li>TravisCI</li>
              <li>Heroku</li>

              {/* Buzzwords */}
              <li>Open Source</li>
              <li>PaaS</li>
              <li>Kanban</li>
              <li>Reactive Functional Programming</li>
            </ul>
          </div>
        </section>

        <hr />

        <H3 id="software-craftsman-futurice-2013">
          <a href="http://www.futurice.com">Futurice</a> <Small>2013/5–9</Small>
        </H3>
        <section className="row">
          <header className="col-md-4">
            <P>
              <strong>Software craftsman</strong> and IT consultant for medium-sized to large
              multinational client companies
            </P>
          </header>
          <div className="col-md-4">
            <ul>
              <li>Acted as modern web technology specialist in projects.</li>
              <li>Engaged in client-facing software development process facilitation.</li>
              <li>Drafted and led the creation of proposals for clients.</li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="tagcloud">
              {/* Tech stack */}
              <li className="language">Javascript</li>
              <li>Node.js</li>

              <li>Grunt</li>
              <li>AngularJS</li>
              <li>Selenium</li>
              <li>Bootstrap</li>
              <li>Less</li>

              {/* Buzzwords */}
              <li>Scrum</li>
              <li>Lean Startup</li>
              <li>Responsive Web Design</li>
            </ul>
          </div>
        </section>

        <hr />

        <H3 id="software-architect-ideapalveluksi-2013">
          Ideapalveluksi.fi <Small>2013/4–5</Small>
        </H3>
        <section className="row">
          <header className="col-md-4">
            <P>
              <strong>Software architect</strong> in a small team crafting boutique software
            </P>
          </header>
          <div className="col-md-4">
            <ul>
              <li>
                Automated frontend testing of a business intelligence application for a client in
                engineering and manufacturing.
              </li>
              <li>
                Lead the service design for a new responsive brand frontpage and was responsible for
                its implementation.
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="tagcloud">
              {/* Tech stack */}
              <li className="language">Javascript</li>
              <li>AngularJS</li>

              <li className="language">Ruby</li>
              <li>Sinatra</li>

              <li>Karma</li>
              <li>Sass</li>

              <li>Heroku</li>

              {/* Buzzwords */}
              <li>Service Design</li>
              <li>Responsive Web Design</li>
            </ul>
          </div>
        </section>

        <hr />

        <H3 id="software-developer-reaktor-2012">
          <a href="http://reaktor.fi">Reaktor</a> <Small>2012/5–8</Small>
        </H3>
        <section className="row">
          <header className="col-md-4">
            <P>
              <strong>Software developer</strong> and IT consultant for large domestic and
              multinational client companies
            </P>
          </header>
          <div className="col-md-4">
            <ul>
              <li>Worked in client projects with a kanban-inspired agile workflow.</li>
              <li>Crafted single page applications and responsive pages.</li>
              <li>Made decisions on architecture and technology stack levels in project work.</li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="tagcloud">
              {/* Tech stack */}
              <li className="language">Scala</li>
              <li className="language">CoffeeScript</li>

              <li>Rx.js</li>
              <li>Selenium</li>

              <li>Heroku</li>
              <li>Vagrant</li>

              {/* Buzzwords */}
              <li>Functional Programming</li>
              <li>Kanban</li>
              <li>Continuous Integration</li>
            </ul>
          </div>
        </section>

        <hr />

        <H3 id="software-architect-software-developer-soprano-brain-alliance-2006-2012">
          <a href="http://soprano.fi">Soprano</a> <Small>2006–2012</Small>
        </H3>
        <section className="row">
          <header className="col-md-4">
            <P>
              <strong>Software architect</strong> and <strong>agile evangelist</strong> in a team of
              a dozen developers
            </P>
            <P>
              <strong>Software developer</strong> and IT consultant for clients ranging from small
              US-based startups to large domestic enterprises
            </P>
          </header>
          <div className="col-md-4">
            <ul>
              <li>
                Organized TDD workshops and presentations on other tech subjects to disseminate
                information.
              </li>
              <li>
                Spearheaded a corporate-endorsed open source code sharing effort to reduce repeated
                effort and improve company profile internally.
              </li>
              <li>
                Was responsible for an in-house application boilerplate used in a multitude of
                different projects.
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="tagcloud">
              <li className="language">PHP</li>
              <li>Zend Framework</li>
              <li>Doctrine ORM</li>
              <li>PHPUnit</li>

              <li className="language">Javascript</li>
              <li>jQuery</li>

              <li>MySQL</li>
              <li>Apache</li>

              <li>TDD</li>
              <li>XP</li>
              <li>Agile</li>
              <li>Open Source</li>
            </ul>
          </div>
        </section>

        <hr />

        <section className="row">
          <header className="col-md-4">
            <H3>
              Samples from <a href="http://github.com/Ezku">GitHub</a>
            </H3>
          </header>
          <div className="col-md-8">
            <section>
              <H4>
                <a href="https://github.com/Ezku/agson">Agson</a> <Small>2014–2015</Small>
              </H4>
              <div className="row">
                <ul className="col-md-6">
                  <li>A functional lens-based library for querying and modifying JSON graphs.</li>
                  <li>
                    Solved the problem of manipulating complex incoming data to fit an evolving
                    schema in a part of AppGyver Composer.
                  </li>
                </ul>
                <ul className="col-md-6 tagcloud">
                  <li>Functional Programming</li>
                  <li>Property Based Testing</li>
                </ul>
              </div>
            </section>

            <section>
              <H4>
                <a href="https://github.com/Ezku/nodeboard">Nodeboard</a> <Small>2011, 2014</Small>
              </H4>
              <div className="row">
                <ul className="col-md-6">
                  <li>
                    Imageboard software that you can set up on Heroku with the press of a button.
                  </li>
                  <li>
                    Originally built as{' '}
                    <a href="https://github.com/Ezku/nodeboard#legacy">coursework</a>.
                  </li>
                </ul>
                <ul className="col-md-6 tagcloud">
                  <li>Node.js</li>
                  <li>Heroku</li>
                </ul>
              </div>
            </section>

            <section>
              <H4>
                <a href="https://xi-project.github.io">Xi Project</a> <Small>2011–2012</Small>
              </H4>
              <div className="row">
                <ul className="col-md-6">
                  <li>
                    An open-source code sharing initiative in collaboration with other developers.
                  </li>
                  <li>
                    My contributions included{' '}
                    <a href="https://github.com/xi-project/xi-collections">Xi-Collections</a>,
                    functional collections for PHP, and{' '}
                    <a href="https://github.com/xi-project/zf-boilerplate">ZF-Boilerplate</a>, an
                    opinionated package of conventions and libraries for Zend Framework 1
                    development.
                  </li>
                </ul>
                <ul className="col-md-6 tagcloud">
                  <li>Open Source</li>
                  <li>Functional Programming</li>
                  <li>Technical Writing</li>
                  <li>Software Architecture</li>
                  <li>Platform Building</li>
                </ul>
              </div>
            </section>

            <section>
              <H4>
                <a href="https://github.com/Ezku/coffee-injector">Coffee-Injector</a>{' '}
                <Small>2010–2012</Small>
              </H4>
              <div className="row">
                <div className="col-md-6">
                  <P>An asynchronous dependency injection container for Node.js.</P>
                </div>
                <ul className="col-md-6 tagcloud">
                  <li>CommonJS Promises</li>
                  <li>Asynchronous Testing</li>
                </ul>
              </div>
            </section>
          </div>
        </section>
      </section>

      <section id="recommendations">
        <div className="page-header">
          <H2>Recommendations</H2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <blockquote>
              <P>
                &ldquo;He’s bright, hard-working and has a both pragmatic and theoretic take on his
                responsibilities &hellip; a vivid and enthusiastic personality &hellip; super
                skilled developer &hellip;{' '}
                <strong>an excellent facilitator and communicator</strong> &rdquo;
              </P>
              <cite>
                <a href="https://www.linkedin.com/in/tomi-h%C3%A4nninen-92a15364/">Tomi Hänninen</a>
                CEO, Venuu
              </cite>
            </blockquote>
            <blockquote>
              <P>
                &ldquo;Hardworking, buzzword-compliant and well focused{' '}
                <strong>professional with a good sense of humour</strong>. Specially good at leading
                projects and helping junior developers to grow.&rdquo;
              </P>
              <cite>
                <a href="https://www.linkedin.com/in/jouini">Nizar Jouini</a>
                CEO, Ideapalveluksi.fi
                <br />
                Principal Consultant, Reaktor
              </cite>
            </blockquote>
          </div>
          <div className="col-md-4">
            <blockquote>
              <P>
                &ldquo;An extremely talented software developer &hellip;{' '}
                <strong>not just a dull techie</strong>, but social, willing to help others,
                observes and improves on how things get done&rdquo;
              </P>
              <cite>
                <a href="https://www.linkedin.com/in/mattipaksula">Matti Paksula</a>
                CTO, AppGyver
              </cite>
            </blockquote>
            <blockquote>
              <P>
                &ldquo;Solid technical skills &hellip; expertise in software development
                methodologies and facilitation. &hellip; <strong>A strong can-do attitude</strong>{' '}
                &hellip; well-liked by customers.&rdquo;
              </P>
              <cite>
                <a href="http://www.linkedin.com/profile/view?id=3814375">Paavo Punkari</a>
                Business Director, Futurice
              </cite>
            </blockquote>
          </div>
          <div className="col-md-4">
            <blockquote>
              <P>
                &ldquo;Ingenious problem solving skills and{' '}
                <strong>wide knowledge of different technologies</strong> &hellip; very passionate
                and enthusiastic about the work he does and strives constantly to do things the
                right way.&rdquo;
              </P>
              <cite>
                <a href="http://www.linkedin.com/profile/view?id=129157140">Jetro Suni</a>
                Senior Software Specialist, Futurice
              </cite>
            </blockquote>
            <blockquote>
              <P>
                &ldquo;Sharp, has a great attitude, and is always looking for serious well-thought
                ways to improve and perform better. <strong>Level-headed thinker</strong> &hellip;
                Dedicated ambition and a serious strive towards professionalism.&rdquo;
              </P>
              <cite>
                <a href="http://www.linkedin.com/profile/view?id=48343">Taneli Tikka</a>
                CEO, Soprano Brain Alliance
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section id="education">
        <div className="page-header">
          <H2>Education</H2>
        </div>

        <section className="row">
          <header className="col-md-4">
            <H3>Information Networks</H3>
            <H4>Aalto University School of Science</H4>
          </header>
          <div className="col-md-8">
            <section>
              <H4>
                Master's thesis <Small>2016–2017</Small>
              </H4>
              <div className="row">
                <div className="col-md-6">
                  <P>
                    What exactly is the use of dailies: A practice-based perspective on continuous
                    improvement in software development
                  </P>
                </div>
                <ul className="col-md-6 tagcloud">
                  <li>Continuous Improvement</li>
                  <li>Social Innovation</li>
                </ul>
              </div>
            </section>

            <section>
              <H4>
                Master of Science studies <Small>2011–2013</Small>
              </H4>
              <div className="row">
                <div className="col-md-6">
                  <P>
                    Majored in Business Networks, focusing on how knowledge intensive organizations
                    work.
                  </P>
                </div>
                <ul className="col-md-6 tagcloud">
                  <li>Process Development</li>
                  <li>Shaping Institutions</li>
                </ul>
              </div>
            </section>

            <section>
              <H4>
                Bachelor's thesis <Small>2011</Small>
              </H4>
              <div className="row">
                <div className="col-md-6">
                  <P>
                    Scaling agile software development by applying software architecture practices
                  </P>
                </div>
                <ul className="col-md-6 tagcloud">
                  <li>Software Practices</li>
                  <li>Agile</li>
                </ul>
              </div>
            </section>

            <section>
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
            </section>
          </div>
        </section>

        <hr />

        <section className="row">
          <header className="col-md-4">
            <H3>Extracurricular personas</H3>
          </header>
          <div className="col-md-8">
            <section>
              <H4>Photographer</H4>
              <div className="row">
                <div className="col-md-6">
                  <P>
                    Since 2012 I do event photography as a hobby. Close-up portraits and informal
                    situations are what I'd consider my forte, but I've been known to reach for the
                    camera whenever it's needed – be it birthdays, baptisms, or business
                    photography.
                  </P>
                </div>
                <ul className="col-md-6 tagcloud">
                  <li>Events</li>
                  <li>Image Retouching</li>
                </ul>
              </div>
            </section>

            <section>
              <H4>Playwright</H4>
              <div className="row">
                <div className="col-md-6">
                  <P>
                    Co-wrote the script for{' '}
                    <a href="http://www.teekkarispeksi.fi">Teekkarispeksi</a> 2015. Teekkarispeksi
                    is a large-scale student theatre production with approximately 200 volunteer
                    participants each year.
                  </P>
                </div>
                <ul className="col-md-6 tagcloud">
                  <li>Theatre</li>
                  <li>Creative Writing</li>
                </ul>
              </div>
            </section>

            <section>
              <H4>Toastmaster and songwriter</H4>
              <div className="row">
                <div className="col-md-6">
                  <P>
                    Served as toastmaster for the Information Networks' student guild,{' '}
                    <a href="http://www.athene.fi">Athene</a>, in 2011-2013. My duties were to serve
                    as master of ceremony and first singer in academic dinner parties with dozens to
                    over a hundred guests. Since that time I've come to be known for numerous songs,
                    some of which are part of the canonical Aalto University student union songbook
                    since 2017.
                  </P>
                </div>
                <ul className="col-md-6 tagcloud">
                  <li>Performing in Public</li>
                  <li>Creative Writing</li>
                </ul>
              </div>
            </section>
          </div>
        </section>
      </section>

      <section id="personal">
        <div className="page-header">
          <H2>Personal</H2>
        </div>

        <section className="row">
          <header className="col-md-4">
            <H3>How do we fit?</H3>
          </header>
          <div className="col-md-8">
            <section className="row">
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
            </section>

            <section className="row">
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
            </section>

            <section className="row">
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
            </section>
          </div>
        </section>
      </section>

      <hr />

      <section id="contact">
        <div className="jumbotron">
          <header>
            <img src={require('./index/ezku-1024.jpg')} />
            <H2>Let's talk about what we could do together.</H2>
          </header>
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
      </section>
    </Container>
  );
}