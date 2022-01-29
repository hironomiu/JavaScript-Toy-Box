import { memo } from 'react'
import { FiBell, FiMail, FiLogOut } from 'react-icons/fi'
import { useStateContext } from '../context/StateProvider'

const Header = memo(() => {
  const { count } = useStateContext()
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: '20px',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <span>Header</span>
      </div>
      <div>
        <FiBell style={{ fontSize: '25px', padding: '0 5px' }} />
        {count === 0 ? null : (
          <span
            style={{
              position: 'absolute',
              display: 'inline-block',
              right: '70px',
              fontSize: '5px',
              color: '#fff',
              background: '#ec4646',
              borderRadius: '50%',
              width: '12px',
              height: '12px',
              lineHeight: '12px',
              textAlign: 'center',
            }}
          >
            {count}
          </span>
        )}
        <FiMail style={{ fontSize: '25px', padding: '0 5px' }} />
        {count === 0 ? null : (
          <span
            style={{
              position: 'absolute',
              display: 'inline-block',
              right: '35px',
              fontSize: '5px',
              color: '#fff',
              background: '#ec4646',
              borderRadius: '50%',
              width: '12px',
              height: '12px',
              lineHeight: '12px',
              textAlign: 'center',
            }}
          >
            {count}
          </span>
        )}

        <FiLogOut style={{ fontSize: '20px' }} />
      </div>
    </div>
  )
})

export default Header
