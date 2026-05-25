import React from 'react';
import { catalog } from '../lib/catalog';
import PortalContainer from '../components/PortalContainer';

export default function ExplicitEndreyPortal() {
  // Pure Server Component architecture with zero client instructions or state tracking anchors
  return <PortalContainer catalog={catalog} />;
}