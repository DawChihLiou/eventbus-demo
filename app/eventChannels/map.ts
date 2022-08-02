import { eventbus } from 'eventbus'

export const mapEventChannel = eventbus<{
  onMapIdle: () => void
  onMapClick: (payload: google.maps.MapMouseEvent) => void
}>()
