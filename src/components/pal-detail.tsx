import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

import { env } from '~/env'
import { getPals } from '~/lib/get-pals'

import { AspectRatio } from './ui/aspect-ratio'
import { Badge } from './ui/badge'

export async function PalDetail({ id }: { id: string }) {
  const data = await getPals({ key: id })

  if (!data.content[0]) return notFound()

  const pal = data.content[0]

  const imageSrc = env.API_URL + pal.image

  return (
    <Suspense fallback={<div>loading...</div>}>
      <div>
        <div className="grid grid-cols-2 gap-4">
          <AspectRatio>
            <Image
              className="object-cover"
              src={imageSrc}
              alt={pal.name}
              fill
              sizes="300px"
              priority
            />
          </AspectRatio>
          <div>
            <div className="text-3xl font-semibold">
              <Link
                className="hover:underline"
                href={pal.wiki}
              >{`#${pal.key} ${pal.name}`}</Link>
              <span>
                {pal.types.map((item) => (
                  <Badge key={item} variant="outline">
                    {item}
                  </Badge>
                ))}
              </span>
            </div>
            <div className="mt-4 text-sm">
              <span className="font-semibold">Description</span>
              <br />
              <span className="text-primary/50">{pal.description}</span>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  )
}
