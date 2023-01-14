
const Home = () => {
  return (
    <div className='h-screen w-screen flex flex-column justify-center align-middle'>
      <div className='text-2xl text center'>Which Pokemon is Rounder?</div>
      <div className='p-2'/>
      <div className='bg-pink-400 border rounded p-8 flex justify items-center between max-w-2xl'>
        <div className='w-16 h-16 bg-red-200'>/</div>
        <div className='p-8'>VS</div>
        <div className='w-16 h-16 bg-red-200'>/</div>
      </div>

    </div>
  )
}
export default Home;




