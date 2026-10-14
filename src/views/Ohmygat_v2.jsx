import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import fondoAzulHeader from '../assets/ohmygat_v2/fondo-azul-header.svg'
import fondoBlancoTop from '../assets/ohmygat_v2/fondo-blanco-top.svg'
import ohmygatLogo from '../assets/ohmygat_v2/ohmygat.svg'
import textoIrresistibleSabor from '../assets/ohmygat_v2/texto-irresistible-sabor.svg'
import textoFormulaProteinas from '../assets/ohmygat_v2/texto-formula-con-proteinas.svg'
import fotoGato from '../assets/ohmygat_v2/gato_header.svg'
import flechaAbajo from '../assets/ohmygat_v2/flecha-abajo.svg'
import textoBajaParaMas from '../assets/ohmygat_v2/texto-bajaparamas.svg'

import fondoAzulClaroMiddle from '../assets/ohmygat_v2/fondo-azul-claro-middle.svg'
import textoAtributosAzul from '../assets/ohmygat_v2/texto-atributos-azul.svg'
import textoFuncionales from '../assets/ohmygat_v2/texto-funcionales.svg'
import textoAdultos from '../assets/ohmygat_v2/texto-adultos.svg'
import gatoCirculo from '../assets/ohmygat_v2/gato-circulo.svg'
import fondoAzul from '../assets/ohmygat_v2/fondo-azul.svg'
import caserosBanner from '../assets/ohmygat_v2/caseros.svg'

import proteinaAltaCalidad from '../assets/ohmygat_v2/proteina-alta-calidad.svg'
import sistemaDigestivo from '../assets/ohmygat_v2/sistema-digestivo.svg'
import controlPhAzul from '../assets/ohmygat_v2/control-ph-azul.svg'
import pielSana from '../assets/ohmygat_v2/piel-sana.svg'

import textoPresentacionesBlanco from '../assets/ohmygat_v2/texto-presetaciones-blanco.svg'
import luzHero from '../assets/ohmygat_v2/luz.svg'
import ohmygat1500 from '../assets/ohmygat_v2/ohmygat1500.svg'
import ohmygat8000 from '../assets/ohmygat_v2/ohmygat8000.svg'

import fondoMoradoMiddle from '../assets/ohmygat_v2/fondo-morado-midlle.svg'
import fondoMorado from '../assets/ohmygat_v2/fondo-morado.svg'
import juguetonesBanner from '../assets/ohmygat_v2/juguetones.svg'
import ohmygatGaticos from '../assets/ohmygat_v2/ohmygat-gaticos.svg'
import textoAtributoBlanco from '../assets/ohmygat_v2/texto-atributo-blanco.svg'
import textoFuncionalesBlanco from '../assets/ohmygat_v2/texto-funcionales-blanco.svg'
import textoGatitosBlanco from '../assets/ohmygat_v2/texto-gatitos-blanco.svg'
import fondoMoradoGatitos from '../assets/ohmygat_v2/fondo-morado-gatito.svg'
import fondoMoradoFooter from '../assets/ohmygat_v2/fondo-morado-footer.svg'

import crecimientoAdecuado from '../assets/ohmygat_v2/crecimiento-adecuado.svg'
import defensasSistemaInmune from '../assets/ohmygat_v2/defensas-y-sistema-inmune.svg'
import controlPh from '../assets/ohmygat_v2/control-ph.svg'

import textoDisponibleMorado from '../assets/ohmygat_v2/texto-disponibleen-morado.svg'
import textoPresentacionMorado from '../assets/ohmygat_v2/texto-presentacion-morado.svg'
import ohmygatGatitos1500 from '../assets/ohmygat_v2/ohmygat-gatitos1500.svg'

