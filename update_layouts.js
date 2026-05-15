const fs = require('fs');
const path = require('path');

const dir = 'c:\\class\\.vscode\\axe_throughing';

const statsSectionHTML = `
    <!-- Statistics/Charts -->
    <section class="section-padding bg-dark text-white wood-grain position-relative">
        <div class="hero-overlay opacity-90"></div>
        <div class="container position-relative z-3">
            <div class="row mb-5 text-center" data-aos="fade-up">
                <div class="col-lg-8 mx-auto">
                    <h2 class="display-4">Our <span class="text-highlight">Impact</span></h2>
                    <p class="text-light opacity-75">By the numbers.</p>
                </div>
            </div>
            <div class="row g-4 text-center">
                <div class="col-md-3" data-aos="fade-up" data-aos-delay="100">
                    <i data-lucide="target" class="text-highlight mb-3" style="width: 48px; height: 48px;"></i>
                    <h3 class="display-4 text-white counter" data-target="50000">0</h3>
                    <p class="text-uppercase small letter-spacing-1 text-light opacity-75">Bullseyes Hit</p>
                </div>
                <div class="col-md-3" data-aos="fade-up" data-aos-delay="200">
                    <i data-lucide="users" class="text-highlight mb-3" style="width: 48px; height: 48px;"></i>
                    <h3 class="display-4 text-white counter" data-target="25000">0</h3>
                    <p class="text-uppercase small letter-spacing-1 text-light opacity-75">Happy Throwers</p>
                </div>
                <div class="col-md-3" data-aos="fade-up" data-aos-delay="300">
                    <i data-lucide="award" class="text-highlight mb-3" style="width: 48px; height: 48px;"></i>
                    <h3 class="display-4 text-white counter" data-target="150">0</h3>
                    <p class="text-uppercase small letter-spacing-1 text-light opacity-75">Tournaments Hosted</p>
                </div>
                <div class="col-md-3" data-aos="fade-up" data-aos-delay="400">
                    <i data-lucide="calendar" class="text-highlight mb-3" style="width: 48px; height: 48px;"></i>
                    <h3 class="display-4 text-white counter" data-target="5">0</h3>
                    <p class="text-uppercase small letter-spacing-1 text-light opacity-75">Years in Austin</p>
                </div>
            </div>
        </div>
    </section>
`;

