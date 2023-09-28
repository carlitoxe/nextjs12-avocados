import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import Layout from '@components/Layout/Layout'

type YesOrNoApiResponse = {
  data: 'yes' | 'no'
}

const fetchResult = async () => {
  const res = await fetch('https://platzi-avo.vercel.app/api/yes-or-no')
  const { data }: YesOrNoApiResponse = await res.json()

  return data
}

export async function getServerSideProps() {
  const initialResult = await fetchResult()

  return {
    props: {
      initialResult,
    },
  }
}

const YesOrNo = ({ initialResult }: { initialResult: string }) => {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(initialResult)
  const [triggerCount, setTriggerCount] = useState(0)

  useEffect(() => {
    setLoading(true)
    fetchResult().then((initialResult) => {
      setResult(initialResult)
      setLoading(false)
    })
  }, [triggerCount])

  const onClick = async () => {
    setTriggerCount(triggerCount + 1)
  }

  return (
    <div>
        <h1 
          className={loading ? 'text-8xl pt-5 mb-5 uppercase text-gray-400' : 'text-8xl pt-5 mb-5 text-lime-400 uppercase'}>
            {result}
        </h1>
        <p>
          <button 
            type="button" 
            onClick={onClick} 
            disabled={loading} 
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 disabled:bg-gray-500">
              Try Again
          </button>

        </p>
        <p className='pt-7 font-medium'>
          <Link href={'/'} className='border rounded-lg px-5 py-2.5' >Go Home</Link>

        </p>
    </div>
  )

}

export default YesOrNo;