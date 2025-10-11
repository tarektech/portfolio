import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Tarek AlZein - Full Stack Web Developer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: '#ffffff',
              marginBottom: 20,
              textAlign: 'center',
            }}
          >
            Tarek AlZein
          </h1>
          <p
            style={{
              fontSize: 36,
              color: '#888888',
              marginBottom: 40,
              textAlign: 'center',
            }}
          >
            Full Stack Web Developer
          </p>
          <p
            style={{
              fontSize: 24,
              color: '#666666',
              textAlign: 'center',
            }}
          >
            React • Next.js • Node.js • TypeScript
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
