import { OverviewCardToday } from './OverviewCardToday'
import data from '../../data/data.json'

export const OverviewTodayContainer = () => {
  return (
    <section>
      <h2 className='text-2xl dark:text-White text-Dark-Grayish-Blue font-bold mb-6 ml-6'>
        Overview - Today
      </h2>
      <div className='mx-auto'>
        {data.overview_today.map(card => {
          return <OverviewCardToday key={card.id} cardData={card} />
        })}
      </div>
    </section>
  )
}
