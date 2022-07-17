import logo from '../../assets/images/logo.svg'

export const Header = () => {
  return (
    <div className="flex flex-row justify-between px-2.5 w-full h-28 border-3 border-[#606e85] rounded-md">
      
      {/* Image title */}
      <div className='w-[100px] m-2 self-center'>
        <img src={logo} alt="Rock, paper & scissors" />
      </div>

      {/* Score */}
      <div className='flex flex-col justify-center items-center w-[85px] h-[85px] self-center bg-gray-100 rounded-md'>
        <p className='font-barlow text-[#2a46c0] text-[12px] tracking-widest'>SCORE</p>
        <p className='font-barlow text-[#3b4363] text-5xl font-bold'>12</p>
      </div>
    </div>
  )
}