import textoHuellitas from '../assets/ohmygat_v2/texto-huellitas.svg'
import textoConoceMasBlanco from '../assets/ohmygat_v2/texto-conocemas-blanco.svg'
import botonDonkat from '../assets/ohmygat_v2/boton-donkat.svg'
import botonVolverHome from '../assets/ohmygat_v2/boton-volver-home.svg'
import botonVisitaNutricional from '../assets/ohmygat_v2/boton-visita-nutricional.svg'
import perroBottom from '../assets/ohmygat_v2/perro-bottom.svg'
import proteinaDeAltaCalidad from '../assets/ohmygat_v2/proteina-de-alta-calidad.svg'

import ImageCarousel from '../components/ImageCarousel'
import ViewAssetLoader from '../components/ViewAssetLoader'

const ohmygatAssets = [
  fondoAzulHeader,
  fondoBlancoTop,
  ohmygatLogo,
  textoIrresistibleSabor,
  textoFormulaProteinas,
  fotoGato,
  flechaAbajo,
  textoBajaParaMas,
  fondoAzulClaroMiddle,
  textoAtributosAzul,
  textoFuncionales,
  textoAdultos,
  gatoCirculo,
  fondoAzul,
  caserosBanner,
  proteinaAltaCalidad,
  proteinaDeAltaCalidad,
  sistemaDigestivo,
  controlPhAzul,
  pielSana,
  textoPresentacionesBlanco,
  luzHero,
  ohmygat1500,
  ohmygat8000,
  fondoMoradoMiddle,
  fondoMorado,
  fondoMoradoGatitos,
  fondoMoradoFooter,
  juguetonesBanner,
  ohmygatGaticos,
  textoAtributoBlanco,
  textoFuncionalesBlanco,
  textoGatitosBlanco,
  crecimientoAdecuado,
  defensasSistemaInmune,
  controlPh,
  textoDisponibleMorado,
  textoPresentacionMorado,
  ohmygatGatitos1500,
  textoHuellitas,
  textoConoceMasBlanco,
  botonDonkat,
  botonVolverHome,
  botonVisitaNutricional,
  perroBottom,
]

