import Link from 'next/link'
import { Suspense } from 'react'

import { SearchBar } from '~/components/search-bar'
import { Button } from '~/components/ui/button'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from '~/components/ui/pagination'
import { getPals } from '~/lib/get-pals'

import { PalCard } from '../components/pal-card'

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1

  const limit =
    typeof searchParams.limit === 'string' ? Number(searchParams.limit) : 24

  const search =
    typeof searchParams.search === 'string' ? searchParams.search : ''

  const data = await getPals({ page, limit, name: search })

  const pageNums = Math.ceil(data.total / limit)

  return (
    <>
      <SearchBar search={search} />
      <Suspense fallback={<div>Loading...</div>}>
        <section className="mt-10 flex flex-wrap justify-center gap-4">
          {data.content.map((item) => (
            <PalCard
              id={item.key}
              name={item.name}
              image={item.image}
              key={item.id}
            />
          ))}
          <Pagination className="mt-4">
            <PaginationContent>
              <PaginationItem>
                <Button variant="ghost">
                  <Link
                    className="flex items-center gap-1"
                    href={{
                      pathname: '/',
                      query: {
                        ...(search ? { search } : {}),
                        page: page > 1 ? page - 1 : 1,
                      },
                    }}
                  >
                    <i className="i-lucide-chevron-left" />
                    <span>Previous</span>
                  </Link>
                </Button>
              </PaginationItem>
              {Array.from({ length: pageNums }, (_, i) => i + 1).map((num) => (
                <PaginationItem key={num}>
                  <Button variant={page === num ? 'default' : 'ghost'}>
                    <Link
                      href={{
                        pathname: '/',
                        query: {
                          ...(search ? { search } : {}),
                          page: num,
                        },
                      }}
                    >
                      {num}
                    </Link>
                  </Button>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <Button variant="ghost">
                  <Link
                    className="flex items-center gap-1"
                    href={{
                      pathname: '/',
                      query: {
                        ...(search ? { search } : {}),
                        page: page + 1,
                      },
                    }}
                  >
                    <span>Next</span>
                    <i className="i-lucide-chevron-right" />
                  </Link>
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </section>
      </Suspense>
    </>
  )
}
