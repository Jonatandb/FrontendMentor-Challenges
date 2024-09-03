import data from '../../data/data.json'
import { OverviewCardOverall } from './OverviewCardOverall'

export const OverviewContainer = () => {
  return (
    <section className="w-[326px] absolute top-[200px] left-0 right-0 mx-auto">
      {
        data.overview_overall.map(card => {
          return (
            <OverviewCardOverall key={card.id} cardData={card} />
          )
        })
      }
    </section>
  )
}
