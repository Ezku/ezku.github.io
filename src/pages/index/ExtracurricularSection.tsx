import * as React from 'react';

import { A } from '../../components/Typography';
import MainSection from '../../components/MainSection';
import Subsection from '../../components/Subsection';

export default function() {
  return (
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
  );
}
