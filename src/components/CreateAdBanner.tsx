import { MagnifyingGlassPlus } from "phosphor-react"
import * as  Dialog from '@radix-ui/react-dialog'

export function CreateAdBanner(){
    return(
    <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg'>
    <div className='bg-[#2a2634] px-8 py-6 mt-8 flex justify-between items-center'>
     
     <div>
     <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
      <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players</span>
     </div>
    <Dialog.Trigger className='py-3 px-4 bg-violet-500 text-white rounded hover:bg-pink-700 flex items-center gap-3' >
      <MagnifyingGlassPlus size={24}/>
      Publicar anúncio
    </Dialog.Trigger>
    </div>
    </div>
    )
}