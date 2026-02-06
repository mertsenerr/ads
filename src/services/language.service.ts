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
    EN: {
      navbar: {
        home: 'HOMEPAGE',
        about: 'ABOUT US',
        mission: 'MISSION',
        vision: 'VISION',
        services: 'SERVICES',
        contact: 'CONTACT',
        btn: 'REQUEST AUDIT'
      },
      hero: {
        label: 'Elite Inventory Auditing',
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
        label: 'Audit Capabilities',
        titleLine1: 'WHY',
        titleLine2: 'CHOOSE ADS?',
        description: 'We don\'t just count items; we certify your assets. Using proprietary handheld terminals and AI verification, we deliver 99.99% accuracy in retail and warehouse environments.',
        card1: {
          subtitle: '01 / TECHNOLOGY',
          title: 'Advanced Scanning',
          text: 'Utilizing next-gen RFID and laser barcode auditors that eliminate human error and triple counting speeds compared to standard devices.'
        },
        card2: {
          subtitle: '02 / INTEGRITY',
          title: 'Third-Party Validation',
          text: 'As an independent auditor, we provide unbiased, legally binding stock reports that satisfy investors and board members.'
        },
        card3: {
          subtitle: '03 / FLEXIBILITY',
          title: 'Overnight Operation',
          text: 'We deploy massive counting fleets during non-business hours, ensuring your store or warehouse opens the next day with zero downtime.'
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
        header: 'OUR SOLUTIONS',
        subHeader: 'Comprehensive inventory management services tailored to your business needs.',
        ctaTitle1: 'Transform',
        ctaTitle2: 'Your Operations',
        ctaButton: 'GET IN TOUCH',
        service1: {
          title: 'Periodic Stock Count',
          desc: 'Regular scheduled inventory audits to maintain data accuracy'
        },
        service2: {
          title: 'Independent Audit',
          desc: 'Third-party verification for unbiased inventory validation'
        },
        service3: {
          title: 'Product Verification',
          desc: 'Barcode control and product authentication services'
        },
        service4: {
          title: 'Post-Count Reporting',
          desc: 'Detailed analysis and reporting after inventory completion'
        },
        service5: {
          title: 'Count Team Management',
          desc: 'Professional team coordination and supervision'
        },
        service6: {
          title: 'Workforce Solutions',
          desc: 'Seasonal workforce and personnel supply services'
        },
        service7: {
          title: 'Payroll Services',
          desc: 'Comprehensive payroll management for counting teams'
        },
        service8: {
          title: 'Asset Counting',
          desc: 'Fixed asset inventory and depreciation tracking'
        }
      },
      footer: {
          desc: 'The gold standard in professional inventory auditing and stocktaking services.',
          col1: 'Services',
          col1Links: ['Retail Audits', 'Warehouse Counts', 'Asset Tagging', 'Supply Chain Validation'],
          col2: 'Company',
          col2Links: ['About ADS', 'Careers', 'Request Audit', 'Legal'],
          copyright: '© 2024 ADS Architectural Data Systems. All Rights Reserved.'
      }
    },
    TR: {
      navbar: {
        home: 'ANASAYFA',
        about: 'HAKKIMIZDA',
        mission: 'MİSYON',
        vision: 'VİZYON',
        services: 'HİZMETLER',
        contact: 'İLETİŞİM',
        btn: 'SAYIM TALEP ET'
      },
      hero: {
        label: 'Elit Envanter Denetimi',
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
        label: 'Denetim Yetenekleri',
        titleLine1: 'NEDEN',
        titleLine2: 'ADS SEÇMELİ?',
        description: 'Sadece ürün saymıyoruz; varlıklarınızı sertifikalandırıyoruz. Tescilli el terminalleri ve yapay zeka doğrulaması ile %99.99 doğruluk sunuyoruz.',
        card1: {
          subtitle: '01 / TEKNOLOJİ',
          title: 'İleri Tarama',
          text: 'İnsan hatasını ortadan kaldıran ve standart cihazlara göre sayım hızını üç katına çıkaran yeni nesil RFID ve lazer denetçiler kullanıyoruz.'
        },
        card2: {
          subtitle: '02 / BÜTÜNLÜK',
          title: 'Bağımsız Doğrulama',
          text: 'Bağımsız bir denetçi olarak, yatırımcıları ve yönetim kurulunu tatmin eden tarafsız, yasal olarak bağlayıcı stok raporları sunuyoruz.'
        },
        card3: {
          subtitle: '03 / ESNEKLİK',
          title: 'Gece Operasyonu',
          text: 'Mesai saatleri dışında devasa sayım filoları konuşlandırıyoruz, böylece mağazanız veya deponuz ertesi gün sıfır iş kaybıyla açılıyor.'
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
        subHeader: 'İşletmenizin ihtiyaçlarına özel kapsamlı envanter yönetimi çözümleri.',
        ctaTitle1: 'Operasyonlarınızı',
        ctaTitle2: 'Dönüştürün',
        ctaButton: 'İLETİŞİME GEÇİN',
        service1: {
          title: 'Periyodik Stok Sayımı',
          desc: 'Veri doğruluğunu korumak için düzenli planlı envanter denetimleri'
        },
        service2: {
          title: 'Bağımsız Denetim',
          desc: 'Tarafsız envanter doğrulaması için üçüncü taraf denetim'
        },
        service3: {
          title: 'Ürün Doğrulama',
          desc: 'Barkod kontrol ve ürün kimlik doğrulama hizmetleri'
        },
        service4: {
          title: 'Sayım Sonrası Raporlama',
          desc: 'Envanter tamamlandıktan sonra detaylı analiz ve raporlama'
        },
        service5: {
          title: 'Sayım Ekip Yönetimi',
          desc: 'Profesyonel ekip koordinasyonu ve süpervizyon'
        },
        service6: {
          title: 'Dönemsel İş Gücü Tedarik',
          desc: 'Sezonluk iş gücü ve personel tedarik hizmetleri'
        },
        service7: {
          title: 'Bordrolama Hizmetleri',
          desc: 'Sayım ekipleri için kapsamlı bordro yönetimi'
        },
        service8: {
          title: 'Demirbaş Sayımı',
          desc: 'Sabit kıymet envanteri ve amortisman takibi'
        }
      },
      footer: {
          desc: 'Profesyonel envanter denetimi ve stok sayım hizmetlerinde altın standart.',
          col1: 'Hizmetler',
          col1Links: ['Perakende Denetimleri', 'Depo Sayımları', 'Varlık Etiketleme', 'Tedarik Zinciri Onayı'],
          col2: 'Şirket',
          col2Links: ['ADS Hakkında', 'Kariyer', 'Sayım Talep Et', 'Yasal'],
          copyright: '© 2024 ADS Architectural Data Systems. Tüm Hakları Saklıdır.'
      }
    }
  };

  t = computed(() => this.dict[this.currentLang()]);
}