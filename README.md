# …or create a new repository on the command line

```bash
echo "# react-testing" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/idfldev/react-testing.git
git push -u origin master
```

## …or push an existing repository from the command line

```bash
git remote add origin https://github.com/idfldev/react-testing.git
git branch -M master
git push -u origin master
```

___

### [Cách cài đặt Tailwind CSS v4.1.5 với Vite + React (Hướng dẫn cập nhật 2025)](https://viblo.asia/p/cach-cai-dat-tailwind-css-v415-voi-vite-react-huong-dan-cap-nhat-2025-Ny0VG2vDLPA)

```bash 
npm create vite@latest my-portfolio -- --template react 
cd my-portfolio 
npm install
npm install tailwindcss @tailwindcss/vite
//vite.config.js
import { defineConfig } from 'vite' 
import tailwindcss from '@tailwindcss/vite' 
export default defineConfig({
  plugins: \[ react(), tailwindcss(), \],
})

@import "tailwindcss"; //ví dụ: index.css
npm run dev 
```

___

### [Sử dụng React Hook build một reusable Animation Component](https://viblo.asia/p/su-dung-react-hook-build-mot-reusable-animation-component-QpmlewMNKrd)


