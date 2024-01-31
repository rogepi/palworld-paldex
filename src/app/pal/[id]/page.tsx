import { PalDetail } from '~/components/pal-detail'

export default function PalPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <PalDetail id={params.id} />
    </div>
  )
}
