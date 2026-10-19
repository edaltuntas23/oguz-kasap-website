document.addEventListener("DOMContentLoaded", function () {
  var mount = document.getElementById("headerMount");
  if (!mount) return;

  mount.innerHTML = `
    <header class="fixed top-0 left-0 right-0 z-50 bg-[#123a27] border-b border-[#d4af37]/20 text-[#fdfbf7]">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        <a href="index.html" class="flex items-center gap-4">
          <!-- Logo Çerçevesi Büyütüldü ve İç Resim Alanı Genişletildi -->
          <div class="h-20 w-20 flex items-center justify-center shrink-0">
            <img src="images/logo.png" alt="Oğuz Kasap Logo" class="h-full w-full object-contain drop-shadow-md" onerror="this.onerror=null; this.src='images/logo.jpg';" />
          </div>
          <span class="font-display text-2xl font-bold tracking-wide">OĞUZ KASAP <span class="text-[#d4af37] text-xs block font-sans tracking-widest uppercase">Kağıthane</span></span>
        </a>
        <nav class="hidden md:flex items-center gap-8 text-sm font-semibold">
          <a href="index.html" class="hover:text-[#d4af37] transition">Ana Sayfa</a>
          <a href="hakkimizda.html" class="hover:text-[#d4af37] transition">Hakkımızda</a>
          <a href="urunler.html" class="hover:text-[#d4af37] transition">Ürünlerimiz</a>
          <a href="galeri.html" class="hover:text-[#d4af37] transition">Galeri</a>
          <a href="iletisim.html" class="hover:text-[#d4af37] transition">İletişim</a>
        </nav>
        <a href="https://wa.me/905364705272" target="_blank" class="rounded-full bg-[#d4af37] px-6 py-3 text-xs font-bold text-[#123a27] hover:bg-[#e8cd7a] transition shadow-md">
          Sipariş Ver
        </a>
      </div>
    </header>
  `;
});