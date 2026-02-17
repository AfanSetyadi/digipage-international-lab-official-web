<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digipage International Lab — PT Digital Landing Teknologi</title>
    <meta name="description" content="Digipage International Lab (PT Digital Landing Teknologi) — Startup inovatif berfokus pada riset dan pengembangan bisnis mutakhir di bidang software, data, dan AI.">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: { sans: ['Inter', 'sans-serif'] },
                    colors: {
                        brand: {
                            50:  '#eef5ff',
                            100: '#d9e8ff',
                            200: '#bcd8ff',
                            300: '#8ec0ff',
                            400: '#599dff',
                            500: '#3378ff',
                            600: '#1b57f5',
                            700: '#1443e1',
                            800: '#1736b6',
                            900: '#19338f',
                            950: '#142057',
                        }
                    }
                }
            }
        }
    </script>
    <style>
        .gradient-hero {
            background: radial-gradient(ellipse 80% 60% at 50% -20%, rgba(51, 120, 255, 0.15), transparent),
                        linear-gradient(180deg, #0a0f1e 0%, #101829 100%);
        }
        .gradient-card:hover { transform: translateY(-4px); }
        .glow { box-shadow: 0 0 60px rgba(51, 120, 255, 0.08); }
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delay { animation: float 6s ease-in-out 2s infinite; }
        .animate-float-delay-2 { animation: float 6s ease-in-out 4s infinite; }
    </style>
</head>
<body class="bg-[#0a0f1e] text-gray-200 font-sans antialiased">

<?php
    $companyName = "Digipage International Lab";
    $legalName = "PT Digital Landing Teknologi";
    $year = date("Y");

    $services = [
        [
            "icon" => "software",
            "title" => "Software Engineering",
            "desc" => "Pengembangan solusi perangkat lunak modern yang skalabel, aman, dan dirancang untuk mendukung transformasi digital bisnis Anda."
        ],
        [
            "icon" => "data",
            "title" => "Data Science & Analytics",
            "desc" => "Mengubah data mentah menjadi insight strategis melalui analisis mendalam, visualisasi, dan pemodelan prediktif berbasis data."
        ],
        [
            "icon" => "ai",
            "title" => "Artificial Intelligence",
            "desc" => "Implementasi kecerdasan buatan mutakhir mulai dari machine learning, NLP, hingga computer vision untuk solusi bisnis cerdas."
        ],
        [
            "icon" => "research",
            "title" => "Riset & Inovasi",
            "desc" => "Pusat riset teknologi yang menghasilkan solusi inovatif dan relevan terhadap tantangan global dan kebutuhan industri."
        ],
        [
            "icon" => "invest",
            "title" => "Investasi & Inkubasi",
            "desc" => "Program investasi strategis pada projek bisnis berpotensi besar, dengan pendampingan dan akselerasi pertumbuhan."
        ],
        [
            "icon" => "network",
            "title" => "Kemitraan Global",
            "desc" => "Jejaring relasi nasional dan internasional yang membuka peluang kolaborasi dan pengembangan bisnis lintas batas."
        ],
    ];

    $stats = [
        ["value" => "50+", "label" => "Projek Riset"],
        ["value" => "30+", "label" => "Mitra Bisnis"],
        ["value" => "10+", "label" => "Negara Terjangkau"],
        ["value" => "99%", "label" => "Kepuasan Klien"],
    ];

    $achievements = [
        ["rank" => "Juara I", "title" => "World Invention and Innovation Forum 2018", "location" => "Foshan, China", "tier" => "gold", "flag" => "cn"],
        ["rank" => "Juara I", "title" => "Indonesian Hospital Association Award 2025", "location" => "Jakarta, Indonesia", "tier" => "gold", "flag" => "id"],
        ["rank" => "Juara I", "title" => "Sidoarjo Innovation Award 2025", "location" => "Sidoarjo, Indonesia", "tier" => "gold", "flag" => "id"],
        ["rank" => "Juara II", "title" => "Korea International Women's Invention Exposition 2025", "location" => "KINTEX, Korea Selatan", "tier" => "silver", "flag" => "kr"],
        ["rank" => "Juara II", "title" => "International Conference of Art and Design 2018", "location" => "Langkawi, Malaysia", "tier" => "silver", "flag" => "my"],
        ["rank" => "Juara III", "title" => "National Startup Competition 2019", "location" => "Surabaya, Indonesia", "tier" => "bronze", "flag" => "id"],
        ["rank" => "Finalis", "title" => "Global Competition on Systematic Innovation 2019 (GCSI)", "location" => "Liverpool, UK", "tier" => "finalist", "flag" => "gb"],
        ["rank" => "Finalis", "title" => "Poster International Health Conference 2019", "location" => "Mahidol University, Thailand", "tier" => "finalist", "flag" => "th"],
    ];

    function getTierBadge(string $tier): string {
        $badges = [
            "gold" => "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
            "silver" => "bg-slate-400/20 text-slate-300 border-slate-400/30",
            "bronze" => "bg-amber-600/20 text-amber-400 border-amber-600/30",
            "finalist" => "bg-brand-600/20 text-brand-300 border-brand-500/30",
        ];
        return $badges[$tier] ?? $badges["finalist"];
    }

    function renderIcon(string $type): string {
        $icons = [
            "software" => '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>',
            "data" => '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"/>',
            "ai" => '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"/>',
            "research" => '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.299 4.887a1.5 1.5 0 01-1.45 1.113H7.749a1.5 1.5 0 01-1.45-1.113L5 14.5m14 0H5"/>',
            "invest" => '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/>',
            "network" => '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/>',
        ];
        return $icons[$type] ?? '';
    }
?>

<!-- Navbar -->
<nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0a0f1e]/80 backdrop-blur-xl border-b border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 lg:h-20">
            <a href="#hero" class="flex items-center gap-3 group">
                <div class="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold text-sm tracking-tight">iL</div>
                <span class="text-lg font-bold text-white tracking-tight"><?= $companyName ?></span>
            </a>
            <div class="hidden md:flex items-center gap-8">
                <a href="#tentang" class="text-sm text-gray-400 hover:text-white transition-colors">Tentang</a>
                <a href="#layanan" class="text-sm text-gray-400 hover:text-white transition-colors">Layanan</a>
                <a href="#prestasi" class="text-sm text-gray-400 hover:text-white transition-colors">Prestasi</a>
                <a href="#investasi" class="text-sm text-gray-400 hover:text-white transition-colors">Investasi</a>
                <a href="#kontak" class="text-sm text-gray-400 hover:text-white transition-colors">Kontak</a>
            </div>
            <a href="#kontak" class="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium rounded-lg transition-colors">
                Hubungi Kami
            </a>
            <button id="menuBtn" class="md:hidden p-2 text-gray-400 hover:text-white" aria-label="Menu">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>
        </div>
    </div>
    <!-- Mobile menu -->
    <div id="mobileMenu" class="md:hidden hidden border-t border-white/5 bg-[#0a0f1e]/95 backdrop-blur-xl">
        <div class="px-4 py-4 space-y-3">
            <a href="#tentang" class="block text-sm text-gray-400 hover:text-white transition-colors py-2">Tentang</a>
            <a href="#layanan" class="block text-sm text-gray-400 hover:text-white transition-colors py-2">Layanan</a>
            <a href="#prestasi" class="block text-sm text-gray-400 hover:text-white transition-colors py-2">Prestasi</a>
            <a href="#investasi" class="block text-sm text-gray-400 hover:text-white transition-colors py-2">Investasi</a>
            <a href="#kontak" class="block text-sm text-gray-400 hover:text-white transition-colors py-2">Kontak</a>
            <a href="#kontak" class="block text-center px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium rounded-lg transition-colors">Hubungi Kami</a>
        </div>
    </div>
