import postcss from "postcss";
import postcssCustomMedia from "postcss-custom-media";
import cssnano from "cssnano"



export default {
  plugins: [
    // require("postcss-import"),
    // require("autoprefixer"),
    // require("postcss-nested"),
    postcss([postcssCustomMedia({ preserve: true })]),
    cssnano({
      preset: "default",
    }),
  ],
};


