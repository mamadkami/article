import {
  Instagram,
  Twitter,
  Facebook,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">تماس با من</h2>
          <p className="text-xl max-w-2xl mx-auto">
            آماده همکاری با شما هستم. پروژه خود را با من شروع کنید
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold">ایمیل</div>
                  <div className="text-gray-300">egeemobin@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold">تلفن</div>
                  <div className="text-gray-300">09939672033</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold">آدرس</div>
                  <div className="text-gray-300">تهران، ارم</div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">شبکه‌های اجتماعی</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Twitter className="w-6 h-6 text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-lg">
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                // هدایت به بخش نمونه‌کارها
                document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="نام و نام خانوادگی"
                  className="w-full px-4 py-3 rounded-2xl border border-white/20 bg-white/5 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
                <input
                  type="email"
                  placeholder="ایمیل"
                  className="w-full px-4 py-3 rounded-2xl border border-white/20 bg-white/5 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </div>
              <input
                type="text"
                placeholder="موضوع"
                className="w-full px-4 py-3 rounded-2xl border border-white/20 bg-white/5 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
              <textarea
                rows={5}
                placeholder="پیام شما"
                className="w-full px-4 py-3 rounded-2xl border border-white/20 bg-white/5 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none transition-all"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-4 rounded-2xl hover:shadow-lg transition-all duration-300 font-medium"
              >
                مشاهده آثار
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
