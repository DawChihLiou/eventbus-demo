import { Status, Wrapper } from '@googlemaps/react-wrapper'
import type { MarkerData } from '~/data/markers'
import Map from '../Map'
import Marker from '../Marker'

const render = (status: Status) => {
  if (status === Status.FAILURE) {
    return <p>failed</p>
  }
  return <p>loading...</p>
}

interface GoogleMapProps {
  onIdle: (map: google.maps.Map) => void
  onClick: (e: google.maps.MapMouseEvent) => void
  onMarkerClick: (payload: MarkerData) => void
  markers: MarkerData[]
  center: google.maps.LatLngLiteral
  zoom: number
  apiKey: string
}

export default function GoogleMap({
  apiKey,
  onClick,
  onIdle,
  zoom,
  center,
  markers,
  onMarkerClick,
}: GoogleMapProps) {
  return (
    <div className="flex h-full">
      <Wrapper apiKey={apiKey} render={render}>
        <Map
          className="grow h-full"
          center={center}
          zoom={zoom}
          minZoom={2}
          maxZoom={18}
          onIdle={onIdle}
          onClick={onClick}
          fullscreenControl={false}
          streetViewControl={false}
          mapTypeControl={false}
          zoomControl={false}
        >
          {markers.map((m) => (
            <Marker
              key={m.id}
              position={m.coord}
              clickable
              data={m}
              onClick={onMarkerClick}
            />
          ))}
        </Map>
      </Wrapper>
    </div>
  )
}
