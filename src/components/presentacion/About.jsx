import React from 'react';
import { motion } from 'motion/react';
import CardAbout from './CardAbout';
import AnimatedSection from '../utils/animations/AnimatedSection';
import FadeSlideUp from '../utils/animations/FadeSlideUp'
import CardContainer from '../utils/animations/CardContainer'
import avatar01 from '../../assets/img/avatar01.png';
import avatar02 from '../../assets/img/avatar02.png';
import avatar03 from '../../assets/img/avatar03.png';


function About() {
  return (
    <>
      <AnimatedSection>
        <div className="container px-6 py-10 mx-auto">
          <FadeSlideUp delay={0.2}>
            <motion.h1
              className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl"
            >
              Quienes Somos
            </motion.h1>
          </FadeSlideUp>

          <FadeSlideUp delay={0.4}>
            <motion.p
              className="max-w-2xl mx-auto my-6 text-center text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              Media docena es el equipo de trabajo que se formó en el segundo
              cuatri del primer año de la Tecnicatura Superior de Desarrollo de
              Software a distancia. Muchos pasaron por el equipo, pero los que
              quedamos somos los 3 que estamos en esta presentación y si todo va
              bien, seguiremos hasta terminar la tecnicatura 🤞🏼.
            </motion.p>
          </FadeSlideUp>

          {/* Tarjeta de presentación cada integrante */}
          <motion.div
            className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <CardContainer delay={1.0}>
              <CardAbout
                name={'Josefina Cicchini'}
                position="Software Developer"
                image={avatar01}
                github={'https://github.com/josefinacicchini'}
              />
            </CardContainer>

            <CardContainer delay={1.2}>
              <CardAbout
                name={'Francisco Agustín Cruz Guantay'}
                position="Software Developer"
                image={avatar02}
                github={'https://github.com/FACG-CODE'}
              />
            </CardContainer>

            <CardContainer delay={1.4}>
              <CardAbout
                name={'Rosana Cohen'}
                position="Software Developer"
                image={avatar03}
                github={'https://github.com/rocohen'}
              />
            </CardContainer>
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default About;