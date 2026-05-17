/* global React, Header, Hero, TagsBar, Causa, StatsBar, HowItWorks, Ambiente, Premio, Inscription, FAQ, Footer */

const TOURNAMENT_DEFAULTS = {
  formato: "Fútbol 7",
  precio: 60,
  sede: "Por confirmar",
  avatarSize: 460,
  showTagsBar: true,
};

function App() {
  window.TOURNAMENT = TOURNAMENT_DEFAULTS;

  return (
    <>
      <Header />
      <Hero />
      {TOURNAMENT_DEFAULTS.showTagsBar && <TagsBar />}
      <Causa />
      <StatsBar />
      <HowItWorks />
      <Ambiente />
      <Premio />
      <Inscription />
      <FAQ />
      <Footer />
    </>
  );
}

window.App = App;
