import React from 'react'
import { Treemap } from 'recharts';

import { TranslationContext } from '../../../helpers/translations'

import Card from '../../../components/Card'

const data = [
    { name: 'expenditure', size: 6725 },
    { name: 'paragraph', size: 3727 },
    { name: 'possible', size: 9317 },
    { name: 'right', size: 12003 },
    { name: 'summary', size: 4853 },
    { name: 'complain', size: 8411 },
    { name: 'infinite', size: 4864 },
    { name: 'smart', size: 3174 },
    { name: 'fail', size: 7881 },
    { name: 'dish', size: 12870 },
    { name: 'exit', size: 2728 },
    { name: 'paper', size: 12348 },
    { name: 'exact', size: 870 },
  ]

export const SearchTerm = () => {
  const translations = React.useContext(TranslationContext)

  return (
    <div>
      <Card title={translations.topSearchTerms}>
      <Treemap
        width={400}
        height={200}
        data={data}
        dataKey="size"
        ratio={4 / 3}
        stroke="#fff"
        fill="#8884d8"
      />
      </Card>
    </div>
  )
}