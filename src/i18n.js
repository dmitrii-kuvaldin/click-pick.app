import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// import HttpBackend from "i18next-http-backend";

i18n
  // .use(HttpBackend) // *** added this ***
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    // supportedLngs: ["en", "ru"],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          greeting: {
            hello: "Hello!",
          },
          formSpec: {
            pg1: {
              heading: "Logo and branding",
              price_policy: {
                project: "per project",
                hour: "per hour",
              },
              terms: {
                day1: '1-2 days',
                day3: '3-6 days',
                day6: '6-12 days',
                more: 'more',
              },
              progs: {
                figma: 'Figma',
                illustrator: 'Adobe illustrator',
                photoshop: 'Adobe Photoshop',
                other: 'Other',
              },
              skills: {
                naming: 'Naming',
                pres: 'Presentation',
                catalog: 'Catalogs',
                brandbook: 'Brandbook',
              },
            },
            pg2: {},
            pg3: {},
            pg4: {},
            pg5: {},
            pg6: {},
          },
        },
      },
      'ru-RU': {
        translation: {
          greeting: {
            hello: "приветы!",
          },
          formSpec: {

            pg1: {
              heading: "Логотип и брендинг",
              price_policy: {
                project: "Оплата за проект",
                hour: "Почасовая оплата",
              },
              terms: {
                day1: '1-2 дня',
                day3: '3-6 дней',
                day6: '6-12 дней',
                more: 'больше',
              },
              progs: {
                figma: 'Figma',
                illustrator: 'Adobe illustrator',
                photoshop: 'Adobe Photoshop',
                other: 'Другое',
              },
              skills: {
                naming: 'Разработка нейминга',
                pres: 'Верстка презентаций',
                catalog: 'Верстка каталогов',
                brandbook: 'Разработка брендбука',
              },
            },
            pg2: {
              heading: "Веб-дизайн и no-code",
              price_policy: {
                project: "Оплата за проект",
                hour: "Почасовая оплата",
              },
              terms: {
                day1: '2-4 дня',
                day3: '4-7 дней',
                day6: '7-14 дней',
                more: 'больше',
              },
              progs: {
                webflow: 'Webflow',
                wix: 'Wix',
                readymag: 'Readymag',
                tilda: 'Tilda',
                usmo: 'Usmo',
                carrd: 'Carrd',
                softr: 'Softr',
                other: 'Другое',
              },
              skills: {
                animation: 'Анимация элементов',
                seo: 'Настройка SEO',
                crm: 'Настройка CRM',
                code: 'Знание HTML/CSS/JS',
                market: 'Интеграция магазина',
                metrics: 'Подключение метрик',
                other: 'Другое',
              },
            },
            pg3: {
              heading: "UX/UI дизайн",
              price_policy: {
                project: "Оплата за проект",
                hour: "Почасовая оплата",
              },
              terms: {
                day1: '7-14 дней',
                day3: '14-30 дней',
                more: 'больше',
              },
              progs: {
                figma: 'Figma',
                sketch: 'Sketch',
                adobe: 'Adobe XD',
                balsamiq: 'Balsamiq',
                invision: 'Invision',
                marvel: 'Marvel',
                other: 'Другое',
              },
              skills: {
                template: 'Шаблонизация макета',
                animation: 'Анимация прототипов',
                research: 'User Research',
                code: 'Знание основ Kotlin/Swift',
                test: 'A/B тестирование',
                other: 'Другое',
              },
            },
            pg4: {
              heading: "2D и 3D иллюстрации",
              price_policy: {
                project: "Оплата за проект",
                hour: "Почасовая оплата",
              },
              terms: {
                day1: '2-4 дня',
                day3: '4-7 дней',
                day6: '7-14 дней',
                more: 'больше',
              },
              progs: {
                illustrator: 'Illustrator',
                procreate: 'ProCreate',
                photoshop: 'Photoshop',
                blender: 'Blender',
                cinema: 'Cinema 4d',
                othe: 'Другое',
              },
              skills: {
                animation: 'Анимация иллюстраций',
                hero: 'Разработка персонажа',
                comics: 'Комиксы',
                other: 'Другое',
              },
            },
            pg5: {
              heading: "Дизайн презентаций",
              price_policy: {
                project: "Оплата за проект",
                hour: "Почасовая оплата",
              },
              terms: {
                day1: '2-4 дня',
                day3: '4-7 дней',
                day6: '7-14 дней',
                more: 'больше',
              },
              progs: {
                powerpoint: 'Powerpoint',
                keynote: 'Keynote',
                figma: 'Figma',
                google: 'Google Presentation',
                other: 'Другое',
              },
              skills: {
                animation: 'Анимация слайдов',
                copyright: 'Копирайтинг',
                template: 'Разработка шаблонов',
                infograph: 'Дизайн инфографики',
                text: 'Написание текстов',
                photo: 'Подбор фото',
                other: 'Другое',
              },
            },
            pg6: {
              heading: "Верстка и типографика",
              price_policy: {
                project: "Оплата за проект",
                hour: "Почасовая оплата",
              },
              terms: {
                day1: '2-4 дня',
                day3: '4-7 дней',
                day6: '7-14 дней',
                more: 'больше',
              },
              progs: {
                figma: 'Figma',
                indesign: 'Adobe Indesign',
                photoshop: 'Adobe Photoshop',
                other: 'Другое',
              },

            },
          },
          formSpecEdit: {
            pg1: {
              heading: 'Подпишитесь, чтобы не пропустить запуск платформы',
            },
          },
        },
      },
    },
  });

export default i18n;
