import { eventbus } from 'eventbus'
import { logUserInteraction } from '~/utils/logger'

export const mapEventChannel = eventbus<{
  onMapIdle: () => void
  onMapClick: (payload: google.maps.MapMouseEvent) => void
}>()

mapEventChannel.on('onMapIdle', () => {
  logUserInteraction('on map idle.')
})

mapEventChannel.on('onMapClick', (payload) => {
  logUserInteraction('on map click.', payload)
})
