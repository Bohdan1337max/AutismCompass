import { RefObject  } from "react";

export const scrollToSection = (ref:RefObject<HTMLElement>) => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
};

export const NAVIGATIONS = [
  {
    name: 'Czym jest autyzm?',
    path: '/',
  },
  {
    name: 'Wsparcie dla osób z autyzmem',
    path: '/support',
  },
  { name: 'Wydarzenia', path: '/events' },
  { name: 'Test diagnozujący', path: '/test' },
  { name: 'Login', path: '/login'},
  { name:'Register', path: '/register'}
];

export const DESCRIPTION = [
  {
    id: 1,
    title: 'Autyzm u dorosłych',
    shortDescription:
      'Osoby, które otrzymały diagnozę autyzmu w dzieciństwie, nadal pozostają w spektrum autyzmu w wieku dorosłym. Część dorosłych z autyzmem prowadzi niezależne życie, pracuje zawodowo i zakłada własne rodziny. Osoby te wypracowują własne strategie radzenia sobie z codziennymi...',
    description:
      'Osoby, które otrzymały diagnozę autyzmu w dzieciństwie, nadal pozostają w spektrum autyzmu w wieku dorosłym. Część dorosłych z autyzmem prowadzi niezależne życie, pracuje zawodowo i zakłada własne rodziny. Osoby te wypracowują własne strategie radzenia sobie z codziennymi trudnościami związanymi z autyzmem. Ich nietypowy sposób myślenia często sprawia, że są kreatywnymi, kompetentnymi oraz lojalnymi pracownikami, a także wiernymi przyjaciółmi.W niektórych przypadkach osoby dorosłe z autyzmem dopiero w późniejszym okresie życia szukają diagnozy. Wynika to z faktu, że jeszcze kilkanaście lat temu wiedza na temat autyzmu była ograniczona. Otrzymanie diagnozy spektrum autyzmu w dorosłości często pomaga zrozumieć siebie lepiej oraz zidentyfikować źródło wyzwań, z którymi dana osoba borykała się przez całe życie.',
  },
  {
    id: 2,
    title: 'Diagnoza autyzmu',
    shortDescription:
      'Diagnoza autyzmu opiera się na obserwacji zachowania jednostki i wymaga kilku spotkań z różnymi specjalistami, takimi jak psychiatra, psycholog, pedagog specjalny czy logopeda. W trakcie tych spotkań diagnostycy przeprowadzają wywiad, badają wczesny rozwój oraz pytają o trudności ...',
    description:
      'Diagnoza autyzmu opiera się na obserwacji zachowania jednostki i wymaga kilku spotkań z różnymi specjalistami, takimi jak psychiatra, psycholog, pedagog specjalny czy logopeda. W trakcie tych spotkań diagnostycy przeprowadzają wywiad, badają wczesny rozwój oraz pytają o trudności i różne sytuacje życiowe osoby badanej. Podczas obserwacji proponują także różnorodne zabawy, zadania lub tematy rozmów.W Polsce coraz częściej stosowany jest "złoty standard" diagnozy autyzmu, czyli ADOS-2. To profesjonalne narzędzie diagnostyczne o wysokiej skuteczności. Dlatego jeśli diagnoza, którą wybierasz, obejmuje ADOS, jest to dobry sygnał, świadczący o wysokim standardzie diagnozy.',
  },
];

export const HEADSLIDERTITLES = [
  { title: 'Grupa wsparcia dla doroslych osob z autyzmem.' },
  { title: 'Rodzice dzieci w spektrum.' },
  { title: 'Spektrum autyzmu - rozwiazania terapeutyczne.' },
  { title: 'Wartosciowe lektury dla dzieci i doroslych.' },
];

export const MESSAGESLIDERTITLES = [
  {
    title: '"Rozumienie Autyzmu: Od Mitów do Faktów":',
    description:
      'Odkryj prawdę o autyzmie, rozbijając powszechne mity i dostarczając rzetelnych informacji na temat tego, co to naprawdę znaczy żyć z tym zaburzeniem.',
  },
  {
    title: '"Potęga Inkluzji: Jak Tworzyć Przyjazne Środowisko dla Osób z Autyzmem":',
    description:
      'Poznaj praktyczne kroki i strategie, które pomagają budować bardziej inkluzywne społeczeństwo, z uwzględnieniem różnorodnych potrzeb osób z autyzmem.',
  },
  {
    title: '"Sztuka Komunikacji: Jak Wspierać Rozwój Językowy u Dzieci z Autyzmem":',
    description:
      'Zanurz się w świecie skutecznych technik komunikacyjnych, które wspierają rozwój językowy dzieci z autyzmem, pomagając im nawiązywać lepsze relacje z otoczeniem.',
  },
  {
    title: '"Autyzm w Pracy: Jak Firmy Mogą Stworzyć Przyjazne Środowisko Zawodowe":',
    description:
      'Dowiedz się, jakie korzyści niesie ze sobą zatrudnianie osób z autyzmem, a jednocześnie odkryj praktyczne kroki, które firmy mogą podjąć, aby stworzyć inkluzywne i przyjazne środowisko pracy.',
  },
];

