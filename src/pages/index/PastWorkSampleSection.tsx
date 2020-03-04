import * as React from 'react';

import { A, Small } from '../../components/Typography';
import MainSection from '../../components/MainSection';
import Subsection from '../../components/Subsection';

export default function() {
  return (
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
                    <Link href="https://github.com/Ezku/prerenderer-cli">prerenderer-cli</Link> <Small>2018</Small>
                  </Title>
                  <Lead>A command line tool for prerendering static sites without Server-Side Rendering</Lead>
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
                    <Link href="https://github.com/Ezku/supersonic">Supersonic</Link> <Small>2014-2016</Small>
                  </Title>
                  <Lead>
                    Supersonic is a JS library built for developer-friendly access to features in the{' '}
                    <A href="http://www.appgyver.io/supersonic">AppGyver Supersonic developer platform</A>. These
                    include cloud data and native device APIs.
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
                    <Link href="https://github.com/Ezku/nodeboard">Nodeboard</Link> <Small>2011, 2014</Small>
                  </Title>
                  <Lead>
                    Imageboard software that you can set up on Heroku with the press of a button. Originally built as{' '}
                    <A href="https://github.com/Ezku/nodeboard#legacy">coursework</A> to investigate{' '}
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
                    <Link href="https://xi-project.github.io">Xi Project</Link> <Small>2011–2012</Small>
                  </Title>
                  <Lead>
                    An open-source initiative in collaboration with lead developers at my then-employer, aimed at
                    reducing costs across projects. I contributed in both code and efforts to build up capability to
                    contribute among other developers.
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
  );
}
