import type { ComponentType } from "react";
import {
  ResolveComponentFunction,
} from "@uniformdev/next-app-router";

import { HeroComponent } from "./hero";
import { Page } from "./page";
import { ComponentProps } from "@uniformdev/next-app-router/component";

// Uniform F1 Components
import { Header } from "./uniform/Header";
import { NavigationLink } from "./uniform/NavigationLink";
import { HeroSection } from "./uniform/HeroSection";
import { DriverCard } from "./uniform/DriverCard";
import { DriversSection } from "./uniform/DriversSection";
import { RaceCard } from "./uniform/RaceCard";
import { RaceSchedule } from "./uniform/RaceSchedule";
import { TeamRow } from "./uniform/TeamRow";
import { TeamStandings } from "./uniform/TeamStandings";
import { NewsCard } from "./uniform/NewsCard";
import { NewsSection } from "./uniform/NewsSection";
import { Footer } from "./uniform/Footer";
import { FooterLinkGroup } from "./uniform/FooterLinkGroup";
import { FooterLink } from "./uniform/FooterLink";
import { ArticleDetail } from "./uniform/ArticleDetail";
import { ArticlePage } from "./uniform/ArticlePage";

// Register components here: key = component type, value = React component
const componentRegistry: Record<string, ComponentType<any>> = {
  page: Page,
  hero: HeroComponent,
  // F1 Components
  header: Header,
  navigationLink: NavigationLink,
  heroSection: HeroSection,
  driverCard: DriverCard,
  driversSection: DriversSection,
  raceCard: RaceCard,
  raceSchedule: RaceSchedule,
  teamRow: TeamRow,
  teamStandings: TeamStandings,
  newsCard: NewsCard,
  newsSection: NewsSection,
  footer: Footer,
  footerLinkGroup: FooterLinkGroup,
  footerLink: FooterLink,
  articleDetail: ArticleDetail,
  articlePage: ArticlePage,
};

export const resolveComponent: ResolveComponentFunction = ({ component }) => {
  return {
    component: componentRegistry[component.type] ?? DefaultNotFoundComponent,
  };
};

// This component is used to display a message when a component is not found
const DefaultNotFoundComponent = ({ type }: ComponentProps) => process.env.NODE_ENV === 'development' ? <div>Not Found: {type}</div> : null;
