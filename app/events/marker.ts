import { eventbus } from 'eventbus'
import type { MarkerData } from '~/data/markers'
import { logger } from '~/utils/logger'

export const markerEventChannel = eventbus<{
  onMarkerClick: (payload: MarkerData) => void
}>()

markerEventChannel.on('onMarkerClick', (payload) => {
  logger('on map marker click.', payload)
})
