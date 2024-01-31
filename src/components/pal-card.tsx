import Image from 'next/image'
import Link from 'next/link'

import { AspectRatio } from '~/components/ui/aspect-ratio'
import { Card, CardContent, CardHeader } from '~/components/ui/card'
import { env } from '~/env'

type PalCardProps = {
  id: string
  name: string
  image: string
}

export function PalCard({ id, name, image }: PalCardProps) {
  const imageSrc = env.API_URL + image
  return (
    <Link href={`/pal/${id}`}>
      <Card className="w-full min-w-[200px] transition  delay-150 duration-300 ease-in-out hover:scale-105">
        <CardHeader className="text-xl font-semibold">{name}</CardHeader>
        <CardContent className="p-0">
          <AspectRatio>
            <Image
              className="object-cover"
              src={imageSrc}
              alt={name}
              fill
              sizes="300px"
              priority
            />
          </AspectRatio>
        </CardContent>
      </Card>
    </Link>
  )
}
