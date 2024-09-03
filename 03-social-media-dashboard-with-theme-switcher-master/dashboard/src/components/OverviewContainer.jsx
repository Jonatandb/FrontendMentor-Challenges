import data from '../../data/data.json'
import { OverviewCardOverall } from './OverviewCardOverall'

export const OverviewContainer = () => {
  return (
    <section className='max-w-[1100px] flex flex-wrap absolute top-[200px] md:top-[130px] left-0 right-0 mx-auto'>
      {data.overview_overall.map(card => {
        return <OverviewCardOverall key={card.id} cardData={card} />
      })}
    </section>
  )
}
