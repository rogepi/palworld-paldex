import { Modal } from '~/components/modal'
import { PalDetail } from '~/components/pal-detail'
import { getPals } from '~/lib/get-pals'

export async function generateStaticParams() {
  const _data = await getPals()

  const { content } = await getPals({ limit: _data.total })

  return content.map((item) => ({
    id: item.key,
  }))
}

export default function PalModal({ params }: { params: { id: string } }) {
  return (
    <Modal>
      <PalDetail id={params.id} />
    </Modal>
  )
}
