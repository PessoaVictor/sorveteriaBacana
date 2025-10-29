const stores = [
    {
        id: 'olinda-bairro-novo',
        name: 'Bairro Novo, Olinda',
        address: 'Av. Pres. Getúlio Vargas, 166 - Bairro Novo, Olinda - PE, 53030-010',
        phone: '(81) 3429-2110',
        hours: 'Todos os dias: 12:00–22:00'
    },
    {
        id: 'recife-fundao',
        name: 'Fundão, Recife',
        address: 'Av. Beberibe, 2567 - Fundão, Recife - PE, 52130-135',
        phone: null,
        hours: 'Todos os dias: 10:00–23:00'
    },
    {
        id: 'recife-campo-grande',
        name: 'Campo Grande, Recife',
        location_note: 'Galeria Danielle Center',
        address: 'R. Osório de Almeida, 10 - Campo Grande, Recife - PE, 52040-170',
        phone: null,
        hours: 'Todos os dias: 13:00–22:00'
    },
    {
        id: 'recife-porto-madeira',
        name: 'Porto da Madeira, Recife',
        address: 'Av. Beberibe, 3724 - Porto da Madeira, Recife - PE, 52130-547',
        phone: '(81) 98471-7465',
        hours: 'Seg-Qui e Dom: 14:00–22:00 / Sex-Sáb: 14:00–23:00'
    },
    {
        id: 'recife-imbiribeira',
        name: 'Imbiribeira, Recife',
        address: 'Av. José Ferreira Lins, 182 - Loja F - Imbiribeira, Recife - PE, 51170-320',
        phone: '(81) 3126-1386',
        hours: 'Seg-Qui e Dom: 15:00–22:00 / Sex-Sáb: 15:00–23:00'
    },
    {
        id: 'recife-gracas',
        name: 'Graças, Recife',
        location_note: 'Galeria Jaqueira Park Center, quiosque 05',
        address: 'R. do Futuro, 913 - Graças, Recife - PE, 52050-005',
        phone: '(81) 98836-6777',
        hours: 'Seg-Sex: 11:00–20:00 / Sáb-Dom: 09:00–20:00'
    },
    {
        id: 'recife-barro',
        name: 'Barro, Recife',
        address: 'Av. Dr. José Rufino, 2181 - Barro, Recife - PE, 50780-300',
        phone: null,
        hours: 'Terça a Domingo: 14:00–22:00 (Segunda: Fechado)'
    },
    {
        id: 'recife-bomba-hemeterio',
        name: 'Bomba do Hemetério, Recife',
        address: 'R. Padre Oliveira, 693 - Bomba do Hemetério, Recife - PE, 52080-130',
        phone: '(81) 99957-1061',
        hours: 'Terça a Domingo: 14:00–22:00 (Segunda: Fechado)'
    },
    {
        id: 'jaboatao-candeias',
        name: 'Candeias, Jaboatão',
        address: 'R. Comendador Sá Barreto, 4500 - Candeias, Jaboatão dos Guararapes - PE, 54430-331',
        phone: '(81) 99238-7509',
        hours: 'Seg, Qua-Qui: 14:00–21:30 / Sex: 14:00–22:00 / Sáb-Dom: 13:30–22:00'
    },
    {
        id: 'abreu-e-lima-centro',
        name: 'Centro, Abreu e Lima',
        address: 'BR-101, 20 - Timbó - Centro, Abreu e Lima - PE, 53520-200',
        phone: '(81) 98750-1777',
        hours: 'De Terça a Domingo das 15:00 a 22:00'
    },
    {
        id: 'carpina-sao-sebastiao',
        name: 'São Sebastião, Carpina',
        address: 'R. João Batista de Carvalho, 290 - São Sebastiao, Carpina - PE, 55818-585',
        phone: '(81) 99496-9138',
        hours: 'Aberto até às 22:00'
    },
    {
        id: 'olinda-jardim-atlantico',
        name: 'Jardim Atlântico, Olinda',
        address: 'R. Rogaciano de Santana, 571 - Jardim Atlântico, Olinda - PE, 53050-270',
        phone: null,
        hours: 'Horário a confirmar'
    },
    {
        id: 'paulista-janga',
        name: 'Janga, Paulista',
        address: 'Av. Dr. Cláudio José Gueiros Leite, 1010 - Janga, Paulista - PE, 53439-000',
        phone: null,
        hours: 'Seg-Sex: 15:00–22:00 / Sáb: 15:00–22:00 / Dom: 13:00–21:00'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    let selectedStore = null;
    const storeSelector = document.createElement('div');
    storeSelector.className = 'store-selector';
    storeSelector.innerHTML = `
        <i class="fas fa-map-marker-alt"></i>
        <span>Escolha uma unidade</span>
    `;

    const headerRight = document.querySelector('.header-right');
    const nav = document.querySelector('.nav');

    function handleResize() {
        if (window.innerWidth <= 768) {
            if (!nav.contains(storeSelector)) {
                nav.appendChild(storeSelector);
            }
        } else if (!headerRight.contains(storeSelector)) {
            headerRight.insertBefore(storeSelector, headerRight.firstChild);
        }
    }

    function handleFlavorTabClick(event) {
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabPanels = document.querySelectorAll('.tab-panel');
        const button = event.currentTarget;

        for (const btn of tabButtons) {
            btn.classList.remove('active');
        }
        for (const panel of tabPanels) {
            panel.classList.remove('active');
        }

        button.classList.add('active');
        const targetPanelId = button.dataset.tab;
        const targetPanel = document.getElementById(targetPanelId);
        if (targetPanel) {
            targetPanel.classList.add('active');
        }
    }

    function setupFlavorTabs() {
        const tabButtons = document.querySelectorAll('.tab-button');
        for (const button of tabButtons) {
            button.addEventListener('click', handleFlavorTabClick);
        }
    }

    function setupMobileMenu() {
        const menuButton = document.querySelector('.menu-mobile');
        menuButton.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    function createStoreModal() {
        const modal = document.createElement('div');
        modal.className = 'store-modal-overlay';
        modal.innerHTML = `
            <div class="store-modal-content">
                <h2>Escolha sua unidade preferida</h2>
                <div class="store-list">
                    ${stores.map(store => `
                        <div class="store-option" data-store-id="${store.id}">
                            <h3>${store.name}</h3>
                            <p>${store.address}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        body.appendChild(modal);
        body.classList.add('modal-open');

        const storeOptions = document.querySelectorAll('.store-option');
        for (const option of storeOptions) {
            option.addEventListener('click', () => {
                selectStore(option.dataset.storeId);
                modal.remove();
                body.classList.remove('modal-open');
            });
        }
    }

    function selectStore(storeId) {
        selectedStore = stores.find(s => s.id === storeId);
        if (!selectedStore) return;

        renderPageForStore();
    }

    function setupHeader() {
        storeSelector.addEventListener('click', () => {
            if (document.querySelector('.store-modal-overlay')) return;
            createStoreModal();
        });
    }

    function renderPageForStore() {
        if (!selectedStore) return;

        const storeSelectorSpan = document.querySelector('.store-selector span');
        if (storeSelectorSpan) {
            storeSelectorSpan.textContent = `Unidade: ${selectedStore.name}`;
        }

        const contatoInfo = document.querySelector('#contato .contato-info');
        if (contatoInfo) {
            const phoneHtml = selectedStore.phone 
                ? `
                <div class="info-item">
                    <i class="fas fa-phone-alt"></i>
                    <div>
                        <h3>Telefone</h3>
                        <p><a href="https://wa.me/55${selectedStore.phone.replaceAll(/\D/g, '')}" target="_blank">${selectedStore.phone}</a></p>
                    </div>
                </div>` 
                : '';

            contatoInfo.innerHTML = `
                <div class="info-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <div>
                        <h3>Endereço</h3>
                        ${selectedStore.location_note ? `<p><em>${selectedStore.location_note}</em></p>` : ''}
                        <p>${selectedStore.address}</p>
                    </div>
                </div>
                <div class="info-item">
                    <i class="fas fa-clock"></i>
                    <div>
                        <h3>Horário de Funcionamento</h3>
                        <p>${selectedStore.hours}</p>
                    </div>
                </div>
                ${phoneHtml}
            `;
        }

        initAnimations(); 
    }

    function parallaxHero() {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        const parallax = () => {
            const scrollY = window.scrollY;
            hero.style.setProperty('--parallax', scrollY * 0.3 + 'px');
            hero.style.setProperty('--parallax-bg', `${scrollY * 0.3}px`);
        };
        window.addEventListener('scroll', parallax);
    }

    function initAnimations() {
        const elementsToAnimate = document.querySelectorAll('.animate');
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            }
        }, { threshold: 0.1 });
        for (const el of elementsToAnimate) {
            observer.observe(el);
        }
        parallaxHero();
    }

    function initApp() {
        createStoreModal();
        setupHeader();
        setupMobileMenu();
        setupFlavorTabs();
        handleResize();
        window.addEventListener('resize', handleResize);
    }

    initApp();
});