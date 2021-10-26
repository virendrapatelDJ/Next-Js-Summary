import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container mt-4">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
