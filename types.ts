// Add missing React import to resolve 'Cannot find namespace React' error
import React from 'react';

export interface Property {
  id: string;
  title: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  location: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  verified: boolean;
}

export interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}