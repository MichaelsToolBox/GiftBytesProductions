import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

// Import all your translation files
import en from './locales/en.json';
import af from './locales/af.json';
import sq from './locales/sq.json';
import am from './locales/am.json';
import ar from './locales/ar.json';
import hy from './locales/hy.json';
import az from './locales/az.json';
import eu from './locales/eu.json';
import be from './locales/be.json';
import bn from './locales/bn.json';
import bs from './locales/bs.json';
import bg from './locales/bg.json';
import ca from './locales/ca.json';
import zh from './locales/zh.json';
import hr from './locales/hr.json';
import cs from './locales/cs.json';
import da from './locales/da.json';
import nl from './locales/nl.json';
import et from './locales/et.json';
import fi from './locales/fi.json';
import fr from './locales/fr.json';
import gl from './locales/gl.json';
import ka from './locales/ka.json';
import de from './locales/de.json';
import el from './locales/el.json';
import gu from './locales/gu.json';
import ha from './locales/ha.json';
import he from './locales/he.json';
import hi from './locales/hi.json';
import hu from './locales/hu.json';
import is from './locales/is.json';
import ig from './locales/ig.json';
import id from './locales/id.json';
import ga from './locales/ga.json';
import it from './locales/it.json';
import ja from './locales/ja.json';
import jv from './locales/jv.json';
import kn from './locales/kn.json';
import kk from './locales/kk.json';
import km from './locales/km.json';
import rw from './locales/rw.json';
import ko from './locales/ko.json';
import ku from './locales/ku.json';
import ky from './locales/ky.json';
import lo from './locales/lo.json';
import la from './locales/la.json';
import lv from './locales/lv.json';
import lt from './locales/lt.json';
import lb from './locales/lb.json';
import mk from './locales/mk.json';
import mg from './locales/mg.json';
import ms from './locales/ms.json';
import ml from './locales/ml.json';
import mt from './locales/mt.json';
import mi from './locales/mi.json';
import vi from './locales/vi.json';
import cy from './locales/cy.json';
import xh from './locales/xh.json';
import yi from './locales/yi.json';
import yo from './locales/yo.json';
import es from './locales/es.json';
import zu from './locales/zu.json';
import uk from './locales/uk.json';
import uz from './locales/uz.json';


i18n
  .use(initReactI18next)
  .init({
    // We pass the translations directly
    resources: {
      en, af, sq, am, ar, hy, az, eu, be, bn, bs, bg, ca, zh, hr, cs, da, nl,
      et, fi, fr, gl, ka, de, el, gu, ha, he, hi, hu, is, ig, id, ga, it, ja,
      jv, kn, kk, km, rw, ko, ku, ky, lo, la, lv, lt, lb, mk, mg, ms, ml, mt,
      mi,es, zu, uz, vi, cy, xh, yi, yo, uk
      // ne, no, or, fa, pl, pt, pa, qu, ro, ru, sm, sr, sn, sd, si, sk, sl, so, es, su, sw, sv, tg, ta, tt, te, th, bo, tr, tk, uk, ur,ug,  zu,
    },

    // The default language
    fallbackLng: 'en',

    // Debugging output in the console
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;