</nav>

<!-- Hero -->
<section id="hero" class="gradient-hero relative min-h-screen flex items-center overflow-hidden">
    <!-- Decorative orbs -->
    <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-600/10 rounded-full blur-3xl animate-float"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-400/5 rounded-full blur-3xl animate-float-delay"></div>
    <div class="absolute top-1/2 right-1/3 w-48 h-48 bg-indigo-500/5 rounded-full blur-2xl animate-float-delay-2"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div class="max-w-4xl">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-600/10 border border-brand-500/20 mb-8">
                <span class="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
                <span class="text-brand-300 text-sm font-medium">Research · Innovation · Investment</span>
            </div>
            <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                Membangun Masa Depan
                <span class="bg-gradient-to-r from-brand-400 via-brand-300 to-cyan-400 bg-clip-text text-transparent"> Melalui Riset & Teknologi</span>
            </h1>
            <p class="mt-6 text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl">
                <?= $companyName ?> menghadirkan solusi riset teknologi mutakhir di bidang software, data, dan AI — mengakselerasi transformasi bisnis digital lintas industri.
            </p>
            <div class="mt-10 flex flex-col sm:flex-row gap-4">
                <a href="#layanan" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-brand-600/25">
                    Jelajahi Layanan
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </a>
                <a href="#tentang" class="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 hover:border-white/25 text-white font-semibold rounded-xl transition-all hover:bg-white/5">
                    Pelajari Lebih Lanjut
                </a>
            </div>
        </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span class="text-xs tracking-widest uppercase">Scroll</span>
        <div class="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent"></div>
    </div>
