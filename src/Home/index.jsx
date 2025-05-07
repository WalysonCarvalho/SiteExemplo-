import { Container } from "./styles";
import { BackToTopButton } from "../Components/BackToTopButton";
import { WhatsAppButton } from "../Components/WhatsAppButton";
import { Header } from "../Components/Header";
import { Start } from "../Components/Start";
import { On } from "../Components/On";
import { Section } from "../Components/Section";
import { Services} from "../Components/Services";
import { Portifolio } from "../Components/Portifolio";
import { Contact } from "../Components/Contact";
import { Footer } from "../Components/Footer";
import { ActionButton } from "../Controllers/ActionButton/ActionButton";
import { HeadlineScroll } from "../Controllers/SlideSobre/SlideSobre";
import foto1 from '../assets/cecelia-chang-nquucodQqAc-unsplash.jpg';
import foto2 from '../assets/dwayne-joe-mBRTVcC_PiM-unsplash.jpg';
import foto3 from '../assets/yueying-sun-rLD2tYQFiBU-unsplash.jpg';
export function Home (){

  const Img = [foto1, foto2, foto3];
  return(
    <Container>
      <Header/>
      <BackToTopButton />
      <Start />
      <On />
      <Section></Section>
      <Services />
      <HeadlineScroll/>
      <Portifolio />
      <Contact></Contact>
      <Footer />
      <WhatsAppButton />
      <ActionButton />
    </Container>

  )
}