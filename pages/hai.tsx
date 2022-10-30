
import { ReactElement } from 'react'
import Footer from '../components/footer'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Hai() {

const router = useRouter();
console.log(router);

    return (
        <Link href="/"><h1>Anh Ip</h1></Link>
    )
}



Hai.getLayout = function getLayout(page : ReactElement) {
  return (
    <>
        {page}
        <Footer />
    </>
  )
}

