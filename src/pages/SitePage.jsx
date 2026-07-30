import { useWebsiteConfig } from '../lib/content'
import { normalizeConfig } from '../data/normalizeConfig'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Products from '../components/Products'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'
import ContactPopup from '../components/ContactPopup'
import FloatingContact from '../components/FloatingContact'

export default function SitePage() {
  const { config, loading, error } = useWebsiteConfig()

  if (loading) return null
  if (error) return <p className="site-error">Không tải được nội dung.</p>
  if (!config) return null

  const data = normalizeConfig(config)

  return (
    <div className="min-h-screen bg-white">
      <Header data={data} />
      <main>
        <Hero data={data} />
        {data.visible.services && <Services data={data} />}
        {data.visible.products && <Products data={data} />}
        {data.visible.reviews && <Reviews data={data} />}
      </main>
      <Footer data={data} />
      {data.visible.popup && <ContactPopup data={data} />}
      {data.visible.floatingContact && <FloatingContact data={data} />}
    </div>
  )
}
