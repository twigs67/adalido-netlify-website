import { AppProps } from "next/app";
import '../../public/css/style.css';
import '../../public/css/bootstrap.min.css';
import '../../public/css/animate.css';
import '../../public/css/boxicons.min.css';
import '../../public/css/flaticon.css';
// import '../public/css/rtl.css';
import '../../public/css/responsive.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
