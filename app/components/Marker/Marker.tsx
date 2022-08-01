import { useLayoutEffect, useState } from 'react'
import type { MarkerData } from '~/data/markers'

interface MarkerProps extends google.maps.MarkerOptions {
  data: MarkerData
  onClick?: (payload: MarkerData) => void
}

export default function Marker({ data, onClick, ...options }: MarkerProps) {
  const [marker, setMarker] = useState<google.maps.Marker>()

  useLayoutEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker())
    }
    return () => {
      if (marker) {
        marker.setMap(null)
      }
    }
  }, [marker])

  useLayoutEffect(() => {
    if (marker) {
      marker.setOptions(options)
      marker.addListener('click', () => {
        onClick?.(data)
      })
    }
  }, [marker, options, data, onClick])

  return null
}
