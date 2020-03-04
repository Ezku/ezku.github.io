import * as React from 'react';

import { A } from '../../components/Typography';
import Profile from '../../components/Profile';

export default function() {
  return (
    <Profile>
      {({ Header, Image, Title, Subtitle, Lead }) => (
        <div id="contact">
          <Header>
            <Image src={require('./ezku-1024.jpg').default} />
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
  );
}
