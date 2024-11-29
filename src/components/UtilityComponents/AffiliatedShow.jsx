import React from "react";
import { logos } from "../UtilityComponents/AffiliateLogos";

const AffiliatedLogos = () => {
  return (
    <div>
      <section class=" relative flex flex-col justify-center bg-AccreditedShowBgMobile md:bg-AccreditedShowBg bg-cover bg-bottom bg-no-repeat overflow-hidden">
        <div class="w-full max-w-5xl mx-auto px-2 md:px-6 py-20">
          <h2 class="text-gray-50 text-center text-3xl md:text-2xl xl:text-3xl leading-2 tracking-tight font-semibold">
            Accreditation and Affiliations
          </h2>
          <br />
          <div className="flex items-center justify-center gap-1 text-gray-50">
            <ion-icon name="remove-outline"></ion-icon>
            <ion-icon name="remove-outline"></ion-icon>
            <ion-icon name="remove-outline"></ion-icon>
            <ion-icon name="remove-outline"></ion-icon>
            <ion-icon name="remove-outline"></ion-icon>
            <ion-icon name="remove-outline"></ion-icon>
          </div>

          <div class="text-center pt-28">
            {/* Logo Carousel animation */}
            <div
             x-data="{}"
             x-init="$nextTick(() => {
                         let ul = $refs.logos;
                         ul.insertAdjacentHTML('afterend', ul.outerHTML);
                         ul.nextSibling.setAttribute('aria-hidden', 'true');
                     })"
              class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <ul x-ref="logos" class="w-full flex items-center justify-center md:justify-end gap-6 [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"> 
                {logos.map((logo, index) => (
                  <li>
                    <img
                      key={logo.id || index}
                      src={logo}
                      alt={`Affiliate Logo ${index + 1}`}
                      className="max-w-3xl mr-4"
                    />
                  </li>
                ))}
              </ul>
            </div>
            {/* End: Logo Carousel animation */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AffiliatedLogos;
