import ProfilePhote from "./assets/images/Project2.png";

export const aboutMeDataTr = {
  name: "Hüseyin Hacıyev",
  title: "React Tutkunu | Kullanıcı Dostu Arayüz Geliştirici",
  description:
    "JavaScript, React ve CSS gibi modern web teknolojilerinde sağlam bir temele sahip tutkulu bir web geliştiricisiyim. İşlevsellik ve tasarımı ön planda tutarak, duyarlı ve kullanıcı dostu web siteleri ve uygulamaları geliştirme konusunda uzmanım. Karmaşık sorunları çözmekten ve fikirleri etkili ve yenilikçi kodlama yöntemleriyle gerçeğe dönüştürmekten keyif alıyorum. Detaylara dikkat eden ve sürekli öğrenmeye bağlı bir yaklaşımla, en son endüstri trendlerini takip ederek yüksek kaliteli projeler sunuyorum. Amacım, yalnızca müşteri beklentilerini karşılayan değil, aynı zamanda kullanıcı etkileşimini ve memnuniyetini artıran dijital deneyimler yaratmak.",
    image: ProfilePhote
};

export const navBarDataTr = [
  {
    section: "Yetenekler",
  },
  {
    section: "Projeler",
  },
  {
    section: "İşe Al",
  },
];

export const skillsDataTr = [
  {
    title: "JavaScript",
    description:
      "JavaScript konusunda sağlam bir temele sahibim ve dinamik, etkileşimli web uygulamaları geliştirebiliyorum. Deneyimlerim arasında ES6+ sözdizimi, asenkron programlama ve DOM manipülasyonu gibi modern JavaScript özellikleri bulunuyor. Ayrıca React gibi çerçevelerde kullanıcı dostu arayüzler oluşturarak çalışıyorum. Sürekli öğrenme ve geliştirme ile fikirleri hayata geçirmek için temiz ve verimli kod yazmayı seviyorum.",
  },
  {
    title: "React JS",
    description:
      "React ile dinamik ve kullanıcı dostu web uygulamaları geliştirme konusunda deneyimliyim. React Hook'ları kullanma, Context API veya useState gibi araçlarla durumu yönetme ve yeniden kullanılabilir bileşenler oluşturma konularında yetkinim. JSX konusunda bilgiliyim ve React bileşenlerinin yaşam döngüsünü anlıyorum. Temiz, modüler kod yazmaya odaklanıyorum ve React ile modern JavaScript bilgimi sürekli geliştirerek yüksek kaliteli projeler sunuyorum.",
  },
  {
    title: "HTML ve CSS",
    description:
      "HTML ve CSS konusunda güçlü bir temele sahibim ve duyarlı, görsel olarak çekici ve kullanıcı dostu web tasarımları oluşturabiliyorum. Yeteneklerim arasında semantik HTML, Flexbox ve Grid gibi gelişmiş CSS teknikleri ile erişilebilirlik standartlarının uygulanması yer alıyor. Temiz ve modüler kod yazma konusunda yetkinim ve farklı tarayıcılar ve cihazlar arasında uyumluluğu sağlıyorum. Sürekli gelişen becerilerimle fikirleri işlevsel ve şık web arayüzlerine dönüştürmekten keyif alıyorum.",
  },
];

export const profileDataTr = {
    header: {
      title: "Profil",
      subtitle: "Hakkımda",
      description: `Karadeniz Teknik Üniversitesi Deniz Ulaştırma ve İşletme Mühendisliği bölümünden mezun olduktan sonra Türkiye'nin önde gelen şirketlerinde bir yıllık staj yaptım. Daha sonra Dokuz Eylül Üniversitesi'nde Deniz Güvenliği ve Çevre Yönetimi alanında yüksek lisans programına başladım. Bu süre zarfında, şu anda Full-Stack Web Geliştirici olmak için yeteneklerimi geliştirdiğim Workintech'te bir Full-Stack Geliştirme eğitim programına başladım.`
    },
    details: [
      {
        question: "Doğum Tarihi",
        answer: "28.01.2000",
      },
      {
        question: "Yaşadığı Şehir",
        answer: "İzmir",
      },
      {
        question: "Eğitim Geçmişi",
        answer: "Dokuz Eylül Üniversitesi'nde Yüksek Lisans",
      },
      {
        question: "Tercih Edilen Rol",
        answer: "Full Stack Web Geliştirici",
      },
    ],
      
  };

import Nikewebsite from "./assets/images/Nikewebsite.png";
import PizzaProject from "./assets/images/PizzaProject.png";
import FilmProject from "./assets/images/FilmProject.png";

export const projectsDataTr = [
  {
    id: 1,
    title: "Nike",
    description:
      "Nike projesi, React ve Tailwind CSS ile oluşturulmuş bir web uygulamasıdır. Nike ürünlerini sergilemek için duyarlı ve kullanıcı dostu bir tasarım sunar. Proje, ürün listeleme ve detay sayfalarını içerir ve React'in modüler yapısını kolay yönetim için kullanır. Bu proje, temiz ve profesyonel web arayüzleri oluşturma konusundaki becerilerimi vurgulamaktadır.",
    image: Nikewebsite,
    technologies: ["react", "tailwind", "axios"],
    github: "https://github.com/hcyvhsyn/Nike",
    liveSite: "https://nike-one-kappa.vercel.app/",
  },
  {
    id: 2,
    title: "Kod Pizza",
    description:
      "Pizza projesi, React kullanılarak geliştirilmiş dinamik bir web uygulamasıdır ve etkileşimli bir kullanıcı deneyimi sunar. Proje, kullanıcıların tercihlerine göre siparişlerini özelleştirmelerini sağlayan bir pizza menüsü içerir. Modern tasarımı ve modüler yapısıyla hem yüksek performans hem de kullanıcı dostu bir deneyim sunar.",
    image: PizzaProject,
    technologies: ["react", "tailwind", "axios"],
    github: "https://github.com/hcyvhsyn/fsweb-s8-challenge-pizza",
    liveSite: "https://fsweb-s8-challenge-pizza-win4.vercel.app/",
  },
  {
    id: 3,
    title: "Favori Film",
    description:
      "Favori Filmler projesi, React kullanılarak geliştirilmiş bir web uygulamasıdır ve kullanıcıların favori filmlerini eklemelerine ve yönetmelerine olanak tanır. Proje, kullanıcıların film listelerini oluşturabileceği, görüntüleyebileceği ve düzenleyebileceği temiz, etkileşimli bir arayüz içerir. Modern tasarım ve işlevselliği birleştirerek sorunsuz bir kullanıcı deneyimi sunar.",
    image: FilmProject,
    technologies: ["react", "tailwind", "axios"],
    github: "https://github.com/hcyvhsyn/fsweb-s10g2-redux-filmler-solution",
    liveSite: "https://fsweb-s10g2-redux-filmler-solution-psi.vercel.app/movies",
  },
];