</section>

<!-- Stats -->
<section class="relative border-y border-white/5 bg-[#0d1325]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <?php foreach ($stats as $stat): ?>
                <div class="text-center">
                    <div class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"><?= $stat['value'] ?></div>
                    <div class="mt-2 text-sm text-gray-500 font-medium tracking-wide"><?= $stat['label'] ?></div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Tentang -->
<section id="tentang" class="relative py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
                <span class="text-brand-400 text-sm font-semibold tracking-widest uppercase">Tentang Kami</span>
                <h2 class="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Pusat Riset &<br>Inovasi Teknologi
                </h2>
                <p class="mt-6 text-gray-400 leading-relaxed text-lg">
                    <strong class="text-gray-200"><?= $companyName ?></strong> (<?= $legalName ?>) merupakan startup inovatif yang berfokus pada riset dan pengembangan bisnis mutakhir di berbagai sektor, dengan keunggulan utama pada penguasaan teknologi software, data, dan kecerdasan buatan (AI).
                </p>
                <p class="mt-4 text-gray-400 leading-relaxed">
                    Didukung oleh jejaring relasi nasional dan internasional yang solid, kami menghadirkan solusi riset teknologi yang relevan terhadap tantangan global dan kebutuhan transformasi bisnis digital lintas industri.
                </p>
                <div class="mt-8 flex flex-col sm:flex-row gap-6">
                    <div class="flex items-start gap-3">
                        <div class="w-10 h-10 rounded-lg bg-brand-600/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg class="w-5 h-5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                        </div>
                        <div>
                            <div class="text-white font-medium">Berbasis Riset</div>
                            <div class="text-gray-500 text-sm mt-1">Solusi yang didukung data dan penelitian mendalam</div>
                        </div>
                    </div>
                    <div class="flex items-start gap-3">
                        <div class="w-10 h-10 rounded-lg bg-brand-600/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg class="w-5 h-5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                        </div>
                        <div>
                            <div class="text-white font-medium">Skala Global</div>
                            <div class="text-gray-500 text-sm mt-1">Jaringan mitra di lebih dari 10 negara</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative">
                <div class="aspect-square rounded-3xl bg-gradient-to-br from-brand-600/20 via-brand-800/10 to-transparent border border-white/5 glow flex items-center justify-center">
                    <div class="text-center p-8">
                        <div class="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-brand-600/20 border border-brand-500/20 mb-6">
                            <svg class="w-12 h-12 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"/>
                            </svg>
                        </div>
                        <div class="text-2xl font-bold text-white">Software · Data · AI</div>
                        <p class="mt-3 text-gray-400 text-sm max-w-xs mx-auto">Tiga pilar utama yang menjadi fondasi setiap solusi dan inovasi kami</p>
                    </div>
                </div>
                <!-- Decorative dots -->
                <div class="absolute -top-4 -right-4 w-24 h-24 bg-[radial-gradient(circle,_rgba(51,120,255,0.15)_1px,_transparent_1px)] bg-[size:8px_8px]"></div>
                <div class="absolute -bottom-4 -left-4 w-24 h-24 bg-[radial-gradient(circle,_rgba(51,120,255,0.15)_1px,_transparent_1px)] bg-[size:8px_8px]"></div>
            </div>
        </div>
    </div>
</section>