function Ohmygat() {
  const [assetsReady, setAssetsReady] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)

    let isMounted = true
    const preloadImages = async () => {
      const promises = ohmygatAssets.map((src) => {
        return new Promise((resolve) => {
          const img = new Image()
          img.src = src
          img.onload = resolve
          img.onerror = resolve
        })
      })

      await Promise.all(promises)
      if (isMounted) {
        setAssetsReady(true)
      }
    }

    preloadImages()

    return () => {
      isMounted = false
    }
  }, [])

  const handleGoToAtributos = (event) => {
    const section = document.getElementById('atributos-adultos')
    if (!section) return
    event.preventDefault()
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', '/ohmygat#atributos-adultos')
  }

  if (!assetsReady) {
    return <ViewAssetLoader label="Cargando Oh.mai.gat" />
  }

  return (
    <main className="w-full max-w-[1080px] mx-auto min-h-screen flex flex-col items-center select-none bg-white overflow-x-hidden">
      <section className="pt-10 sm:pt-14 relative w-full flex flex-col items-center text-center z-10 overflow-hidden bg-[#0099D0] min-[1000px]:min-h-[900px]">
        <img
          src={fondoBlancoTop}
          alt=""
          aria-hidden="true"
          className="absolute top-2 sm:top-4 left-0 w-full h-auto object-contain -z-10 pointer-events-none"
        />

        <div className="w-full flex flex-col items-center relative -top-6 sm:-top-10">
          <div className="w-full flex justify-center">
            <img
              src={ohmygatLogo}
              alt="Oh.mai.gat"
              className="w-[48%] sm:w-[48%] min-[1000px]:w-[70%] max-w-[320px] sm:max-w-[360px] min-[1000px]:max-w-[580px] mt-2 sm:mt-4 min-[1000px]:mt-8 object-contain"
            />
          </div>

          <div className="flex flex-col items-center gap-2 sm:gap-3 min-[1000px]:gap-6 w-[88%] sm:w-[85%] min-[1000px]:w-[95%] max-w-[560px] min-[1000px]:max-w-[850px] mb-2 mt-2 sm:mt-3 min-[1000px]:mt-6">
            <img
              src={textoIrresistibleSabor}
              alt="Irresistible sabor para el consentido de la casa"
              className="w-full h-auto drop-shadow-sm"
            />
            <img
              src={textoFormulaProteinas}
              alt="Única fórmula con proteína de alta calidad..."
              className="w-full h-auto drop-shadow-sm"
            />
          </div>

          <div className="ohmygat-hero-visual relative w-full mt-4 min-h-[300px] sm:min-h-[500px] min-[1000px]:min-h-[680px] bg-[#FFFFFF] overflow-visible">
            <img
              src={fotoGato}
              alt="Gato Hero"
              className="absolute left-[-2%] bottom-[-160px] sm:bottom-[-190px] min-[1000px]:bottom-[-320px] w-[46%] sm:w-[58%] min-[1000px]:w-[90%] max-w-[340px] min-[1000px]:max-w-[900px] z-10 pointer-events-none object-contain drop-shadow-md"
            />

            <a
              href="#atributos-adultos"
              onClick={handleGoToAtributos}
              className="absolute right-[3%] sm:right-[5%] top-[12%] sm:top-[15%] min-[1000px]:top-[20%] w-[52%] sm:w-[54%] min-[1000px]:w-[72%] max-w-[280px] sm:max-w-[320px] min-[1000px]:max-w-[650px] flex flex-col items-center gap-0 z-20 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <img
                src={textoBajaParaMas}
                alt="Baja para más información"
                className="w-full h-auto drop-shadow-sm"
              />
              <img
                src={flechaAbajo}
                alt="Bajar"
                className="w-[110px] sm:w-[140px] min-[1000px]:w-[340px] max-w-full h-auto -mt-1 min-[1000px]:-mt-3 drop-shadow-md"
              />
            </a>
          </div>
        </div>
      </section>

      <section
        id="atributos-adultos"
        className="relative z-20 w-full flex flex-col items-center text-center overflow-visible -mt-16 sm:-mt-24 min-[1000px]:-mt-36"
      >
        {fondoAzulClaroMiddle && (
          <img
            src={fondoAzulClaroMiddle}
            alt=""
            aria-hidden="true"
            className="absolute -top-24 sm:-top-42 left-0 z-10 w-full h-auto bg-gradient-to-b from-transparent via-[#B2E3F4]/50 to-[#B2E3F4] object-contain pointer-events-none"
          />
        )}

        <div className="relative z-30 w-full flex flex-col items-center pt-12 sm:pt-16 md:pt-20 pb-0">
          <div className="flex flex-col items-center gap-2 mb-6 sm:mb-8 w-full max-w-[560px] px-4">
            <img src={textoAtributosAzul} alt="Atributos" className="w-[65%] max-w-[360px] h-auto drop-shadow-sm" />
            <img src={textoFuncionales} alt="Funcionales" className="w-[88%] max-w-[480px] h-auto drop-shadow-sm" />
            <img src={textoAdultos} alt="Adultos" className="w-[55%] max-w-[300px] h-auto drop-shadow-sm" />
          </div>

          <div className="relative z-30 w-full flex justify-center items-center px-4">
            <img
              src={gatoCirculo}
              alt="Gato con empaque de comida y atributos"
              className="w-[90%] max-w-[580px] h-auto object-contain drop-shadow-lg"
            />
          </div>
        </div>

        <div className="relative w-full z-10 leading-none -mt-72 sm:-mt-80 md:-mt-96">
          <img
            src={fondoAzul}
            alt=""
            aria-hidden="true"
            className="w-full h-auto object-cover block pointer-events-none"
          />

          <div className="absolute inset-0 w-full h-full flex items-center justify-center z-10">
            <img
              src={caserosBanner}
              alt="Caseros equilibrio con prebióticos"
              className="w-full h-auto object-contain drop-shadow-sm"
            />
          </div>
        </div>
      </section>

      <section className="relative w-full flex flex-col items-center text-center py-6 z-20 -mt-16 sm:-mt-36 md:-mt-60 overflow-hidden">
        <img
          src={fondoAzul}
          alt=""
          aria-hidden="true"
          className="absolute -top-[35%] left-0 w-full h-[160%] object-cover pointer-events-none z-0 scale-y-110"
        />

        <img
          src={fondoAzul}
          alt=""
          aria-hidden="true"
          className="absolute top-[15%] left-0 w-full h-[130%] object-cover pointer-events-none z-0 rotate-180 scale-x-[-1]"
        />

        <div className="w-full pt-10 sm:pt-2 md:pt-12 pb-30 relative z-10">
          <ImageCarousel
            items={[
              { src: proteinaAltaCalidad, alt: 'Proteína de Alta Calidad' },
              { src: sistemaDigestivo, alt: 'Sistema Digestivo Sano' },
              { src: controlPhAzul, alt: 'Control pH' },
              { src: pielSana, alt: 'Piel Sana' },
            ]}
          />
        </div>

        <div className="relative w-full py-6 mt-2 flex flex-col items-center z-10">
          <img src={textoPresentacionesBlanco} alt="Disponible en presentaciones de" className="w-[80%] max-w-[440px] mb-6 relative z-10" />

          <div className="relative w-full flex justify-center items-center">
            <img 
              src={luzHero} 
              alt="" 
              aria-hidden="true" 
              className="absolute inset-x-0 w-full h-full object-cover scale-x-110 opacity-90 pointer-events-none z-0" 
            />
            <div className="relative top-[-30] z-10 w-full">
              <ImageCarousel
                items={[
                  { src: ohmygat1500, alt: 'OhMyGat 1.5 kg' },
                  { src: ohmygat8000, alt: 'OhMyGat 8 kg' },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full flex flex-col items-center text-center -mt-24 sm:-mt-44 md:-mt-50 z-30 overflow-visible">
        <img
          src={fondoMoradoMiddle}
          alt=""
          aria-hidden="true"
          className="w-full h-auto object-contain block pointer-events-none z-0 bg-gradient-to-b from-transparent via-[#BDA0CC]/100 to-[#BDA0CC]"
        />

        <div className="absolute top-[15%] left-0 w-full flex flex-col items-center z-10 p-0">
          <img 
            src={juguetonesBanner} 
            alt="Juguetones" 
            className="w-full h-auto object-contain drop-shadow-sm mb-2" 
          />
          <img 
            src={ohmygatGaticos} 
            alt="Gatitos jugando" 
            className="w-[88%] min-[1000px]:w-[95%] max-w-[520px] min-[1000px]:max-w-[780px] object-contain drop-shadow-md px-4" 
          />
        </div>
      </section>

      <section className="relative w-full flex flex-col items-center text-center -mt-10 sm:-mt-40 md:-mt-90 z-30 overflow-hidden bg-[#A182C0]">
        <img
          src={fondoMorado}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        />

        <div className="relative z-10 w-full pt-14 sm:pt-18 md:pt-20 pb-6 px-4 flex flex-col items-center gap-2">
          <img src={textoAtributoBlanco} alt="Atributos" className="w-[75%] max-w-[420px]" />
          <img src={textoFuncionalesBlanco} alt="Funcionales" className="w-[85%] max-w-[480px]" />
          <img src={textoGatitosBlanco} alt="Gatitos" className="w-[55%] max-w-[300px]" />
        </div>
      </section>

      <section className="relative w-full flex flex-col items-center text-center -mt-2 z-30 overflow-hidden bg-[#BA9DC8]">
        <img
          src={fondoMorado}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 rotate-180 scale-x-[-1]"
        />

        <div className="relative z-10 w-full py-8">
          <ImageCarousel
            items={[
              { src: proteinaDeAltaCalidad, alt: 'Proteína de Calidad' },
              { src: crecimientoAdecuado, alt: 'Crecimiento Adecuado' },
              { src: defensasSistemaInmune, alt: 'Defensas y Sistema Inmune' },
              { src: controlPh, alt: 'Control pH' },
            ]}
          />
        </div>
      </section>

      <section className="relative w-full flex flex-col items-center text-center py-8 z-30 overflow-hidden bg-[#BA9DC8]">
        <img
          src={fondoMoradoGatitos}
          alt=""
          aria-hidden="true"
          className="absolute top-0 left-0 w-full h-auto object-contain pointer-events-none z-0"
        />

        <div className="relative z-10 flex flex-col items-center gap-2 mb-6 w-full px-4 pt-6 sm:pt-8 md:pt-10">
          <img src={textoDisponibleMorado} alt="Disponible en presentaciones de" className="w-[70%] max-w-[400px]" />
          <img src={textoPresentacionMorado} alt="1,5 kg" className="w-[75%] max-w-[420px]" />
        </div>

        <div className="relative z-10 w-full mb-4">
          <ImageCarousel items={[{ src: ohmygatGatitos1500, alt: 'OhMyGat Gatitos 1.5 kg' }]} />
        </div>
      </section>

      <section className="relative w-full flex flex-col items-center text-center -mt-8 sm:-mt-18 md:-mt-25 z-40 overflow-visible">
        <img
          src={fondoMoradoFooter}
          alt=""
          aria-hidden="true"
          className="w-full h-auto object-contain block pointer-events-none z-0"
        />

        <div className="absolute inset-0 w-full h-full flex flex-col justify-between items-center pt-4 sm:pt-12 min-[1000px]:pt-24 pb-0 z-10">
          <div className="flex flex-col items-center gap-1 sm:gap-2 min-[1000px]:gap-4 w-full px-4 mt-2 sm:mt-30 min-[1000px]:mt-12">
            <img 
              src={textoHuellitas} 
              alt="Huellitas por explorar" 
              className="w-[90%] max-w-[480px] min-[1000px]:max-w-[720px] h-auto object-contain" 
            />
            <img 
              src={textoConoceMasBlanco} 
              alt="Conoce más" 
              className="w-[80%] max-w-[400px] min-[1000px]:max-w-[620px] h-auto object-contain" 
            />
          </div>

          <div className="flex flex-col items-center gap-3 sm:gap-4 min-[1000px]:gap-8 w-full px-4 z-20">
            <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 min-[1000px]:gap-12 w-full">
              <Link to="/donkat" className="transition-transform hover:scale-105 active:scale-95">
                <img 
                  src={botonDonkat} 
                  alt="Donkat" 
                  className="w-[120px] sm:w-[160px] md:w-[210px] min-[1000px]:w-[320px] h-auto drop-shadow-md" 
                />
              </Link>
              <Link to="/" className="transition-transform hover:scale-105 active:scale-95">
                <img 
                  src={botonVolverHome} 
                  alt="Volver al Home" 
                  className="w-[120px] sm:w-[160px] md:w-[210px] min-[1000px]:w-[320px] h-auto drop-shadow-md" 
                />
              </Link>
            </div>

            <Link 
              to="/dogourmet" 
              className="transition-transform hover:scale-105 active:scale-95 mt-1 sm:mt-2 min-[1000px]:mt-4 z-30"
            >
              <img 
                src={botonVisitaNutricional} 
                alt="Visitar Nutrición Canina" 
                className="w-[260px] sm:w-[340px] md:w-[420px] min-[1000px]:w-[620px] h-auto drop-shadow-lg" 
              />
            </Link>
          </div>

          <div className="relative w-full h-16 sm:h-24 md:h-32 min-[1000px]:h-56 flex items-end justify-start">
            <img
              src={perroBottom}
              alt="Perro"
              className="absolute left-0 bottom-0 w-[60%] sm:w-[56%] md:w-[50%] min-[1000px]:w-[70%] max-w-[360px] min-[1000px]:max-w-[620px] object-contain pointer-events-none z-10"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Ohmygat