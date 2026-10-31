/* ===== SPA Router & Navigation Logic ===== */
const pageData = {
    'home': {
        title: 'Home',
        breadcrumb: 'Home',
        content: ''
    },
    'history': {
        title: 'Our History',
        breadcrumb: 'Explore Us / History',
        content: `
            <h2 class="text-danger font-weight-bold mb-4">University History</h2>
            <p class="lead">Established under the Techno India University Act, West Bengal, Techno India University is a pioneer in private higher education and technological innovation.</p>
            <p>Founded with the vision of bridging the gap between academia and industry, the university has rapidly grown into a multidisciplinary center of excellence offering cutting-edge programs in Engineering, Management, Science, Law, Architecture, and Humanities.</p>
            <hr class="my-4">
            <h4 class="font-weight-bold">Milestones</h4>
            <ul>
                <li><strong>2012:</strong> University enactment and establishment in Sector-V, Salt Lake, Kolkata.</li>
                <li><strong>2015:</strong> Expansion of research wings and International Conference hosting.</li>
                <li><strong>2020:</strong> Digital transformation and introduction of hybrid learning models.</li>
                <li><strong>2025:</strong> Ranked among top private research universities with 50,000+ global alumni.</li>
            </ul>
        `
    },
    'vision': {
        title: 'Vision',
        breadcrumb: 'Explore Us / Vision',
        content: `
            <h2 class="text-danger font-weight-bold mb-4">Our Vision</h2>
            <p class="lead">To be a globally acclaimed university recognized for excellence in teaching, groundbreaking research, and holistic student development.</p>
            <p>We aspire to cultivate visionary leaders, critical thinkers, and ethical innovators equipped to solve complex global challenges and contribute meaningfully to society.</p>
        `
    },
    'mission': {
        title: 'Mission',
        breadcrumb: 'Explore Us / Mission',
        content: `
            <h2 class="text-danger font-weight-bold mb-4">Our Mission</h2>
            <ul class="list-unstyled">
                <li class="mb-3">🚀 <strong>Academic Rigor:</strong> Deliver world-class curricula aligned with modern industry standards and emerging technologies.</li>
                <li class="mb-3">🔬 <strong>Research & Innovation:</strong> Foster a vibrant research ecosystem that encourages patent creation, publications, and startup incubation.</li>
                <li class="mb-3">🤝 <strong>Inclusive Growth:</strong> Provide equal opportunities for education and financial aid to deserving students across communities.</li>
                <li class="mb-3">🌍 <strong>Global Collaboration:</strong> Forge strategic partnerships with international universities and Fortune 500 companies.</li>
            </ul>
        `
    },
    'iqac': {
        title: 'IQAC',
        breadcrumb: 'Explore Us / IQAC',
        content: `
            <h2 class="text-danger font-weight-bold mb-4">Internal Quality Assurance Cell (IQAC)</h2>
            <p class="lead">Ensuring continuous improvement in academic and administrative processes.</p>
            <p>The IQAC at Techno India University works relentlessly to maintain benchmark standards in teaching-learning methodologies, student evaluation, faculty development, and institutional accountability.</p>
        `
    },
    'approvals': {
        title: 'Approvals & Recognitions',
        breadcrumb: 'Explore Us / Approvals',
        content: `
            <h2 class="text-danger font-weight-bold mb-4">Statutory Approvals & Recognitions</h2>
            <p class="lead">Techno India University is fully recognized and approved by statutory bodies.</p>
            <div class="row mt-4">
                <div class="col-md-6 mb-3">
                    <div class="p-3 border rounded bg-light">
                        <h5 class="font-weight-bold text-danger">UGC Recognition</h5>
                        <p class="small text-muted mb-0">Recognized under Section 2(f) of the UGC Act, Government of India.</p>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="p-3 border rounded bg-light">
                        <h5 class="font-weight-bold text-danger">AICTE Approval</h5>
                        <p class="small text-muted mb-0">All technical and management programs are approved by AICTE.</p>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="p-3 border rounded bg-light">
                        <h5 class="font-weight-bold text-danger">Bar Council of India (BCI)</h5>
                        <p class="small text-muted mb-0">School of Law programs approved by BCI.</p>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="p-3 border rounded bg-light">
                        <h5 class="font-weight-bold text-danger">Council of Architecture (COA)</h5>
                        <p class="small text-muted mb-0">B.Arch programs approved by COA.</p>
                    </div>
                </div>
            </div>
        `
    },
    'priority': {
        title: 'Priority & Trust',
        breadcrumb: 'Explore Us / Priority & Trust',
        content: `
            <h2 class="text-danger font-weight-bold mb-4">Priority & Trust</h2>
            <p class="lead">Building enduring trust through transparency, student safety, and academic integrity.</p>
            <p>At Techno India University, student welfare is our foremost priority. We maintain transparent admission policies, robust grievance redressal mechanisms, and a secure anti-ragging campus environment.</p>
        `
    },
    'press': {
        title: 'Press Release',
        breadcrumb: 'Explore Us / Press Release',
        content: `
            <h2 class="text-danger font-weight-bold mb-4">Latest Press Releases & Media</h2>
            <div class="list-group">
                <div class="list-group-item list-group-item-action flex-column align-items-start mb-3 border rounded">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="font-weight-bold text-danger">ICCECE 2026 Announcement</h5>
                        <small class="text-muted">January 15, 2026</small>
                    </div>
                    <p class="mb-1">Techno India University announces dates for the prestigious IEEE International Conference in collaboration with AICTE.</p>
                </div>
                <div class="list-group-item list-group-item-action flex-column align-items-start mb-3 border rounded">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="font-weight-bold text-danger">Record Placement Season 2025-2026</h5>
                        <small class="text-muted">December 20, 2025</small>
                    </div>
                    <p class="mb-1">Over 450+ multinational companies visited campus offering packages up to 45 LPA.</p>
                </div>
            </div>
        `
    },
    'faq': {
        title: 'Frequently Asked Questions',
        breadcrumb: 'Explore Us / FAQ',
        content: `
            <h2 class="text-danger font-weight-bold mb-4">Frequently Asked Questions</h2>
            <div class="accordion" id="faqAccordion">
                <div class="card mb-2 border">
                    <div class="card-header bg-light" id="headingOne">
                        <h5 class="mb-0">
                            <button class="btn btn-link font-weight-bold text-dark" type="button" data-toggle="collapse" data-target="#collapseOne">
                                Q1: How can I apply for admission?
                            </button>
                        </h5>
                    </div>
                    <div id="collapseOne" class="collapse show" data-parent="#faqAccordion">
                        <div class="card-body">
                            You can apply online through our official website by clicking the "Apply Now" button or visit our Salt Lake campus for physical counseling and admission assistance.
                        </div>
                    </div>
                </div>
                <div class="card mb-2 border">
                    <div class="card-header bg-light" id="headingTwo">
                        <h5 class="mb-0">
                            <button class="btn btn-link font-weight-bold text-dark collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo">
                                Q2: Are hostel facilities available for outstation students?
                            </button>
                        </h5>
                    </div>
                    <div id="collapseTwo" class="collapse" data-parent="#faqAccordion">
                        <div class="card-body">
                            Yes, separate secure hostel accommodations with modern amenities, Wi-Fi, and mess facilities are available for both male and female students near the campus.
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    'school-engineering': {
        title: 'School of Engineering',
        breadcrumb: 'Academics / School of Engineering',
        content: `
            <h2 class="text-danger font-weight-bold mb-4">School of Engineering & Technology</h2>
            <p class="lead">Offering premier B.Tech, M.Tech, and Diploma programs across cutting-edge engineering disciplines.</p>
            <h4 class="font-weight-bold mt-4">Departments</h4>
            <div class="row mt-3">
                <div class="col-md-4 mb-3"><div class="p-3 border rounded bg-light text-center font-weight-bold">Computer Science & Engineering</div></div>
                <div class="col-md-4 mb-3"><div class="p-3 border rounded bg-light text-center font-weight-bold">Artificial Intelligence & ML</div></div>
                <div class="col-md-4 mb-3"><div class="p-3 border rounded bg-light text-center font-weight-bold">Electronics & Communication</div></div>
                <div class="col-md-4 mb-3"><div class="p-3 border rounded bg-light text-center font-weight-bold">Electrical Engineering</div></div>
                <div class="col-md-4 mb-3"><div class="p-3 border rounded bg-light text-center font-weight-bold">Mechanical Engineering</div></div>
                <div class="col-md-4 mb-3"><div class="p-3 border rounded bg-light text-center font-weight-bold">Civil Engineering</div></div>
            </div>
        `
    },
    'school-science': {
        title: 'School of Science',
        breadcrumb: 'Academics / School of Science',
        content: `
            <h2 class="text-danger font-weight-bold mb-4">School of Science</h2>
            <p class="lead">Advancing scientific discovery through rigorous B.Sc and M.Sc programs in Physics, Chemistry, Mathematics, Biotechnology, and Microbiology.</p>
        `
    },
    'school-ca': {
        title: 'School of Computer Application',
        breadcrumb: 'Academics / School of Computer Application',
        content: `
            <h2 class="text-danger font-weight-bold mb-4">School of Computer Application</h2>
            <p class="lead">Shaping software architects and IT leaders through comprehensive BCA and MCA programs equipped with cloud computing, full-stack development, and cybersecurity modules.</p>
        `
    },
    'school-management': {
        title: 'School of Management',
        breadcrumb: 'Academics / School of Management',
        content: `
            <h2 class="text-danger font-weight-bold mb-4">School of Management (MBA / BBA)</h2>
            <p class="lead">Developing business leaders through experiential learning, case studies, corporate mentorship, and global internships.</p>
        `
    },
    'school-architecture': {
        title: 'School of Architecture',
        breadcrumb: 'Academics / School of Architecture',
        content: `
            <h2 class="text-danger font-weight-bold mb-4">School of Architecture</h2>
            <p class="lead">Approved by COA, offering B.Arch with state-of-the-art design studios, model-making workshops, and urban planning labs.</p>
        `
    },
    'school-pharmacy': {
        title: 'School of Pharmacy',
        breadcrumb: 'Academics / School of Pharmacy',
        content: `
            <h2 class="text-danger font-weight-bold mb-4">School of Pharmacy</h2>
            <p class="lead">Offering B.Pharm and D.Pharm programs with advanced pharmaceutical chemistry and pharmacology laboratories.</p>
        `
    },
    'school-nursing': {
        title: 'School of Nursing',
        breadcrumb: 'Academics / School of Nursing',
        content: `
            <h2 class="text-danger font-weight-bold mb-4">School of Nursing</h2>
            <p class="lead">Dedicated healthcare education with hands-on clinical training in premier hospitals and advanced simulation labs.</p>
        `
    },
    'school-humanities': {
        title: 'School of Humanities',
        breadcrumb: 'Academics / School of Humanities',
        content: `
            <h2 class="text-danger font-weight-bold mb-4">School of Humanities & Social Sciences</h2>
            <p class="lead">Fostering critical thought, communication skills, and cultural research through multidisciplinary degrees.</p>
        `
    },
    'placement': {
        title: 'Placement Team',
        breadcrumb: 'Placement Team',
        content: `
            <h2 class="text-danger font-weight-bold mb-4">University Placement Cell</h2>
            <p class="lead">Connecting brilliant minds with global tech giants and Fortune 500 companies.</p>
            <div class="row mt-4">
                <div class="col-md-4 text-center mb-4">
                    <div class="p-4 border rounded bg-light">
                        <h3 class="font-weight-bold text-danger">450+</h3>
                        <p class="mb-0 font-weight-bold">Recruiting Partners</p>
                    </div>
                </div>
                <div class="col-md-4 text-center mb-4">
                    <div class="p-4 border rounded bg-light">
                        <h3 class="font-weight-bold text-danger">45 LPA</h3>
                        <p class="mb-0 font-weight-bold">Highest Package</p>
                    </div>
                </div>
                <div class="col-md-4 text-center mb-4">
                    <div class="p-4 border rounded bg-light">
                        <h3 class="font-weight-bold text-danger">98%</h3>
                        <p class="mb-0 font-weight-bold">Placement Rate</p>
                    </div>
                </div>
            </div>
            <h4 class="font-weight-bold mt-4">Top Recruiters</h4>
            <p class="text-muted">Google, Microsoft, Amazon, TCS, Cognizant, Wipro, IBM, Deloitte, PwC, Capgemini, Infosys, and many more.</p>
        `
    },
    'contact': {
        title: 'Contact Us',
        breadcrumb: 'Contact',
        content: `
            <h2 class="text-danger font-weight-bold mb-4">Get in Touch</h2>
            <div class="row">
                <div class="col-md-6 mb-4">
                    <h5 class="font-weight-bold text-danger">Campus Address</h5>
                    <p>EM-4, Sector-V, Salt Lake, Kolkata - 700091<br>(Near Swastha Bhawan/PWC, Beside Times of India Office) West Bengal, India</p>
                    <h5 class="font-weight-bold text-danger mt-3">Helpline Numbers</h5>
                    <p>9836544419 / 9836544418 / 9836544417 / 9836544416</p>
                    <h5 class="font-weight-bold text-danger mt-3">Email Enquiries</h5>
                    <p>info@technoindiauniversity.ac.in<br>admission@technoindiauniversity.ac.in</p>
                </div>
                <div class="col-md-6">
                    <div class="card p-4 shadow-sm border">
                        <h5 class="font-weight-bold mb-3">Send Us a Message</h5>
                        <form onsubmit="handleContactSubmit(event)">
                            <div class="form-group">
                                <label>Your Name</label>
                                <input type="text" class="form-control" required placeholder="Enter name">
                            </div>
                            <div class="form-group">
                                <label>Email Address</label>
                                <input type="email" class="form-control" required placeholder="name@example.com">
                            </div>
                            <div class="form-group">
                                <label>Message</label>
                                <textarea class="form-control" rows="3" required placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="submit" class="btn btn-danger btn-block font-weight-bold">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        `
    }
};

function navigateTo(route) {
    if (!pageData[route]) route = 'home';
    
    // Hide all views
    document.querySelectorAll('.spa-view').forEach(el => {
        el.style.display = 'none';
        el.classList.remove('active');
    });

    if (route === 'home') {
        const homeView = document.getElementById('view-home');
        homeView.style.display = 'block';
        homeView.classList.add('active');
    } else {
        const subView = document.getElementById('view-subpage');
        const breadcrumb = document.getElementById('subpage-breadcrumb');
        const contentArea = document.getElementById('subpage-content');
        
        breadcrumb.innerText = pageData[route].breadcrumb;
        contentArea.innerHTML = pageData[route].content;
        
        subView.style.display = 'block';
        subView.classList.add('active');
    }

    // Update active nav state
    document.querySelectorAll('.navbar-nav .nav-item').forEach(li => li.classList.remove('active'));
    if (route === 'home') document.getElementById('nav-home')?.classList.add('active');
    if (route === 'placement') document.getElementById('nav-placement')?.classList.add('active');
    if (route === 'contact') document.getElementById('nav-contact')?.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
    location.hash = route;
}

// Handle hash routing on load & back button
window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash && pageData[hash]) {
        navigateTo(hash);
    } else {
        navigateTo('home');
    }
    initParticleCanvas();
    initCounters();
    initScrollReveal();
});

window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash && pageData[hash]) {
        navigateTo(hash);
    } else if (!hash) {
        navigateTo('home');
    }
});

/* ===== Modals & Form Actions ===== */
function openApplyModal() {
    $('#applyModal').modal('show');
}

function submitApplication(e) {
    e.preventDefault();
    alert('Congratulations! Your application has been successfully submitted. Our admission counselor will contact you shortly.');
    $('#applyModal').modal('hide');
    document.getElementById('applyForm').reset();
}

function openResultsModal() {
    $('#resultsModal').modal('show');
}

function checkResults(e) {
    e.preventDefault();
    const roll = document.getElementById('rollNumberInput').value;
    if (roll) {
        document.getElementById('resultOutput').style.display = 'block';
    }
}

function handleContactSubmit(e) {
    e.preventDefault();
    alert('Thank you for reaching out! Your message has been sent to our support team.');
    e.target.reset();
}

function toggleMarquee(play) {
    const marquee = document.getElementById('noticeMarquee');
    if (play) {
        marquee.start();
    } else {
        marquee.stop();
    }
}

/* ===== Statistics Counter Animation ===== */
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    let animated = false;

    window.addEventListener('scroll', () => {
        const statsSection = document.querySelector('.stats-section');
        if (!statsSection) return;
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && !animated) {
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                let count = 0;
                const speed = target / 50;
                const updateCount = () => {
                    count += speed;
                    if (count < target) {
                        counter.innerText = Math.ceil(count);
                        setTimeout(updateCount, 30);
                    } else {
                        counter.innerText = target + (target >= 98 ? '%' : '+');
                    }
                };
                updateCount();
            });
            animated = true;
        }
    });
}

/* ===== Scroll Reveal Animation ===== */
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal-on-scroll');
    const revealOnScroll = () => {
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('visible');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
}

/* ===== Interactive Floating Particle Canvas Background ===== */
function initParticleCanvas() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const count = 45;

    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 1.2,
            vy: (Math.random() - 0.5) * 1.2,
            radius: Math.random() * 2.5 + 1
        });
    }

    let mouse = { x: null, y: null, radius: 120 };
    window.addEventListener('mousemove', e => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    function animate() {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = 'rgba(237, 28, 36, 0.25)';
        ctx.strokeStyle = 'rgba(237, 28, 36, 0.1)';

        particles.forEach((p, index) => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();

            // Connect nearby particles
            for (let j = index + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
                if (dist < 100) {
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }

            // Mouse interaction
            if (mouse.x !== null && mouse.y !== null) {
                const mDist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
                if (mDist < mouse.radius) {
                    ctx.lineWidth = 0.8;
                    ctx.strokeStyle = 'rgba(237, 28, 36, 0.35)';
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        });

        requestAnimationFrame(animate);
    }
    animate();
}
