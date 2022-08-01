import { eventbus } from 'eventbus'
import type { MarkerData } from '~/data/markers'
import { logUserInteraction } from '~/utils/logger'

export const markerEventChannel = eventbus<{
  onMarkerClick: (payload: MarkerData) => void
}>()

markerEventChannel.on('onMarkerClick', (payload) => {
  logUserInteraction('on marker click.', payload)
})
