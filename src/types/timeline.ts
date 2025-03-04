/**
 * Media source type definition
 */
export interface MediaSource {
  url: string;
}

/**
 * Media type options
 */
export type MediaType = "IMAGE" | "VIDEO";

/**
 * Media information for timeline items
 */
export interface Media {
  name: string;
  source: MediaSource;
  type: MediaType;
}

/**
 * Main timeline item interface
 */
export interface TimelineItem {
  title: string;
  cardTitle: string;
  cardSubtitle: string;
  cardDetailedText: string;
  media?: Media;
}

/**
 * Type for the complete timeline data array
 */
export type TimelineData = TimelineItem[];
