import * as React from 'react';

import MainSection from '../../components/MainSection';
import Recommendation from '../../components/Recommendation';

export default function() {
  return (
    <MainSection>
      {({ Title, Divider }) => (
        <div>
          <Title>Recommendations</Title>

          <Divider />

          <Recommendation>
            {({ Quote, Emphasis, Author, Link }) => (
              <div>
                <Quote>
                  &ldquo;He’s bright, hard-working and has a both pragmatic and theoretic take on his responsibilities
                  &hellip; a vivid and enthusiastic personality &hellip; super skilled developer &hellip;{' '}
                  <Emphasis>an excellent facilitator and communicator</Emphasis>&rdquo;
                </Quote>
                <Author>
                  <Link href="https://www.linkedin.com/in/tomi-h%C3%A4nninen-92a15364/">Tomi Hänninen</Link>
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
                  <Emphasis>professional with a good sense of humour</Emphasis>. Specially good at leading projects and
                  helping junior developers to grow.&rdquo;
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
                  &ldquo;An extremely talented software developer &hellip; <Emphasis>not just a dull techie</Emphasis>,
                  but social, willing to help others, observes and improves on how things get done&rdquo;
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
                  &ldquo;Solid technical skills &hellip; expertise in software development methodologies and
                  facilitation. &hellip; <Emphasis>A strong can-do attitude</Emphasis> &hellip; well-liked by
                  customers.&rdquo;
                </Quote>
                <Author>
                  <Link href="http://www.linkedin.com/profile/view?id=3814375">Paavo Punkari</Link>
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
                  <Emphasis>wide knowledge of different technologies</Emphasis> &hellip; very passionate and
                  enthusiastic about the work he does and strives constantly to do things the right way.&rdquo;
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
                  &ldquo;Sharp, has a great attitude, and is always looking for serious well-thought ways to improve and
                  perform better. <Emphasis>Level-headed thinker</Emphasis> &hellip; Dedicated ambition and a serious
                  strive towards professionalism.&rdquo;
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
  );
}