const testimonialsSectionHTML = `
    <!-- Testimonials -->
    <section class="section-padding bg-body">
        <div class="container">
            <div class="row mb-5 text-center" data-aos="fade-up">
                <div class="col-lg-8 mx-auto">
                    <h2 class="display-4">What They <span class="text-highlight">Say</span></h2>
                    <p class="text-muted">Real reviews from our throwers.</p>
                </div>
            </div>
            <div class="row g-4 d-flex">
                <div class="col-md-4 d-flex" data-aos="fade-up" data-aos-delay="100">
                    <div class="service-card p-4 text-center w-100 h-100 flex-column justify-content-between">
                        <div>
                            <div class="mb-3">
                                <i data-lucide="star" class="text-highlight" fill="currentColor"></i>
                                <i data-lucide="star" class="text-highlight" fill="currentColor"></i>
                                <i data-lucide="star" class="text-highlight" fill="currentColor"></i>
                                <i data-lucide="star" class="text-highlight" fill="currentColor"></i>
                                <i data-lucide="star" class="text-highlight" fill="currentColor"></i>
                            </div>
                            <p class="fst-italic">"Best birthday party ever! The coaches were super helpful and we all nailed the bullseye by the end of the night."</p>
                        </div>
                        <div class="mt-4">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100" class="rounded-circle mb-2" width="60" height="60" style="object-fit:cover;" alt="User">
                            <h6 class="mb-0">Sarah Jenkins</h6>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 d-flex" data-aos="fade-up" data-aos-delay="200">
                    <div class="service-card p-4 text-center w-100 h-100 flex-column justify-content-between">
                        <div>
                            <div class="mb-3">
                                <i data-lucide="star" class="text-highlight" fill="currentColor"></i>
                                <i data-lucide="star" class="text-highlight" fill="currentColor"></i>
                                <i data-lucide="star" class="text-highlight" fill="currentColor"></i>
                                <i data-lucide="star" class="text-highlight" fill="currentColor"></i>
                                <i data-lucide="star" class="text-highlight" fill="currentColor"></i>
                            </div>
                            <p class="fst-italic">"Our corporate team building event was a massive success. Highly recommend for any group looking for something different."</p>
                        </div>
                        <div class="mt-4">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" class="rounded-circle mb-2" width="60" height="60" style="object-fit:cover;" alt="User">
                            <h6 class="mb-0">Michael Rodriguez</h6>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 d-flex" data-aos="fade-up" data-aos-delay="300">
                    <div class="service-card p-4 text-center w-100 h-100 flex-column justify-content-between">
                        <div>
                            <div class="mb-3">
                                <i data-lucide="star" class="text-highlight" fill="currentColor"></i>
                                <i data-lucide="star" class="text-highlight" fill="currentColor"></i>
                                <i data-lucide="star" class="text-highlight" fill="currentColor"></i>
                                <i data-lucide="star" class="text-highlight" fill="currentColor"></i>
                                <i data-lucide="star" class="text-highlight" fill="currentColor"></i>
                            </div>
                            <p class="fst-italic">"Joined the league and I'm addicted. The community here is fantastic and the facilities are top-notch."</p>
                        </div>
                        <div class="mt-4">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" class="rounded-circle mb-2" width="60" height="60" style="object-fit:cover;" alt="User">
                            <h6 class="mb-0">David Chen</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

function processIndexFile() {
    const indexPath = path.join(dir, 'index.html');
    let content = fs.readFileSync(indexPath, 'utf8');

    // Keep:
    // 1. Hero
    // 2. Experience Highlights (Features/Services Cards)
    // Add:
    // 3. Statistics
    // 4. Testimonials
    // Keep:
    // 5. Final CTA Banner
    // 6. Footer

    const heroRegex = /<!-- Hero Section -->[\s\S]*?(?=<!-- Trust Bar -->)/;
    const cardsRegex = /<!-- Experience Highlights -->[\s\S]*?(?=<!-- How It Works -->)/;
    const ctaRegex = /<!-- Final CTA Banner -->[\s\S]*?(?=<!-- Footer -->)/;
    const footerRegex = /<!-- Footer -->[\s\S]*?<\/footer>/;
    const scriptsRegex = /<!-- Scripts -->[\s\S]*?<\/html>/;
    
    // Extract head and nav
    const topMatch = content.match(/[\s\S]*?(?=<!-- Hero Section -->)/);
    const heroMatch = content.match(heroRegex);
    const cardsMatch = content.match(cardsRegex);
    const ctaMatch = content.match(ctaRegex);
    const footerMatch = content.match(footerRegex);
    const scriptsMatch = content.match(scriptsRegex);

    if (topMatch && heroMatch && cardsMatch && ctaMatch && footerMatch && scriptsMatch) {
        const newContent = topMatch[0] + 
            heroMatch[0] + 
            cardsMatch[0] + 
            statsSectionHTML + 
            testimonialsSectionHTML + 
            ctaMatch[0] + 
            footerMatch[0] + "\n" +
            scriptsMatch[0];
        fs.writeFileSync(indexPath, newContent);
        console.log('Updated index.html layout.');
    } else {
        console.log('Failed to parse index.html sections.');
    }
}

function processHome2File() {
    const home2Path = path.join(dir, 'home2.html');
    let content = fs.readFileSync(home2Path, 'utf8');

    // Home 2 Sections:
    // 1. Hero
    // 2. Occasion Selector
    // 3. Charts (Statistics)
    // 4. Testimonials
    // 5. Inquiry Form (CTA)
    // 6. Footer

    const heroRegex = /<!-- Hero Section.*?-->[\s\S]*?(?=<!-- Occasion Selector -->)/;
    const cardsRegex = /<!-- Occasion Selector -->[\s\S]*?(?=<!-- Why Groups Love Us -->)/;
    const formRegex = /<!-- Inquiry Form -->[\s\S]*?(?=<!-- Footer)/;
    const footerRegex = /<!-- Footer.*?-->[\s\S]*?<\/footer>/;
    const scriptsRegex = /<!-- Scripts -->[\s\S]*?<\/html>/;

    const topMatch = content.match(/[\s\S]*?(?=<!-- Hero Section)/);
    const heroMatch = content.match(heroRegex);
    const cardsMatch = content.match(cardsRegex);
    const formMatch = content.match(formRegex);
    const footerMatch = content.match(footerRegex);
    const scriptsMatch = content.match(scriptsRegex);

    if (topMatch && heroMatch && cardsMatch && formMatch && footerMatch && scriptsMatch) {
        const newContent = topMatch[0] + 
            heroMatch[0] + 
            cardsMatch[0] + 
            statsSectionHTML + 
            testimonialsSectionHTML + 
            formMatch[0] + 
            footerMatch[0] + "\n" +
            scriptsMatch[0];
        fs.writeFileSync(home2Path, newContent);
        console.log('Updated home2.html layout.');
    } else {
        console.log('Failed to parse home2.html sections.');
    }
}

processIndexFile();
processHome2File();
