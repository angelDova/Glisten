import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";

export const ButtonLink = ({
  className,
  ...restProps
}: PrismicNextLinkProps) => {
  return (
    <PrismicNextLink
      className={clsx(
        "focus:ring-offset-3 relative inline-flex h-fit w-fit rounded-full border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 outline-none ring-indigo-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-indigo-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-indigo-200/40 hover:text-indigo-300 after:hover:bg-opacity-15 focus:ring-2",
        className,
      )}
      {...restProps}
    />
  );
};
