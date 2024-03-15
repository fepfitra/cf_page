import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  const headings = "m-5 flex justify-center font-bold"
  return {
    h1: ({ children }) => <h1 className={`${headings} text-2xl`}>{children}</h1>,
    h2: ({ children }) => <h2 className={`${headings} text-xl`}>{children}</h2>,
    h3: ({ children }) => <h3 className={`${headings} text-lg`}>{children}</h3>,
    h4: ({ children }) => <h4 className={`${headings} text-base`}>{children}</h4>,
    h5: ({ children }) => <h5 className={`${headings} text-sm`}>{children}</h5>,
    p: ({ children }) => <p className="flex justify-center flex-wrap gap-4 m-5">{children}</p>,
    img: (props) => (
      <Image
        width={0}
        height={0}
        style={{ width: "auto", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  };
}
