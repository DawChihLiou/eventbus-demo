import { eventbus } from 'eventbus'
import { logger } from '~/utils/logger'

export const mapEventChannel = eventbus<{
  onMapIdle: () => void
  onMapClick: (payload: google.maps.MapMouseEvent) => void
}>()

mapEventChannel.on('onMapIdle', () => {
  logger('on map idle.')
})

mapEventChannel.on('onMapClick', (payload) => {
  logger('on map click.', payload)
})