<!-- Layanan -->
<section id="layanan" class="relative py-24 lg:py-32 bg-[#0d1325]/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
            <span class="text-brand-400 text-sm font-semibold tracking-widest uppercase">Layanan Kami</span>
            <h2 class="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Solusi Teknologi Terintegrasi</h2>
            <p class="mt-4 text-gray-400 text-lg">Kami menyediakan layanan end-to-end mulai dari riset, pengembangan, hingga investasi untuk mendukung pertumbuhan bisnis Anda.</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <?php foreach ($services as $index => $service): ?>
                <div class="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-500/30 transition-all duration-300 gradient-card">
                    <div class="w-12 h-12 rounded-xl bg-brand-600/10 border border-brand-500/20 flex items-center justify-center mb-6 group-hover:bg-brand-600/20 transition-colors">
                        <svg class="w-6 h-6 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <?= renderIcon($service['icon']) ?>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-white mb-3"><?= $service['title'] ?></h3>
                    <p class="text-gray-400 leading-relaxed text-sm"><?= $service['desc'] ?></p>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Investasi -->
<section id="investasi" class="relative py-24 lg:py-32 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-r from-brand-600/5 to-transparent"></div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div class="order-2 lg:order-1">
                <div class="grid grid-cols-2 gap-4">
                    <div class="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-3">
                        <div class="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                        </div>
                        <div class="text-white font-semibold">Akselerasi</div>
                        <p class="text-gray-500 text-sm">Pendampingan intensif untuk pertumbuhan cepat</p>
                    </div>
                    <div class="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-3 mt-8">
                        <div class="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                            <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        </div>
                        <div class="text-white font-semibold">Kolaborasi</div>
                        <p class="text-gray-500 text-sm">Ekosistem mitra strategis yang kuat</p>
                    </div>
                    <div class="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-3">
                        <div class="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                            <svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
                        </div>
                        <div class="text-white font-semibold">Inovasi</div>
                        <p class="text-gray-500 text-sm">Riset mendalam untuk solusi masa depan</p>
                    </div>
                    <div class="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-3 mt-8">
                        <div class="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                            <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
                        </div>
                        <div class="text-white font-semibold">Ekspansi</div>
                        <p class="text-gray-500 text-sm">Peluang pasar nasional & internasional</p>
                    </div>
                </div>
            </div>
            <div class="order-1 lg:order-2">
                <span class="text-brand-400 text-sm font-semibold tracking-widest uppercase">Investasi & Kemitraan</span>
                <h2 class="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Investasi pada Projek Berpotensi Besar
                </h2>
                <p class="mt-6 text-gray-400 leading-relaxed text-lg">
                    Selain sebagai pusat riset, Digipage International Lab juga menginisiasi program investasi pada projek bisnis yang memiliki potensi besar di masa depan.
                </p>
                <p class="mt-4 text-gray-400 leading-relaxed">
                    Melalui pendekatan kolaboratif dan dukungan strategis, kami berkomitmen membangun ekosistem inovasi yang berkelanjutan, mengakselerasi pertumbuhan projek, serta membuka peluang kemitraan dan pengembangan bisnis berbasis riset unggulan.
                </p>
                <a href="#kontak" class="mt-8 inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-medium transition-colors group">
                    Diskusikan Peluang Investasi
                    <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Prestasi Founder -->
<section id="prestasi" class="relative py-24 lg:py-32 bg-[#0d1325]/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
            <span class="text-brand-400 text-sm font-semibold tracking-widest uppercase">Prestasi Founder</span>
            <h2 class="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Pengakuan Internasional</h2>
            <p class="mt-4 text-gray-400 text-lg">Deretan pencapaian yang membuktikan komitmen kami terhadap inovasi dan keunggulan di kancah nasional maupun internasional.</p>
        </div>
        <div class="grid md:grid-cols-2 gap-5">
            <?php foreach ($achievements as $achievement):
                $badge = getTierBadge($achievement['tier']);
            ?>
                <div class="group relative flex items-start gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-500/20 transition-all duration-300 gradient-card">
                    <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center overflow-hidden">
                        <img src="https://flagcdn.com/w80/<?= $achievement['flag'] ?>.png" alt="<?= $achievement['location'] ?>" class="w-8 h-6 object-cover rounded-sm" loading="lazy">
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-3 mb-2">
                            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border <?= $badge ?>">
                                <?= $achievement['rank'] ?>
                            </span>
                        </div>
                        <h3 class="text-white font-semibold leading-snug"><?= $achievement['title'] ?></h3>
                        <div class="mt-2 flex items-center gap-1.5 text-gray-500 text-sm">
                            <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                            <?= $achievement['location'] ?>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- CTA / Kontak -->
