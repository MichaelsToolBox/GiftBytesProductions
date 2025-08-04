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
// import mr from './locales/mr.json'; // Missing Marathi
// import mn from './locales/mn.json'; // Missing Mongolian
// import my from './locales/my.json'; // Missing Myanmar (Burmese)
// import ne from './locales/ne.json'; // Missing Nepali
import no from './locales/no.json'; // Missing Norwegian
// import or from './locales/or.json'; // Missing Odia
// import fa from './locales/fa.json'; // Missing Persian
import pl from './locales/pl.json'; // Missing Polish
import pt from './locales/pt.json'; // Missing Portuguese
// import pa from './locales/pa.json'; // Missing Punjabi
// import qu from './locales/qu.json'; // Missing Quechua
import ro from './locales/ro.json'; // Missing Romanian
import ru from './locales/ru.json'; // Missing Russian
import sm from './locales/sm.json'; // Missing Samoan
import sr from './locales/sr.json'; // Missing Serbian
// import sn from './locales/sn.json'; // Missing Shona
// import sd from './locales/sd.json'; // Missing Sindhi
// import si from './locales/si.json'; // Missing Sinhala
// import sk from './locales/sk.json'; // Missing Slovak
import sl from './locales/sl.json'; // Missing Slovenian
// import so from './locales/so.json'; // Missing Somali
import es from './locales/es.json';
// import su from './locales/su.json'; // Missing Sundanese
// import sw from './locales/sw.json'; // Missing Swahili
 import sv from './locales/sv.json'; // Missing Swedish
// import tg from './locales/tg.json'; // Missing Tajik
// import ta from './locales/ta.json'; // Missing Tamil
// import tt from './locales/tt.json'; // Missing Tatar
// import te from './locales/te.json'; // Missing Telugu
// import th from './locales/th.json'; // Missing Thai
// import bo from './locales/bo.json'; // Missing Tibetan
import tr from './locales/tr.json'; // Missing Turkish
// import tk from './locales/tk.json'; // Missing Turkmen
import uk from './locales/uk.json';
// import ur from './locales/ur.json'; // Missing Urdu
// import ug from './locales/ug.json'; // Missing Uyghur
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
      mi, 
      // mr, mn, my, ne, 
      no,
      // or, fa, 
      pl, pt,
      // pa, qu,
      ro, ru, sm, sr, 
      // sn, sd, si, sk, 
      sl,
      // so, 
      es, 
      // su, sw, 
      sv, 
      // tg, ta, tt, te, th, bo, 
      tr, 
      // tk, 
      uk, 
      // ur, ug, 
      uz, vi, xh, yi, yo, zu,
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