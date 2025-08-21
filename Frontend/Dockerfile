# مرحله اول: ساخت برنامه با Vite
FROM node:20-alpine AS builder

WORKDIR /app

# فقط فایل‌های package.json و package-lock.json رو کپی می‌کنیم
COPY package*.json ./

# نصب وابستگی‌ها
RUN npm install

# بقیه سورس کد رو کپی می‌کنیم
COPY . .

# build خروجی Vite
RUN npm run build

# مرحله دوم: اجرای نهایی با nginx
FROM nginx:stable-alpine

# حذف فایل‌های پیش‌فرض nginx
RUN rm -rf /usr/share/nginx/html/*

# کپی کردن خروجی build به nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# پورت nginx
EXPOSE 80

# اجرای nginx
CMD ["nginx", "-g", "daemon off;"]
