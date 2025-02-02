import ButtonSecondary from '../ButtonSecondary'
import { useRouter } from 'next/router'

const Center = ({ price, title, link }) => {
  const router = useRouter()
  function navigate() {
    router.push(link)
  }
  return (
    <div>
      <p className="text-4xl xl:text-5xl font-bold tracking-widest leading-none">{title}</p>
      <p className="py-6 tracking-wide">Promo sur toutes les chemises à <span>{price}</span></p>
      <ButtonSecondary
        onClick={navigate}
        title="Ajouter"
        className='bg-black'
      />
    </div>
  )
}

export default Center