import {Configuration} from "webpack";
//import { use } from "react";

const nextConfig = {
  /* config options here */
  webpack(config:Configuration){
      if(config.module?.rules){
      config.module.rules.push({
        test:/\.svg$/,
        use:["@svgr/webpack"]
      });
      return config
    }
  },
};

export default nextConfig;
