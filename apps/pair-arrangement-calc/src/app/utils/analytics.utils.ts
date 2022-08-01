/**
 * Utils for Google analytics
 *
 * ----------------------------------------------------------------------------------------
 * Copyright (c) 2020 Axel Siebert (a.siebert_84@gmx.de)
 *
 * @Created 08. November 2020
 */

// Third-party dependencies
import { Metric } from 'web-vitals';

export function sendToGoogleAnalytics({ name, delta, id }: Metric): void {
  ga('send', 'event', {
    eventAction: name,
    eventCategory: 'Web Vitals',
    eventLabel: id,
    eventValue: Math.round(name === 'CLS' ? delta * 1000 : delta), // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate
  });
}
