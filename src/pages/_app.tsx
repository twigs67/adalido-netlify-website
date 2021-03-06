import { AppProps } from "next/app";
import '../../public/styles/content.module.css';
import '../../public/css/style.css';
import '../../public/css/bootstrap.min.css';
import '../../public/css/animate.css';
import '../../public/css/boxicons.min.css';
import '../../public/css/flaticon.css';
// import '../public/css/rtl.css';
import '../../public/css/responsive.css'
import '../../public/styles/code.module.css';


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
