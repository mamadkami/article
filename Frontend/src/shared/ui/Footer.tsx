import { Camera } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 space-x-reverse mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">آرت گالری</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              عکاسی و طراحی با نگاهی هنری و خلاقانه
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">خدمات</h4>
            <ul className="space-y-2 text-gray-300">
              <li>عکاسی حرفه‌ای</li>
              <li>طراحی گرافیک</li>
              <li>طراحی UI/UX</li>
              <li>برندینگ</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">پورتفولیو</h4>
            <ul className="space-y-2 text-gray-300">
              <li>عکاسی طبیعت</li>
              <li>پرتره</li>
              <li>معماری</li>
              <li>طراحی</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">تماس</h4>
            <ul className="space-y-2 text-gray-300">
              <li>aegeemobin@gmail.com</li>
              <li>0993-967-2033</li>
              <li>تهران، ارم</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; ۱۴۰۳ آرت گالری. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}
