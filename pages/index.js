import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react'
import About from "../src/components/About";
import Collection from "../src/components/Collection";
import HeroSlider from "../src/components/HeroSlider";
import Game from "../src/components/Game";
import NftSingle from './nft-single';
import RoadMapSlider from "../src/components/RoadMapStep";
import SectionDivider from "../src/components/SectionDivider";
import Layout from "../src/layout/Layout";
import Team from '../src/components/TeamName';

const Index = () => {
  return (
    <ThirdwebProvider>
      <Layout pageTitle={"Home"}>
        {/* Home Section */}
        <HeroSlider />
        {/* !Home Section */}
        {/* About Section */}
        <About />
        {/* !About Section */}
        {/* Section Divider */}
        <SectionDivider />
        {/* !Section Divider */}
        {/* Collection Section */}
        <Collection />
        {/* !Collection Section */}
        {/* Section Divider */}
        <SectionDivider />
        {/* !Section Divider */}
        {/* Section RoadMap */}
        <Game />
        {/* !Collection Section */}
        {/* Section Divider */}
        {/* <SectionDivider /> */}
        {/* !Section Divider */}
        {/* Section RoadMap */}
        <Team />
        {/* !Section RoadMap */}
        {/* Section Divider */}
        {/* <SectionDivider /> */}
        {/* !Section Divider */}
        {/* Section News */}
        <RoadMapSlider />
        {/* !Section News */}
        {/* Section Divider */}
        
      </Layout>
    </ThirdwebProvider>
  );
};
export default Index;
