import { eventbus } from 'eventbus'
import type { MarkerData } from '~/data/markers'

export const markerEventChannel = eventbus<{
  onMarkerClick: (payload: MarkerData) => void
}>()
