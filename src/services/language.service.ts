import { Injectable, signal, computed } from '@angular/core';

export type Lang = 'EN' | 'TR';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLang = signal<Lang>('TR');

  setLang(lang: Lang) {
    this.currentLang.set(lang);
  }

  private readonly dict = {

    // ╔══════════════════════════════════════════════════════════════╗
    // ║                        ENGLISH                              ║
    // ╚══════════════════════════════════════════════════════════════╝
    EN: {
      navbar: {
        home: 'HOMEPAGE',
        corporate: 'CORPORATE',
        about: 'ABOUT US',
        mission: 'MISSION',
        vision: 'VISION',
        services: 'SERVICES',
        references: 'REFERENCES',
        contact: 'CONTACT',
        btn: 'REQUEST AUDIT'
      },

      megaMenu: {
        aboutDesc: 'Our corporate identity, values and over 10 years of industry experience.',
        missionDesc: 'Strategic goals that strengthen businesses\' inventory processes.',
        visionDesc: 'Future inventory technologies and our autonomous counting vision.',
        explore: 'Explore',
        badge: 'ADS Corporate',
        featuredTitle: 'Turkey\'s Leading Counting Firm',
        featuredDesc: 'Your trusted inventory audit partner in retail, logistics and manufacturing sectors.',
        statYears: 'Years Experience',
        statAccuracy: 'Accuracy',
        statTeams: 'Audit Teams'
      },

      hero: {
        titleLine2: 'Precision',
        titleLine3: 'Counting',
        subtitle: 'We are the global authority in physical inventory verification. Transforming chaotic stock data into absolute mathematical truth through advanced counting technologies.',
        cta: 'Our Methodology',
        stats: {
          accuracy: 'Accuracy',
          uptime: 'Speed',
          scale: 'Global'
        }
      },

      features: {
        label: 'WHY CHOOSE ADS',
        titleLine1: 'WHY',
        titleLine2: 'CHOOSE ADS?',
        description: 'ADS is not merely a service provider in stock management and inventory auditing — we are a strategic partner that adds value to your business, strengthens your processes, and elevates your decision-making to the highest level. Brands that choose to work with us treat stock control not as a routine operation, but as one of the cornerstones of corporate sustainability.',
        card1: {
          subtitle: '01 / ACCURACY',
          title: 'Flawless Accuracy Standards',
          text: 'Thanks to our technological infrastructure and expert team that go beyond traditional counting methods, we deliver high accuracy rates you can trust at every point of your business. This provides you with a risk-free, fully reliable foundation for decision-making.'
        },
        card2: {
          subtitle: '02 / OPERATIONS',
          title: 'Effortless Operations',
          text: 'You don\'t lose a single minute. We handle every process for you.'
        },
        card3: {
          subtitle: '03 / SECURITY',
          title: 'Minimizes Loss & Fraud Risks to Near Zero',
          text: 'We don\'t just detect — we analyze every risk point your business may face in the future and prevent potential losses before they occur. This ensures your brand security and financial health are fully protected.'
        },
        card4: {
          subtitle: '04 / REPORTING',
          title: 'Executive-Level Reporting',
          text: 'Clear, concise, powerful. Flawless visibility that only simplifies your decision-making. No detail goes unnoticed.'
        }
      },

      homeExtra: {
        galleryTitle: 'RECENT AUDIT LOCATIONS',
        gallerySubtitle: 'Deploying counting teams across 30+ countries',
        artTitleLine1: 'THE ART OF',
        artTitleLine2: 'COUNTING',
        artDescription: 'We transform physical chaos into digital order. Our specialized teams execute wall-to-wall counts with mathematical precision, ensuring your ERP data matches reality down to the last unit.',
        artItem1: 'Barcode Verification',
        artItem2: 'Blind Count Protocol',
        artItem3: 'Variance Reporting',
        parallaxBtn: 'View Audit Case Studies',
        hud: {
          secure: 'SECURE_LINK_ESTABLISHED',
          lat: 'LAT: 41.0082° N',
          synced: 'SYNCED',
          badge: 'Certified Auditor'
        }
      },

      totalVisibility: {
        tag: 'TURKEY\'S COUNTING FIRM',
        title: 'TOTAL VISIBILITY',
        subtitle: 'Global Customer Portfolio',
        btn: 'VIEW TECHNOLOGY'
      },

      contact: {
        label: 'Schedule Audit',
        title1: 'SECURE',
        title2: 'YOUR ASSETS',
        subtitle: 'Eliminate shrinkage and variance with ADS professional counting services.',
        btn: 'Get a Quote'
      },

      contactPage: {
        header: 'INITIATE COUNT',
        subHeader: 'Ready to reconcile your inventory? Contact our operations center to schedule a team deployment.',
        infoTitle: 'OPERATIONS HUB',
        addressLabel: 'HQ Coordinates',
        address: 'Evka 4 Mahallesi 1035 Sokak Yakamoz No:8 D:14 Bornova, İzmir',
        emailLabel: 'Audit Requests',
        email: 'info@adsdanismanlik.com.tr',
        phoneLabel: '24/7 Support Line',
        phone: '+90 544 866 26 22',
        formTitle: 'AUDIT REQUEST FORM',
        inputName: 'Company Representative',
        inputEmail: 'Corporate Email',
        inputMessage: 'Store/Warehouse Details',
        submitBtn: 'REQUEST TEAM',
        supportTitle: 'Client Portal',
        supportText: 'Access live count dashboards.',
        supportLink: 'Login'
      },

      aboutPage: {
        header: 'THE COUNTING EXPERTS',
        subHeader: 'We act as the eyes of the boardroom on the warehouse floor.',
        manifestoTitle: 'OUR STANDARD',
        manifestoText1: 'As ADS, with over 10 years of industry experience, our expert team and innovative approach provide reliable, fast and high-standard services in the field of stock counting and inventory audit.',
        manifestoText2: 'With the methods we have developed specifically for the needs of your business, we make your inventory processes more transparent, more measurable and more manageable.',
        stat1: { num: '50M+', label: 'Items Counted/Yr' },
        stat2: { num: '99.9%', label: 'Accuracy Rate' },
        stat3: { num: '120', label: 'Audit Teams' },
        philosophyTitle: 'ZERO VARIANCE',
        philosophyText: 'Variance is the enemy of profit. Our sole purpose is to align your physical reality with your digital records to the exact unit.',
        teamTitle: 'LEADERSHIP',
        member1: { name: 'OGUZHAN DERYA', role: 'COMPANY CEO' },
        member2: { name: 'ENES OZKIRDENIZ', role: 'HEAD OF AUDIT' },
        member3: { name: 'ERAY ATILGAN', role: 'HEAD OF AUDIT' },
        member4: { name: 'MERT SENER', role: 'SENIOR AUDITOR' },
        member5: { name: 'EREN OLDAC', role: 'SENIOR AUDITOR' }
      },

      missionPage: {
        header: 'CORE OBJECTIVE',
        subHeader: 'To be a reliable, flexible, and proactive inventory counting partner for businesses in the retail, logistics, and manufacturing sectors, helping them minimize inventory losses, increase efficiency, and maintain profitability.',
        card1Title: 'DATA TRUTH',
        card1Text: 'To be the unshakeable source of truth for inventory data, eliminating financial discrepancies.',
        card2Title: 'EFFICIENCY',
        card2Text: 'To reduce the time required for wall-to-wall counts from days to mere hours.',
        card3Title: 'ASSET PROTECTION',
        card3Text: 'To help businesses identify and stop loss/theft through rigorous auditing patterns.',
        strategyTitle: 'AUDIT VECTORS',
        vec1: 'Blind Double-Count Protocol',
        vec2: 'Variance Analysis AI',
        vec3: 'Heatmap Loss Detection'
      },

      visionPage: {
        header: 'FUTURE OF STOCK',
        subHeader: 'Moving beyond barcodes. We are building the infrastructure for autonomous inventory awareness.',
        intro: 'To be recognized not as a company that just "counts" but as a business partner that "makes its customers gain"; to be one of the most successful audit firms from Turkey that applies global standards in inventory management.',
        timeline1Year: '2025',
        timeline1Title: 'Drone Auditing',
        timeline1Text: 'Deployment of autonomous drones for high-rack warehouse cycle counting.',
        timeline2Year: '2027',
        timeline2Title: 'Vision AI',
        timeline2Text: 'Cameras that count shelf items in real-time without barcodes.',
        timeline3Year: '2030',
        timeline3Title: 'Invisible Inventory',
        timeline3Text: 'Molecular-level tagging eliminating the need for optical scanning.'
      },

      servicesPage: {
        header: 'OUR SERVICES',
        subHeader: 'Comprehensive inventory management solutions tailored to your business needs. The same precision and professionalism in every service.',
        breadcrumb: 'Our Solutions',
        learnMore: 'Learn More',
        ctaLabel: 'Get Started',
        ctaTitle1: 'Transform',
        ctaTitle2: 'Your Operations',
        ctaButton: 'GET IN TOUCH',
        statServices: 'Service Areas',
        statTeams: 'Audit Teams',
        statAccuracy: 'Accuracy Rate',
        statSupport: 'Non-Stop Support',
        service1: {
          title: 'Periodic Stock Count',
          desc: 'Keep your data accuracy at the highest level with regularly scheduled inventory audits. Minimize stock losses with comprehensive counts performed at determined intervals.'
        },
        service2: {
          title: 'Independent Audit',
          desc: 'Guarantee the reliability of your inventory data with impartial third-party auditing. Strengthen your corporate transparency with independent verification processes.'
        },
        service3: {
          title: 'Product Verification',
          desc: 'Ensure every product is correctly identified with barcode control and product authentication services.'
        },
        service4: {
          title: 'Post-Count Reporting',
          desc: 'We provide executive-level detailed analysis and reporting after inventory completion.'
        },
        service5: {
          title: 'Count Team Management',
          desc: 'Operational excellence through professional team coordination, supervision and performance tracking.'
        },
        service6: {
          title: 'Payroll Services',
          desc: 'Comprehensive payroll management and personnel affairs services for counting teams.'
        },
        service7: {
          title: 'Seasonal Staff Support',
          desc: 'We guarantee operational sustainability and efficiency by providing additional workforce during peak periods.'
        },
        service8: {
          title: 'Asset Counting',
          desc: 'Detailed and accurate counting of fixed asset inventories, depreciation tracking and asset management.'
        }
      },

      careersPage: {
        breadcrumb: 'Careers',
        header: 'JOIN OUR TEAM',
        subHeader: 'Become part of the ADS family. Explore career opportunities at Turkey\'s leading inventory audit firm.',
        linkedinBtn: 'View on LinkedIn',
        or: 'or',
        applyBelow: 'Apply Below',
        perk1Title: 'Career Growth',
        perk1Desc: 'We support your professional development with continuous training programs and industry certifications.',
        perk2Title: 'Strong Team',
        perk2Desc: 'Opportunity to work and gain experience alongside our 120+ professional team.',
        perk3Title: 'Nationwide',
        perk3Desc: 'Assignment opportunities in Istanbul, Ankara, Izmir and across all of Turkey.',
        formLabel: 'Application',
        formTitle: 'Application Form',
        formDesc: 'Fill out the form below to reach us. Our team will contact you as soon as possible.',
        inputName: 'Full Name',
        inputNamePh: 'Your full name',
        inputEmail: 'Email',
        inputEmailPh: 'example@email.com',
        inputPhone: 'Phone',
        inputPhonePh: '+90 5XX XXX XX XX',
        inputPosition: 'Position Applied',
        inputPositionPh: 'Select a position',
        posAuditor: 'Inventory Auditor',
        posTeamLead: 'Team Leader',
        posField: 'Field Personnel',
        posOffice: 'Office / Admin Staff',
        posOther: 'Other',
        inputMessage: 'Message / Notes',
        inputMessagePh: 'Your experience, expectations...',
        kvkkText: 'I have read and accept the ',
        kvkkLink: 'KVKK Privacy Notice',
        submitBtn: 'SUBMIT APPLICATION',
        successMsg: 'Your application has been received successfully. We will contact you soon.'
      },

      legalPage: {
        breadcrumb: 'Legal',
        header: 'LEGAL INFORMATION',
        lastUpdated: 'Last updated: February 2026',
        tabPrivacy: 'Privacy Policy',
        tabCookies: 'Cookie Policy',
        kvkk: {
          title: 'KVKK Disclosure Text',
          s1Title: '1. Data Controller',
          s1Text: 'As ADS Consulting Services ("Company"), we process your personal data as data controller within the scope of the Personal Data Protection Law No. 6698 ("KVKK") for the purposes explained below. Our company attaches great importance to the protection of personal data and takes all necessary technical and administrative measures.',
          s2Title: '2. Processed Personal Data',
          s2Text: 'Personal data such as name-surname, email address, phone number, address information, company information, IP address and cookie data are processed within the scope of service delivery, communication, fulfillment of legal obligations and our legitimate interests.',
          s3Title: '3. Purposes of Data Processing',
          s3Text: 'Your personal data is processed for managing customer relationships, improving service quality, fulfilling legal obligations, evaluating job applications, conducting statistical analyses and security purposes.',
          s4Title: '4. Data Transfer',
          s4Text: 'Your personal data may be transferred to our business partners, suppliers and authorized public institutions within the framework of legal obligations and our legitimate interests. Your data is not transferred abroad.',
          s5Title: '5. Your Rights',
          s5Text: 'Within the scope of Article 11 of KVKK, you have the right to learn whether your personal data is processed, to request information if processed, to learn the purpose of processing, to know the third parties to whom it is transferred domestically/abroad, to request correction if incomplete or incorrect, and to request deletion or destruction. You can submit your applications to info@adsdanismanlik.com.tr.'
        },
        privacy: {
          title: 'Privacy Policy',
          s1Title: 'General',
          s1Text: 'As ADS Consulting, we respect the privacy of users who visit our website. This policy explains what information we collect, how we use it, and how we protect it. By using our website, you are deemed to have accepted this policy.',
          s2Title: 'Information Collected',
          s2Text: 'Information such as name, email, phone number submitted through contact forms; browser information, IP address and cookie data may be collected automatically. This information is used solely for service delivery and communication purposes.',
          s3Title: 'Information Security',
          s3Text: 'We take security measures in accordance with industry standards to protect the personal data we collect. SSL encryption and secure server infrastructure are used to prevent unauthorized access to your data.'
        },
        cookies: {
          title: 'Cookie Policy',
          s1Title: 'What Are Cookies?',
          s1Text: 'Cookies are small text files placed on your device when you visit our website. These files are used to ensure the proper functioning of our website, improve user experience and analyze site traffic.',
          s2Title: 'Types of Cookies We Use',
          s2Text: 'Essential cookies: Required for basic website functions. Analytics cookies: Help us understand site usage (Google Analytics). Preference cookies: Used to remember your settings such as language preference.',
          s3Title: 'Cookie Management',
          s3Text: 'You can block or delete cookies from your browser settings. However, please note that some features of our website may not function properly in this case.'
        }
      },

      footer: {
        desc: 'The gold standard in professional inventory auditing and stocktaking services.',
        col1: 'Services',
        col1Links: ['Periodic Count', 'Independent Audit', 'Product Verification', 'Asset Counting'],
        col2: 'Company',
        col2Links: ['About ADS', 'Careers', 'Contact', 'Legal'],
        copyright: '© 2024 ADS Architectural Data Systems. All Rights Reserved.',
        legalLink: 'KVKK'
      }
    },

    // ╔══════════════════════════════════════════════════════════════╗
    // ║                        TURKISH                              ║
    // ╚══════════════════════════════════════════════════════════════╝
    TR: {
      navbar: {
        home: 'ANASAYFA',
        corporate: 'KURUMSAL',
        about: 'HAKKIMIZDA',
        mission: 'MİSYON',
        vision: 'VİZYON',
        services: 'HİZMETLER',
        references: 'REFERANSLAR',
        contact: 'İLETİŞİM',
        btn: 'SAYIM TALEP ET'
      },

      megaMenu: {
        aboutDesc: 'Kurumsal kimliğimiz, değerlerimiz ve 10 yılı aşkın sektör deneyimimiz.',
        missionDesc: 'İşletmelerin envanter süreçlerini güçlendiren stratejik hedeflerimiz.',
        visionDesc: 'Geleceğin envanter teknolojileri ve otonom sayım vizyonumuz.',
        explore: 'Keşfet',
        badge: 'ADS Kurumsal',
        featuredTitle: 'Türkiye\'nin Lider Sayım Firması',
        featuredDesc: 'Perakende, lojistik ve üretim sektörlerinde güvenilir envanter denetim ortağınız.',
        statYears: 'Yıl Deneyim',
        statAccuracy: 'Doğruluk',
        statTeams: 'Sayım Ekibi'
      },

      hero: {
        titleLine2: 'Audit Data Stocktake',
        titleLine3: 'Sayım',
        subtitle: 'Fiziksel stok doğrulamada küresel otoriteyiz. Karmaşık stok verilerini, ileri sayım teknolojileriyle mutlak matematiksel gerçeğe dönüştürüyoruz.',
        cta: 'Metodolojimiz',
        stats: {
          accuracy: 'Doğruluk',
          uptime: 'Hız',
          scale: 'Global'
        }
      },

      features: {
        label: 'NEDEN ADS SEÇİLMELİ',
        titleLine1: 'Neden',
        titleLine2: 'ADS?',
        description: 'ADS, stok yönetimi ve envanter denetimi alanında yalnızca hizmet sunan bir yapı değil; işletmenize değer katan, süreçlerinizi güçlendiren ve karar mekanizmalarınızı üst seviyeye taşıyan stratejik bir çözüm ortağıdır. Bizimle çalışmayı tercih eden markalar, stok kontrolünü sıradan bir operasyon değil, kurumsal sürdürülebilirliğin temel taşlarından biri olarak ele alır.',
        card1: {
          subtitle: '01 / DOĞRULUK',
          title: 'Kusursuz Doğruluk Standartları',
          text: 'Klasik sayım yöntemlerinin ötesine geçen teknolojik altyapımız ve uzman ekibimiz sayesinde, işletmenizin her noktasında güvenebileceğiniz yüksek doğruluk oranları sunarız. Bu da size riskten uzak, tamamen güvenilir bir karar zemini sağlar.'
        },
        card2: {
          subtitle: '02 / OPERASYON',
          title: 'Zahmetsiz Operasyon',
          text: 'Siz tek bir dakikanızı kaybetmezsiniz. Tüm süreçleri biz üstleniriz.'
        },
        card3: {
          subtitle: '03 / GÜVENLİK',
          title: 'Kayıp ve Suistimal Risklerini Sıfıra Yakın Seviyeye İndirir',
          text: 'Yalnızca tespit etmekle kalmaz, işletmenizin gelecekte karşılaşabileceği tüm risk noktalarını analiz eder, potansiyel kayıpları daha oluşmadan önleriz. Bu sayede marka güvenliğiniz ve finansal sağlığınız koruma altına alınır.'
        },
        card4: {
          subtitle: '04 / RAPORLAMA',
          title: 'Üst Yönetim Seviyesinde Raporlama',
          text: 'Net, sade, güçlü. Yalnızca karar vermenizi kolaylaştıran kusursuz görünürlük. Hiçbir detay gözden kaçmaz.'
        }
      },

      homeExtra: {
        galleryTitle: 'SON SAYIM LOKASYONLARI',
        gallerySubtitle: '30+ ülkede profesyonel sayım ekipleri',
        artTitleLine1: 'SAYIM',
        artTitleLine2: 'SANATI',
        artDescription: 'Fiziksel karmaşayı dijital düzene dönüştürüyoruz. Uzman ekiplerimiz, ERP verilerinizin gerçeklikle son birime kadar eşleşmesini sağlayarak matematiksel hassasiyetle duvardan duvara sayımlar gerçekleştirir.',
        artItem1: 'Barkod Doğrulama',
        artItem2: 'Kör Sayım Protokolü',
        artItem3: 'Sapma Raporlama',
        parallaxBtn: 'Sayım Örneklerini İncele',
        hud: {
          secure: 'GÜVENLİ_BAĞLANTI_KURULDU',
          lat: 'ENLEM: 41.0082° K',
          synced: 'SENKRONİZE',
          badge: 'Sertifikalı Denetçi'
        }
      },

      totalVisibility: {
        tag: 'TÜRKİYE\'NİN SAYIM FİRMASI',
        title: 'TAM GÖRÜNÜRLÜK',
        subtitle: 'Global Müşteri Portföyü',
        btn: 'TEKNOLOJİYİ KEŞFET'
      },

      contact: {
        label: 'Denetim Planla',
        title1: 'VARLIKLARINIZI',
        title2: 'GÜVENCEYE ALIN',
        subtitle: 'ADS profesyonel sayım hizmetleri ile kayıp ve envanter sapmalarını ortadan kaldırın.',
        btn: 'Teklif Alın'
      },

      contactPage: {
        header: 'SAYIMI BAŞLAT',
        subHeader: 'Envanterinizi uzlaştırmaya hazır mısınız? Bir ekip görevlendirmesi planlamak için operasyon merkezimizle iletişime geçin.',
        infoTitle: 'OPERASYON MERKEZİ',
        addressLabel: 'Merkez Koordinatları',
        address: 'Evka 4 Mahallesi 1035 Sokak Yakamoz No:8 D:14 Bornova, İzmir',
        emailLabel: 'Denetim Talepleri',
        email: 'info@adsdanismanlik.com.tr',
        phoneLabel: '7/24 Destek Hattı',
        phone: '+90 544 866 26 22',
        formTitle: 'SAYIM TALEP FORMU',
        inputName: 'Firma Yetkilisi',
        inputEmail: 'Kurumsal E-posta',
        inputMessage: 'Mağaza/Depo Detayları',
        submitBtn: 'EKİP TALEP ET',
        supportTitle: 'Müşteri Portalı',
        supportText: 'Canlı sayım panellerine erişin.',
        supportLink: 'Giriş Yap'
      },

      aboutPage: {
        header: 'SAYIM UZMANLARI',
        subHeader: 'Biz, yönetim kurulunun depo zeminindeki gözleriyiz.',
        manifestoTitle: 'STANDARDIMIZ',
        manifestoText1: 'ADS olarak; 10 yılı aşkın sektör deneyimimiz, uzman ekibimiz ve yenilikçi yaklaşımımızla stok sayım ve envanter denetimi alanında güvenilir, hızlı ve yüksek standartlarda hizmet sunuyoruz.',
        manifestoText2: 'İşletmenizin ihtiyaçlarına özel geliştirdiğimiz yöntemlerle, envanter süreçlerinizi daha şeffaf, daha ölçülebilir ve daha yönetilebilir hale getiriyoruz.',
        stat1: { num: '50M+', label: 'Yıllık Sayım' },
        stat2: { num: '99.9%', label: 'Doğruluk Oranı' },
        stat3: { num: '120', label: 'Sayım Ekibi' },
        philosophyTitle: 'SIFIR SAPMA',
        philosophyText: 'Sapma (Variance) kârın düşmanıdır. Tek amacımız, fiziksel gerçekliğinizi dijital kayıtlarınızla birim bazında tam olarak eşlemektir.',
        teamTitle: 'LİDERLİK',
        member1: { name: 'OGUZHAN DERYA', role: 'ŞİRKET CEOSU' },
        member2: { name: 'ENES OZKIRDENIZ', role: 'SAYIM BAŞKANI' },
        member3: { name: 'ERAY ATILGAN', role: 'SAYIM BAŞKANI' },
        member4: { name: 'MERT SENER', role: 'TECRÜBELİ SAYMAN' },
        member5: { name: 'EREN OLDAC', role: 'TECRÜBELİ SAYMAN' }
      },

      missionPage: {
        header: 'TEMEL HEDEF',
        subHeader: 'Perakende, lojistik ve üretim sektörlerindeki işletmelerin stok kayıplarını en aza indiren, verimliliklerini artıran ve kârlılıklarını koruyan güvenilir, esnek ve proaktif envanter sayım ortağı olmak.',
        card1Title: 'VERİ GERÇEĞİ',
        card1Text: 'Finansal tutarsızlıkları ortadan kaldırarak envanter verileri için sarsılmaz bir doğruluk kaynağı olmak.',
        card2Title: 'VERİMLİLİK',
        card2Text: 'Duvarlar arası tam sayımlar için gereken süreyi günlerden sadece saatlere indirmek.',
        card3Title: 'VARLIK KORUMA',
        card3Text: 'İşletmelerin titiz denetim modelleri aracılığıyla kayıp/hırsızlığı tespit etmesine ve durdurmasına yardımcı olmak.',
        strategyTitle: 'DENETİM VEKTÖRLERİ',
        vec1: 'Kör Çift Sayım Protokolü',
        vec2: 'Sapma Analizi AI',
        vec3: 'Isı Haritası Kayıp Tespiti'
      },

      visionPage: {
        header: 'STOĞUN GELECEĞİ',
        subHeader: 'Barkodların ötesine geçiyoruz. Otonom envanter farkındalığı için altyapı inşa ediyoruz.',
        intro: 'Sadece "sayan" bir firma değil, müşterilerine "kazandıran" bir iş ortağı olarak tanınmak; envanter yönetiminde global standartları uygulayan ve Türkiye\'den çıkan en başarılı denetim firmalarından biri olmaktır.',
        timeline1Year: '2025',
        timeline1Title: 'Drone Denetimi',
        timeline1Text: 'Yüksek raflı depo döngü sayımları için otonom dronların konuşlandırılması.',
        timeline2Year: '2027',
        timeline2Title: 'Görüntü AI',
        timeline2Text: 'Raf ürünlerini barkodsuz, gerçek zamanlı sayan kameralar.',
        timeline3Year: '2030',
        timeline3Title: 'Görünmez Envanter',
        timeline3Text: 'Optik tarama ihtiyacını ortadan kaldıran moleküler düzeyde etiketleme.'
      },

      servicesPage: {
        header: 'HİZMETLERİMİZ',
        subHeader: 'İşletmenizin ihtiyaçlarına özel kapsamlı envanter yönetimi çözümleri. Her hizmette aynı titizlik, aynı profesyonellik.',
        breadcrumb: 'Çözümlerimiz',
        learnMore: 'Detaylı Bilgi',
        ctaLabel: 'Hemen Başlayın',
        ctaTitle1: 'Operasyonlarınızı',
        ctaTitle2: 'Dönüştürün',
        ctaButton: 'İLETİŞİME GEÇİN',
        statServices: 'Hizmet Alanı',
        statTeams: 'Sayım Ekibi',
        statAccuracy: 'Doğruluk Oranı',
        statSupport: 'Kesintisiz Destek',
        service1: {
          title: 'Periyodik Stok Sayımı',
          desc: 'Düzenli planlanan envanter denetimleriyle veri doğruluğunuzu en üst seviyede tutun. Belirlenen periyotlarda gerçekleştirilen kapsamlı sayımlarla stok kayıplarını minimize edin.'
        },
        service2: {
          title: 'Bağımsız Denetim',
          desc: 'Tarafsız üçüncü taraf denetimi ile envanter verilerinizin güvenilirliğini garanti altına alın. Bağımsız doğrulama süreçleriyle kurumsal şeffaflığınızı güçlendirin.'
        },
        service3: {
          title: 'Ürün Doğrulama',
          desc: 'Barkod kontrol ve ürün kimlik doğrulama hizmetleriyle her ürünün doğru tanımlandığından emin olun.'
        },
        service4: {
          title: 'Sayım Sonrası Raporlama',
          desc: 'Envanter tamamlandıktan sonra üst yönetim seviyesinde detaylı analiz ve raporlama sunuyoruz.'
        },
        service5: {
          title: 'Sayım Ekip Yönetimi',
          desc: 'Profesyonel ekip koordinasyonu, süpervizyon ve performans takibi ile operasyonel mükemmellik.'
        },
        service6: {
          title: 'Bordrolama Hizmetleri',
          desc: 'Sayım ekipleri için kapsamlı bordro yönetimi ve özlük işlemleri hizmetleri.'
        },
        service7: {
          title: 'Dönemsel Personel Desteği',
          desc: 'Yoğun dönemlerde ek kadro sağlayarak operasyonun sürdürülebilirliğini ve verimliliğini garanti altına alıyoruz.'
        },
        service8: {
          title: 'Demirbaş Sayımı',
          desc: 'Sabit kıymet envanterlerinin detaylı ve doğru şekilde sayımı, amortisman takibi ve varlık yönetimi.'
        }
      },

      careersPage: {
        breadcrumb: 'Kariyer',
        header: 'EKİBİMİZE KATILIN',
        subHeader: 'ADS ailesinin bir parçası olun. Türkiye\'nin lider envanter denetim firmasında kariyer fırsatlarını keşfedin.',
        linkedinBtn: 'LinkedIn\'de Görüntüle',
        or: 'veya',
        applyBelow: 'Aşağıdan Başvur',
        perk1Title: 'Kariyer Gelişimi',
        perk1Desc: 'Sürekli eğitim programları ve sektör sertifikaları ile profesyonel gelişiminizi destekliyoruz.',
        perk2Title: 'Güçlü Ekip',
        perk2Desc: '120+ kişilik profesyonel ekibimizle birlikte çalışma ve deneyim kazanma fırsatı.',
        perk3Title: 'Türkiye Geneli',
        perk3Desc: 'İstanbul, Ankara, İzmir ve tüm Türkiye genelinde farklı lokasyonlarda görev imkanı.',
        formLabel: 'Başvuru',
        formTitle: 'Başvuru Formu',
        formDesc: 'Aşağıdaki formu doldurarak bize ulaşın. Ekibimiz en kısa sürede sizinle iletişime geçecektir.',
        inputName: 'Ad Soyad',
        inputNamePh: 'Adınız ve soyadınız',
        inputEmail: 'E-posta',
        inputEmailPh: 'ornek@email.com',
        inputPhone: 'Telefon',
        inputPhonePh: '+90 5XX XXX XX XX',
        inputPosition: 'Başvurulan Pozisyon',
        inputPositionPh: 'Pozisyon seçiniz',
        posAuditor: 'Sayım Denetçisi',
        posTeamLead: 'Ekip Lideri',
        posField: 'Saha Personeli',
        posOffice: 'Ofis / İdari Personel',
        posOther: 'Diğer',
        inputMessage: 'Mesaj / Not',
        inputMessagePh: 'Deneyimleriniz, beklentileriniz...',
        kvkkText: 'Kişisel verilerimin işlenmesine ilişkin ',
        kvkkLink: 'KVKK Aydınlatma Metni\'ni',
        submitBtn: 'BAŞVURUYU GÖNDER',
        successMsg: 'Başvurunuz başarıyla alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.'
      },

      legalPage: {
        breadcrumb: 'Yasal',
        header: 'YASAL BİLGİLER',
        lastUpdated: 'Son güncelleme: Şubat 2026',
        tabPrivacy: 'Gizlilik Politikası',
        tabCookies: 'Çerez Politikası',
        kvkk: {
          title: 'KVKK Aydınlatma Metni',
          s1Title: '1. Veri Sorumlusu',
          s1Text: 'ADS Danışmanlık Hizmetleri ("Şirket") olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında veri sorumlusu sıfatıyla kişisel verilerinizi aşağıda açıklanan amaçlar doğrultusunda işlemekteyiz. Şirketimiz, kişisel verilerin korunmasına büyük önem vermekte ve bu konuda gerekli tüm teknik ve idari tedbirleri almaktadır.',
          s2Title: '2. İşlenen Kişisel Veriler',
          s2Text: 'Ad-soyad, e-posta adresi, telefon numarası, adres bilgileri, şirket bilgileri, IP adresi ve çerez verileri gibi kişisel verileriniz; hizmet sunumu, iletişim, yasal yükümlülüklerin yerine getirilmesi ve meşru menfaatlerimiz kapsamında işlenmektedir.',
          s3Title: '3. Verilerin İşlenme Amaçları',
          s3Text: 'Kişisel verileriniz; müşteri ilişkilerinin yürütülmesi, hizmet kalitesinin artırılması, yasal yükümlülüklerin yerine getirilmesi, iş başvurularının değerlendirilmesi, istatistiksel analizler yapılması ve güvenlik amacıyla işlenmektedir.',
          s4Title: '4. Verilerin Aktarılması',
          s4Text: 'Kişisel verileriniz, yasal zorunluluklar ve meşru menfaatlerimiz çerçevesinde iş ortaklarımıza, tedarikçilerimize ve yetkili kamu kuruluşlarına aktarılabilmektedir. Verileriniz yurt dışına aktarılmamaktadır.',
          s5Title: '5. Haklarınız',
          s5Text: 'KVKK\'nın 11. maddesi kapsamında; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacını öğrenme, yurt içinde/yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini isteme, silinmesini veya yok edilmesini isteme haklarına sahipsiniz. Başvurularınızı info@adsdanismanlik.com.tr adresine iletebilirsiniz.'
        },
        privacy: {
          title: 'Gizlilik Politikası',
          s1Title: 'Genel',
          s1Text: 'ADS Danışmanlık olarak, web sitemizi ziyaret eden kullanıcılarımızın gizliliğine saygı duyuyoruz. Bu politika, hangi bilgileri topladığımızı, nasıl kullandığımızı ve nasıl koruduğumuzu açıklamaktadır. Web sitemizi kullanarak bu politikayı kabul etmiş sayılırsınız.',
          s2Title: 'Toplanan Bilgiler',
          s2Text: 'İletişim formları aracılığıyla gönderilen ad, e-posta, telefon numarası gibi bilgiler; tarayıcı bilgileri, IP adresi ve çerez verileri otomatik olarak toplanabilir. Bu bilgiler yalnızca hizmet sunumu ve iletişim amacıyla kullanılmaktadır.',
          s3Title: 'Bilgi Güvenliği',
          s3Text: 'Topladığımız kişisel verileri korumak için endüstri standartlarına uygun güvenlik önlemleri almaktayız. Verilerinize yetkisiz erişimi önlemek için SSL şifreleme ve güvenli sunucu altyapısı kullanılmaktadır.'
        },
        cookies: {
          title: 'Çerez Politikası',
          s1Title: 'Çerez Nedir?',
          s1Text: 'Çerezler, web sitemizi ziyaret ettiğinizde cihazınıza yerleştirilen küçük metin dosyalarıdır. Bu dosyalar, web sitemizin düzgün çalışmasını sağlamak, kullanıcı deneyimini iyileştirmek ve site trafiğini analiz etmek için kullanılmaktadır.',
          s2Title: 'Kullandığımız Çerez Türleri',
          s2Text: 'Zorunlu çerezler: Web sitesinin temel işlevleri için gereklidir. Analitik çerezler: Site kullanımını anlamamıza yardımcı olur (Google Analytics). Tercih çerezleri: Dil tercihiniz gibi ayarlarınızı hatırlamak için kullanılır.',
          s3Title: 'Çerez Yönetimi',
          s3Text: 'Tarayıcı ayarlarınızdan çerezleri engelleyebilir veya silebilirsiniz. Ancak bu durumda web sitemizin bazı özelliklerinin düzgün çalışmayabileceğini hatırlatmak isteriz.'
        }
      },

      footer: {
        desc: 'Profesyonel envanter denetimi ve stok sayım hizmetlerinde altın standart.',
        col1: 'Hizmetler',
        col1Links: ['Periyodik Sayım', 'Bağımsız Denetim', 'Ürün Doğrulama', 'Demirbaş Sayımı'],
        col2: 'Şirket',
        col2Links: ['ADS Hakkında', 'Kariyer', 'İletişim', 'Yasal'],
        copyright: '© 2024 ADS Architectural Data Systems. Tüm Hakları Saklıdır.',
        legalLink: 'KVKK'
      }
    }
  };

  t = computed(() => this.dict[this.currentLang()]);
}