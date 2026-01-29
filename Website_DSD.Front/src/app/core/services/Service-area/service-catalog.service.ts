import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { Service, ServiceCategory } from './service.model';

@Injectable({
  providedIn: 'root',
})
export class ServiceCatalogService {
  private categories: ServiceCategory[] = [
    {
      category: 'Digital Strategy & Transformation',
      summary:
        'Combines Digital Transformation, Digital Consultancy, Management Consulting, and Consultancy (Proposals, Studies & Plans) into one advisory stream aligned with Vision 2030.',
      icon: 'fa-solid fa-chess-board ',
      services: [
        {
          title: 'Digital Transformation',
          name: 'Digital Transformation',
          description:
            'Drive innovation and efficiency by transitioning to digital processes and intelligent solutions. At Digital Solutions Dimensions, we focus on transforming traditional operations into agile, data-driven ecosystems that enhance performance, reduce costs, and create lasting value.',
          HowWeCanHelp:
            'Our expert team partners with your organization across every phase of transformation from assessment and roadmap design to technology deployment and continuous improvement. We identify high-impact opportunities, implement digital tools tailored to your needs, and provide staff training and post-implementation support.',
          icon: 'fa-solid fa-rotate',
          shape: 'assets/images/shape/service-item-shape.png',
          image: 'assets/images/service/digital-transformation.webp',
          defaultImage: 'assets/images/service/digital-transformation-blur.webp',
          benefits: [
            'Enhanced operational efficiency and workflow optimization',
            'Improved customer and user experience',
            'Data-driven decision-making and performance visibility',
            'Greater scalability and long-term business growth',
            'Stronger alignment with Vision 2030 digital objectives',
          ],
          faq: [
            {
              question: 'What is digital transformation?',
              answer:
                'Digital transformation is the process of integrating digital technology into all areas of business, fundamentally changing how organizations operate and deliver value to customers.',
            },
            {
              question: 'How long does digital transformation take?',
              answer:
                'The timeline varies based on the scope and complexity of the project, typically ranging from several months to a few years for comprehensive transformation.',
            },
          ],
        },
        {
          title: 'Digital Consulting',
          name: 'Digital Consulting',
          description:
            'Empower your organization with strategic digital consulting services that align technology with business goals. At Digital Solutions Dimensions, we provide expert guidance to help organizations navigate complex digital challenges, optimize their IT investments, and achieve long-term transformation success.',
          HowWeCanHelp:
            'We begin by assessing your current digital landscape, identifying strengths, challenges, and opportunities for improvement. Our team then designs a customized digital strategy that integrates technology, people, and processes to achieve measurable impact.',
          icon: 'fa-solid fa-handshake',
          shape: 'assets/images/shape/service-item-shape.png',
          image: 'assets/images/service/Digital-Consultant.webp',
          defaultImage: 'assets/images/service/Digital-Consultant-blur.webp',
          benefits: [
            'Expert guidance tailored to your organization\'s digital maturity',
            'Strategic technology planning and transformation roadmaps',
            'Improved alignment between business objectives and digital initiatives',
            'Optimized resource utilization and cost efficiency',
            'Greater agility and readiness for future technology trends',
          ],
          faq: [
            {
              question: 'What does a digital consultant do?',
              answer:
                'A digital consultant helps businesses develop and implement strategies to leverage technology effectively, bridging the gap between business objectives and technical solutions.',
            },
            {
              question: 'Do you provide ongoing consulting?',
              answer:
                'Yes, we offer both one-time consultations and ongoing support for digital strategy implementation and optimization.',
            },
          ],
        },
        {
          title: 'Management Consulting',
          name: 'Management Consulting',
          description:
            'Achieve organizational excellence with strategic management consulting that empowers leadership, optimizes resources, and drives sustainable performance. At Digital Solutions Dimensions, we provide data-driven consulting services designed to improve management practices, align business goals with operational execution, and enhance overall decision-making.',
          HowWeCanHelp:
            'We start by conducting a detailed assessment of your management framework and processes to identify performance gaps and improvement areas. Our consultants then design and implement strategies that enhance efficiency, optimize resource allocation, and strengthen leadership effectiveness.',
          icon: 'fa-solid fa-users-gear',
          shape: 'assets/images/shape/service-item-shape.png',
          image: 'assets/images/service/Management-Consulting.webp',
          defaultImage: 'assets/images/service/Management-Consulting-blur.webp',
          benefits: [
            'Improved operational and managerial efficiency',
            'Enhanced strategic planning and decision-making',
            'Data-driven insights for measurable business growth',
            'Stronger leadership and organizational alignment',
            'Increased profitability and sustainable performance',
          ],
          faq: [
            {
              question: 'What is management consulting?',
              answer:
                'Management consulting involves advising businesses on best practices and strategies to improve performance, optimize operations, and achieve organizational goals.',
            },
            {
              question: 'How can management consulting benefit my business?',
              answer:
                'It helps streamline operations, improve decision-making, enhance leadership capabilities, and align business goals with actionable strategies.',
            },
          ],
        },
        {
          title: 'Consultancy (Proposals, Studies & Plans)',
          name: 'Consultancy',
          description:
            'Delivering strategic consultancy services that empower organizations to make informed decisions, design effective plans, and achieve measurable outcomes. At Digital Solutions Dimensions, we provide end-to-end consulting support covering business proposals, feasibility studies, operational assessments, and strategic plans across multiple sectors.',
          HowWeCanHelp:
            'We partner with your organization to understand objectives, assess current conditions, and develop customized studies and strategic frameworks. Our experts prepare professional documentation, business cases, and execution plans designed to ensure clarity, impact, and sustainability.',
          icon: 'fa-solid fa-briefcase',
          shape: 'assets/images/shape/service-item-shape.png',
          image: 'assets/images/service/Consultancy.webp',
          defaultImage: 'assets/images/service/Consultancy.webp',
          benefits: [
            'Comprehensive proposals and feasibility studies tailored to your needs',
            'Data-backed insights supporting strategic and investment decisions',
            'Clear, actionable implementation roadmaps',
            'Improved project alignment with organizational objectives',
            'Enhanced efficiency, governance, and resource allocation',
          ],
          faq: [
            {
              question: 'What types of consulting services do you offer?',
              answer:
                'We offer feasibility studies, business plans, strategic roadmaps, operational assessments, RFP responses, and project proposals across technology and business domains.',
            },
            {
              question: 'How long does a typical consulting engagement take?',
              answer:
                'Duration varies based on scope and complexity, ranging from a few weeks for focused assessments to several months for comprehensive strategic planning.',
            },
          ],
        },
      ],
    },
    {
      category: 'Custom Software & Emerging Tech',
      summary:
        'Unifies Digital Solutions, Software Development, Artificial Intelligence (AI), Emerging Technologies, and Creative Ideas Development into one innovation engine.',
      icon: 'fa-solid fa-laptop-code',
      services: [
        {
          title: 'Digital Solutions',
          name: 'Digital Solutions',
          description:
            'We design and build customized digital solutions that streamline business operations, enhance productivity, and empower organizations to deliver greater value. At Digital Solutions Dimensions, we specialize in developing integrated platforms and applications that automate workflows, connect systems, and deliver real-time insights.',
          HowWeCanHelp:
            'Our experts collaborate with your team to analyze current challenges, design digital tools, and implement solutions that improve performance and customer satisfaction. We use modern development frameworks and agile methodologies to ensure rapid delivery, seamless integration, and long-term maintainability.',
          icon: 'fa-solid fa-laptop-code',
          shape: 'assets/images/shape/service-item-shape.png',
          image: 'assets/images/service/digital-solutions.webp',
          defaultImage: 'assets/images/service/digital-solutions-blur.webp',
          benefits: [
            'Tailored solutions designed around your exact business needs',
            'Streamlined operations and process automation',
            'Reduced operational costs and manual workload',
            'Real-time visibility and improved decision-making',
            'Scalable architecture that grows with your organization',
          ],
          faq: [
            {
              question: 'What types of digital solutions do you offer?',
              answer:
                'We offer enterprise systems, web applications, mobile apps, and digital workflow management systems tailored to your specific requirements.',
            },
            {
              question: 'Do you provide support after implementation?',
              answer:
                'Yes, we provide comprehensive post-implementation support including training, maintenance, and continuous optimization.',
            },
          ],
        },
        {
          title: 'Software Development',
          name: 'Software Development',
          description:
            'Transform your business operations with custom software solutions tailored to your unique requirements. At Digital Solutions Dimensions, we design, develop, and deploy robust, scalable, and user-friendly applications that streamline processes, enhance efficiency, and deliver exceptional user experiences.',
          HowWeCanHelp:
            'Our development team collaborates closely with your organization to understand challenges, define requirements, and build tailored software solutions. We follow agile development methodologies to ensure flexibility, transparency, and rapid delivery.',
          icon: 'fa-solid fa-code',
          shape: 'assets/images/shape/service-item-shape.png',
          image: 'assets/images/service/SoftwareDevelopment.webp',
          defaultImage: 'assets/images/service/SoftwareDevelopment.webp',
          benefits: [
            'Fully customized applications built around your business needs',
            'Seamless integration with existing systems and databases',
            'Improved efficiency and automation across departments',
            'Scalable architecture supporting future growth',
            'Enhanced user experience through modern, intuitive interfaces',
          ],
          faq: [
            {
              question: 'What types of applications do you develop?',
              answer:
                'We develop web applications, desktop software, mobile apps (iOS/Android), and enterprise systems tailored to your specific needs.',
            },
            {
              question: 'What is your development process?',
              answer:
                'We follow Agile methodology with iterative sprints, regular client feedback, continuous testing, and incremental delivery for faster time-to-market.',
            },
          ],
        },
        {
          title: 'Artificial Intelligence (AI)',
          name: 'Artificial Intelligence',
          description:
            'Unlock the power of artificial intelligence to transform how your organization operates, makes decisions, and delivers value. At Digital Solutions Dimensions, we develop AI-driven solutions that automate processes, analyze data intelligently, and enhance decision-making across industries.',
          HowWeCanHelp:
            'Our AI specialists work closely with your organization to identify areas where artificial intelligence can deliver measurable impact. We design and implement end-to-end AI solutions from data collection and model training to deployment and performance monitoring.',
          icon: 'fa-solid fa-robot',
          shape: 'assets/images/shape/service-item-shape.png',
          image: 'assets/images/service/Artificial-Intelligence.webp',
          defaultImage: 'assets/images/service/Artificial-Intelligence-blur.webp',
          benefits: [
            'Automation of repetitive and manual tasks',
            'Deeper data analysis and real-time business insights',
            'Enhanced customer experience through intelligent systems',
            'Predictive analytics for better strategic decisions',
            'Increased efficiency, speed, and innovation across operations',
          ],
          faq: [
            {
              question: 'What AI solutions do you offer?',
              answer:
                'We provide machine learning models, natural language processing, predictive analytics, computer vision, and intelligent automation solutions.',
            },
            {
              question: 'Is AI suitable for small businesses?',
              answer:
                'Yes, AI solutions can be tailored to fit businesses of all sizes and offer valuable efficiency gains and competitive advantages.',
            },
          ],
        },
        {
          title: 'Emerging Technologies',
          name: 'Emerging Technologies',
          description:
            'Stay ahead of the curve with emerging technology solutions that shape the future of digital innovation. At Digital Solutions Dimensions, we help organizations explore, adopt, and integrate next-generation technologies such as Internet of Things (IoT), Blockchain, Augmented Reality (AR), and Smart Automation.',
          HowWeCanHelp:
            'We begin by assessing your business readiness and identifying the technologies that offer the highest impact and ROI. Our experts then design customized implementation roadmaps, handle system integration, and ensure scalability and performance optimization.',
          icon: 'fa-solid fa-microchip',
          shape: 'assets/images/shape/service-item-shape.png',
          image: 'assets/images/service/Emerging-Technologies.webp',
          defaultImage: 'assets/images/service/Emerging-Technologies-blur.webp',
          benefits: [
            'Future-proof solutions that drive innovation and sustainability',
            'Enhanced operational capabilities through advanced technologies',
            'Greater adaptability to evolving market and digital trends',
            'Improved customer experience with immersive and intelligent systems',
            'Strategic advantage through early technology adoption',
          ],
          faq: [
            {
              question: 'What are emerging technologies?',
              answer:
                'Emerging technologies are new, innovative tech advancements such as IoT, blockchain, AR/VR, AI, and quantum computing that are reshaping industries.',
            },
            {
              question: 'How do you determine which technologies suit my business?',
              answer:
                'We analyze your business needs, goals, industry trends, and technical readiness to identify which emerging technologies offer the most benefit and value.',
            },
          ],
        },
        {
          title: 'Developing Creative Ideas',
          name: 'Creative Ideas',
          description:
            'Transform imagination into impact with creative innovation services that bring new ideas to life. At Digital Solutions Dimensions, we help organizations explore new possibilities, develop original concepts, and translate creativity into practical business solutions.',
          HowWeCanHelp:
            'Our experts work alongside your team to brainstorm, refine, and prototype creative concepts aligned with your brand vision and goals. We conduct research, analyze market trends, and transform abstract ideas into actionable strategies and tangible solutions.',
          icon: 'fa-solid fa-lightbulb',
          shape: 'assets/images/shape/service-item-shape.png',
          image: 'assets/images/service/creative-ideas.webp',
          defaultImage: 'assets/images/service/creative-ideas-blur.webp',
          benefits: [
            'Encourages innovation and creative problem-solving',
            'Strengthens brand identity and market differentiation',
            'Unlocks new business opportunities and growth avenues',
            'Enhances customer engagement through unique experiences',
            'Promotes a culture of continuous improvement and idea generation',
          ],
          faq: [
            {
              question: 'How do you develop creative ideas for businesses?',
              answer:
                'We combine industry research, brainstorming sessions, design thinking methodologies, and collaborative workshops to generate and refine creative ideas.',
            },
            {
              question: 'Can creativity really make a difference in business success?',
              answer:
                'Absolutely. Creative ideas differentiate your brand, capture attention, foster unique customer experiences, and drive innovation-led growth.',
            },
          ],
        },
      ],
    },
    {
      category: 'Data & Analytics Platform',
      summary:
        'Brings together Business Intelligence & Analytics and Data Transformation & Load (ETL) to cover ingestion, integration, and intelligent decisioning.',
      icon: 'fa-solid fa-chart-line',
      services: [
        {
          title: 'Business Intelligence & Analytics',
          name: 'BI & Analytics',
          description:
            'Turn data into decisions with advanced business intelligence and analytics solutions that empower organizations to make smarter, faster, and data-driven decisions. At Digital Solutions Dimensions, we help clients harness the power of their data through interactive dashboards, predictive analytics, and performance monitoring systems.',
          HowWeCanHelp:
            'Our BI specialists work with your team to design and implement customized data models, dashboards, and analytics frameworks tailored to your needs. We integrate diverse data sources into a unified platform, providing clear and interactive reports that support strategic decision-making.',
          icon: 'fa-solid fa-chart-line',
          shape: 'assets/images/shape/service-item-shape.png',
          image: 'assets/images/service/BI-Analytics.webp',
          defaultImage: 'assets/images/service/BI-Analytics.webp',
          benefits: [
            'Real-time access to accurate and actionable business data',
            'Enhanced decision-making based on analytics and trends',
            'Improved visibility into performance and operations',
            'Predictive insights that support growth and innovation',
            'Increased efficiency through automation of reporting and analysis',
          ],
          faq: [
            {
              question: 'What is Business Intelligence?',
              answer:
                'BI is the process of collecting, processing, and analyzing business data to provide actionable insights that support decision-making and strategic planning.',
            },
            {
              question: 'What tools do you use for BI?',
              answer:
                'We work with leading BI platforms including Power BI, Tableau, QlikView, and custom-built analytics solutions based on your requirements.',
            },
          ],
        },
        {
          title: 'Data Transformation & Load',
          name: 'Data Transformation & Load',
          description:
            'Ensure data accuracy, consistency, and reliability with Data Transformation and Load (ETL) services that empower intelligent decision-making. At Digital Solutions Dimensions, we specialize in building and managing ETL pipelines that extract, clean, transform, and load data across systems.',
          HowWeCanHelp:
            'We analyze your existing data sources and architecture to design tailored ETL solutions that meet your business intelligence needs. Our experts handle everything from data extraction and transformation logic to performance tuning and continuous monitoring.',
          icon: 'fa-solid fa-database',
          shape: 'assets/images/shape/service-item-shape.png',
          image: 'assets/images/service/DataTransformation&Load.webp',
          defaultImage: 'assets/images/service/DataTransformation&Load.webp',
          benefits: [
            'Centralized and clean data for analytics and reporting',
            'Improved data quality, integrity, and consistency',
            'Faster access to accurate business insights',
            'Simplified integration across systems and platforms',
            'Reduced manual effort through automated data workflows',
          ],
          faq: [
            {
              question: 'What is ETL?',
              answer:
                'ETL stands for Extract, Transform, Load — the process of extracting data from sources, transforming it into a usable format, and loading it into target systems for analysis.',
            },
            {
              question: 'Why is data transformation important?',
              answer:
                'Data transformation ensures data is accurate, consistent, and formatted correctly for analysis, enabling reliable reporting and informed decision-making.',
            },
          ],
        },
      ],
    },
    {
      category: 'Enterprise Platforms Implementation',
      summary:
        'Consolidates ERP, BPMS, ITSM, and LMS engagements into a single platform practice for packaged solutions.',
      icon: 'fa-solid fa-diagram-project',
      services: [
        {
          title: 'ERP (Enterprise Resource Planning)',
          name: 'ERP',
          description:
            'Streamline and unify your business operations with comprehensive ERP solutions that integrate all your core functions into a single, efficient system. At Digital Solutions Dimensions, we design and implement ERP platforms that connect finance, HR, supply chain, inventory, and operations.',
          HowWeCanHelp:
            'Our ERP experts collaborate with your organization to analyze your business processes and design a system that fits your exact operational needs. We provide end-to-end services from planning and customization to deployment, training, and ongoing support.',
          icon: 'fa-solid fa-cogs',
          shape: 'assets/images/shape/service-item-shape.png',
          image: 'assets/images/service/ERP.webp',
          defaultImage: 'assets/images/service/ERP.webp',
          benefits: [
            'Centralized management of all business operations',
            'Improved efficiency and reduced manual processes',
            'Real-time reporting and performance visibility',
            'Better resource planning and cost control',
            'Scalable architecture supporting growth and expansion',
          ],
          faq: [
            {
              question: 'What ERP systems do you implement?',
              answer:
                'We implement leading ERP solutions including SAP, Oracle, Microsoft Dynamics, and custom ERP systems tailored to specific industry needs.',
            },
            {
              question: 'How long does ERP implementation take?',
              answer:
                'Implementation timeline varies based on organization size and complexity, typically ranging from 6 months to 2 years for comprehensive deployment.',
            },
          ],
        },
        {
          title: 'BPMS (Business Process Management System)',
          name: 'BPMS',
          description:
            'Optimize and automate your organizational workflows with Business Process Management System (BPMS) solutions that enhance efficiency, transparency, and control. At Digital Solutions Dimensions, we design intelligent BPMS platforms that map, monitor, and improve business processes across departments.',
          HowWeCanHelp:
            'We start by analyzing your current workflows and identifying areas for automation and improvement. Our team then designs and deploys a tailored BPMS that integrates seamlessly with your existing systems.',
          icon: 'fa-solid fa-project-diagram',
          shape: 'assets/images/shape/service-item-shape.png',
          image: 'assets/images/service/BusinessProcessManagementSystem.webp',
          defaultImage: 'assets/images/service/BusinessProcessManagementSystem.webp',
          benefits: [
            'Streamlined workflows and reduced manual effort',
            'Improved process visibility and control',
            'Faster decision-making with real-time performance tracking',
            'Increased compliance and accountability',
            'Flexibility to modify and scale processes as business evolves',
          ],
          faq: [
            {
              question: 'What is BPMS?',
              answer:
                'BPMS is a system for modeling, automating, executing, controlling, measuring, and optimizing business processes to improve organizational efficiency.',
            },
            {
              question: 'How does BPMS differ from workflow management?',
              answer:
                'BPMS is more comprehensive, covering the entire process lifecycle including design, analysis, execution, and continuous improvement, while workflow focuses primarily on task routing.',
            },
          ],
        },
        {
          title: 'ITSM (IT Service Management)',
          name: 'ITSM',
          description:
            'Enhance the quality, efficiency, and reliability of your IT operations with IT Service Management (ITSM) solutions designed to align technology services with business objectives. At Digital Solutions Dimensions, we help organizations establish structured IT service frameworks based on international best practices such as ITIL.',
          HowWeCanHelp:
            'We assess your existing IT processes, identify areas for improvement, and design an ITSM framework that enhances operational efficiency. Our solutions include incident management, change control, service request handling, and configuration management.',
          icon: 'fa-solid fa-server',
          shape: 'assets/images/shape/service-item-shape.png',
          image: 'assets/images/service/ITServiceManagement.webp',
          defaultImage: 'assets/images/service/ITServiceManagement.webp',
          benefits: [
            'Standardized IT processes aligned with global best practices',
            'Improved response time and issue resolution efficiency',
            'Greater visibility and control over IT operations',
            'Increased end-user satisfaction and productivity',
            'Continuous improvement through data-driven performance insights',
          ],
          faq: [
            {
              question: 'What is ITSM?',
              answer:
                'ITSM is the implementation and management of quality IT services that meet business needs through structured processes and best practices.',
            },
            {
              question: 'Why is ITIL important?',
              answer:
                'ITIL provides a proven framework for ITSM, helping organizations deliver consistent, high-quality IT services aligned with business objectives.',
            },
          ],
        },
        {
          title: 'LMS (Learning Management System)',
          name: 'LMS',
          description:
            'Empower education and training with Learning Management System (LMS) solutions that deliver, track, and enhance learning experiences efficiently. At Digital Solutions Dimensions, we develop advanced LMS platforms designed for schools, universities, and corporate institutions.',
          HowWeCanHelp:
            'We work closely with your educational or training institution to design and implement a tailored LMS that fits your specific goals. Our experts ensure seamless integration with existing systems, provide training for instructors and administrators, and deliver continuous support.',
          icon: 'fa-solid fa-graduation-cap',
          shape: 'assets/images/shape/service-item-shape.png',
          image: 'assets/images/service/LearningManagementSystem.webp',
          defaultImage: 'assets/images/service/LearningManagementSystem.webp',
          benefits: [
            'Centralized platform for course delivery and learner management',
            'Enhanced accessibility for students and trainees anytime, anywhere',
            'Real-time performance tracking and assessment reports',
            'Integration with e-learning tools and digital content repositories',
            'Scalable, secure, and user-friendly interface for all users',
          ],
          faq: [
            {
              question: 'What features does your LMS include?',
              answer:
                'Our LMS includes course management, content delivery, assessments, gradebook, reporting, video conferencing integration, and mobile access.',
            },
            {
              question: 'Can the LMS be customized?',
              answer:
                'Yes, we customize the LMS to match your branding, workflows, assessment methods, and specific educational requirements.',
            },
          ],
        },
      ],
    },
    {
      category: 'Managed IT & Cloud Operations',
      summary:
        'Covers Cloud Computing, IT Infrastructure Management, Technical Support, Hardware Supply, and Software Licensing within one managed services pillar.',
      icon: 'fa-solid fa-cloud-arrow-up',
      services: [
        {
          title: 'Cloud Computing',
          name: 'Cloud Computing',
          description:
            'Empower your organization with scalable, secure, and cost-effective cloud computing solutions that optimize performance and enhance flexibility. At Digital Solutions Dimensions, we design and implement advanced cloud infrastructures that enable seamless collaboration, reduce hardware dependency, and ensure business continuity.',
          HowWeCanHelp:
            'Our cloud specialists assess your existing IT environment, identify suitable cloud models (public, private, or hybrid), and create a seamless migration strategy. We handle every step from infrastructure setup and data migration to security configuration and post-deployment optimization.',
          icon: 'fa-solid fa-cloud',
          shape: 'assets/images/shape/service-item-shape.png',
          image: 'assets/images/service/Cloud-Computing.webp',
          defaultImage: 'assets/images/service/Cloud-Computing.webp',
          benefits: [
            'Flexible scalability to match business demands',
            'Reduced infrastructure and maintenance costs',
            'Enhanced data security and compliance',
            'Business continuity with backup and disaster recovery solutions',
            'Improved collaboration and remote accessibility',
          ],
          faq: [
            {
              question: 'What cloud platforms do you work with?',
              answer:
                'We work with leading cloud platforms including Microsoft Azure, Amazon Web Services (AWS), and Alibaba Cloud.',
            },
            {
              question: 'Is cloud computing secure?',
              answer:
                'Yes, when properly configured. We implement multiple security layers, encryption, access controls, and compliance measures to ensure data protection.',
            },
          ],
        },
        {
          title: 'IT Infrastructure Management',
          name: 'IT Infrastructure Management',
          description:
            'Ensure reliability, performance, and scalability with end-to-end IT infrastructure management services that keep your business running seamlessly. At Digital Solutions Dimensions, we design, implement, and maintain robust infrastructure environments that support mission-critical operations.',
          HowWeCanHelp:
            'We begin by assessing your existing infrastructure to identify gaps, inefficiencies, and upgrade opportunities. Our engineers then design and deploy optimized systems using advanced monitoring tools and automation to ensure stability and performance.',
          icon: 'fa-solid fa-network-wired',
          shape: 'assets/images/shape/service-item-shape.png',
          image: 'assets/images/service/ITInfrastructureManagement.webp',
          defaultImage: 'assets/images/service/ITInfrastructureManagement.webp',
          benefits: [
            'Reliable and high-performance IT environments',
            'Reduced downtime and faster issue resolution',
            'Optimized infrastructure costs and resource utilization',
            'Enhanced system scalability and future readiness',
            'Proactive monitoring and 24/7 technical support',
          ],
          faq: [
            {
              question: 'What does IT infrastructure management include?',
              answer:
                'It includes servers, networks, storage, virtualization, cloud integration, monitoring, maintenance, and security management.',
            },
            {
              question: 'Do you provide on-site support?',
              answer:
                'Yes, we provide both remote and on-site support based on your needs and service level agreement.',
            },
          ],
        },
        {
          title: 'IT Support & Maintenance',
          name: 'Technical Support',
          description:
            'Keep your systems running smoothly with comprehensive IT support and maintenance services designed to ensure reliability, performance, and business continuity. At Digital Solutions Dimensions, we provide proactive monitoring, timely troubleshooting, and regular maintenance to minimize downtime.',
          HowWeCanHelp:
            'Our support team provides end-to-end assistance, including hardware and software maintenance, network troubleshooting, and performance optimization. We offer on-site and remote support, ensuring your critical systems remain operational around the clock.',
          icon: 'fa-solid fa-screwdriver-wrench',
          shape: 'assets/images/shape/service-item-shape.png',
          image: 'assets/images/service/TechnicalSupport.webp',
          defaultImage: 'assets/images/service/TechnicalSupport.webp',
          benefits: [
            'Continuous system monitoring and proactive issue prevention',
            'Faster response times and minimized downtime',
            'Improved system performance and stability',
            'Extended lifespan of IT assets and infrastructure',
            'Dedicated technical experts available 24/7',
          ],
          faq: [
            {
              question: 'What support levels do you offer?',
              answer:
                'We offer multiple support tiers including basic support (business hours), premium support (24/7), and dedicated support with assigned engineers.',
            },
            {
              question: 'How quickly do you respond to issues?',
              answer:
                'Response times vary by support level and issue severity, ranging from immediate response for critical issues to within 24 hours for low-priority requests.',
            },
          ],
        },
        {
          title: 'Supply IT Infrastructure Hardware',
          name: 'SupplyIT',
          description:
            'Empowering organizations with robust, reliable, and scalable IT infrastructure solutions that form the backbone of their digital operations. At Digital Solutions Dimensions, we supply, configure, and maintain high-performance hardware from the world\'s leading technology manufacturers.',
          HowWeCanHelp:
            'We assess your IT environment to design and implement optimized hardware infrastructure that supports long-term growth and operational continuity. From procurement and installation to configuration and after-sales support, our certified engineers ensure every component operates at peak efficiency.',
          icon: 'fa-solid fa-box',
          shape: 'assets/images/shape/service-item-shape.png',
          image: 'assets/images/service/SupplyITInfrastructureHardware.webp',
          defaultImage: 'assets/images/service/SupplyITInfrastructureHardware.webp',
          benefits: [
            'Access to globally recognized hardware brands',
            'Seamless integration and compatibility across systems',
            'Enhanced performance, reliability, and scalability',
            'Reduced downtime through proactive setup and support',
            'Tailored hardware solutions aligned with your infrastructure strategy',
          ],
          faq: [
            {
              question: 'What types of hardware do you supply?',
              answer:
                'We supply servers, storage systems, networking equipment, security devices, data center infrastructure, and related IT hardware from leading manufacturers.',
            },
            {
              question: 'Do you provide installation and configuration?',
              answer:
                'Yes, we provide complete turnkey solutions including delivery, installation, configuration, testing, and integration with your existing systems.',
            },
          ],
        },
        {
          title: 'Software License Supply & Installation',
          name: 'Software Licensing',
          description:
            'Delivering trusted, compliant, and optimized software licensing solutions that ensure your organization operates efficiently and securely. At Digital Solutions Dimensions, we supply and install a wide range of licensed software products from leading global vendors.',
          HowWeCanHelp:
            'We start by assessing your operational environment and identifying software requirements across departments. Our experts handle procurement, deployment, and activation with precision ensuring smooth integration and minimal disruption.',
          icon: 'fa-solid fa-certificate',
          shape: 'assets/images/shape/service-item-shape.png',
          image: 'assets/images/service/SoftwareLicenseSupply&Installation.webp',
          defaultImage: 'assets/images/service/SoftwareLicenseSupply&Installation.webp',
          benefits: [
            'Genuine and fully compliant software licenses',
            'Optimized license management and cost efficiency',
            'Seamless installation, configuration, and integration',
            'Reduced security and compliance risks',
            'Continuous updates, maintenance, and technical support',
          ],
          faq: [
            {
              question: 'What software licenses do you provide?',
              answer:
                'We provide licenses for operating systems, productivity suites, design software, databases, security solutions, and enterprise applications from major vendors.',
            },
            {
              question: 'Do you help with license management?',
              answer:
                'Yes, we provide license management services including tracking, renewal reminders, compliance audits, and optimization recommendations.',
            },
          ],
        },
      ],
    },
    {
      category: 'Security & Compliance',
      summary:
        'Keeps Cybersecurity Services as a standalone pillar covering governance, protection, and awareness.',
      icon: 'fa-solid fa-shield-halved',
      services: [
        {
          title: 'Cybersecurity Services',
          name: 'Cybersecurity',
          description:
            'Protect your organization\'s digital assets with comprehensive cybersecurity solutions that ensure resilience against evolving threats. At Digital Solutions Dimensions, we deliver advanced security services designed to safeguard your data, networks, and systems from cyberattacks, unauthorized access, and operational disruptions.',
          HowWeCanHelp:
            'Our cybersecurity specialists assess your current infrastructure, identify vulnerabilities, and design a tailored security framework aligned with your industry standards. We implement multi-layered protection measures including firewalls, intrusion detection systems, endpoint security, and incident response plans.',
          icon: 'fa-solid fa-shield-halved',
          shape: 'assets/images/shape/service-item-shape.png',
          image: 'assets/images/service/Cybersecurity.webp',
          defaultImage: 'assets/images/service/Cybersecurity.webp',
          benefits: [
            'Enhanced protection against cyber threats and vulnerabilities',
            'Continuous monitoring and threat detection',
            'Improved data integrity, privacy, and regulatory compliance',
            'Minimized downtime through proactive risk management',
            'Strengthened customer trust and organizational resilience',
          ],
          faq: [
            {
              question: 'What cybersecurity services do you provide?',
              answer:
                'We provide security assessments, penetration testing, security monitoring, incident response, compliance management, and security awareness training.',
            },
            {
              question: 'How often should we update our security measures?',
              answer:
                'Security should be continuously monitored and updated. We recommend regular assessments, quarterly reviews, and immediate updates when new threats emerge.',
            },
          ],
        },
      ],
    },
    {
      category: 'Education & Capacity Building',
      summary:
        'Groups Training the Trainers (TTT) and Curriculum development under one education practice.',
      icon: 'fa-solid fa-graduation-cap',
      services: [
        {
          title: 'Training the Trainers (TTT)',
          name: 'Training the Trainers (TTT)',
          description:
            'Empower educators and professionals with Training the Trainers (TTT) programs designed to enhance teaching quality, instructional techniques, and digital readiness. At Digital Solutions Dimensions, we develop and deliver specialized training frameworks that equip trainers with the skills, tools, and methodologies needed to lead effective learning experiences.',
          HowWeCanHelp:
            'We collaborate with educational institutions and training centers to design customized TTT programs that address specific needs and disciplines. Our experts provide interactive workshops, digital tools, and continuous evaluation to ensure measurable improvement in trainer performance.',
          icon: 'fa-solid fa-chalkboard-teacher',
          shape: 'assets/images/shape/service-item-shape.png',
          image: 'assets/images/service/TrainingtheTrainers.webp',
          defaultImage: 'assets/images/service/TrainingtheTrainers.webp',
          benefits: [
            'Enhanced teaching effectiveness and instructional quality',
            'Improved communication and learner engagement skills',
            'Integration of modern technologies into training delivery',
            'Standardized teaching practices aligned with global benchmarks',
            'Capacity building for sustainable knowledge transfer',
          ],
          faq: [
            {
              question: 'Who can participate in TTT programs?',
              answer:
                'TTT programs are designed for graduating instructors, experienced educators, corporate trainers, and anyone responsible for teaching or training others.',
            },
            {
              question: 'What certification is provided?',
              answer:
                'Participants receive internationally recognized certification upon successful completion, validating their enhanced training competencies.',
            },
          ],
        },
        {
          title: 'Curriculums',
          name: 'Curriculums',
          description:
            'Design and develop modern, technology-enabled curriculums that align with academic standards, industry needs, and future skills. At Digital Solutions Dimensions, we create customized curriculum frameworks for schools, universities, and training institutions integrating innovation, interactivity, and digital learning tools.',
          HowWeCanHelp:
            'We collaborate with educators, subject matter experts, and instructional designers to create tailored curriculums that meet your institution\'s goals. Our team ensures balance between academic rigor, technological innovation, and learner-centered design.',
          icon: 'fa-solid fa-book-open',
          shape: 'assets/images/shape/service-item-shape.png',
          image: 'assets/images/service/Curriculums.webp',
          defaultImage: 'assets/images/service/Curriculums.webp',
          benefits: [
            'Curriculums aligned with national and international education standards',
            'Integration of digital tools and interactive content',
            'Enhanced learner engagement and knowledge retention',
            'Flexibility to adapt to different educational levels and disciplines',
            'Promotion of creativity, critical thinking, and innovation',
          ],
          faq: [
            {
              question: 'What types of curriculums do you develop?',
              answer:
                'We develop vocational, technical, academic, and competency-based curricula tailored to institutional needs and international accreditation requirements.',
            },
            {
              question: 'Do you provide psychometric test development?',
              answer:
                'Yes, we create standardized psychometric assessments based on global measurement and evaluation practices.',
            },
          ],
        },
      ],
    },
    {
      category: 'Digital Marketing & Experience',
      summary:
        'Merges Search Engine Optimization (SEO), Events & Advertising, and creative storytelling into a unified experience practice.',
      icon: 'fa-solid fa-bullhorn',
      services: [
        {
          title: 'Search Engine Optimization (SEO)',
          name: 'SEO',
          description:
            'Boost your organization\'s online visibility and digital presence through strategic, data-driven SEO solutions. At Digital Solutions Dimensions, we implement modern optimization techniques that align with the latest search engine algorithms, ensuring your website ranks higher, attracts the right audience, and achieves measurable results.',
          HowWeCanHelp:
            'Our SEO experts begin by conducting an in-depth website and keyword analysis to identify improvement opportunities. We then develop a tailored SEO strategy that includes technical audits, content optimization, link-building, and analytics reporting.',
          icon: 'fa-solid fa-magnifying-glass-chart',
          shape: 'assets/images/shape/service-item-shape.png',
          image: 'assets/images/service/Search-Engine-Optimization.webp',
          defaultImage: 'assets/images/service/Search-Engine-Optimization-blur.webp',
          benefits: [
            'Increased website visibility and higher search rankings',
            'Enhanced website traffic and qualified leads',
            'Improved brand credibility and digital reputation',
            'Long-term organic growth and lower advertising costs',
            'Continuous performance tracking and SEO insights',
          ],
          faq: [
            {
              question: 'How long does it take to see SEO results?',
              answer:
                'Typically, significant SEO results become visible within 3-6 months, though this varies based on competition and current website status.',
            },
            {
              question: 'Do you guarantee first-page rankings?',
              answer:
                'While we cannot guarantee specific rankings due to search engine algorithm complexity, we follow proven strategies to maximize your visibility and organic traffic.',
            },
          ],
        },
        {
          title: 'Events & Advertisement',
          name: 'Events & Advertising',
          description:
            'Delivering integrated event management and digital advertising solutions that enhance brand visibility and engagement. At Digital Solutions Dimensions, we plan, organize, and promote events both physical and virtual using creative digital strategies and advanced marketing technologies.',
          HowWeCanHelp:
            'We combine creative storytelling with technology-driven marketing tools to design events and campaigns that leave a lasting impression. Our experts handle every detail from venue management and media coverage to digital advertising and post-event analytics.',
          icon: 'fa-solid fa-bullhorn',
          shape: 'assets/images/shape/service-item-shape.png',
          image: 'assets/images/service/Digitaladvertisingsolutions.webp',
          defaultImage: 'assets/images/service/Digitaladvertisingsolutions.webp',
          benefits: [
            'Comprehensive event planning, branding, and execution',
            'Enhanced digital reach through targeted advertising campaigns',
            'Creative content development and visual design for promotions',
            'Real-time engagement tracking and performance analysis',
            'Increased audience interaction and brand recognition',
          ],
          faq: [
            {
              question: 'What types of events do you organize?',
              answer:
                'We organize conferences, exhibitions, product launches, webinars, workshops, and corporate events both in-person and virtual.',
            },
            {
              question: 'Do you provide post-event analysis?',
              answer:
                'Yes, we provide comprehensive post-event reports including attendance metrics, engagement analytics, ROI analysis, and recommendations for future events.',
            },
          ],
        },
      ],
    },
  ];

  private services: Service[] = this.categories.flatMap((category) => category.services);

  getServiceCategories(): Observable<ServiceCategory[]> {
    return of(this.categories);
  }

  getServiceByName(name: string): Observable<Service> {
    return of(this.services.find((service) => service.name === name)).pipe(
      map((service) => {
        if (!service) {
          throw new Error(`Service with name '${name}' not found.`);
        }
        return service;
      }),
      catchError((error) => throwError(() => `Error: ${error.message}`))
    );
  }

  getAllServices(): Observable<Service[]> {
    return of(this.services);
  }

  findCategoryByServiceName(name: string): ServiceCategory | undefined {
    return this.categories.find((category) =>
      category.services.some((service) => service.name === name)
    );
  }
}
