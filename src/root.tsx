import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { QwikPartytown } from "~/components/partytown/partytown";
import { RouterHead } from "./components/router-head/router-head";
import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <QwikPartytown forward={["gtag", "dataLayer.push"]} />
        <script
          async
          type="text/partytown"
          src="https://www.googletagmanager.com/gtag/js?id=GTM-WQQ5ZQRC"
        />
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={`
          window.dataLayer = window.dataLayer || [];
          window.gtag = function() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'GTM-WQQ5ZQRC');
          `}
        />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
