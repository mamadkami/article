import { Camera, Palette, Award, Star } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-purple-900  text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl text-center font-bold mb-6">درباره من</h2>
            <p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-300">
              من علی احمدی هستم، عکاس و طراح گرافیک با بیش از ۱۰ سال تجربه در
              این حوزه. عاشق ثبت لحظات زیبا و خلق طراحی‌هایی هستم که احساسات را
              منتقل کنند.
            </p>
            <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-300">
              هدف من این است که از طریق هنر، دنیا را زیباتر کنم و به مردم کمک
              کنم تا داستان‌هایشان را به بهترین شکل ممکن بیان کنند.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-3xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300">
                <Camera className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                <div className="font-bold text-white mb-1">عکاسی</div>
                <div className="text-sm text-gray-300">حرفه‌ای</div>
              </div>
              <div className="text-center p-6 rounded-3xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300">
                <Palette className="w-10 h-10 text-pink-400 mx-auto mb-3" />
                <div className="font-bold text-white mb-1">طراحی</div>
                <div className="text-sm text-gray-300">خلاقانه</div>
              </div>
              <div className="text-center p-6 rounded-3xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300">
                <Award className="w-10 h-10 text-indigo-400 mx-auto mb-3" />
                <div className="font-bold text-white mb-1">جوایز</div>
                <div className="text-sm text-gray-300">متعدد</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
