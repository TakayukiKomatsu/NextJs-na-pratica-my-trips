import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
    <Map
      places={[
        {
          id: '1',
          name: 'Petrópolis',
          slug: 'petropolis',
          location: {
            latitude: 0,
            longitude: 0
          }
        },
        {
          id: '2',
          name: 'São Paulo',
          slug: 'saopaulo',
          location: {
            latitude: 10,
            longitude: 30
          }
        }
      ]}
    />
  )
}
