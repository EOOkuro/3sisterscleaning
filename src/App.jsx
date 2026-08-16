import React from 'react';
import { Helmet } from 'react-helmet';
import CleaningPros from '@/components/CleaningPros';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>The Cleaning Pros | We Make Everything Shine!</title>
        <meta name="description" content="Welcome to The Cleaning Pros! Professional cleaning services that make your space shine. Est. 2019." />
      </Helmet>
      <CleaningPros />
      <Toaster />
    </>
  );
}

export default App;