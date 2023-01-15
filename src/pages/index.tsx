import { trpc } from '@/utils/trpc';
import { getOptionsForVote } from '@/utils/getRandomPokemon';
import { useEffect, useMemo, useState } from 'react';


export default function Home() {


  const [ids, setIds] = useState<number[]>([]);

  useEffect(()=> {
    
    const [first, second] : number[] = getOptionsForVote() ;
    // const ids: number[] = [first, second];
    // setIds(ids);
    setIds([first, second]);
    }, []);
    const [first, second] = ids;


  const firstPokemon = trpc.useQuery(["get-pokemon-by-id", {id: first}]);
  console.log(firstPokemon.data);


  


    
  
  
  return (
      <div className='h-screen w-screen flex flex-col justify-center items-center'>
        <div className='text-2xl text-center'>Which Pokemon is Rounder?</div>
        <div className="p-2"/>
        <div className="border rounded p-8 flex justify-between max-w-2xl ">
            {/* <div className="w-16 h-16 bg-red-800">{randomNum[0]}</div>
            <div className="p-8 item-center">VS</div>
            <div className="w-16 h-16 bg-red-800">{randomNum[1]}</div>   */}
            <div className="w-16 h-16 bg-red-800">{first}</div>
            <div className="p-8 item-center">VS</div>
            <div className="w-16 h-16 bg-red-800">{second}</div>
                    
        </div>
      </div>     
  )
}






