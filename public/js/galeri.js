document.addEventListener('DOMContentLoaded', function () {
    function gallery() {
        return {
            images: [
                { image: './public/images/galeri/galeri_buk_nadia.webp', caption: 'Foto bersama Ibuk Nadia', alt: 'Buk Nadia' },
                { image: './public/images/galeri/galeri_csf_1.webp', caption: 'Foto CSF 1', alt: 'CSF 1' },
                { image: './public/images/galeri/galeri_csf_2.webp', caption: 'Foto CSF 2', alt: 'CSF 2' },
                { image: './public/images/galeri/galeri_csf_3.webp', caption: 'Foto CSF 3', alt: 'CSF 3' },
                { image: './public/images/galeri/galeri_csf_4.webp', caption: 'Foto CSF 4', alt: 'CSF 4' },
                { image: './public/images/galeri/galeri_csf_5.webp', caption: 'Foto CSF 5', alt: 'CSF 5' },
                { image: './public/images/galeri/galeri_csf_6.webp', caption: 'Foto CSF 6', alt: 'CSF 6' },
                { image: './public/images/galeri/galeri_csf_7.webp', caption: 'Foto CSF 7', alt: 'CSF 7' },
                { image: './public/images/galeri/galeri_csf_8.webp', caption: 'Foto CSF 8', alt: 'CSF 8' },
                { image: './public/images/galeri/galeri_guru_2023.webp', caption: 'Foto guru 2023', alt: 'Guru 2023' },
                { image: './public/images/galeri/galeri_guru_2024_1.webp', caption: 'Foto guru 2024-1', alt: 'Guru 2024-1' },
                { image: './public/images/galeri/galeri_guru_2024_2.webp', caption: 'Foto guru 2024-2', alt: 'Guru 2024-2' },
                { image: './public/images/galeri/galeri_guru_2024_4.webp', caption: 'Foto guru 2024-4', alt: 'Guru 2024-4' },
                { image: './public/images/galeri/galeri_guru_2024_5.webp', caption: 'Foto guru 2024-5', alt: 'Guru 2024-5' },
                { image: './public/images/galeri/galeri_guru_2024_6.webp', caption: 'Foto guru 2024-6', alt: 'Guru 2024-6' },
                { image: './public/images/galeri/galeri_labor_1.webp', caption: 'Foto labor 1', alt: 'Labor 1' },
                { image: './public/images/galeri/galeri_random_1.webp', caption: 'Foto random 1', alt: 'Random 1' },
                { image: './public/images/galeri/galeri_random_2.webp', caption: 'Foto random 2', alt: 'Random 2' },
              ],
        
       shuffledImages: [],
    init() {
      // Shuffle and limit to 10 images
      this.shuffledImages = this.images.sort(() => Math.random() - 0.5).slice(0, 1);

      // Preload all images
      this.shuffledImages.forEach((item) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = item.image;
        document.head.appendChild(link);
      });
    },
  };
}})