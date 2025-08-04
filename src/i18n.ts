import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

// Import all your translation files in alphabetical order
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
import mr from './locales/mr.json';
import mn from './locales/mn.json';
import ne from './locales/ne.json';
import no from './locales/no.json';
import fa from './locales/fa.json';
import pl from './locales/pl.json';
import pt from './locales/pt.json';
import pa from './locales/pa.json';
import ro from './locales/ro.json';
import ru from './locales/ru.json';
import sm from './locales/sm.json';
import sr from './locales/sr.json';
import si from './locales/si.json';
import sk from './locales/sk.json';
import sl from './locales/sl.json';
import so from './locales/so.json';
import es from './locales/es.json';
import su from './locales/su.json';
import sw from './locales/sw.json';
import sv from './locales/sv.json';
import tg from './locales/tg.json';
import ta from './locales/ta.json';
import te from './locales/te.json';
import th from './locales/th.json';
import tr from './locales/tr.json';
import uk from './locales/uk.json';
import ur from './locales/ur.json';
import uz from './locales/uz.json';
import vi from './locales/vi.json';
import xh from './locales/xh.json';
import yi from './locales/yi.json';
import yo from './locales/yo.json';
import zu from './locales/zu.json';

i18n
  .use(initReactI18next)
  .init({
    // We pass the translations directly
    resources: {
      en, af, sq, am, ar, hy, az, eu, be, bn, bs, bg, ca, zh, hr, cs, da, nl,
      et, fi, fr, gl, ka, de, el, gu, ha, he, hi, hu, is, ig, id, ga, it, ja,
      jv, kn, kk, km, rw, ko, ku, ky, lo, la, lv, lt, lb, mk, mg, ms, ml, mt,
      mi, no, pl, pt, ro, ru, sm, sr, sk, sl, so, es, su, sw, sv, tg, ta, te, 
      th,tr, uk, ur, uz, vi, xh, yi, yo, zu, si,pa, fa, mr, mn, ne, 
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