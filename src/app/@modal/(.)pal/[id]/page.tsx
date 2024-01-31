import { Modal } from '~/components/modal'
import { PalDetail } from '~/components/pal-detail'

export default function PalModal({ params }: { params: { id: string } }) {
  return (
    <Modal>
      <PalDetail id={params.id} />
    </Modal>
  )
}
