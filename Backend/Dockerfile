# مرحله اول: ساخت (dependencies نصب میشن)
FROM node:20-alpine AS builder

WORKDIR /app

# فقط فایل‌های package.json و package-lock.json رو کپی می‌کنیم
COPY package*.json ./

# نصب وابستگی‌ها
RUN npm install --production

# مرحله دوم: اجرای نهایی
FROM node:20-alpine

WORKDIR /app

# کپی کردن وابستگی‌های نصب شده از مرحله قبل
COPY --from=builder /app/node_modules ./node_modules

# کپی کردن کل سورس کد
COPY . .

# متغیر محیطی پیش‌فرض
ENV NODE_ENV=production

# پورت برنامه (با توجه به express)
EXPOSE 3000

# اجرای برنامه
CMD ["npm", "start"]
