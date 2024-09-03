import { OverviewCardToday } from './OverviewCardToday'
import data from '../../data/data.json'

export const OverviewTodayContainer = () => {
  return (
    <section className="mx-auto lg:max-w-[1100px] sm:max-w-[95%]">
      <h2 className='text-2xl dark:text-White text-Dark-Grayish-Blue font-bold mb-6 ml-6 sm:ml-0'>
        Overview - Today
      </h2>
      <div className='flex flex-wrap'>
        {data.overview_today.map(card => {
          return <OverviewCardToday key={card.id} cardData={card} />
        })}
      </div>
    </section>
  )
}
