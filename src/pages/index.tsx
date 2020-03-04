import * as React from 'react';

import { Container, PageStyles } from '../components/Layout';

import IntroductionSection from './index/IntroductionSection';
import ExperienceSection from './index/ExperienceSection';
import PastWorkSampleSection from './index/PastWorkSampleSection';
import RecommendationSection from './index/RecommendationSection';
import CredentialsSection from './index/CredentialsSection';
import ExtracurricularSection from './index/ExtracurricularSection';
import PersonalSection from './index/PersonalSection';
import OutroSection from './index/OutroSection';

export default function index() {
  return (
    <Container>
        
      <PageStyles />
      <IntroductionSection />
      <ExperienceSection />
      <PastWorkSampleSection />
      <RecommendationSection />
      <CredentialsSection />
      <ExtracurricularSection />
      <PersonalSection />
      <OutroSection />
    </Container>
  );
}
