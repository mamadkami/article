const categories = [
  "همه",
  "عکاسی طبیعت",
  "معماری",
  "طراحی گرافیک",
  "UI/UX",
  "برندینگ",
];

const portfolioItems = [
  {
    id: 1,
    title: "طلوع در صحرا",
    category: "عکاسی طبیعت",
    image: "https://picsum.photos/id/1015/800/600",
    likes: 320,
    views: 1850,
    description: "طلوع آفتاب بر فراز تپه‌های شنی صحرا",
    tags: ["طلوع", "صحرا", "طبیعت"],
  },
  {
    id: 2,
    title: "معماری شیشه‌ای",
    category: "معماری",
    image: "https://picsum.photos/id/1024/800/600",
    likes: 280,
    views: 1320,
    description: "نمای ساختمان مدرن با دیوارهای شیشه‌ای",
    tags: ["مدرن", "شیشه‌ای", "شهری"],
  },
  {
    id: 3,
    title: "جنگل مه‌آلود",
    category: "عکاسی طبیعت",
    image: "https://picsum.photos/id/1039/800/600",
    likes: 415,
    views: 2200,
    description: "درختان بلند در میان مه صبحگاهی",
    tags: ["جنگل", "مه", "آرامش"],
  },
  {
    id: 4,
    title: "طراحی لوگو مدرن",
    category: "طراحی گرافیک",
    image: "https://picsum.photos/id/1043/800/600",
    likes: 305,
    views: 1420,
    description: "طراحی لوگو مدرن با الهام از اشکال هندسی",
    tags: ["لوگو", "مدرن", "هندسی"],
  },
  {
    id: 6,
    title: "ساحل آرام",
    category: "عکاسی طبیعت",
    image: "https://picsum.photos/id/1056/800/600",
    likes: 450,
    views: 2400,
    description: "خط ساحلی آرام با موج‌های ملایم",
    tags: ["دریا", "ساحل", "آرامش"],
  },
  {
    id: 7,
    title: "هویت بصری رستوران",
    category: "برندینگ",
    image: "https://picsum.photos/id/1067/800/600",
    likes: 268,
    views: 1290,
    description: "طراحی هویت بصری کامل برای یک رستوران مدرن",
    tags: ["برند", "رستوران", "هویت"],
  },
  {
    id: 9,
    title: "اپلیکیشن فروشگاهی",
    category: "UI/UX",
    image: "https://picsum.photos/id/1074/800/600",
    likes: 340,
    views: 1650,
    description: "طراحی رابط کاربری برای اپلیکیشن فروشگاهی مدرن",
    tags: ["UI", "اپلیکیشن", "فروشگاه"],
  },
];

const services = [
  {
    title: "عکاسی حرفه‌ای",
    description: "عکاسی در سبک‌های متنوع با کیفیت بالا",
    features: ["طبیعت", "شهری", "معماری", "صنعتی"],
    icon: "Camera",
  },
  {
    title: "طراحی گرافیک",
    description: "خلق طراحی‌های مدرن و خلاقانه برای برند شما",
    features: ["لوگو", "پوستر", "بسته‌بندی", "تبلیغات"],
    icon: "Palette",
  },
  {
    title: "طراحی UI/UX",
    description: "طراحی رابط کاربری زیبا و بهینه برای وب و موبایل",
    features: ["وب‌سایت", "اپلیکیشن", "داشبورد", "پروتوتایپ"],
    icon: "Grid",
  },
  {
    title: "برندینگ",
    description: "ایجاد هویت بصری قوی و متمایز برای کسب‌وکار",
    features: ["هویت بصری", "راهنمای برند", "کارت ویزیت", "ست اداری"],
    icon: "Award",
  },
];

const stats = [
  { number: "500+", label: "پروژه تکمیل شده" },
  { number: "50+", label: "مشتری راضی" },
  { number: "10", label: "سال تجربه" },
  { number: "25", label: "جایزه دریافتی" },
];

exports.seed = async function (knex) {
  await knex("categories").del();
  await knex("portfolio_items").del();
  await knex("services").del();
  await knex("stats").del();

  await knex("categories").insert(
    categories.map((name, index) => ({ id: index + 1, name }))
  );
  await knex("portfolio_items").insert(
    portfolioItems.map((item) => ({
      id: item.id,
      title: item.title,
      category: item.category,
      image: item.image,
      likes: item.likes,
      views: item.views,
      description: item.description,
      tags: JSON.stringify(item.tags),
    }))
  );
  await knex("services").insert(
    services.map((service, index) => ({
      id: index + 1,
      title: service.title,
      description: service.description,
      features: JSON.stringify(service.features),
    }))
  );
  await knex("stats").insert(
    stats.map((stat, index) => ({
      id: index + 1,
      number: stat.number,
      label: stat.label,
    }))
  );
};
