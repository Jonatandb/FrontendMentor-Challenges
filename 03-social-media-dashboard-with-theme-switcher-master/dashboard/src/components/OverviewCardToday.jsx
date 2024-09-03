import { convertNumberToK } from '../utils/convertNumberToK'
import { icons } from '../utils/icons'

export const OverviewCardToday = ({
  cardData: { type, network, count, percentage, isUp },
}) => {
  return (
    <article className='bg-Light-Grayish-Blue w-[326px] md:w-[250px] h-[125px] mb-4 mx-auto rounded-[5px] hover:brightness-95 cursor-pointer hover:dark:brightness-125 p-[27px] dark:bg-Dark-Desaturated-Blue'>
      <div className='flex items-center justify-between mb-[18px]'>
        <p className='font-bold text-Dark-Grayish-Blue text-sm'>{type}</p>
        <img src={icons[network]} alt={`Logo ${network}`} />
      </div>
      <div className='flex items-center justify-between'>
        <p className='text-[30px] font-bold text-Very-Dark-Blue dark:text-White'>
          {convertNumberToK(count)}
        </p>
        <div
          className={`flex items-center justify-center ${
            isUp ? 'text-Lime-Green' : 'text-Bright-Red'
          } mt-5 font-bold gap-1 text-xs`}
        >
          <img
            src={icons[isUp ? 'up' : 'down']}
            alt={`Logo ${isUp ? 'up' : 'down'}`}
          />
          <p>{percentage}%</p>
        </div>
      </div>
    </article>
  )
}