export const FACTS = [
  {
    title: 'Autyzm jest nieuleczalny.',
    type: 1,
    content:
      'FAKT Na obecnym etapie, autyzm nie jest uznawany za chorobę, a zatem nie ma jednoznacznego leczenia czy "uleczenia". Autyzm to trwałe spektrum zaburzeń rozwojowych, które wpływają na rozwój jednostki.Jednakże, istnieją różne formy terapii, interwencji i programów edukacyjnych, które mogą znacząco poprawić funkcjonowanie osoby z autyzmem. Wczesna interwencja, intensywna terapia behawioralna, terapia mowy, terapia zajęciowa czy terapia sensoryczna to tylko kilka przykładów działań, które mogą pomóc w rozwijaniu umiejętności społecznych, komunikacyjnych i adaptacyjnych. Warto jednak zaznaczyć, że skuteczność tych interwencji może być bardzo zróżnicowana w zależności od indywidualnych cech każdej osoby z autyzmem. Pomimo braku "uleczenia" autyzmu, odpowiednie wsparcie i terapie mogą znacząco poprawić jakość życia i umożliwić rozwój wielu umiejętności.',
  },
  {
    title: 'Autyzm nie jest chorobą, a zaburzeniem, które trwa całe życie.',
    type: 1,
    content:
      'FAKT Tak, autyzm jest rozumiany jako zaburzenie neurobiologiczne, a nie choroba. Choroby często są związane z konkretnymi patologiami, infekcjami lub procesami, które można zidentyfikować i leczyć w sposób jednoznaczny. Natomiast autyzm to spektrum zaburzeń rozwojowych.Autyzm charakteryzuje się różnorodnością objawów i stopniem ich nasilenia, co sprawia, że nie ma jednego jednoznacznego przebiegu. Jednak wiele osób z autyzmem doświadcza wyzwań w zakresie komunikacji, zrozumienia społecznych norm oraz elastycznego dostosowywania się do zmieniającego się otoczenia. Ważne jest podkreślenie, że autyzm trwa przez całe życie, ale to nie oznacza, że rozwój i postępy nie są możliwe. Wczesna interwencja, terapie behawioralne, edukacja specjalna i inne formy wsparcia mogą znacząco poprawić umiejętności jednostki z autyzmem i zwiększyć jej zdolność do samodzielnego funkcjonowania w społeczeństwie.',
  },
  {
    title: 'Autyzm dotyczy tylko dzieci.',
    type: 0,
    content:
      'MIT Autyzm to spektrum zaburzeń rozwojowych, które utrzymuje się przez całe życie jednostki. Chociaż objawy autyzmu często po raz pierwszy zauważa się u dzieci w okresie wczesnego dzieciństwa, to jednak wpływają one na rozwój jednostki na przestrzeni całego życia. Osoby z autyzmem dorastają i stają się dorosłymi, a ich potrzeby i wyzwania mogą się zmieniać w miarę upływu czasu. W ostatnich latach zwiększa się świadomość potrzeby zrozumienia i wspierania osób dorosłych z autyzmem, zarówno w obszarze edukacji, jak i w miejscu pracy. To podkreśla znaczenie dostosowywania wsparcia i terapii do potrzeb jednostki na różnych etapach jej życia.',
  },
  {
    title: 'Autyzm to zaburzenie dotyczące osób w różnym wieku.',
    type: 1,
    content:
      'FAKT Tak, autyzm to zaburzenie, które może dotyczyć osób w różnym wieku. Autyzm jest zazwyczaj zauważalny w okresie wczesnego dzieciństwa, ale nie jest to ograniczenie jedynie do dzieci.Wpływ autyzmu może być różny w zależności od stopnia nasilenia objawów, indywidualnych cech danej osoby i skuteczności dostępnych form wsparcia. Osoby z autyzmem często potrzebują specjalistycznej pomocy i interwencji, zwłaszcza w obszarze komunikacji społecznej, interakcji społecznych i adaptacyjnych umiejętności.',
  },
  {
    title: 'Osoby z autyzmem nie mówią.',
    type: 0,
    content:
      'MIT Nieprawdziwe jest stwierdzenie, że wszystkie osoby z autyzmem nie mówią. Niektóre osoby z autyzmem mogą mieć trudności w komunikacji werbalnej lub wyrażaniu się słownie. Mogą preferować inne formy komunikacji, takie jak komunikacja niewerbalna, gesty, mowa ciała, obrazki, lub też korzystać z technologii wspomagającej komunikację, takiej jak tablice komunikacyjne czy urządzenia AAC (Augmentative and Alternative Communication). Wielu ludzi z autyzmem ma zdolność do mówienia, a niektórzy rozwijają pełne zdolności językowe na poziomie zgodnym z normami społecznymi. Ważne jest zrozumienie, że brak mowy lub trudności w mówieniu nie oznaczają braku inteligencji czy zrozumienia. Osoby z autyzmem mają unikalne style komunikacji, i istnieją różnorodne metody, aby wspierać ich komunikację, dostosowane do ich indywidualnych potrzeb.',
  },
];

