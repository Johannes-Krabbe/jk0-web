import { Helmet } from "react-helmet";
import p5js from "../assets/p5.min.js?url";
import sketch from "../assets/sketch?url";

export function Background() {
  return (
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src={p5js}></script>
      <script src={sketch}></script>
    </Helmet>
  );
}
