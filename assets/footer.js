document.addEventListener("DOMContentLoaded", function () {
  var mount = document.getElementById("footerMount");
  if (!mount) return;

  mount.innerHTML = `
    <footer class="bg-charcoal text-offwhite pt-16 pb-8 border-t border-neutral-800">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        
        <!-- 1. SÜTUN: Marka -->
        <div>
          <h3 class="font-display text-xl font-bold text-gold">OĞUZ KASAP</h3>
          <p class="mt-4 text-sm text-neutral-400 leading-relaxed">
            %100 yerli besi, helal ve hijyenik taze et ürünleri ile Kağıthane'de hizmetinizdeyiz.
          </p>
        </div>

        <!-- 2. SÜTUN: Hızlı Menü -->
        <div>
          <h3 class="font-display text-lg font-bold text-offwhite">Hızlı Menü</h3>
          <ul class="mt-4 space-y-2 text-sm text-neutral-400">
            <li><a href="index.html" class="hover:text-gold transition">Ana Sayfa</a></li>
            <li><a href="hakkimizda.html" class="hover:text-gold transition">Hakkımızda</a></li>
            <li><a href="urunler.html" class="hover:text-gold transition">Ürünlerimiz</a></li>
            <li><a href="galeri.html" class="hover:text-gold transition">Galeri</a></li>
            <li><a href="iletisim.html" class="hover:text-gold transition">İletişim</a></li>
          </ul>
        </div>

        <!-- 3. SÜTUN: Çalışma Saatleri -->
        <div>
          <h3 class="font-display text-lg font-bold text-offwhite">Çalışma Saatleri</h3>
          <p class="mt-4 text-sm text-neutral-400">Haftanın Her Günü</p>
          <p class="mt-1 font-bold text-gold">10:00 — 21:00</p>
        </div>

        <!-- 4. SÜTUN: İletişim & Sosyal Medya -->
        <div>
          <h3 class="font-display text-lg font-bold text-offwhite">İletişim</h3>
          <p class="mt-4 text-sm text-neutral-400">
            Hamidiye, Baki Sokak No: 3A<br />34000 Kağıthane / İstanbul
          </p>
          <a href="tel:05364705272" class="mt-2 block font-bold text-gold hover:underline">0536 470 52 72</a>
          
          <!-- İletişimin Altı: Metin + Tıklanabilir İkon -->
          <div class="mt-4 pt-3 border-t border-neutral-800 flex items-center gap-3">
            <span class="text-xs text-neutral-400">Sosyal medyadan takip edin:</span>
            <a 
              href="https://www.instagram.com/oguz_kasap_kagithane/" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-gold hover:bg-gold hover:text-forest hover:scale-110 transition duration-300 shadow-md"
              aria-label="Instagram Sayfamız"
              title="Instagram'da Takip Edin"
            >
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      <div class="mt-12 border-t border-neutral-800/80 pt-6 text-center text-xs text-neutral-500">
        &copy; Oğuz Kasap Kağıthane. Tüm hakları saklıdır.
      </div>
    </footer>
  `;
});