<section id="kontak" class="relative py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative rounded-3xl bg-gradient-to-br from-brand-600/20 via-brand-800/10 to-transparent border border-white/5 overflow-hidden">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(51,120,255,0.1),_transparent_70%)]"></div>
            <div class="relative px-8 py-16 sm:px-16 sm:py-24 text-center">
                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Siap Bertransformasi?</h2>
                <p class="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
                    Hubungi kami untuk berdiskusi tentang bagaimana Digipage International Lab dapat membantu mewujudkan visi digital bisnis Anda.
                </p>
                <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="mailto:digipage.id@gmail.com" class="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-brand-600/25">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                        digipage.id@gmail.com
                    </a>
                    <a href="https://wa.me/6281217393815" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/10 hover:border-white/25 text-white font-semibold rounded-xl transition-all hover:bg-white/5">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        WhatsApp
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Footer -->
<footer class="border-t border-white/5 bg-[#080c1a]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div class="grid md:grid-cols-3 gap-12">
            <div>
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold text-sm tracking-tight">iL</div>
                    <span class="text-lg font-bold text-white tracking-tight"><?= $companyName ?></span>
                </div>
                <p class="text-gray-500 text-sm leading-relaxed"><?= $legalName ?></p>
                <p class="mt-2 text-gray-500 text-sm leading-relaxed">Startup inovatif berfokus pada riset dan pengembangan bisnis mutakhir di bidang software, data, dan AI.</p>
                <div class="mt-5 flex items-center gap-3">
                    <a href="https://www.linkedin.com/company/digipage-pt-digital-landing-teknologi" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-lg bg-white/5 border border-white/5 hover:border-brand-500/30 hover:bg-brand-600/10 flex items-center justify-center text-gray-500 hover:text-brand-400 transition-all" aria-label="LinkedIn">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                    <a href="https://dealls.com/karir/pt-digital-landing-teknologi" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-lg bg-white/5 border border-white/5 hover:border-brand-500/30 hover:bg-brand-600/10 flex items-center justify-center text-gray-500 hover:text-brand-400 transition-all" aria-label="Dealls Job Portal">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    </a>
                </div>
            </div>
            <div>
                <h4 class="text-white font-semibold mb-4">Navigasi</h4>
                <ul class="space-y-3">
                    <li><a href="#tentang" class="text-gray-500 hover:text-gray-300 text-sm transition-colors">Tentang Kami</a></li>
                    <li><a href="#layanan" class="text-gray-500 hover:text-gray-300 text-sm transition-colors">Layanan</a></li>
                    <li><a href="#prestasi" class="text-gray-500 hover:text-gray-300 text-sm transition-colors">Prestasi Founder</a></li>
                    <li><a href="#investasi" class="text-gray-500 hover:text-gray-300 text-sm transition-colors">Investasi</a></li>
                    <li><a href="#kontak" class="text-gray-500 hover:text-gray-300 text-sm transition-colors">Kontak</a></li>
                    <li><a href="https://www.linkedin.com/company/digipage-pt-digital-landing-teknologi" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-gray-300 text-sm transition-colors">LinkedIn</a></li>
                    <li><a href="https://dealls.com/karir/pt-digital-landing-teknologi" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-gray-300 text-sm transition-colors">Karir (Dealls)</a></li>
                </ul>
            </div>
            <div>
                <h4 class="text-white font-semibold mb-4">Kontak</h4>
                <ul class="space-y-3">
                    <li class="flex items-center gap-3 text-gray-500 text-sm">
                        <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                        digipage.id@gmail.com
                    </li>
                    <li class="flex items-center gap-3 text-gray-500 text-sm">
                        <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        Jawa Timur, Indonesia
                    </li>
                </ul>
            </div>
        </div>
        <div class="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p class="text-gray-600 text-sm">&copy; <?= $year ?> <?= $companyName ?>. All rights reserved.</p>
            <div class="flex items-center gap-4">
                <a href="https://www.linkedin.com/company/digipage-pt-digital-landing-teknologi" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-400 transition-colors" aria-label="LinkedIn">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://dealls.com/karir/pt-digital-landing-teknologi" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-400 transition-colors" aria-label="Dealls">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </a>
            </div>
        </div>
    </div>
</footer>

<!-- Scripts -->
<script>
    document.getElementById('menuBtn').addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.toggle('hidden');
    });

    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('mobileMenu').classList.add('hidden');
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-8');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('transition-all', 'duration-700', 'ease-out');
    });
</script>

</body>
</html>
