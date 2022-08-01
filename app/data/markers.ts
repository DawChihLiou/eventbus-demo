import type { ComponentType } from 'react'
import { Icon1, Icon2, Icon3, Icon4 } from '~/components/Icon'

export type MarkerData = {
  id: string
  name: string
  coord: Record<'lat' | 'lng', number>
  address: string
  stars: number
  url: string
  imgUrl: string
}

export const markers: MarkerData[] = [
  {
    id: 'Lightroast+Coffee',
    name: 'Lightroast Coffee',
    coord: { lat: 51.2263739, lng: 6.816831 },
    address: 'Hoffeldstraße 104, 40235 Düsseldorf',
    stars: 5,
    url: 'https://lightroast.de/',
    imgUrl: 'https://cataas.com/cat/626ef3837f254a0017b564f8',
  },
  {
    id: 'Rösterei+VIER+Marktplatz',
    name: 'Rösterei VIER Marktplatz',
    coord: { lat: 51.22595, lng: 6.77247 },
    address: 'Marktpl. 12, 40213 Düsseldorf',
    stars: 4.6,
    url: 'https://roesterei-vier.de/',
    imgUrl: 'https://cataas.com/cat/626f013d7f254a0017b5652f',
  },
  {
    id: 'SCHVARZ+KAFFEE',
    name: 'SCHVARZ KAFFEE',
    coord: { lat: 51.2193418, lng: 6.8213617 },
    address: 'Ronsdorfer Str. 74/Halle 31, 40233 Düsseldorf',
    stars: 4.8,
    url: 'https://schvarz.com/',
    imgUrl: 'https://cataas.com/cat/5a21157b2d0232008a63ef75',
  },
  {
    id: 'Die+Röstmeister/',
    name: 'Die Röstmeister',
    coord: { lat: 51.231759, lng: 6.748203 },
    address: 'Quirinstraße 1A, 40545 Düsseldorf',
    stars: 4.4,
    url: 'https://www.roestmeister.com/',
    imgUrl: 'https://cataas.com/cat/5b2ba493381e2274cdf31a0b',
  },
]
