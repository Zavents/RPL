document.addEventListener('DOMContentLoaded', function () {
    function gallery() {
        return {
            images: [
            { image: './public/images/galeri/galeri_belajar.webp', caption: 'Foto belajar bersama', alt: 'Belajar' },
            { image: './public/images/galeri/galeri_bukber.webp', caption: 'Foto bukber', alt: 'Bukber' },
            { image: './public/images/galeri/galeri_buk_nadia.webp', caption: 'Foto bersama Ibuk Nadia', alt: 'Buk Nadia' },
            { image: './public/images/galeri/galeri_csf_1.webp', caption: 'Foto CSF 1', alt: 'CSF 1' },
            { image: './public/images/galeri/galeri_csf_2.webp', caption: 'Foto CSF 2', alt: 'CSF 2' },
            { image: './public/images/galeri/galeri_csf_3.webp', caption: 'Foto CSF 3', alt: 'CSF 3' },
            { image: './public/images/galeri/galeri_csf_4.webp', caption: 'Foto CSF 4', alt: 'CSF 4' },
            { image: './public/images/galeri/galeri_csf_5.webp', caption: 'Foto CSF 5', alt: 'CSF 5' },
            { image: './public/images/galeri/galeri_csf_6.webp', caption: 'Foto CSF 6', alt: 'CSF 6' },
            { image: './public/images/galeri/galeri_csf_7.webp', caption: 'Foto CSF 7', alt: 'CSF 7' },
            { image: './public/images/galeri/galeri_csf_8.webp', caption: 'Foto CSF 8', alt: 'CSF 8' },
            { image: './public/images/galeri/galeri_event.webp', caption: 'Event terkini', alt: 'Event' },
            { image: './public/images/galeri/galeri_futsal_1.webp', caption: 'Foto futsal 1', alt: 'Futsal 1' },
            { image: './public/images/galeri/galeri_futsal_2.webp', caption: 'Foto futsal 2', alt: 'Futsal 2' },
            { image: './public/images/galeri/galeri_guru_2023.webp', caption: 'Foto guru 2023', alt: 'Guru 2023' },
            { image: './public/images/galeri/galeri_guru_2024_1.webp', caption: 'Foto guru 2024-1', alt: 'Guru 2024-1' },
            { image: './public/images/galeri/galeri_guru_2024_2.webp', caption: 'Foto guru 2024-2', alt: 'Guru 2024-2' },
            { image: './public/images/galeri/galeri_guru_2024_4.webp', caption: 'Foto guru 2024-4', alt: 'Guru 2024-4' },
            { image: './public/images/galeri/galeri_guru_2024_5.webp', caption: 'Foto guru 2024-5', alt: 'Guru 2024-5' },
            { image: './public/images/galeri/galeri_guru_2024_6.webp', caption: 'Foto guru 2024-6', alt: 'Guru 2024-6' },
            { image: './public/images/galeri/galeri_labor_1.webp', caption: 'Foto labor 1', alt: 'Labor 1' },
            { image: './public/images/galeri/galeri_labor_2.webp', caption: 'Foto labor 2', alt: 'Labor 2' },
            { image: './public/images/galeri/galeri_labor_3.webp', caption: 'Foto labor 3', alt: 'Labor 3' },
            { image: './public/images/galeri/galeri_labor_4.webp', caption: 'Foto labor 4', alt: 'Labor 4' },
            { image: './public/images/galeri/galeri_labor_5.webp', caption: 'Foto labor 5', alt: 'Labor 5' },
            { image: './public/images/galeri/galeri_labor_6.webp', caption: 'Foto labor 6', alt: 'Labor 6' },
            { image: './public/images/galeri/galeri_labor_7.webp', caption: 'Foto labor 7', alt: 'Labor 7' },
            { image: './public/images/galeri/galeri_labor_8.webp', caption: 'Foto labor 8', alt: 'Labor 8' },
            { image: './public/images/galeri/galeri_piala.webp', caption: 'Foto piala', alt: 'Piala' },
            { image: './public/images/galeri/galeri_random_1.webp', caption: 'Foto random 1', alt: 'Random 1' },
            { image: './public/images/galeri/galeri_random_2.webp', caption: 'Foto random 2', alt: 'Random 2' },
            { image: './public/images/galeri/galeri_turnamen.webp', caption: 'Foto turnamen', alt: 'Turnamen' },
            { image: './public/images/galeri/guru_2024_10.webp', caption: 'Foto guru 2024-10', alt: 'Guru 2024-10' },
            { image: './public/images/galeri/guru_2024_11.webp', caption: 'Foto guru 2024-11', alt: 'Guru 2024-11' },
            { image: './public/images/galeri/guru_2024_7.webp', caption: 'Foto guru 2024-7', alt: 'Guru 2024-7' },
            { image: './public/images/galeri/guru_2024_8.webp', caption: 'Foto guru 2024-8', alt: 'Guru 2024-8' },
            { image: './public/images/galeri/guru_2024_9.webp', caption: 'Foto guru 2024-9', alt: 'Guru 2024-9' },
        ],
        
        shuffledImages: [],
        init() {
            this.shuffledImages = this.images.sort(() => Math.random() - 0.5);
        },
        };
    }
    // Ensure Alpine.js can access this data
    Alpine.data('galeri', () => ({
        shuffledImages
    }));
})

