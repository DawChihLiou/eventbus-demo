import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { useRef, useState } from 'react'
import Card from '~/components/Card'
import GoogleMap from '~/components/GoogleMap'
import Portal from '~/components/Portal'
import type { MarkerData } from '~/data/markers'
import { markers } from '~/data/markers'
import { mapEventChannel } from '~/events/map'
import { markerEventChannel } from '~/events/marker'

export async function loader() {
  return json({
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
  })
}

export default function Index() {
  const data = useLoaderData()
  const container = useRef<HTMLDivElement>(null)
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: 51.2277,
    lng: 6.7735,
  })
  const [zoom, setZoom] = useState<number>(13)
  const [selectedMarker, setSelectedMarker] = useState<MarkerData>()

  const onIdle = (map: google.maps.Map) => {
    mapEventChannel.emit('onMapIdle')

    setZoom(map.getZoom()!)
    const nextCenter = map.getCenter()
    if (nextCenter) {
      setCenter(nextCenter.toJSON())
    }
  }

  const onClick = (e: google.maps.MapMouseEvent) => {
    mapEventChannel.emit('onMapClick', e)
  }

  const onMarkerClick = (marker: MarkerData) => {
    markerEventChannel.emit('onMarkerClick', marker)
    setSelectedMarker(marker)
  }

  return (
    <>
      <div className="h-screen relative">
        <GoogleMap
          apiKey={data.GOOGLE_MAPS_API_KEY}
          center={center}
          zoom={zoom}
          markers={markers}
          onClick={onClick}
          onIdle={onIdle}
          onMarkerClick={onMarkerClick}
        />

        {selectedMarker && (
          <Portal container={container.current}>
            <Card {...selectedMarker} />
          </Portal>
        )}
      </div>
      <div ref={container} />
    </>
  )
}
