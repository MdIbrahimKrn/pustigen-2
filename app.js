// ====================================================================
        // আপনার নতুন গুগল অ্যাপস স্ক্রিপ্ট (Web App URL) আপডেট করা হয়েছে
        // ====================================================================
        const META_PIXEL_ID = window.PUSTIGEN_META_PIXEL_ID || '';
        const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzXx8BUPgH4rPGqOL7M725HfB5vw2iwF9PRlfqwkg4K3q3F0mmw4nGqJZXhcrLievFh1A/exec"; 

        // Local Storage Sample Dataset (কাস্টমার ভিজিট করলে প্রথমে ইনস্ট্যান্ট এই প্রোডাক্টগুলো দেখাবে)
        const fallbackProductsList = [
        ];
        const defaultCategoryOrder = [];

        // Core Frontend Application State (ডিফল্ট প্রোডাক্ট দিয়ে ইনস্ট্যান্ট লোড হবে)
        let state = {
            products: fallbackProductsList, 
            cart: [],
            orders: [],
            currentPage: document.body.dataset.page || 'home',
            selectedProduct: null,
            searchFilter: '',
            expandedCategories: {}, 
            locations: {
  "Bagerhat": ["Bagerhat Sadar", "Chitalmari", "Fakirhat", "Kachua", "Mollahat", "Mongla", "Morrelganj", "Rampal", "Sarankhola"],
  "Bandarban": ["Alikadam", "Bandarban Sadar", "Thanchi", "Lama", "Naikhongchhari", "Rowangchhari", "Ruma"],
  "Barguna": ["Amtali", "Bamna", "Barguna Sadar", "Betagi", "Patharghata", "Taltali"],
  "Barisal": ["Agailjhara", "Babuganj", "Bakerganj", "Banaripara", "Gaurnadi", "Hizla", "Barisal Sadar", "Mehendiganj", "Muladi", "Wazirpur"],
  "Bhola": ["Bhola Sadar", "Burhanuddin", "Char Fasson", "Daulatkhan", "Lalmohan", "Manpura", "Tazumuddin"],
  "Bogura": ["Adamdighi", "Bogura Sadar", "Dhunat", "Dhupchanchia", "Gabtali", "Kahaloo", "Nandigram", "Sahjahanpur", "Shariakandi", "Sherpur", "Shibganj", "Sonatala"],
  "Brahmanbaria": ["Akhaura", "Ashuganj", "Brahmanbaria Sadar", "Kasba", "Nabinagar", "Nasirnagar", "Sarail", "Bijoynagar"],
  "Chandpur": ["Chandpur Sadar", "Faridganj", "Haimchar", "Haziganj", "Kachua", "Matlab Dakshin", "Matlab Uttar", "Shahrasti"],
  "Chattogram": ["Boalkhali", "Chandanaish", "Chattogram Sadar", "Fatikchhari", "Hathazari", "Lohagara", "Mirsharai", "Patiya", "Rangunia", "Raozan", "Sandwip", "Satkania", "Sitakunda"],
  "Chuadanga": ["Alamdanga", "Chuadanga Sadar", "Damurhuda", "Jibannagar"],
  "Cox's Bazar": ["Chakaria", "Cox's Bazar Sadar", "Kutubdia", "Maheshkhali", "Pekua", "Ramu", "Teknaf", "Ukhia"],
  "Cumilla": ["Barura", "Brahmanpara", "Burichang", "Chandina", "Chauddagram", "Cumilla Adarsha Sadar", "Cumilla Sadar Dakshin", "Daudkandi", "Debidwar", "Homna", "Laksam", "Lalmai", "Meghna", "Monohargonj", "Muradnagar", "Nagalkot", "Titas"],
  "Dhaka": ["Dhaka Sadar (Sadarghat/Kotwali)", "Keraniganj", "Dhamrai", "Dohar", "Nawabganj", "Savar"],
  "Dinajpur": ["Birampur", "Birganj", "Biral", "Bochaganj", "Chirirbandar", "Phulbari", "Ghoraghat", "Hakimpur", "Kaharole", "Khansama", "Dinajpur Sadar", "Nawabganj", "Parbatipur"],
  "Faridpur": ["Alfadanga", "Bhanga", "Boalmari", "Charbhadrasan", "Faridpur Sadar", "Madhukhali", "Nagarkanda", "Sadarpur", "Saltha"],
  "Feni": ["Chhagalnaiya", "Daganbhuiyan", "Feni Sadar", " ফুলগাজী (Fulgazi)", "Parshuram", "Sonagazi"],
  "Gaibandha": ["Fulchhari", "Gaibandha Sadar", "Gobindaganj", "Palashbari", "Sadullapur", "Saghata", "Sundarganj"],
  "Gazipur": ["Gazipur Sadar", "Kaliakair", "Kaliganj", "Kapasia", "Sreepur"],
  "Gopalganj": ["Gopalganj Sadar", "Kashiani", "Kotlipara", "Muksudpur", "Tungipara"],
  "Habiganj": ["Ajmiriganj", "Bahubal", "Baniyachong", "Chunarughat", "Habiganj Sadar", " লাখাই (Lakhai)", "Madhabpur", "Nabiganj"],
  "Jamalpur": ["Bakshiganj", "Dewanganj", "Islampur", "Jamalpur Sadar", "Madarganj", "Melandah", "Sarishabari"],
  "Jashore": ["Abhaynagar", "Bagherpara", "Chaugachha", "Jhikargachha", "Keshabpur", "Jashore Sadar", "Monirampur", "Sharsha"],
  "Jhalokathi": ["Jhalokathi Sadar", "Kathalia", "Nalchity", "Rajapur"],
  "Jhenaidah": ["Harinakunda", "Jhenaidah Sadar", "Kaliganj", "Kotchandpur", "Maheshpur", "Shailkupa"],
  "Joypurhat": ["Akkelpur", "Joypurhat Sadar", "Kalai", "Khetlal", "Panchbibi"],
  "Khagrachhari": ["Dighinala", "Guimara", "Khagrachhari Sadar", "Lakshmichhari", "Mahalchhari", "Manikchhari", "Matiranga", "Panchhari"],
  "Khulna": ["Batiaghata", "Dacope", "Dumuria", "Dighalia", "Phultala", "Koyra", "Paikgachha", "Rupsha", "Terokhada"],
  "Kishoreganj": ["Austagram", "Bajitpur", "Bhairab", "Hossainpur", "Itna", "Karimganj", "Katiadi", "Kishoreganj Sadar", "Kuliarchar", "Mithamain", "Nikli", "Pakundia", "Tarail"],
  "Kurigram": ["Bhurungamari", "Char Rajibpur", "Chilmari", "Ulipur", "Kurigram Sadar", "Nageshwari", "Phulbari", "Rowmari"],
  "Kushtia": ["Bheramara", "Daulatpur", "Khoksa", "Kumarkhali", "Kushtia Sadar", "Mirpur"],
  "Lakshmipur": ["Kamalnagar", "Lakshmipur Sadar", "Raipur", "Ramganj", "Ramgati"],
  "Lalmonirhat": ["Aditmari", "Hatibandha", "Kaliganj", "Lalmonirhat Sadar", "Patgram"],
  "Madaripur": ["Kalkini", "Madaripur Sadar", "Rajoir", "Shibchar"],
  "Magura": ["Magura Sadar", "Mohammadpur", "Salikha", "Sreepur"],
  "Manikganj": ["Daulatpur", "Ghior", "Harirampur", "Manikganj Sadar", "Saturia", "Shivalaya", "Singair"],
  "Meherpur": ["Gangni", "Meherpur Sadar", "Mujibnagar"],
  "Moulvibazar": ["Barlekha", "Kamalganj", "Kulaura", "Moulvibazar Sadar", "Rajnagar", "Sreemangal"],
  "Munshiganj": ["Gazaria", "Lohajang", "Munshiganj Sadar", "Sirajdikhan", "Sreenagar", "Tongibari"],
  "Mymensingh": ["Bhaluka", "Dhobaura", " ফুলপুর (Phulpur)", "Gafargaon", "Gauripur", "Haluaghat", "Ishwarganj", "Mymensingh Sadar", "Muktagachha", "Nandail", "Trishal"],
  "Naogaon": ["Atrai", "Badalgachhi", "Dhamoirhat", "Manda", "Mahadebpur", "Naogaon Sadar", "Niamatpur", "Patnitala", "Porsha", "Raninagar", "Sapahar"],
  "Narail": ["Kalia", "Lohagara", "Narail Sadar"],
  "Narayanganj": ["Araihazar", "Bandar", "Narayanganj Sadar", "Rupganj", "Sonargaon"],
  "Narsingdi": ["Belabo", "Monohardi", "Narsingdi Sadar", "Palash", "Raipura", "Shibpur"],
  "Natore": ["Bagatipara", "Baraigram", "Gurudaspur", "Lalpur", "Natore Sadar", "Singra"],
  "Netrokona": ["Atpara", "Barhatta", "Durgapur", "Khaliajuri", "Kalmakanda", "Kendua", "Madan", "Mohanganj", "Netrokona Sadar", "Purbadhala"],
  "Nilphamari": ["Dimla", "Domar", "Jaldhaka", "Kishoreganj", "Nilphamari Sadar", "Saidpur"],
  "Noakhali": ["Begumganj", "Noakhali Sadar", "Chatkhil", "Companyganj", "Hatiya", "Kabirhat", "Senbagh", "Subarnachar"],
  "Pabna": ["Atgharia", "Bera", "Bhangura", "Chatmohar", "Faridpur", "Ishwardi", "Pabna Sadar", "Santhia", "Sujanagar"],
  "Panchagarh": ["Atwari", "Boda", "Debiganj", "Panchagarh Sadar", "Tetulia"],
  "Patuakhali": ["Bauphal", "Dashmina", "Galachipa", "Kalapara", "Mirzaganj", "Patuakhali Sadar", "Rangabali"],
  "Pirojpur": ["Bhandaria", "Kawkhali", "Mathbaria", "Nazirpur", "Nesarabad (Swarupkati)", "Pirojpur Sadar", "Zianagar"],
  "Rajshahi": ["Bagha", "Bagmara", "Boalia", "Charghat", "Durgapur", "Godagari", "Mohanpur", "Paba", "Puthia", "Tanore"],
  "Rajbari": ["Baliakandi", "Goalanda", "Kalukhali", "Pangsha", "Rajbari Sadar"],
  "Rangamati": ["Bagaichhari", "Barkal", "Belaichhari", "Juraichhari", "Kaptai", "Kawkhali", "Langadu", "Naniarchar", "Rajasthali", "Rangamati Sadar"],
  "Rangpur": ["Badarganj", "Gangachhara", "Kaunia", "Mithapukur", "Pirgachha", "Pirganj", "Rangpur Sadar", "Taraganj"],
  "Satkhira": ["Assasuni", "Debhata", "Kalaroa", "Kaliganj", "Satkhira Sadar", "Shyamnagar", "Tala"],
  "Shariatpur": ["Bhedarganj", "Damudya", "Gosairhat", "Janjira", "Naria", "Shariatpur Sadar"],
  "Sherpur": ["Jhenaigati", "Nakla", "Nalitabari", "Sherpur Sadar", "Sreebardi"],
  "Sirajganj": ["Belkuchi", "Chauhali", "Kamarkhanda", "Kazipur", "Raiganj", "Shahjadpur", "Sirajganj Sadar", "Tarash", "Ullahpara"],
  "Sunamganj": ["Bishwamvarpur", "Chhatak", "Derai", "Dharamapasha", "Dowarabazar", "Jagannathpur", "Jamalganj", "Sullah", "Sunamganj Sadar", "Tahirpur"],
  "Sylhet": ["Balaganj", "Beani Bazar", "Bishwanath", "Companiganj", "Dakshin Surma", "Fenchuganj", "Golapganj", "Gowainghat", "Jaintiapur", "Kanaihat", "Sylhet Sadar", "Zakiganj"],
  "Tangail": ["Basail", "Bhuapur", "Delduar", "Dhanbari", "Ghatail", "Gopalpur", "Kalihati", "Madhupur", "Mirzapur", "Nagarpur", "Sakhipur", "Tangail Sadar"],
  "Thakurgaon": ["Baliadangi", "Haripur", "Pirganj", "Ranisankail", "Thakurgaon Sadar"],
  "Noakhali": ["Begumganj", "Noakhali Sadar", "Chatkhil", "Companyganj", "Hatiya", "Kabirhat", "Senbagh", "Subarnachar"]
            }
        };

        // Boot and load data
        window.addEventListener('DOMContentLoaded', async () => {
            // ১. কাস্টমার যাতে সাথে সাথে প্রোডাক্ট দেখে তার জন্য লোকাল রেন্ডার
            setupHistoryTracking();
            initializeMetaPixel();
            loadOrdersCache();
            loadCartCache();
            syncCartCounters();
            renderApplicationCanvas();

            // ২. ব্যাকগ্রাউন্ডে গুগল শিট থেকে ডাটা কল হবে এবং প্রোডাক্ট লিস্ট আপডেট করবে
            await fetchProductsFromSheet();
        });

        // ----------------- MOBILE BACK BUTTON NAVIGATION CONTROLLER -----------------
        function setupHistoryTracking() {
            history.replaceState({ page: state.currentPage }, '');
            
            window.addEventListener('popstate', (event) => {
                if (event.state && event.state.page) {
                    state.currentPage = event.state.page;
                    if (event.state.page === 'details') {
                        state.selectedProduct = event.state.product;
                    }
                    renderApplicationCanvas();
                } else {
                    state.currentPage = 'home';
                    renderApplicationCanvas();
                }
            });
        }

        function navigateTo(targetPage, paramData = null) {
            const pageUrls = { home: 'index.html', details: 'product.html', checkout: 'checkout.html', about: 'about.html' };
            if (targetPage === 'details' && paramData) {
                sessionStorage.setItem('pustigen_selected_product', JSON.stringify(paramData));
                window.location.href = `${pageUrls.details}?id=${encodeURIComponent(paramData.id)}`;
                return;
            }
            window.location.href = pageUrls[targetPage] || pageUrls.home;
        }

        function handleHomeNav() {
            navigateTo('home');
        }



        function initializeMetaPixel() {
            if (!META_PIXEL_ID || window.fbq) return;
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', META_PIXEL_ID);
            trackMetaEvent('PageView');
        }

        function trackMetaEvent(eventName, payload = {}) {
            if (typeof fbq === 'function') fbq('track', eventName, payload);
        }

        function resolveSelectedProduct() {
            const productId = new URLSearchParams(window.location.search).get('id');
            if (productId) {
                const product = state.products.find(item => String(item.id) === productId);
                if (product) { state.selectedProduct = product; return product; }
            }
            if (state.selectedProduct) return state.selectedProduct;
            try {
                const cached = JSON.parse(sessionStorage.getItem('pustigen_selected_product') || 'null');
                if (cached) state.selectedProduct = cached;
                return cached;
            } catch (e) { return null; }
        }

        // ----------------- GOOGLE SHEETS DATA STREAM EXTRACTION -----------------
        async function fetchProductsFromSheet() {
            try {
                if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes("AKfycbygGqfF_Kveq9Qe2p8t7G-U_fU6D6v9Q4N5B6X7Y8Z9")) {
                    console.warn("Using Fallback Local Storage Products.");
                    return;
                }

                const response = await fetch(GOOGLE_SCRIPT_URL);
                if (!response.ok) throw new Error("Network Response Error");
                const data = await response.json();
                
                if (data && data.length > 0) {
                    state.products = data;
                    document.getElementById('syncIndicatorDot').className = "w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse";
                    document.getElementById('syncIndicatorText').innerText = "Live Sheet Sync Active";
                    // শিটের ডাটা লোড হওয়ার সাথে সাথে হোমপেজ রেন্ডার হবে
                    if (state.currentPage === 'home') {
                        renderHomePageView();
                    } else if (state.currentPage === 'details') {
                        renderDetailsPageView();
                    }
                }
            } catch (err) {
                console.error("Failed to load spreadsheet products. Keeping cache active.", err);
                document.getElementById('syncIndicatorDot').className = "w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse";
                document.getElementById('syncIndicatorText').innerText = "Offline Cache Active";
            }
        }

        function loadOrdersCache() {
            const cache = localStorage.getItem('pustigen_orders_history');
            state.orders = cache ? JSON.parse(cache) : [];
        }

        function saveOrderToCache(order) {
            state.orders.unshift(order);
            localStorage.setItem('pustigen_orders_history', JSON.stringify(state.orders));
        }

        function loadCartCache() {
            try {
                state.cart = JSON.parse(localStorage.getItem('pustigen_cart') || '[]');
            } catch (e) {
                state.cart = [];
            }
        }

        function saveCartCache() {
            localStorage.setItem('pustigen_cart', JSON.stringify(state.cart));
        }

        function normalizeBangladeshPhone(input) {
            if (!input) return '';
            let digits = String(input).replace(/\D/g, '');
            if (digits.startsWith('880')) digits = digits.slice(3);
            if (digits.startsWith('0') && digits.length === 11) return digits;
            if (!digits.startsWith('0') && digits.length === 10) return `0${digits}`;
            return digits;
        }

        function handleGlobalSearch(val) {
            state.searchFilter = val.toLowerCase();
            if (state.currentPage === 'home') {
                renderHomePageView();
            }
        }

        function calculateDiscountPercent(product) {
            const price = Number(product.price || 0);
            const originalPrice = Number(product.originalPrice || 0);
            if (!originalPrice || originalPrice <= price) return null;
            return Math.round(((originalPrice - price) / originalPrice) * 100);
        }

        function getProductCategories(product) {
            const raw = product.category || '';
            if (Array.isArray(raw)) return raw.map(c => String(c).trim()).filter(Boolean);
            return String(raw)
                .split(',')
                .map(c => c.trim())
                .filter(Boolean);
        }

        function formatOrderDateTime(dateInput = new Date()) {
            const d = new Date(dateInput);
            const pad = (n) => String(n).padStart(2, '0');
            return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
        }
        function escapeHtml(value = '') {
            return String(value)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        }

        function formatProductDetails(detailsText) {
            const details = (detailsText || 'Premium healthy choice collected organic selection item.').trim();
            return escapeHtml(details);
        }


        function deployToastAlert(text, mode = 'success') {
            const toast = document.getElementById('toastSystem');
            const msgSlot = document.getElementById('toastMessageSlot');
            const iconSlot = document.getElementById('toastIconSlot');
            
            msgSlot.innerText = text;
            iconSlot.innerHTML = mode === 'success' 
                ? `<i data-lucide="check-circle" class="w-5 h-5 text-emerald-400"></i>` 
                : `<i data-lucide="alert-circle" class="w-5 h-5 text-red-400"></i>`;
            
            lucide.createIcons();
            toast.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
            toast.classList.add('opacity-100', 'translate-y-0');
            
            setTimeout(() => {
                toast.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
                toast.classList.remove('opacity-100', 'translate-y-0');
            }, 3000);
        }

        // Fixed Toggle for Shopping Cart Drawer (Corrected Scoping)
        function toggleCartDrawer() {
            const el = document.getElementById('cartDrawerWrapper');
            if (el.classList.contains('hidden')) {
                el.classList.remove('hidden');
                renderCartDrawerList();
            } else {
                el.classList.add('hidden');
            }
        }

        function renderApplicationCanvas() {
            const canvas = document.getElementById('mainCanvas');
            
            const splash = document.getElementById('initialSplashLoader');
            if (splash) splash.remove();

            if (state.currentPage === 'home') {
                renderHomePageView();
            } else if (state.currentPage === 'details') {
                renderDetailsPageView();
            } else if (state.currentPage === 'checkout') {
                renderCheckoutPageView();
            } else if (state.currentPage === 'about') {
                renderAboutPageView();
            }
            lucide.createIcons();
        }

        // HOME PAGE VIEW MODULE
        function renderHomePageView() {
            const canvas = document.getElementById('mainCanvas');
            
            const filtered = state.products.filter(p => 
                p.title.toLowerCase().includes(state.searchFilter) || 
                (p.sku && p.sku.toLowerCase().includes(state.searchFilter))
            );

            const discoveredCategories = [...new Set(filtered.flatMap(getProductCategories))];
            const orderedCategories = [...defaultCategoryOrder, ...discoveredCategories.filter(c => !defaultCategoryOrder.includes(c))];
            const categorySections = orderedCategories.map(categoryName => {
                const productsInCategory = filtered.filter(p => getProductCategories(p).includes(categoryName));
                return generateSliderRowMarkup(categoryName, productsInCategory);
            }).join('');

            canvas.innerHTML = `
                <!-- Promotion Banner -->
                <div class="relative w-full bg-gradient-to-r from-amber-50 to-orange-50 py-10 px-4 border-b border-orange-100 mb-8">
                    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                        <div class="flex-1 space-y-4 text-center md:text-left">
                            <span class="inline-block bg-orange-600 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">Premium Selection</span>
                            <h1 class="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
                                Direct From Nature <br>
                                <span class="text-orange-600">To Your Happy Home</span>
                            </h1>
                            <p class="text-gray-600 text-xs md:text-sm max-w-md">No harmful chemicals, heavy synthetic metals, or processed additives. Absolute nourishment certified via rigid local sourcing nets.</p>
                        </div>
                        <div class="flex-1 flex justify-center">
                            <div class="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-amber-100 flex items-center justify-center shadow-inner">
                                <img src="https://drive.google.com/thumbnail?id=1Yytx-yQPMOh7cPxFG6Ju6JqzFpSH5F9U&sz=w2000" class="w-48 h-48 md:w-64 md:h-64 object-contain rounded-xl">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="max-w-7xl mx-auto px-4 space-y-12 pb-12">
                    ${categorySections}
                </div>
            `;
            lucide.createIcons();
        }

        // Horizontal slider containing "See All" inline expand option (No Popups!)
        function generateSliderRowMarkup(categoryName, productSubarray) {
            const isExpanded = state.expandedCategories[categoryName] || false;
            
            if (isExpanded) {
                return `
                    <section class="space-y-4 border-b pb-8">
                        <div class="flex justify-between items-end border-b border-gray-100 pb-2">
                            <div>
                                <h2 class="text-lg font-extrabold text-gray-900 tracking-tight">${categoryName}</h2>
                                <p class="text-[11px] text-emerald-600 font-bold">Showing all active products in grid view</p>
                            </div>
                            <button onclick="toggleCategoryExpand('${categoryName}', false)" class="text-xs font-bold text-gray-500 hover:text-orange-600 transition flex items-center gap-1">
                                <span>Collapse</span>
                                <i data-lucide="chevron-up" class="w-3.5 h-3.5"></i>
                            </button>
                        </div>
                        
                        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            ${productSubarray.map(p => getProductCardMarkup(p)).join('')}
                        </div>
                    </section>
                `;
            }

            return `
                <section class="space-y-4">
                    <div class="flex justify-between items-end border-b border-gray-100 pb-2">
                        <div>
                            <h2 class="text-lg font-extrabold text-gray-900 tracking-tight">${categoryName}</h2>
                            <p class="text-[11px] text-gray-400 font-medium">Swipe or shift horizontally to explore more items</p>
                        </div>
                        <button onclick="toggleCategoryExpand('${categoryName}', true)" class="text-xs font-bold text-orange-600 hover:text-orange-700 transition flex items-center gap-1">
                            <span>See All</span>
                            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                        </button>
                    </div>
                    
                    <div class="flex gap-4 overflow-x-auto pb-4 no-scrollbar scroll-smooth snap-x">
                        ${productSubarray.length > 0 ? productSubarray.map(p => `
                            <div class="min-w-[240px] sm:min-w-[260px] max-w-[260px] snap-start bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between relative">
                                <div class="relative cursor-pointer bg-gray-50 aspect-square p-2 flex items-center justify-center" onclick="navigateTo('details', ${JSON.stringify(p).replace(/"/g, '&quot;')})">
                                    <img src="${p.image}" alt="${p.title}" class="object-cover max-h-full max-w-full rounded-lg ${!p.available ? '' : ''}">
                                    ${calculateDiscountPercent(p) && p.available ? `<span class="absolute top-2 left-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">${calculateDiscountPercent(p)}% OFF</span>` : ''}
                                    ${p.sku ? `<span class="absolute bottom-2 right-2 bg-gray-900/60 text-white text-[9px] font-mono px-1.5 py-0.5 rounded">${p.sku}</span>` : ''}
                                    
                                    <!-- Not Available Overlays -->
                                    ${!p.available ? `<span class="absolute bottom-2 left-2 bg-red-600 text-white text-[10px] font-bold rounded px-2 py-0.5 shadow-lg border border-red-500 opacity-80">Not Available</span>` : ''}
                                </div>
                                <div class="p-4 space-y-2 flex-grow flex flex-col justify-between">
                                    <div class="cursor-pointer" onclick="navigateTo('details', ${JSON.stringify(p).replace(/"/g, '&quot;')})">
                                        <h3 class="text-xs font-bold text-gray-800 line-clamp-2 hover:text-orange-600 transition min-h-[32px]">${p.title}</h3>
                                        ${p.availableOn ? `<p class="text-[10px] text-amber-700 font-semibold mt-1">Available on: ${formatOrderDateTime(p.availableOn)}</p>` : ''}
                                    </div>
                                    <div class="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded px-2 py-1 w-fit">Delivery Free</div>
                                    <div class="pt-1 flex items-center justify-between">
                                        <div class="flex items-baseline gap-1.5">
                                            <span class="text-sm font-extrabold text-orange-600">৳${p.price}</span>
                                            ${p.originalPrice ? `<span class="text-[10px] text-gray-400 line-through">৳${p.originalPrice}</span>` : ''}
                                        </div>
                                        ${p.available ? `
                                            <button onclick="executeProductInject('${p.id}')" class="p-2 bg-orange-50 hover:bg-orange-600 text-orange-600 hover:text-white rounded-lg transition">
                                                <i data-lucide="shopping-cart" class="w-4 h-4"></i>
                                            </button>
                                        ` : `
                                            <button disabled class="p-2 bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed">
                                                <i data-lucide="slash" class="w-4 h-4"></i>
                                            </button>
                                        `}
                                    </div>
                                </div>
                            </div>
                        `).join('') : `
                            <div class="w-full text-center py-6 text-xs text-gray-400">No active products populated in this lane yet.</div>
                        `}
                    </div>
                </section>
            `;
        }

        // Helper Card Markup with Not Available features
        function getProductCardMarkup(p) {
            return `
                <div class="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between relative">
                    <div class="relative cursor-pointer bg-gray-50 aspect-square p-2 flex items-center justify-center" onclick="navigateTo('details', ${JSON.stringify(p).replace(/"/g, '&quot;')})">
                        <img src="${p.image}" alt="${p.title}" class="object-cover max-h-full max-w-full rounded-lg ${!p.available ? 'opacity-40' : ''}">
                        ${calculateDiscountPercent(p) && p.available ? `<span class="absolute top-2 left-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">${calculateDiscountPercent(p)}% OFF</span>` : ''}
                        ${p.sku ? `<span class="absolute bottom-2 right-2 bg-gray-900/60 text-white text-[9px] font-mono px-1.5 py-0.5 rounded">${p.sku}</span>` : ''}
                        
                        <!-- Not Available Badge Overlay -->
                        ${!p.available ? `<span class="absolute bottom-2 left-2 bg-red-600 text-white text-[10px] font-bold rounded px-2 py-0.5 shadow-lg border border-red-500 opacity-80">Not Available</span>` : ''}
                    </div>
                    <div class="p-4 space-y-2 flex-grow flex flex-col justify-between">
                        <div class="cursor-pointer" onclick="navigateTo('details', ${JSON.stringify(p).replace(/"/g, '&quot;')})">
                            <h3 class="text-xs font-bold text-gray-800 line-clamp-2 hover:text-orange-600 transition min-h-[32px]">${p.title}</h3>
                            ${p.availableOn ? `<p class="text-[10px] text-amber-700 font-semibold mt-1">Available on: ${formatOrderDateTime(p.availableOn)}</p>` : ''}
                        </div>
                        <div class="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded px-2 py-1 w-fit">Delivery Free</div>
                        <div class="pt-1 flex items-center justify-between">
                            <div class="flex items-baseline gap-1.5">
                                <span class="text-sm font-extrabold text-orange-600">৳${p.price}</span>
                                ${p.originalPrice ? `<span class="text-[10px] text-gray-400 line-through">৳${p.originalPrice}</span>` : ''}
                            </div>
                            ${p.available ? `
                                <button onclick="executeProductInject('${p.id}')" class="p-2 bg-orange-50 hover:bg-orange-600 text-orange-600 hover:text-white rounded-lg transition">
                                    <i data-lucide="shopping-cart" class="w-4 h-4"></i>
                                </button>
                            ` : `
                                <button disabled class="p-2 bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed">
                                    <i data-lucide="slash" class="w-4 h-4"></i>
                                </button>
                            `}
                        </div>
                    </div>
                </div>
            `;
        }

        function toggleCategoryExpand(categoryName, shouldExpand) {
            state.expandedCategories[categoryName] = shouldExpand;
            renderHomePageView();
        }

        // ----------------- SPECIFIC PRODUCT SPECIFICATIONS SHEET -----------------
        function renderDetailsPageView() {
            const canvas = document.getElementById('mainCanvas');
            const p = resolveSelectedProduct();
            if (!p) { navigateTo('home'); return; }
            trackMetaEvent('ViewContent', { content_ids: [p.id], content_name: p.title, content_type: 'product', value: Number(p.price || 0), currency: 'BDT' });

            canvas.innerHTML = `
                <div class="max-w-6xl mx-auto px-4 py-8 space-y-8">
                    <!-- Back navigation header row (Popstate active) -->
                    <button onclick="event.preventDefault(); window.history.back();" class="flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-orange-600 transition">
                        <i data-lucide="arrow-left" class="w-4 h-4"></i>
                        <span>Back</span>
                    </button>

                    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 bg-white p-4 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <!-- Left Image Frame -->
                        <div class="md:col-span-5 flex flex-col justify-center bg-gray-50/50 border rounded-xl relative aspect-square">
                            <img src="${p.image}" alt="${p.title}" class="max-h-full max-w-full object-contain mx-auto rounded-xl ${!p.available ? '' : ''}">
                            ${p.sku ? `<span class="absolute top-3 right-3 bg-gray-900 text-white text-[10px] font-mono px-2 py-0.5 rounded shadow">${p.sku}</span>` : ''}
                            ${!p.available ? `<span class="absolute bottom-3 left-3 bg-red-600 text-white text-xs font-bold rounded px-2.5 py-1 shadow-2xl border border-red-500 opacity-80">Not Available</span>` : ''}
                        </div>

                        <!-- Right Spec Controls -->
                        <div class="md:col-span-7 flex flex-col justify-between space-y-4">
                            <div class="space-y-3">
                                <span class="inline-block bg-amber-100 text-amber-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">${p.category}</span>
                                <h1 class="text-xl md:text-2xl font-extrabold text-gray-900 leading-snug">${p.title}</h1>
                                
                                <div class="flex items-baseline gap-3 py-2 border-y border-gray-100">
                                    <span class="text-2xl font-black text-orange-600">৳${p.price}</span>
                                    ${p.originalPrice ? `<span class="text-xs text-gray-400 line-through">৳${p.originalPrice}</span>` : ''}
                                    ${p.available ? `
                                        <span class="ml-auto text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Ready In Stock</span>
                                    ` : `
                                        <span class="ml-auto text-[11px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200">Stock Out</span>
                                    `}
                                </div>
                                <div class="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded px-2 py-1 w-fit">Delivery Free</div>

                                ${p.availableOn ? `<p class="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">Next Availability: ${formatOrderDateTime(p.availableOn)}</p>` : ''}
                            </div>

                            <div class="space-y-3 pt-4">
                                ${p.available ? `
                                    <div class="grid grid-cols-2 gap-3">
                                        <button onclick="executeProductInject('${p.id}', true)" class="w-full py-3 bg-amber-50 hover:bg-amber-100 text-orange-600 border border-amber-200 font-bold text-xs rounded-xl transition flex items-center justify-center gap-1.5">
                                            <i data-lucide="shopping-bag" class="w-4 h-4"></i>
                                            <span>ADD TO CART</span>
                                        </button>
                                        <button onclick="executeInstantCheckoutSequence('${p.id}')" class="w-full py-3 bg-orange-600 text-white font-extrabold text-xs rounded-xl transition animate-buy-now shadow-md flex items-center justify-center gap-1.5">
                                            <i data-lucide="zap" class="w-4 h-4 text-amber-300 fill-amber-300"></i>
                                            <span>BUY NOW INSTANT</span>
                                        </button>
                                    </div>
                                ` : `
                                    <button disabled class="w-full py-3 bg-gray-200 text-gray-500 font-extrabold text-xs rounded-xl cursor-not-allowed flex items-center justify-center gap-1.5">
                                        <i data-lucide="slash" class="w-4 h-4"></i>
                                        <span>OUT OF STOCK / SOLD OUT</span>
                                    </button>
                                `}

                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                                    <a href="https://wa.me/8801351004652?text=Hello%20PustiGen,%20I%20want%20to%20order%20the%20item%20with%20SKU:%20${p.sku || 'N/A'}-%20${encodeURIComponent(p.title)}" target="_blank" class="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-1.5">
                                        <i data-lucide="phone" class="w-4 h-4"></i>
                                        <span>Order Via WhatsApp</span>
                                    </a>
                                    <a href="tel:+8801351004652" class="w-full py-2.5 bg-indigo-950 hover:bg-black text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-1.5">
                                        <i data-lucide="phone-call" class="w-4 h-4"></i>
                                        <span>Call For Offline Order</span>
                                    </a>
                                </div>

                                <div class="bg-gray-50 border border-gray-100 rounded-xl p-4 space-y-2">
                                    <h3 class="text-xs font-bold text-gray-900 uppercase tracking-wide">Description</h3>
                                    <p class="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap break-words">${formatProductDetails(p.details)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            lucide.createIcons();
        }

        // ----------------- SECURE ORDER CHECKOUT LAYOUT MODULE -----------------
        function renderCheckoutPageView() {
            const canvas = document.getElementById('mainCanvas');
            if (state.cart.length === 0) {
                canvas.innerHTML = `
                    <div class="max-w-md mx-auto py-20 px-4 text-center space-y-4">
                        <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-400"><i data-lucide="shopping-bag"></i></div>
                        <h2 class="text-base font-bold text-gray-900">Your shopping cart bag is currently empty</h2>
                        <button onclick="handleHomeNav()" class="px-4 py-2 bg-orange-600 text-white font-bold text-xs rounded-lg">Return to Marketplace</button>
                    </div>
                `;
                return;
            }

            let subtotal = 0;
            const itemReviewRows = state.cart.map(item => {
                const rowCost = item.product.price * item.quantity;
                subtotal += rowCost;
                return `
                    <div class="flex items-center justify-between gap-3 py-3 border-b border-gray-50 text-xs">
                        <div class="flex items-center gap-2">
                            <img src="${item.product.image}" class="w-10 h-10 object-cover rounded border">
                            <div>
                                <h4 class="font-bold text-gray-800 line-clamp-1">${item.product.title}</h4>
                                <p class="text-[10px] text-gray-400 font-mono">SKU: ${item.product.sku || 'N/A'} | Qty: ${item.quantity}</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="font-bold text-gray-900">৳${rowCost}</span>
                            <button onclick="purgeCartItemRow('${item.product.id}')" class="text-gray-400 hover:text-red-500"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
                        </div>
                    </div>
                `;
            }).join('');

            const totalAmount = subtotal;

            canvas.innerHTML = `
                <div class="max-w-4xl mx-auto px-4 py-8 space-y-6">
                    <!-- Secure Back navigation (Popstate active) -->
                    <button onclick="event.preventDefault(); window.history.back();" class="flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-orange-600 transition">
                        <i data-lucide="arrow-left" class="w-4 h-4"></i>
                        <span>Back</span>
                    </button>

                    <div class="text-center space-y-1">
                        <h1 class="text-xl md:text-2xl font-black text-gray-900 tracking-tight">Secure Order Checkout</h1>
                        <p class="text-xs text-gray-400">Fill up address parameters accurately to deploy dispatch lanes</p>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <div class="lg:col-span-7 space-y-4">
                            <!-- Shipping Address Box -->
                            <div class="bg-white p-5 rounded-xl border border-gray-100 shadow-sm space-y-4">
                                <h3 class="text-xs font-bold uppercase tracking-wider text-gray-900 flex items-center gap-1.5 border-b pb-2">
                                    <span class="w-2 h-2 bg-orange-600 rounded-full"></span> Shipping Address info
                                </h3>
                                
                                <div class="space-y-3 text-xs">
                                    <div>
                                        <label class="block font-semibold text-gray-600 mb-1">Your Full Name *</label>
                                        <input type="text" id="chkName" placeholder="Enter full identity name" class="w-full px-3 py-2 bg-gray-50 border rounded-lg focus:outline-none focus:border-orange-500">
                                    </div>
                                    <div>
                                        <label class="block font-semibold text-gray-600 mb-1">Active Phone Number *</label>
                                        <input type="tel" id="chkPhone" placeholder="01XXXXXXXXX" class="w-full px-3 py-2 bg-gray-50 border rounded-lg focus:outline-none focus:border-orange-500">
                                    </div>
                                    <div>
                                        <label class="block font-semibold text-gray-600 mb-1">Complete Delivery Street Address *</label>
                                        <input type="text" id="chkAddress" placeholder="Holding number, road name, village context info" class="w-full px-3 py-2 bg-gray-50 border rounded-lg focus:outline-none focus:border-orange-500">
                                    </div>
                                    
                                    <div class="grid grid-cols-2 gap-3">
                                        <div>
                                            <label class="block font-semibold text-gray-600 mb-1">Select District *</label>
                                            <select id="chkDistrict" onchange="populateThanaDropdown(this.value)" class="w-full px-2 py-2 bg-gray-50 border rounded-lg focus:outline-none focus:border-orange-500">
                                                <option value="">Choose District</option>
                                                ${Object.keys(state.locations).map(d => `<option value="${d}">${d}</option>`).join('')}
                                            </select>
                                        </div>
                                        <div>
                                            <label class="block font-semibold text-gray-600 mb-1">Select Thana / Area *</label>
                                            <select id="chkThana" class="w-full px-2 py-2 bg-gray-50 border rounded-lg focus:outline-none focus:border-orange-500" disabled>
                                                <option value="">Choose Thana</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="bg-white p-5 rounded-xl border border-gray-100 shadow-sm space-y-3">
                                <h3 class="text-xs font-bold uppercase tracking-wider text-gray-900 border-b pb-2">Payment Configuration</h3>
                                <div class="grid grid-cols-1 gap-3">
                                    <label class="flex items-center gap-2.5 p-3 bg-orange-50 border border-orange-200 rounded-xl cursor-pointer">
                                        <input type="radio" name="payMethod" value="COD" checked class="text-orange-600 focus:ring-orange-500">
                                        <div>
                                            <p class="text-xs font-bold text-gray-800">Cash On Delivery</p>
                                            <p class="text-[9px] text-gray-500">Handover pay at doorstep</p>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label class="block text-xs font-semibold text-gray-600 mb-1">Special Delivery Notes (Optional)</label>
                                <textarea id="chkNotes" rows="2" placeholder="Any specific timestamp parameters..." class="w-full px-3 py-2 bg-white border rounded-xl text-xs focus:outline-none focus:border-orange-500"></textarea>
                            </div>
                        </div>

                        <!-- Right Receipts Summary Card -->
                        <div class="lg:col-span-5 space-y-4">
                            <div class="bg-white p-5 rounded-xl border border-gray-100 shadow-md space-y-4">
                                <h3 class="text-xs font-bold text-gray-900 border-b pb-2">Order Review</h3>
                                <div class="divide-y max-h-48 overflow-y-auto">
                                    ${itemReviewRows}
                                </div>
                                
                                <div class="space-y-2 pt-2 text-xs border-t border-gray-100">
                                    <div class="flex justify-between text-gray-500">
                                        <span>Cart Subtotal:</span>
                                        <span class="font-bold text-gray-800">৳${subtotal}</span>
                                    </div>
                                    <div class="flex justify-between text-gray-500">
                                        <span>Delivery Charge:</span>
                                        <span class="font-bold text-emerald-700">Free</span>
                                    </div>
                                    <div class="flex justify-between text-sm font-black border-t pt-2 text-gray-900">
                                        <span>Grand Payable Total:</span>
                                        <span class="text-lg text-orange-600">৳${totalAmount}</span>
                                    </div>
                                </div>

                                <button id="placeSecureOrderBtn" onclick="dispatchFinalOrderPipeline()" class="w-full py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs tracking-wider rounded-xl transition shadow-lg transform active:scale-95 flex items-center justify-center gap-2 uppercase animate-buy-now">
                                    <i data-lucide="check-circle-2" class="w-4 h-4"></i>
                                    <span>Place Order Securely</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            lucide.createIcons();
        }



        function renderAboutPageView() {
            const canvas = document.getElementById('mainCanvas');
            canvas.innerHTML = `
                <section class="max-w-5xl mx-auto px-4 py-12 space-y-8">
                    <div class="bg-white rounded-3xl border border-orange-100 shadow-sm p-8 md:p-12 space-y-5">
                        <span class="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-xs font-extrabold px-3 py-1 rounded-full uppercase"><i data-lucide="leaf" class="w-4 h-4"></i> About PustiGen</span>
                        <h1 class="text-3xl md:text-5xl font-black text-gray-900 leading-tight">Natural, trustworthy nutrition for Bangladeshi families.</h1>
                        <p class="text-sm md:text-base text-gray-600 leading-7">PustiGen focuses on clean, convenient, nutrient-dense food made with oats, nuts, seeds, and dry fruits. Our goal is to help families choose wholesome breakfast and snack options without unnecessary additives.</p>
                    </div>
                    <div class="grid md:grid-cols-3 gap-4">
                        ${['Chemical-free sourcing','Fast COD checkout','Customer support by phone'].map(item => `
                            <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                                <i data-lucide="shield-check" class="w-6 h-6 text-orange-600 mb-3"></i>
                                <h2 class="text-sm font-extrabold text-gray-900">${item}</h2>
                            </div>
                        `).join('')}
                    </div>
                </section>
            `;
            lucide.createIcons();
        }

        // ----------------- SHIPMENT ORDER DISPATCH AND RECORD (GOOGLE SHEETS COMPATIBLE) -----------------
        async function dispatchFinalOrderPipeline() {
            const name = document.getElementById('chkName').value.trim();
            const phone = document.getElementById('chkPhone').value.trim();
            const address = document.getElementById('chkAddress').value.trim();
            const district = document.getElementById('chkDistrict').value;
            const thana = document.getElementById('chkThana').value;
            const notes = document.getElementById('chkNotes').value.trim();
            const submitBtn = document.getElementById('placeSecureOrderBtn');

            // Input fields validation
            if (!name || name.length < 3) { deployToastAlert('Please enter valid identity credentials.', 'error'); return; }
            if (!(/^01[3-9]\d{8}$/.test(phone))) { deployToastAlert('Invalid active mobile number structure.', 'error'); return; }
            if (!address || address.length < 10) { deployToastAlert('Please expand structural street address markers.', 'error'); return; }
            if (!district || !thana) { deployToastAlert('Logistics map points are required.', 'error'); return; }

            submitBtn.disabled = true;
            submitBtn.innerText = "PROCESSING ORDER...";

            let subtotal = 0;
            state.cart.forEach(i => subtotal += (i.product.price * i.quantity));

            const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);

            // Extract SKUs with exact quantities for multiple items
            const productSkusString = state.cart.map(i => `${i.product.sku} [Qty: ${i.quantity}]`).join(', ');

            const orderPacket = {
                orderId: orderId,
                name: name,
                phone: phone,
                address: address,
                district: district,
                thana: thana,
                payable: subtotal,
                skus: productSkusString,
                notes: notes,
                status: 'Pending Verification',
                timestamp: formatOrderDateTime(new Date())
            };

            // Post dispatch directly to Google sheet web app URL endpoint
            try {
                const response = await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors', // Solves Google App Script cross origin redirect issues
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(orderPacket)
                });
                // Save to local check traces anyway
                saveOrderToCache(orderPacket);
                trackMetaEvent('Purchase', { value: Number(subtotal || 0), currency: 'BDT', content_ids: state.cart.map(i => i.product.id), order_id: orderId });
            } catch (err) {
                console.warn("Direct POST stream failed or sandbox environment restricted. Writing trace cache.", err);
                saveOrderToCache(orderPacket);
                trackMetaEvent('Purchase', { value: Number(subtotal || 0), currency: 'BDT', content_ids: state.cart.map(i => i.product.id), order_id: orderId });
            }

            // Flush guest cart arrays
            state.cart = [];
            saveCartCache();
            syncCartCounters();

            // Success victory screen
            const canvas = document.getElementById('mainCanvas');
            canvas.innerHTML = `
                <div class="max-w-md mx-auto py-16 px-4 text-center space-y-5">
                    <div class="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm"><i data-lucide="shield-check" class="w-8 h-8"></i></div>
                    <div class="space-y-1">
                        <h2 class="text-xl font-black text-gray-900">Order Placed Successfully!</h2>
                        <p class="text-xs text-gray-400">Order successfully logged and waiting in Google Sheets for dispatch.</p>
                    </div>
                    <div class="bg-white border rounded-xl p-4 text-left text-xs font-medium space-y-2 shadow-inner">
                        <p class="flex justify-between border-b pb-1.5 font-bold"><span>Tracking Order ID:</span> <span class="text-orange-600 font-mono">${orderPacket.orderId}</span></p>
                        <p><strong>Recipient:</strong> ${orderPacket.name}</p>
                        <p><strong>Mobile Net:</strong> +88${orderPacket.phone}</p>
                        <p><strong>Logistics Point:</strong> ${orderPacket.thana}, ${orderPacket.district}</p>
                        <p><strong>SKUs Logged:</strong> <span class="font-mono text-orange-700">${orderPacket.skus}</span></p>
                        <p class="flex justify-between border-t pt-1.5 font-black text-gray-900"><span>COD Cash Payable:</span> <span>৳${orderPacket.payable}</span></p>
                    </div>
                    <button onclick="handleHomeNav()" class="w-full py-3 bg-gray-950 hover:bg-black text-white font-bold text-xs rounded-xl transition">Return To Showcase</button>
                </div>
            `;
            lucide.createIcons();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // District অনুযায়ী thana dropdown populate করে
        function populateThanaDropdown(selectedDistrict) {
            const thanaSelect = document.getElementById('chkThana');
            if (!thanaSelect) return;

            const thanas = state.locations[selectedDistrict] || [];
            thanaSelect.innerHTML = '<option value="">Choose Thana</option>';

            if (!selectedDistrict || thanas.length === 0) {
                thanaSelect.disabled = true;
                return;
            }

            thanas.forEach(thana => {
                const option = document.createElement('option');
                option.value = thana;
                option.textContent = thana;
                thanaSelect.appendChild(option);
            });

            thanaSelect.disabled = false;
        }

        // ----------------- SHIPMENT TRACKING OPERATIONS -----------------
        async function executeLiveTrackingQuery() {
            const rawQuery = document.getElementById('trackSearchInput').value.trim();
            const query = rawQuery.toUpperCase();
            const normalizedPhoneQuery = normalizeBangladeshPhone(rawQuery);
            const resArea = document.getElementById('trackingResultArea');

            if (!rawQuery) {
                deployToastAlert('Please enter Order ID or Phone Number to search.', 'error');
                return;
            }

            resArea.classList.remove('hidden');

            await syncOrdersFromSheet();

            // Order ID দিয়ে সার্চ করলে single result, Phone দিয়ে সার্চ করলে matching সব order list
            const orderById = state.orders.find(o => (o.orderId || '').toUpperCase() === query);
            if (orderById) {
                resArea.innerHTML = `
                    <p class="font-bold text-gray-800 flex justify-between"><span>Status:</span> <span class="text-orange-600 font-black">${orderById.status || 'Pending Verification'}</span></p>
                    <p class="text-[10px] text-gray-500">${formatOrderDateTime(orderById.timestamp) || ''}</p>
                    <p class="text-[10px] text-gray-500">Total: ৳${orderById.payable || 0}</p>
                    <p class="text-[10px] text-orange-700 font-mono mt-1">Products: ${orderById.skus}</p>
                    <p class="text-[10px] text-gray-500">Order ID: ${orderById.orderId}</p>
                    <p class="text-[10px] text-gray-500">Phone: +88${orderById.phone}</p>
                `;
                return;
            }

            const ordersByPhone = state.orders.filter(o => normalizeBangladeshPhone(o.phone) === normalizedPhoneQuery);
            if (ordersByPhone.length > 0) {
                resArea.innerHTML = `
                    <p class="font-bold text-gray-800 mb-2">Total ${ordersByPhone.length} order(s) found for this number.</p>
                    <div class="space-y-2 max-h-64 overflow-y-auto pr-1">
                        ${ordersByPhone.map(order => `
                            <div class="bg-white border border-orange-100 rounded-lg p-2.5">
                                <p class="font-bold text-gray-800 flex justify-between"><span>Status:</span> <span class="text-orange-600 font-black">${order.status || 'Pending Verification'}</span></p>
                                <p class="text-[10px] text-gray-500">${formatOrderDateTime(order.timestamp) || ''}</p>
                                <p class="text-[10px] text-gray-500">Total: ৳${order.payable || 0}</p>
                                <p class="text-[10px] text-gray-500">Order ID: ${order.orderId}</p>
                                <p class="text-[10px] text-orange-700 font-mono mt-1">Products: ${order.skus}</p>
                            </div>
                        `).join('')}
                    </div>
                `;
            } else {
                resArea.innerHTML = `<p class="text-red-500 font-bold text-center">No order found with the provided ID or Mobile Number.</p>`;
            }
        }

        async function syncOrdersFromSheet() {
            try {
                const res = await fetch(`${GOOGLE_SCRIPT_URL}?action=orders`);
                if (!res.ok) return;
                const data = await res.json();
                if (Array.isArray(data) && data.length > 0) {
                    state.orders = data;
                    localStorage.setItem('pustigen_orders_history', JSON.stringify(data));
                }
            } catch (e) {
                console.warn('Order sync from sheet failed, using local cache.', e);
            }
        }

        // ----------------- CART SELECTION SUBSYSTEM -----------------
        function executeProductInject(id, launchDrawer = false) {
            const product = state.products.find(p => p.id === id);
            if (!product) return;

            // Prevent adding to cart if product is sold out
            if (!product.available) {
                deployToastAlert('This item is currently sold out.', 'error');
                return;
            }

            const duplicate = state.cart.find(i => i.product.id === id);
            if (duplicate) {
                duplicate.quantity++;
            } else {
                state.cart.push({ product, quantity: 1 });
            }

            trackMetaEvent('AddToCart', { content_ids: [product.id], content_name: product.title, content_type: 'product', value: Number(product.price || 0), currency: 'BDT' });
            deployToastAlert('Successfully secured inside package bag!');
            syncCartCounters();
            if (launchDrawer) toggleCartDrawer();
        }

        // Corrected buy-now function to securely empty previous cart and inject instantly
        function executeInstantCheckoutSequence(id) {
            const product = state.products.find(p => p.id === id);
            if (!product) return;

            if (!product.available) {
                deployToastAlert('This item is currently sold out.', 'error');
                return;
            }

            // Instantly clear cart to prioritize this single item, then push and navigate
            state.cart = [{ product, quantity: 1 }];
            syncCartCounters();
            trackMetaEvent('InitiateCheckout', { content_ids: [product.id], value: Number(product.price || 0), currency: 'BDT' });
            navigateTo('checkout');
        }

        function purgeCartItemRow(id) {
            state.cart = state.cart.filter(i => i.product.id !== id);
            deployToastAlert('Item dropped from inventory bag.', 'error');
            syncCartCounters();
            renderCartDrawerList();
            if (state.currentPage === 'checkout') renderCheckoutPageView();
        }

        function modifyDrawerQuantityNode(id, factor) {
            const match = state.cart.find(i => i.product.id === id);
            if (!match) return;
            match.quantity = Math.max(1, match.quantity + factor);
            syncCartCounters();
            renderCartDrawerList();
            if (state.currentPage === 'checkout') renderCheckoutPageView();
        }

        function syncCartCounters() {
            saveCartCache();
            let units = 0, cost = 0;
            state.cart.forEach(i => { units += i.quantity; cost += (i.product.price * i.quantity); });

            document.getElementById('headerCartCount').innerText = units;
            document.getElementById('floatingWidgetCount').innerText = `${units} Items`;
            document.getElementById('floatingWidgetPrice').innerText = `৳${cost}`;
        }

        function renderCartDrawerList() {
            const box = document.getElementById('cartDrawerItemsBox');
            if (state.cart.length === 0) {
                box.innerHTML = `<div class="text-center py-20 text-xs text-gray-400">Inventory tray is empty.</div>`;
                document.getElementById('cartDrawerSubtotal').innerText = '৳0';
                return;
            }

            let runningSum = 0;
            box.innerHTML = state.cart.map(i => {
                const rowSum = i.product.price * i.quantity;
                runningSum += rowSum;
                return `
                    <div class="flex items-center justify-between border-b pb-3 gap-2 text-xs">
                        <div class="flex items-center gap-2">
                            <img src="${i.product.image}" class="w-10 h-10 object-cover rounded">
                            <div>
                                <h4 class="font-bold text-gray-800 line-clamp-1 max-w-[140px]">${i.product.title}</h4>
                                <span class="text-orange-600 font-extrabold">৳${i.product.price}</span>
                            </div>
                        </div>
                        <div class="flex items-center gap-1.5">
                            <div class="flex items-center border bg-gray-50 rounded overflow-hidden">
                                <button onclick="modifyDrawerQuantityNode('${i.product.id}', -1)" class="px-1.5 py-0.5 font-bold hover:bg-gray-200">-</button>
                                <span class="px-2 font-bold bg-white text-[11px]">${i.quantity}</span>
                                <button onclick="modifyDrawerQuantityNode('${i.product.id}', 1)" class="px-1.5 py-0.5 font-bold hover:bg-gray-200">+</button>
                            </div>
                            <button onclick="purgeCartItemRow('${i.product.id}')" class="text-gray-400 hover:text-red-500"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
                        </div>
                    </div>
                `;
            }).join('');
            document.getElementById('cartDrawerSubtotal').innerText = `৳${runningSum}`;
            lucide.createIcons();
        }

        function proceedToCheckoutPage() {
            toggleCartDrawer();
            navigateTo('checkout');
        }

        function openOrderTrackingModal() {
            document.getElementById('orderTrackingModal').classList.remove('hidden');
        }
        function closeOrderTrackingModal() {
            document.getElementById('orderTrackingModal').classList.add('hidden');
            document.getElementById('trackingResultArea').classList.add('hidden');
        }
