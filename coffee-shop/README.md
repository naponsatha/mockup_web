# COFFEE HAVEN - E-commerce Website

เว็บไซต์ E-commerce สำหรับร้านกาแฟ ออกแบบตาม Camping Moon พร้อมรูปภาพฟรีจาก Unsplash

## 📁 โครงสร้างโปรเจค

```
coffee-shop/
├── index.html          # หน้าหลัก
├── css/
│   └── style.css      # ไฟล์ CSS หลัก
├── js/
│   └── main.js        # JavaScript สำหรับ interactions
├── images/            # โฟลเดอร์สำหรับรูปภาพ (ใช้ Unsplash URLs ในตอนนี้)
└── README.md          # ไฟล์นี้
```

## ✨ คุณสมบัติ

### ดีไซน์ตาม Camping Moon:
- ✅ **Full-width Hero Slider** - รูปภาพแบนเนอร์เต็มหน้าจอพร้อม overlay
- ✅ **Sticky Header** - Header ติดด้านบนเมื่อ scroll
- ✅ **Mega Menu Navigation** - เมนูแบบ dropdown หลายคอลัมน์
- ✅ **Product Grid** - แสดงสินค้าแบบ 5 คอลัมน์ (responsive)
- ✅ **Category Grid** - 3 หมวดหมู่แบบ full-width images
- ✅ **Full-width Promo Banner** - แบนเนอร์โปรโมชั่นแบบเต็มหน้าจอ
- ✅ **Newsletter Section** - ฟอร์มสมัครรับข่าวสาร
- ✅ **Professional Footer** - Footer แบบแบ่งคอลัมน์

### Features:
- 🛒 Shopping Cart (ระบบตะกร้าสินค้า)
- 🔍 Search Function (ค้นหาสินค้า)
- 👁️ Quick View (ดูรายละเอียดด่วน)
- ⭐ Product Ratings (คะแนนสินค้า)
- 🏷️ Product Badges (NEW, SALE)
- 📱 Fully Responsive (รองรับทุกขนาดหน้าจอ)
- ✨ Smooth Animations (애니メ이션ลื่นไหล)
- 📧 Newsletter Subscription (สมัครรับข่าวสาร)

## 🎨 สีและธีม

```css
--primary-dark: #1a1a1a      /* สีดำหลัก */
--secondary-dark: #2c2c2c    /* สีเทาเข้ม */
--accent-gold: #a89968       /* สีทองเน้น */
--text-dark: #212121         /* สีตัวอักษร */
--bg-light: #f4f4f4          /* พื้นหลังอ่อน */
```

## 🖼️ รูปภาพ

ใช้รูปภาพฟรีจาก [Unsplash](https://unsplash.com):
- Hero: Coffee brewing scene
- Categories: Coffee beans, Equipment, Accessories
- Products: Coffee products ต่างๆ
- Banner: Coffee making process

## 🚀 วิธีใช้งาน

1. **เปิดเว็บไซต์:**
   - Double-click ที่ `index.html` เพื่อเปิดในเบราว์เซอร์

2. **ปรับแต่งเนื้อหา:**
   - แก้ไข HTML ใน `index.html`
   - ปรับสีใน `css/style.css` (ดูที่ `:root` variables)
   - แก้ไข JavaScript ใน `js/main.js`

3. **เปลี่ยนรูปภาพ:**
   - แทนที่ URL จาก Unsplash ด้วยรูปของคุณเอง
   - หรือดาวน์โหลดรูปมาใส่ใน folder `images/`

## 📱 Responsive Breakpoints

- **Desktop**: 1200px ขึ้นไป (5 columns)
- **Laptop**: 992px - 1199px (4 columns)
- **Tablet**: 768px - 991px (3 columns)
- **Mobile**: 767px ลงมา (1-2 columns)

## ⚙️ JavaScript Functions

- `updateCart()` - อัพเดทจำนวนสินค้าในตะกร้า
- `showNotification()` - แสดงการแจ้งเตือน
- `showSlide()` - แสดงสไลด์ในฮีโร่
- Lazy Loading สำหรับรูปภาพ
- Smooth Scroll สำหรับลิงก์
- Intersection Observer สำหรับ animations

## 🎯 การปรับแต่งแนะนำ

### เปลี่ยนสี:
```css
/* ใน css/style.css */
:root {
    --primary-dark: #YOUR_COLOR;
    --accent-gold: #YOUR_ACCENT;
}
```

### เพิ่มสินค้า:
```html
<!-- ใน index.html -->
<div class="product-card">
    <div class="product-image">
        <img src="YOUR_IMAGE.jpg" alt="Product">
        <button class="quick-view-btn">QUICK VIEW</button>
    </div>
    <div class="product-info">
        <h3>Product Name</h3>
        <div class="product-rating">
            <span class="stars">★★★★★</span>
            <span class="reviews">(10)</span>
        </div>
        <p class="product-price">฿999.00</p>
    </div>
</div>
```

### เปลี่ยนเนื้อหา Mega Menu:
```html
<!-- ใน index.html ที่ส่วน .mega-menu-content -->
<div class="mega-column">
    <h4>YOUR CATEGORY</h4>
    <ul>
        <li><a href="#">Your Link</a></li>
    </ul>
</div>
```

## 🔧 เทคโนโลยีที่ใช้

- **HTML5** - โครงสร้างเว็บ
- **CSS3** - Styling, Animations, Grid, Flexbox
- **Vanilla JavaScript** - Interactions ไม่ใช้ library
- **Unsplash** - รูปภาพฟรีคุณภาพสูง

## 📄 License

ใช้งานได้ฟรีสำหรับโปรเจคส่วนตัวและเชิงพาณิชย์

## 🙏 Credits

- Design inspired by: [Camping Moon](https://www.campingmoon.com)
- Images from: [Unsplash](https://unsplash.com)
- Icons: Custom SVG icons

---

**สร้างโดย Claude Code** ☕✨
