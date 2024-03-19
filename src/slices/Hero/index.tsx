import Bounded from "@/components/bounded";
import ButtonLink from "@/components/button-link";
import StarGrid from "@/components/star-grid";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import AnimatedContent from "./animated-content";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative text-center"
    >
      <AnimatedContent slice={slice} />
    </Bounded>
  );
};

export default Hero;
