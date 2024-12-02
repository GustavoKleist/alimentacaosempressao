import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";

export default component$(() => {
  return (
    <>
      <div class="container">
        <h2>Este site está em processo de construção sem pressão.</h2>
        <h4>Enquanto isso você pode me acompanhar pelos canais abaixo.</h4>
      </div>
      <div class="social">
        <h5>Siga esse link para o receber um planner exclusivo!</h5>
      </div>
      <div class="social">
        <a
          href="https://www.instagram.com/alimentacaosempressao/"
          target="_blank"
        >
          <Image
            src="/images/ig.jpeg"
            layout="constrained"
            width={250}
            height={250}
            alt="Instagram image"
          />
        </a>
        <a href="https://wa.me/message/QN66BTAFTB2HO1" target="_blank">
          <Image
            src="/images/wpp.jpeg"
            layout="constrained"
            width={250}
            height={250}
            alt="Whats app image"
          />
        </a>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Alimentação Sem Pressão",
  meta: [
    {
      name: "description",
      content: "Alimentação Sem Pressão",
    },
  ],
};