export const SUPPORTSTICKERS = [
  {id: '1', title:'Dostosowane Edukacyjne i Terapeutyczne Podejście', description: 'Dla dzieci z autyzmem, dostosowane podejście edukacyjne i terapeutyczne, takie jak terapia behawioralna, terapia mowy, czy terapia zajęciowa, może być kluczowe dla ich rozwoju.', color:'#EB6FA1' },
  {id: '2', title:'Zrozumienie i Akceptacja', description: 'Akceptuj jednostkę z autyzmem bez uprzedzeń i zrozum, że każda osoba jest unikalna. Edukacja na temat autyzmu może pomóc zrozumieć specyficzne cechy tego zaburzenia.', color:'#FFE65D' },
  {id: '3', title:'Uwzględnienie Zainteresowań', description: 'Zachęcaj do rozwijania zainteresowań i umiejętności, które mogą być obsesyjne lub szczególnie fascynujące dla osoby z autyzmem. To może być także drogą do budowania relacji.', color:'#AADDF0' },
]

export const AUTISMTESTQUESTIONS = [
  {
    id: 1,
    question: "Jak często zauważasz, że unikasz kontaktu wzrokowego?"
  },
  {
    id: 2,
    question: "Czy obserwujesz u siebie powtarzające się ruchy, gesty lub obrzędy?"
  },
  {
    id: 3,
    question: "W jakim stopniu wykazujesz zainteresowanie powtarzalnymi wzorcami lub przedmiotami?"
  },
  {
    id: 4,
    question: "Czy notujesz u siebie powtarzające się słownictwo lub zwroty w rozmowie?"
  },
  {
    id: 5,
    question: "Jak często zauważasz trudności w nawiązywaniu i utrzymywaniu relacji z rówieśnikami?"
  },
  {
    id: 6,
    question: "Czy wykazujesz nadmierne zainteresowanie szczegółami, ale masz trudności w zrozumieniu całości?"
  },
  {
    id: 7,
    question: "W jakim stopniu obserwujesz trudności w dostosowywaniu się do zmian rutynowych?"
  },
  {
    id: 8,
    question: "Czy masz ograniczone zainteresowania społeczne?"
  },
  {
    id: 9,
    question: "Jak często występują u ciebie uporczywe zainteresowania specyficznymi tematami lub obszarami?"
  },
  {
    id: 10,
    question: "Czy wykazujesz trudności w rozumieniu czyichś uczuć lub perspektywy?"
  },
  {
    id: 11,
    question: "W jakim stopniu obserwujesz u siebie powtarzające się ruchy ciała, takie jak kołysanie się czy uderzanie w przedmioty?"
  },
  {
    id: 12,
    question: " Czy zauważasz trudności w zrozumieniu i reagowaniu na niezwykłe bodźce sensoryczne, takie jak dźwięki, światła czy dotyk?"
  },
  {
    id: 13,
    question: "Jak często wykazujesz nadmierne przywiązanie do konkretnych przedmiotów?"
  },
  {
    id: 14,
    question: "Czy zauważasz, że masz trudności w komunikacji werbalnej lub niewerbalnej?"
  },
  {
    id: 15,
    question: "W jakim stopniu reagujesz na zmiany w otoczeniu lub planie dnia?"
  },
];

export const AUTISMTESTANSWERS = [
{id: 1, answer: 'nigdy', points:'0'},
{id: 2, answer: 'bardzo rzadko', points:'1'},
{id: 3, answer: 'czasami', points:'2'},
{id: 4, answer: 'często', points:'3'},
{id: 5, answer: 'bardzo często', points:'4'},
]