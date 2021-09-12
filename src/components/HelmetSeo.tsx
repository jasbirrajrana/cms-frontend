import React from "react";
import { Helmet } from "react-helmet";
interface HelmetSeoProps {
  title?: string;
  content?: string;
}

const HelmetSeo: React.FC<HelmetSeoProps> = ({
  title = "Home | jasbirrajrana",
  content,
  children,
}) => {
  return (
    <>
      <Helmet
        titleTemplate="%s"
        defaultTitle="Jasbir Raj Rana | Full stack Developer">
        {title && <title>{title}</title>}
        ‍
        <meta name="description" content={content} />
        <meta http-equiv="X-UA-Compatible" content="IE=7" />
        <meta
          name="keywords"
          content="blog, Reactjs, javascript, jasbirrajrana,typescript,personalblog,teaching,nodejs,css,html,@jasbirrajrana,jasbirrajranablog,myblog,github@jasbirrajrana,github:jasbirrajrana,github,facebook, linkedin"
        />
      </Helmet>
    </>
  );
};
export default HelmetSeo;
