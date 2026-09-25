/**
 * Configuration publicitaire Revive Adserver pour le domaine club-voyages.com
 * Source : Inventaire ads.les4h.fr (Affiliate ID 104)
 */

export interface AdZoneConfig {
  zoneId: number;
  format: 'leaderboard' | 'mediumRectangle' | 'mobileBanner' | 'largeRectangle' | 'halfPage' | 'skyscraper';
  width: number;
  height: number;
  name: string;
}

export type AdSlotKey =
  | 'header'
  | 'inContent'
  | 'mobileSticky'
  | 'largeRectangle'
  | 'halfPage'
  | 'skyscraper';

export interface DomainAdsConfig {
  domain: string;
  affiliateId: number;
  reviveId: string;
  scriptUrl: string;
  zones: Record<AdSlotKey, AdZoneConfig>;
}

export const adsConfig: DomainAdsConfig = {
  domain: 'club-voyages.com',
  affiliateId: 104,
  reviveId: 'ac119b122a644588953c74c4c1daee06',
  scriptUrl: '//ads.les4h.fr/www/delivery/asyncjs.php',
  zones: {
    header: {
      zoneId: 634,
      format: 'leaderboard',
      width: 728,
      height: 90,
      name: 'Leaderboard 634',
    },
    inContent: {
      zoneId: 635,
      format: 'mediumRectangle',
      width: 300,
      height: 250,
      name: 'Medium Rectangle 635',
    },
    mobileSticky: {
      zoneId: 637,
      format: 'mobileBanner',
      width: 320,
      height: 100,
      name: 'Mobile Banner 637',
    },
    largeRectangle: {
      zoneId: 636,
      format: 'largeRectangle',
      width: 336,
      height: 280,
      name: 'Large Rectangle 636',
    },
    halfPage: {
      zoneId: 639,
      format: 'halfPage',
      width: 300,
      height: 600,
      name: 'Half Page 639',
    },
    skyscraper: {
      zoneId: 638,
      format: 'skyscraper',
      width: 160,
      height: 600,
      name: 'Skyscraper 638',
    },
  },
};

export default adsConfig;
