'use client'
import { DotsThree } from 'phosphor-react'
import { Pagination, PaginationItem, PaginationList } from '../../../../src'

const DefaultPagination = () => {
  return (
    <div>
      <Pagination>
        <PaginationList>
          <PaginationItem>1</PaginationItem>
          <PaginationItem active>2</PaginationItem>
          <PaginationItem>3</PaginationItem>
          <PaginationItem>4</PaginationItem>
          <PaginationItem>
            <DotsThree size={20} />
          </PaginationItem>
          <PaginationItem>10</PaginationItem>
        </PaginationList>
      </Pagination>
    </div>
  )
}

const DefaultPaginationCode = {
  'Pagination.tsx': `
'use client'
import { DotsThree } from 'phosphor-react'
import { Pagination, PaginationItem, PaginationList } from 'keep-react'

export const PaginationComponent = () => {
  return (
    <Pagination>
      <PaginationList>
        <PaginationItem>1</PaginationItem>
        <PaginationItem active>2</PaginationItem>
        <PaginationItem>3</PaginationItem>
        <PaginationItem>4</PaginationItem>
        <PaginationItem>
          <DotsThree size={20} />
        </PaginationItem>
        <PaginationItem>10</PaginationItem>
      </PaginationList>
    </Pagination>
  )
}
`,
}

export { DefaultPagination, DefaultPaginationCode }
