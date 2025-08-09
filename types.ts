import type { ReactNode } from 'react';

export interface InfoCardItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface FoundationPlan {
  name: string;
  description: string;
  price: string;
  priceDetails: string;
  duration: string;
  features: string[];
}

export interface PricingPlan {
  name: string;
  audience: string;
  price: string;
  priceDetails?: string;
  isMostPopular: boolean;
  features: string[];
}
