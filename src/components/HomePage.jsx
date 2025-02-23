import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="full-width-image-container">
        <img
          src="/budapest.png"
          alt="Budapest városképe"
          className="full-width-image"
        />
        <div className="img-overlay"></div>
      </div>

      <div className="container">
        <header className="text-center mb-2">
          <nav className="nav justify-content-center mb-2 nav-container">
            <Link className="btn btn-primary mx-2" to="/adatok">
              Lakosság a népszámlálások alkalmával
            </Link>
            <Link className="btn btn-success mx-2" to="/ujadat">
              Új felmérés felvétele
            </Link>
          </nav>
        </header>

        <section>
          <h4>A lakosság történelmi változásai</h4>
          <p>
            A főváros népessége az elmúlt másfél évszázadban dinamikusan
            alakult. A 19. század végére Budapest gyors iparosodásának
            köszönhetően rohamosan növekedett a lakosság száma, és a város
            Magyarország legnagyobb népességű településévé vált. Az ipari
            fejlődés vonzotta a vidékről érkező munkásokat, így a lakosság
            nemcsak számbelileg, hanem kulturálisan is egyre sokszínűbbé vált.
            A két világháború közötti időszakban a város tovább növekedett, és
            Budapest az ország gazdasági motorjává vált. A második világháború
            jelentős pusztítást hagyott maga után, amely a lakosság létszámát és
            összetételét is érintette. A háborút követő újjáépítés és a
            szocializmus évtizedei alatt a város tovább bővült, és az 1980-as
            évek elejére Budapest népessége meghaladta a 2 millió főt.
          </p>
          <h4>A lakosság összetétele napjainkban</h4>
          <p>
            A 21. századra Budapest lakosságának száma enyhén csökkent, jelenleg
            körülbelül 1,7 millió fő él a fővárosban. A népesség összetételét
            tekintve a magyarok alkotják a többséget, de jelentős kisebbségi
            közösségek is jelen vannak. A német, szlovák, román és más
            nemzetiségek hosszú évszázadok óta szerves részei Budapest
            kulturális arculatának. Az utóbbi években Budapest sokszínűsége
            tovább erősödött a nemzetközi migráció révén. Egyre több külföldi
            állampolgár – különösen a szomszédos országokból, valamint Ázsiából
            és Nyugat-Európából – választja a fővárost otthonának. Ez a
            kulturális sokszínűség gazdagítja a város életét, amit az is tükröz,
            hogy egyre több nemzetközi fesztivált, kulturális eseményt és
            gasztronómiai rendezvényt tartanak.
          </p>
          <h4>Demográfiai kihívások és tendenciák</h4>
          <p>
            Budapest lakosságának korösszetétele is átalakulóban van. A
            fiatalabb generációk aránya csökkenő tendenciát mutat, miközben az
            idősebb korosztály száma emelkedik. Ez a folyamat a városi
            infrastruktúrára és a szociális ellátórendszerre is hatással van. A
            városvezetés folyamatosan dolgozik azon, hogy a demográfiai
            változásokhoz igazítsa a szolgáltatásokat és az infrastruktúrát. A
            lakhatás és az urbanizáció szintén kiemelt kérdés Budapesten. A
            belvárosi kerületek népszerűsége töretlen, míg a külsőbb kerületek
            családbarát környezetet és zöldterületeket kínálnak a lakóknak. Az
            agglomeráció növekedése is jelentős, mivel sokan a főváros
            környékére költöznek, miközben Budapesten dolgoznak vagy tanulnak.
          </p>
          <h4>A város jövője és fejlődése</h4>
          <p>
            Budapest folyamatosan alkalmazkodik a változó demográfiai és
            társadalmi viszonyokhoz. A modern infrastruktúra-fejlesztések, a
            közlekedési hálózat bővítése és a környezetvédelmi kezdeményezések
            mind azt szolgálják, hogy a város hosszú távon is élhető maradjon. A
            lakosság igényeihez való alkalmazkodás és a kulturális sokszínűség
            megőrzése kulcsszerepet játszik Budapest fejlődésében. Budapest
            történelmi öröksége, pezsgő kulturális élete és sokszínű lakossága
            együtt alakítja a város különleges arculatát. A főváros nemcsak
            Magyarország szíve, hanem egy olyan hely, ahol a múlt és a jövő
            találkozik, és ahol minden generáció számára tartogat felfedezni
            valót.
          </p>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
