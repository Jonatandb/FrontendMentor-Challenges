import { convertNumberToK } from '../utils/convertNumberToK'
import { icons } from '../utils/icons'

const colors = {
  facebook: 'bg-Facebook',
  twitter: 'bg-Twitter',
  instagram: 'bg-Instagram-Gradient',
  youtube: 'bg-YouTube',
}

export const OverviewCardOverall = ({
  cardData: { network, user, audience, audienceType, isUp, today },
}) => {
  return (
    <article className='bg-Light-Grayish-Blue w-full h-[216px] mb-6 rounded-[5px] mx-auto overflow-hidden text-center dark:bg-Dark-Desaturated-Blue hover:brightness-95 cursor-pointer hover:dark:brightness-125'>
      <div className={`${colors[network]} h-[4px] mb-6`}></div>
      <div className='flex items-center justify-center gap-2 mb-2'>
        <img src={icons[network]} alt={`Logo ${network}`} />
        <p className='text-xs text-Dark-Desaturated-Blue dark:text-Desaturated-Blue font-bold'>
          {user}
        </p>
      </div>
      <p className='text-[56px] font-bold text-Very-Dark-Blue dark:text-White'>
        {convertNumberToK(audience)}
      </p>
      <p className='uppercase tracking-[5px] text-Dark-Desaturated-Blue dark:text-Desaturated-Blue text-xs -mt-2'>
        {audienceType}
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
        <p>{today}</p>
        <p>Today</p>
      </div>
    </article>
  )
}
