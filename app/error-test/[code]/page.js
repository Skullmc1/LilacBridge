'use client'

import { useParams } from 'next/navigation'
import { useEffect } from 'react'

export default function ErrorTest() {
  const params = useParams()
  const errorCode = parseInt(params.code)

  useEffect(() => {
    // Simulate different error scenarios based on the code
    switch (errorCode) {
      case 401:
        throw new Error('Unauthorized')
      case 403:
        throw new Error('Forbidden')
      case 404:
        throw new Error('Not Found')
      case 500:
        throw new Error('Internal Server Error')
      case 502:
        throw new Error('Bad Gateway')
      case 503:
        throw new Error('Service Unavailable')
      case 504:
        throw new Error('Gateway Timeout')
      default:
        throw new Error('Unknown Error')
    }
  }, [errorCode])

  return null
} 