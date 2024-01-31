import { Skeleton } from '~/components/ui/skeleton'

export default function Loading() {
  return (
    <section className="mt-10 flex flex-wrap justify-center gap-4">
      {Array.from({ length: 24 }, (_, i) => i + 1).map((item) => (
        <Skeleton key={item} className="w-full min-w-[200px] rounded-xl" />
      ))}
    </section>
  )
}
