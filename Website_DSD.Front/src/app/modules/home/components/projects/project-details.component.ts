import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { DemoRequestDialogComponent } from './demo-request-dialog.component';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {
  project: any;
  projectName: string = '';

  chartBars: number[] = [40, 65, 35, 80, 50, 90, 70];

  projectsData: any = {
    'system-management': {
      titleAr: 'إدارة النظام',
      titleEn: 'System Management',
      descriptionAr:
        'إدارة شاملة لأنظمة المؤسسة مع التحكم في الصلاحيات والإعدادات والتكوينات.',
      descriptionEn:
        'Comprehensive management of enterprise systems with control over permissions, settings, and configurations.',
      icon: '🗄️',
      color: 'linear-gradient(195deg, #00adb1 -59.59%, #77479b 120%)',
      image: 'assets/images/projects/system-mangment-5.png',
      features: [
        {
          ar: 'التحكم في صلاحيات المستخدمين',
          en: 'User permissions control',
          icon: 'fa-solid fa-user-shield',
          descriptionAr:
            'نظام متكامل لإدارة الأدوار والصلاحيات يسمح لك بتحديد من يمكنه الوصول إلى ماذا، مع إمكانية إنشاء أدوار مخصصة لكل قسم.',
          descriptionEn:
            'An integrated role and permission management system that allows you to define who can access what, with the ability to create custom roles for each department.',
        },
        {
          ar: 'إدارة الإعدادات والتكوينات',
          en: 'Settings & configurations',
          icon: 'fa-solid fa-sliders',
          descriptionAr:
            'لوحة تحكم مركزية تمكنك من ضبط إعدادات النظام مثل البريد الإلكتروني، والإشعارات، والمظهر، دون الحاجة للتعامل مع قاعدة البيانات مباشرة.',
          descriptionEn:
            'A centralized control panel that allows you to adjust system settings such as email, notifications, and appearance without touching the database.',
        },
        {
          ar: 'مراقبة أداء النظام',
          en: 'System performance monitoring',
          icon: 'fa-solid fa-chart-line',
          descriptionAr:
            'رسوم بيانية حية تعرض استهلاك المعالج، الذاكرة، وعدد المستخدمين النشطين، مع إمكانية إعداد تنبيهات فورية عند تجاوز الحدود.',
          descriptionEn:
            'Live graphs showing CPU usage, memory, and active users, with the ability to set instant alerts when thresholds are exceeded.',
        },
        {
          ar: 'نسخ احتياطي واستعادة',
          en: 'Backup & recovery',
          icon: 'fa-solid fa-database',
          descriptionAr:
            'جدولة تلقائية لعمل نسخ احتياطية لقاعدة البيانات والملفات، وإمكانية استعادتها بنقرة واحدة مع دعم التخزين السحابي.',
          descriptionEn:
            'Automatic scheduling for database and file backups, and the ability to restore them with one click, with cloud storage support.',
        },
        {
          ar: 'إدارة المستخدمين والأدوار',
          en: 'Users & roles management',
          icon: 'fa-solid fa-users-gear',
          descriptionAr:
            'إضافة وتعديل وحذف المستخدمين، وتعيين صلاحياتهم بناءً على أدوار محددة مسبقاً (مدير، مشرف، مستخدم عادي).',
          descriptionEn:
            'Add, edit, and delete users, assign their permissions based on predefined roles (Admin, Supervisor, Regular User).',
        },
        {
          ar: 'سجلات النشاط',
          en: 'Activity logs',
          icon: 'fa-solid fa-list-check',
          descriptionAr:
            'تسجيل كل عملية داخل النظام (من قام بها، متى، ومن أي IP) لتوفير مسار تدقيق كامل للأمان والشفافية.',
          descriptionEn:
            'Log every action inside the system (who did it, when, and from which IP) to provide a complete audit trail for security and transparency.',
        },
      ],
      steps: [
        {
          num: '01',
          titleAr: 'التحليل',
          titleEn: 'Analysis',
          descAr: 'دراسة احتياجات النظام',
          descEn: 'Studying system requirements',
          detailDescAr:
            'نقوم في هذه المرحلة بجمع المتطلبات التقنية والإدارية للمؤسسة.',
          detailDescEn:
            'In this stage, we collect the technical and administrative requirements of the organization.',
        },
        {
          num: '02',
          titleAr: 'التكوين',
          titleEn: 'Configuration',
          descAr: 'ضبط الإعدادات',
          descEn: 'Settings Adjustment',
          detailDescAr: 'إعداد الخوادم وتوزيع الصلاحيات البرمجية لكل قسم.',
          detailDescEn:
            'Setting up servers and distributing software permissions for each department.',
        },
        {
          num: '03',
          titleAr: 'التدريب',
          titleEn: 'Training',
          descAr: 'تأهيل الموظفين',
          descEn: 'Employee Qualification',
          detailDescAr:
            'تقديم ورش عمل تدريبية للمستخدمين لضمان كفاءة الاستخدام.',
          detailDescEn:
            'Providing training workshops for users to ensure efficient usage.',
        },
        {
          num: '04',
          titleAr: 'التشغيل',
          titleEn: 'Operation',
          descAr: 'الإطلاق الفعلي',
          descEn: 'Live Launch',
          detailDescAr: 'بدء العمل الفعلي مع مراقبة حية لأداء النظام.',
          detailDescEn:
            'Commencing actual work with live monitoring of system performance.',
        },
      ],
      faqs: [
        {
          questionAr: 'هل يمكن تخصيص المنصة حسب احتياجاتنا؟',
          questionEn: 'Can the platform be customized to our needs?',
          answerAr:
            'نعم، المنصة مصممة لتكون مرنة وقابلة للتخصيص بالكامل لتناسب متطلبات عملك الخاصة.',
          answerEn:
            'Yes, the platform is designed to be flexible and fully customizable to suit your specific business requirements.',
          open: false,
        },
        {
          questionAr: 'كم يستغرق وقت التطبيق؟',
          questionEn: 'How long does the implementation take?',
          answerAr:
            'تعتمد مدة التنفيذ على حجم المؤسسة والمتطلبات، ولكن غالباً ما يستغرق الإعداد الأولي والتشغيل من 2 إلى 4 أسابيع.',
          answerEn:
            'The implementation time depends on the organization size and requirements, but usually, initial setup and launch take between 2 to 4 weeks.',
          open: false,
        },
        {
          questionAr: 'هل تدعم المنصة اللغة الإنجليزية؟',
          questionEn: 'Does the platform support English?',
          answerAr:
            'بالتأكيد، المنصة تدعم الواجهات ثنائية اللغة (العربية والإنجليزية) بشكل كامل مع دعم اتجاهات النص RTL و LTR.',
          answerEn:
            'Certainly, the platform fully supports bilingual interfaces (Arabic and English) with full support for RTL and LTR text directions.',
          open: false,
        },

        {
          questionAr: 'هل تقدمون تدريب للمستخدمين؟',
          questionEn: 'Do you provide training for users?',
          answerAr:
            'نعم، نقدم جلسات تدريبية شاملة للموظفين والمسؤولين عن النظام لضمان الاستخدام الأمثل لجميع خصائص المنصة.',
          answerEn:
            'Yes, we provide comprehensive training sessions for employees and system administrators to ensure optimal use of all platform features.',
          open: false,
        },
      ],
      images: [
        {
          url: 'assets/images/projects/system-mangment-6.png',
          titleAr: 'لوحة تحكم إدارة النظام',
          titleEn: 'System Management Dashboard',
          descriptionAr:
            'واجهة رئيسية متكاملة تعرض جميع إعدادات النظام، صلاحيات المستخدمين، ومؤشرات الأداء الرئيسية في مكان واحد.',
          descriptionEn:
            'Integrated main interface displaying all system settings, user permissions, and key performance indicators in one place.',
        },
        {
          url: 'assets/images/projects/system-mangment-5.png',
          titleAr: 'إدارة الصلاحيات والأدوار',
          titleEn: 'Permissions & Roles Management',
          descriptionAr:
            'لوحة تحكم متقدمة تمكنك من توزيع الصلاحيات وإنشاء أدوار مخصصة للمستخدمين حسب متطلبات المؤسسة.',
          descriptionEn:
            'Advanced control panel enabling you to distribute permissions and create custom user roles according to organizational requirements.',
        },
        {
          url: 'assets/images/projects/system-mangment-5.png',
          titleAr: 'مراقبة أداء النظام',
          titleEn: 'System Performance Monitoring',
          descriptionAr:
            'رسوم بيانية حية ومؤشرات دقيقة لاستهلاك الموارد، أداء الخوادم، ونشاط المستخدمين في الوقت الفعلي.',
          descriptionEn:
            'Live charts and precise indicators for resource consumption, server performance, and real-time user activity.',
        },
        {
          url: 'assets/images/projects/system-mangment-6.png',
          titleAr: 'تقارير النظام وسجلات النشاط',
          titleEn: 'System Reports & Activity Logs',
          descriptionAr:
            'تقارير شاملة وسجلات مفصلة لجميع العمليات التي تتم على النظام لضمان الشفافية والأمان.',
          descriptionEn:
            'Comprehensive reports and detailed logs of all system operations to ensure transparency and security.',
        },
      ],
      video: 'assets/videos/projects/demo.mp4',
    },

    'digital-indicators': {
      titleAr: 'المؤشرات الرقمية',
      titleEn: 'Digital Indicators',
      shortTitleAr: 'مؤشراتك الرقمية',
      shortTitleEn: 'Your Digital Indicators',
     descriptionAr:
  'نظام ذكي لإدارة ومتابعة مؤشرات الأداء الرقمية وقياس مستوى الالتزام والتقدم وفق المعايير والضوابط التنظيمية. يتيح تتبع وتحليل المؤشرات الرئيسية عبر لوحات معلومات تفاعلية وتقارير ذكية.',

descriptionEn:
  'An intelligent system for managing and monitoring digital performance indicators, measuring compliance and progress according to regulatory standards. It enables tracking and analyzing key indicators through interactive dashboards and smart reports.',
      icon: '📊',
      color: 'linear-gradient(195deg, #00adb1 -59.59%, #77479b 120%)',
      image: 'assets/images/projects/ind-11.png',
  aboutfeatures: [
  {
    ar: 'إدارة المؤشرات والمعايير',
    en: 'KPI and standards management',
  },
  {
    ar: 'متابعة الإنجاز والالتزام',
    en: 'Tracking performance and compliance',
  },
  {
    ar: 'إدارة الملفات والمتطلبات',
    en: 'File and requirements management',
  },
  {
    ar: 'لوحات تحليل وتقارير ذكية',
    en: 'Smart analytics dashboards and reports',
  },
],
  features: [
  {
    ar: 'بناء وهيكلة ضوابط النظام شجرياً',
    en: 'Hierarchical Controls Tree Architecture',
    icon: 'hgi hgi-stroke hgi-rounded hgi-git-branch',
    descriptionAr:
      'بناء وتعديل شجرة الضوابط والضوابط الفرعية بشكل تفاعلي مرن مع إمكانية التحكم في أبعاد العرض والاتجاهات.',
    descriptionEn:
      'Interactively construct and modify the hierarchical tree of controls and sub-controls, with full control over card dimensions and orientation.',
  },
  {
    ar: 'إدارة الدروس المستفادة والحقول الخاصة',
    en: 'Lessons Learned & Custom Fields Management',
    icon: 'hgi hgi-stroke hgi-rounded hgi-folder-add',
    descriptionAr:
      'لوحة تحكم ديناميكية لإنشاء وتخصيص مجموعات الحقول وتحديد نوع البيانات (نص، قائمة منسدلة، تاريخ) وترتيبها.',
    descriptionEn:
      'Dynamic control panel to create and customize field groups, specifying data types (text, dropdown, date) and sorting options.',
  },
  {
    ar: 'تدقيق حقول الضوابط وإدخال البيانات',
    en: 'Control Fields Validation & Data Entry',
    icon: 'hgi hgi-stroke hgi-rounded hgi-task-edit-01',
    descriptionAr:
      'شاشة مخصصة لتعبئة وتدقيق البيانات للحقول الإلزامية والاختيارية لكل ضابط مع شجرة تصفح جانبية سريعة.',
    descriptionEn:
      'Dedicated screen for entering and validating data for mandatory and optional custom fields with a quick sidebar navigation tree.',
  },
  {
    ar: 'تتبع مسارات الضوابط وهيكلتها',
    en: 'Control Path & Progress Tracking',
    icon: 'hgi hgi-stroke hgi-rounded hgi-settings-01',
    descriptionAr:
      'عرض تفصيلي لمسار الضوابط الهيكلية والانتقال السلس بين المستويات الفرعية لضمان حوكمة تسلسل الإجراءات.',
    descriptionEn:
      'Detailed visualization of structural control paths and smooth navigation between sub-levels to ensure process sequence governance.',
  },
  {
    ar: 'تحديث دوري لبيانات الحقول',
    en: 'Real-time Field Data Synchronization',
    icon: 'hgi hgi-stroke hgi-rounded hgi-refresh',
    descriptionAr:
      'إمكانية تحديث ومزامنة مجموعات بيانات الحقول الخاصة بنقرة واحدة لتتوافق مع دورة قياس المؤشرات الحالية.',
    descriptionEn:
      'Ability to refresh and synchronize custom field data groups with a single click to align with the current indicator assessment cycle.',
  },
  {
    ar: 'حوكمة رقمية وإدارة الصلاحيات',
    en: 'Central Digital Governance & Roles',
    icon: 'hgi hgi-stroke hgi-rounded hgi-user-lock-01',
    descriptionAr:
      'تنظيم وإدارة المؤشرات والمعايير من خلال لوحة تحكم مركزية تدعم إدارة المجموعات، الأدوار، والصلاحيات لمستخدمي النظام.',
    descriptionEn:
      'Organize and manage indicators and standards through a central dashboard that supports groups, roles, and permissions management.',
  },
],
     steps: [
  {
    num: '01',
    titleAr: 'التهيئة',
    titleEn: 'Setup',
    descAr: 'إعداد المؤشرات والمعايير',
    descEn: 'Setting up indicators and standards',
    detailDescAr:
      'إعداد المؤشرات والمعايير والحقول والمتطلبات الخاصة بكل دورة أو مؤشر لضمان جاهزية النظام.',
    detailDescEn:
      'Configuring indicators, standards, fields, and requirements for each cycle or indicator to ensure system readiness.',
  },
  {
    num: '02',
    titleAr: 'الإدخال',
    titleEn: 'Data Entry',
    descAr: 'رفع الملفات وإدخال البيانات',
    descEn: 'Uploading files and entering data',
    detailDescAr:
      'رفع الملفات وإدخال البيانات وربط الأدلة والمتطلبات بالمعايير المحددة بشكل منظم.',
    detailDescEn:
      'Uploading files, entering data, and linking evidence and requirements to defined standards in a structured way.',
  },
  {
    num: '03',
    titleAr: 'المتابعة',
    titleEn: 'Monitoring',
    descAr: 'مراقبة نسب الإنجاز والالتزام',
    descEn: 'Tracking progress and compliance',
    detailDescAr:
      'مراقبة نسب الإنجاز والالتزام وحالة التوافق عبر لوحات متابعة تفاعلية بشكل لحظي.',
    detailDescEn:
      'Monitoring progress, compliance levels, and alignment status through interactive dashboards in real time.',
  },
  {
    num: '04',
    titleAr: 'التحليل',
    titleEn: 'Analysis',
    descAr: 'تحليل الأداء واكتشاف الفجوات',
    descEn: 'Performance analysis and gap detection',
    detailDescAr:
      'تحليل الأداء واكتشاف الفجوات وإصدار تقارير ومؤشرات تدعم عملية اتخاذ القرار.',
    detailDescEn:
      'Analyzing performance, identifying gaps, and generating reports and indicators to support decision-making.',
  },
],
      faqs: [
        {
          questionAr: 'هل يمكن تخصيص المنصة حسب احتياجاتنا؟',
          questionEn: 'Can the platform be customized to our needs?',
          answerAr:
            'نعم، المنصة مصممة لتكون مرنة وقابلة للتخصيص بالكامل لتناسب متطلبات عملك الخاصة.',
          answerEn:
            'Yes, the platform is designed to be flexible and fully customizable to suit your specific business requirements.',
          open: false,
        },
        {
          questionAr: 'كم يستغرق وقت التطبيق؟',
          questionEn: 'How long does the implementation take?',
          answerAr:
            'تعتمد مدة التنفيذ على حجم المؤسسة والمتطلبات، ولكن غالباً ما يستغرق الإعداد الأولي والتشغيل من 2 إلى 4 أسابيع.',
          answerEn:
            'The implementation time depends on the organization size and requirements, but usually, initial setup and launch take between 2 to 4 weeks.',
          open: false,
        },
        {
          questionAr: 'هل تدعم المنصة اللغة الإنجليزية؟',
          questionEn: 'Does the platform support English?',
          answerAr:
            'بالتأكيد، المنصة تدعم الواجهات ثنائية اللغة (العربية والإنجليزية) بشكل كامل مع دعم اتجاهات النص RTL و LTR.',
          answerEn:
            'Certainly, the platform fully supports bilingual interfaces (Arabic and English) with full support for RTL and LTR text directions.',
          open: false,
        },

        {
          questionAr: 'هل تقدمون تدريب للمستخدمين؟',
          questionEn: 'Do you provide training for users?',
          answerAr:
            'نعم، نقدم جلسات تدريبية شاملة للموظفين والمسؤولين عن النظام لضمان الاستخدام الأمثل لجميع خصائص المنصة.',
          answerEn:
            'Yes, we provide comprehensive training sessions for employees and system administrators to ensure optimal use of all platform features.',
          open: false,
        },
      ],
    images: [
        {
    url: 'assets/images/projects/ind-8.png',
    titleAr: 'تفاصيل الحقول وتدقيق البيانات',
    titleEn: 'Field Details & Data Validation',
    descriptionAr: 'شاشة إدخال وتدقيق البيانات للحقول الإلزامية والاختيارية المخصصة لكل ضابط، مع شجرة تصفح جانبية سريعة للضوابط.',
    descriptionEn: 'Data entry and validation screen for mandatory and optional custom fields per control, featuring a quick sidebar navigation tree.'
  },
  {
    url: 'assets/images/projects/ind-9.png',
    titleAr: 'باني الهيكل الشجري التفاعلي لضوابط النظام',
    titleEn: 'Interactive Control Tree Builder',
    descriptionAr: 'أداة بصرية متطورة تتيح للمسؤولين بناء وتعديل شجرة الضوابط والضوابط الفرعية (مثل التخطيط الاستراتيجي للتحول الرقمي) والتحكم في أبعاد العرض والاتجاهات.',
    descriptionEn: 'Advanced visual tool allowing administrators to construct and modify the hierarchical tree of controls and sub-controls, adjusting card dimensions and orientations.'
  },
  {
    url: 'assets/images/projects/ind-2.png',
    titleAr: 'إضافة ضوابط النظام الرئيسية',
    titleEn: 'System Controls Integration',
    descriptionAr: 'واجهة مخصصة لإضافة وتصنيف ضوابط النظام الكبرى مثل الاستراتيجية والتخطيط، والمنظمة والثقافة، مع إمكانية تحديث الحقول الخاصة لكل دورة قياس.',
    descriptionEn: 'Interface dedicated to adding and classifying main system controls like Strategy and Organization, with options to refresh custom field groups per cycle.'
  },
  {
    url: 'assets/images/projects/ind-3.png',
    titleAr: 'إدارة الدروس المستفادة والحقول الخاصة',
    titleEn: 'Lessons Learned & Custom Fields Management',
    descriptionAr: 'لوحة تحكم ديناميكية لإدارة مجموعات الحقول وتخصيص نوع البيانات (نص، قائمة منسدلة، تاريخ) وترتيب عرضها داخل النظام.',
    descriptionEn: 'A dynamic control panel to manage custom field groups, specifying data types (text, dropdown, date) and sorting their display order.'
  },
  {
    url: 'assets/images/projects/ind-5.png',
    titleAr: 'تتبع مسار الضوابط وهيكلتها',
    titleEn: 'Control Path & Breakdown Structure',
    descriptionAr: 'عرض تفصيلي لمسار الضوابط الهيكلية والانتقال بين المستويات الفرعية لضمان حوكمة وضبط تسلسل الإجراءات.',
    descriptionEn: 'Detailed visualization of control paths and structural breakdown navigation to ensure governance and sequential compliance.'
  },
  {
    url: 'assets/images/projects/ind-7.png',
    titleAr: 'إدارة حقول الضوابط الذكية',
    titleEn: 'Smart Control Fields Overview',
    descriptionAr: 'لوحة تفاعلية تتيح عرض واستعراض الضوابط الرئيسية المسجلة في دورة القياس الحالية وتحديث بيانات حقولها بنقرة واحدة.',
    descriptionEn: 'An interactive panel that displays main registered controls in the current assessment cycle and updates their fields data smoothly.'
  },

],
      video: 'assets/videos/projects/demo.mp4',
    },

    'iso-certification': {
      titleAr: 'الايزو',
      titleEn: 'ISO Certification',
      shortTitleAr: 'الايزو',
      shortTitleEn: 'ISO',
      descriptionAr:
        'إدارة متكاملة لشهادات الأيزو والمعايير الدولية مع متابعة الامتثال والتحديثات.',
      descriptionEn:
        'Integrated management of ISO certificates and international standards with compliance monitoring.',
      icon: '🏆',
      color: 'linear-gradient(195deg, #00adb1 -59.59%, #77479b 120%)',
      image: 'assets/images/projects/system-mangment-5.png',
      features: [
        {
          ar: 'إدارة الشهادات',
          en: 'Certificate management',
          icon: 'fa-solid fa-certificate',
          descriptionAr:
            'تتبع تاريخ إصدار وانتهاء صلاحية شهادات الأيزو مع إشعارات تلقائية قبل موعد التجديد.',
          descriptionEn:
            'Track issuance and expiration dates of ISO certificates with automatic renewal notifications.',
        },
        {
          ar: 'متابعة الامتثال',
          en: 'Compliance monitoring',
          icon: 'fa-solid fa-chart-line',
          descriptionAr:
            'مراقبة مستمرة لمدى التزام المؤسسة بمتطلبات ومعايير الأيزو المختلفة مع تقارير دورية.',
          descriptionEn:
            'Continuous monitoring of organizational compliance with various ISO requirements with periodic reports.',
        },
        {
          ar: 'توثيق الإجراءات',
          en: 'Process documentation',
          icon: 'fa-solid fa-folder-open',
          descriptionAr:
            'أرشفة وتنظيم جميع الإجراءات والسياسات الموثقة المطلوبة لاعتماد الأيزو بشكل منظم وسهل الوصول.',
          descriptionEn:
            'Archive and organize all documented procedures and policies required for ISO certification in an organized and accessible manner.',
        },
        {
          ar: 'تحديث المعايير',
          en: 'Standards updates',
          icon: 'fa-solid fa-arrows-rotate',
          descriptionAr:
            'متابعة أحدث التحديثات والتعديلات على معايير الأيزو وتطبيقها تلقائياً على نظامك.',
          descriptionEn:
            'Track the latest updates and amendments to ISO standards and apply them automatically to your system.',
        },
        {
          ar: 'التدقيق الداخلي',
          en: 'Internal audit',
          icon: 'fa-solid fa-magnifying-glass',
          descriptionAr:
            'أدوات متكاملة لإجراء عمليات التدقيق الداخلي وتسجيل النتائج وملاحظات التحسين.',
          descriptionEn:
            'Integrated tools for conducting internal audits, recording results, and improvement notes.',
        },
        {
          ar: 'إدارة المخاطر',
          en: 'Risk management',
          icon: 'fa-solid fa-triangle-exclamation',
          descriptionAr:
            'تحديد وتقييم المخاطر المرتبطة بالامتثال للمعايير واقتراح إجراءات التخفيف المناسبة.',
          descriptionEn:
            'Identify and assess risks related to standards compliance and suggest appropriate mitigation actions.',
        },
      ],
      steps: [
        {
          num: '01',
          titleAr: 'التحليل',
          titleEn: 'Analysis',
          descAr: 'دراسة احتياجات النظام',
          descEn: 'Studying system requirements',
          detailDescAr:
            'نقوم في هذه المرحلة بجمع المتطلبات التقنية والإدارية للمؤسسة.',
          detailDescEn:
            'In this stage, we collect the technical and administrative requirements of the organization.',
        },
        {
          num: '02',
          titleAr: 'التكوين',
          titleEn: 'Configuration',
          descAr: 'ضبط الإعدادات',
          descEn: 'Settings Adjustment',
          detailDescAr: 'إعداد الخوادم وتوزيع الصلاحيات البرمجية لكل قسم.',
          detailDescEn:
            'Setting up servers and distributing software permissions for each department.',
        },
        {
          num: '03',
          titleAr: 'التدريب',
          titleEn: 'Training',
          descAr: 'تأهيل الموظفين',
          descEn: 'Employee Qualification',
          detailDescAr:
            'تقديم ورش عمل تدريبية للمستخدمين لضمان كفاءة الاستخدام.',
          detailDescEn:
            'Providing training workshops for users to ensure efficient usage.',
        },
        {
          num: '04',
          titleAr: 'التشغيل',
          titleEn: 'Operation',
          descAr: 'الإطلاق الفعلي',
          descEn: 'Live Launch',
          detailDescAr: 'بدء العمل الفعلي مع مراقبة حية لأداء النظام.',
          detailDescEn:
            'Commencing actual work with live monitoring of system performance.',
        },
      ],
      faqs: [
        {
          questionAr: 'هل يمكن تخصيص المنصة حسب احتياجاتنا؟',
          questionEn: 'Can the platform be customized to our needs?',
          answerAr:
            'نعم، المنصة مصممة لتكون مرنة وقابلة للتخصيص بالكامل لتناسب متطلبات عملك الخاصة.',
          answerEn:
            'Yes, the platform is designed to be flexible and fully customizable to suit your specific business requirements.',
          open: false,
        },
        {
          questionAr: 'كم يستغرق وقت التطبيق؟',
          questionEn: 'How long does the implementation take?',
          answerAr:
            'تعتمد مدة التنفيذ على حجم المؤسسة والمتطلبات، ولكن غالباً ما يستغرق الإعداد الأولي والتشغيل من 2 إلى 4 أسابيع.',
          answerEn:
            'The implementation time depends on the organization size and requirements, but usually, initial setup and launch take between 2 to 4 weeks.',
          open: false,
        },
        {
          questionAr: 'هل تدعم المنصة اللغة الإنجليزية؟',
          questionEn: 'Does the platform support English?',
          answerAr:
            'بالتأكيد، المنصة تدعم الواجهات ثنائية اللغة (العربية والإنجليزية) بشكل كامل مع دعم اتجاهات النص RTL و LTR.',
          answerEn:
            'Certainly, the platform fully supports bilingual interfaces (Arabic and English) with full support for RTL and LTR text directions.',
          open: false,
        },

        {
          questionAr: 'هل تقدمون تدريب للمستخدمين؟',
          questionEn: 'Do you provide training for users?',
          answerAr:
            'نعم، نقدم جلسات تدريبية شاملة للموظفين والمسؤولين عن النظام لضمان الاستخدام الأمثل لجميع خصائص المنصة.',
          answerEn:
            'Yes, we provide comprehensive training sessions for employees and system administrators to ensure optimal use of all platform features.',
          open: false,
        },
      ],
      images: [
        {
          url: 'assets/images/projects/system-mangment-6.png',
          titleAr: 'إدارة شهادات الأيزو',
          titleEn: 'ISO Certificates Management',
          descriptionAr:
            'منصة متكاملة لتتبع وإدارة جميع شهادات الأيزو وتواريخ صلاحيتها وإشعارات التجديد.',
          descriptionEn:
            'Integrated platform for tracking and managing all ISO certificates, their expiration dates, and renewal notifications.',
        },
        {
          url: 'assets/images/projects/system-mangment-5.png',
          titleAr: 'متابعة الامتثال للمعايير',
          titleEn: 'Standards Compliance Monitoring',
          descriptionAr:
            'مراقبة مستمرة لمدى التزام المؤسسة بمتطلبات الأيزو مع تقارير دورية عن مستويات الامتثال.',
          descriptionEn:
            'Continuous monitoring of organizational compliance with ISO requirements with periodic compliance level reports.',
        },
        {
          url: 'assets/images/projects/system-mangment-5.png',
          titleAr: 'توثيق الإجراءات والسياسات',
          titleEn: 'Procedures & Policies Documentation',
          descriptionAr:
            'أرشفة وتنظيم جميع الوثائق والإجراءات المطلوبة لاعتماد الأيزو بشكل منظم وسهل الوصول.',
          descriptionEn:
            'Archive and organize all required documents and procedures for ISO certification in an organized and accessible manner.',
        },
        {
          url: 'assets/images/projects/system-mangment-6.png',
          titleAr: 'التدقيق الداخلي وإدارة المخاطر',
          titleEn: 'Internal Audit & Risk Management',
          descriptionAr:
            'أدوات متكاملة لإجراء عمليات التدقيق الداخلي وتقييم المخاطر المرتبطة بالامتثال للمعايير.',
          descriptionEn:
            'Integrated tools for conducting internal audits and assessing risks related to standards compliance.',
        },
      ],
      video: 'assets/videos/projects/demo.mp4',
    },

    'governance-risk': {
      titleAr: 'الحوكمة والمخاطر',
      titleEn: 'Governance & Risk',
      shortTitleAr: 'مخاطرك',
      shortTitleEn: 'Your Risks',
      descriptionAr:
        'نظام شامل لإدارة الحوكمة وتقييم المخاطر وضمان الالتزام بالمعايير.',
      descriptionEn:
        'A comprehensive system for governance management and risk assessment.',
      icon: '🛡️',
      color: 'linear-gradient(195deg, #00adb1 -59.59%, #77479b 120%)',
      image: 'assets/images/projects/system-mangment-5.png',
      features: [
        {
          ar: 'إدارة الحوكمة',
          en: 'Governance management',
          icon: 'fa-solid fa-building-shield',
          descriptionAr:
            'تطبيق أفضل ممارسات الحوكمة مع توزيع الصلاحيات والمسؤوليات بشكل واضح.',
          descriptionEn:
            'Implement best governance practices with clear distribution of authorities and responsibilities.',
        },
        {
          ar: 'تقييم المخاطر',
          en: 'Risk assessment',
          icon: 'fa-solid fa-triangle-exclamation',
          descriptionAr:
            'تحديد وتحليل وتقييم المخاطر المحتملة مع تحديد مستوى كل خطر وتأثيره المتوقع.',
          descriptionEn:
            'Identify, analyze, and assess potential risks with determination of each risk level and expected impact.',
        },
        {
          ar: 'تقارير الامتثال',
          en: 'Compliance reports',
          icon: 'fa-solid fa-file-shield',
          descriptionAr:
            'تقارير شفافة عن مدى التزام المؤسسة بالقوانين واللوائح والسياسات الداخلية.',
          descriptionEn:
            'Transparent reports on organizational compliance with laws, regulations, and internal policies.',
        },
        {
          ar: 'مراقبة السياسات',
          en: 'Policy monitoring',
          icon: 'fa-solid fa-eye',
          descriptionAr:
            'متابعة تنفيذ السياسات والإجراءات المحددة وقياس مدى الالتزام بها.',
          descriptionEn:
            'Monitor implementation of defined policies and procedures and measure compliance levels.',
        },
        {
          ar: 'تحليل المخاطر',
          en: 'Risk analytics',
          icon: 'fa-solid fa-chart-line',
          descriptionAr:
            'تحليلات متقدمة للمخاطر باستخدام النماذج الإحصائية والتنبؤ بالمخاطر المستقبلية.',
          descriptionEn:
            'Advanced risk analytics using statistical models and future risk prediction.',
        },
        {
          ar: 'تنبيهات المخاطر',
          en: 'Risk alerts',
          icon: 'fa-solid fa-bell',
          descriptionAr:
            'نظام إنذار مبكر للمخاطر المحتملة يتيح اتخاذ إجراءات وقائية قبل تفاقم المشكلة.',
          descriptionEn:
            'Early warning system for potential risks enabling preventive actions before problem escalation.',
        },
      ],
      steps: [
        {
          num: '01',
          titleAr: 'التحليل',
          titleEn: 'Analysis',
          descAr: 'دراسة احتياجات النظام',
          descEn: 'Studying system requirements',
          detailDescAr:
            'نقوم في هذه المرحلة بجمع المتطلبات التقنية والإدارية للمؤسسة.',
          detailDescEn:
            'In this stage, we collect the technical and administrative requirements of the organization.',
        },
        {
          num: '02',
          titleAr: 'التكوين',
          titleEn: 'Configuration',
          descAr: 'ضبط الإعدادات',
          descEn: 'Settings Adjustment',
          detailDescAr: 'إعداد الخوادم وتوزيع الصلاحيات البرمجية لكل قسم.',
          detailDescEn:
            'Setting up servers and distributing software permissions for each department.',
        },
        {
          num: '03',
          titleAr: 'التدريب',
          titleEn: 'Training',
          descAr: 'تأهيل الموظفين',
          descEn: 'Employee Qualification',
          detailDescAr:
            'تقديم ورش عمل تدريبية للمستخدمين لضمان كفاءة الاستخدام.',
          detailDescEn:
            'Providing training workshops for users to ensure efficient usage.',
        },
        {
          num: '04',
          titleAr: 'التشغيل',
          titleEn: 'Operation',
          descAr: 'الإطلاق الفعلي',
          descEn: 'Live Launch',
          detailDescAr: 'بدء العمل الفعلي مع مراقبة حية لأداء النظام.',
          detailDescEn:
            'Commencing actual work with live monitoring of system performance.',
        },
      ],
      faqs: [
        {
          questionAr: 'هل يمكن تخصيص المنصة حسب احتياجاتنا؟',
          questionEn: 'Can the platform be customized to our needs?',
          answerAr:
            'نعم، المنصة مصممة لتكون مرنة وقابلة للتخصيص بالكامل لتناسب متطلبات عملك الخاصة.',
          answerEn:
            'Yes, the platform is designed to be flexible and fully customizable to suit your specific business requirements.',
          open: false,
        },
        {
          questionAr: 'كم يستغرق وقت التطبيق؟',
          questionEn: 'How long does the implementation take?',
          answerAr:
            'تعتمد مدة التنفيذ على حجم المؤسسة والمتطلبات، ولكن غالباً ما يستغرق الإعداد الأولي والتشغيل من 2 إلى 4 أسابيع.',
          answerEn:
            'The implementation time depends on the organization size and requirements, but usually, initial setup and launch take between 2 to 4 weeks.',
          open: false,
        },
        {
          questionAr: 'هل تدعم المنصة اللغة الإنجليزية؟',
          questionEn: 'Does the platform support English?',
          answerAr:
            'بالتأكيد، المنصة تدعم الواجهات ثنائية اللغة (العربية والإنجليزية) بشكل كامل مع دعم اتجاهات النص RTL و LTR.',
          answerEn:
            'Certainly, the platform fully supports bilingual interfaces (Arabic and English) with full support for RTL and LTR text directions.',
          open: false,
        },

        {
          questionAr: 'هل تقدمون تدريب للمستخدمين؟',
          questionEn: 'Do you provide training for users?',
          answerAr:
            'نعم، نقدم جلسات تدريبية شاملة للموظفين والمسؤولين عن النظام لضمان الاستخدام الأمثل لجميع خصائص المنصة.',
          answerEn:
            'Yes, we provide comprehensive training sessions for employees and system administrators to ensure optimal use of all platform features.',
          open: false,
        },
      ],
      images: [
        {
          url: 'assets/images/projects/system-mangment-6.png',
          titleAr: 'لوحة حوكمة المؤسسة',
          titleEn: 'Enterprise Governance Dashboard',
          descriptionAr:
            'لوحة تحكم شاملة تعرض هيكل الحوكمة، توزيع الصلاحيات، ومؤشرات الالتزام بالسياسات.',
          descriptionEn:
            'Comprehensive dashboard displaying governance structure, authority distribution, and policy compliance indicators.',
        },
        {
          url: 'assets/images/projects/system-mangment-5.png',
          titleAr: 'تقييم وتحليل المخاطر',
          titleEn: 'Risk Assessment & Analysis',
          descriptionAr:
            'أدوات متقدمة لتحديد وتقييم المخاطر مع تحليل احتمالية التأثير وتصنيف المخاطر.',
          descriptionEn:
            'Advanced tools for identifying and assessing risks with impact probability analysis and risk classification.',
        },
        {
          url: 'assets/images/projects/system-mangment-5.png',
          titleAr: 'تقارير الامتثال والرقابة',
          titleEn: 'Compliance & Control Reports',
          descriptionAr:
            'تقارير شفافة عن مدى التزام المؤسسة بالقوانين واللوائح مع مؤشرات أداء الحوكمة.',
          descriptionEn:
            'Transparent reports on organizational compliance with laws and regulations with governance performance indicators.',
        },
        {
          url: 'assets/images/projects/system-mangment-6.png',
          titleAr: 'مراقبة السياسات والإنذار المبكر',
          titleEn: 'Policy Monitoring & Early Warning',
          descriptionAr:
            'نظام متابعة لتنفيذ السياسات وإنذار مبكر للمخاطر المحتملة لاتخاذ إجراءات وقائية.',
          descriptionEn:
            'Policy implementation tracking system and early warning for potential risks to take preventive actions.',
        },
      ],
      video: 'assets/videos/projects/demo.mp4',
    },

    'committees': {
      titleAr: 'اللجان',
      titleEn: 'Committees',
      shortTitleAr: 'لجانك',
      shortTitleEn: 'Your Committees',
      descriptionAr:
        'إدارة متكاملة للجان والاجتماعات مع جدولة المواعيد وتوثيق القرارات.',
      descriptionEn:
        'Integrated management for committees and meetings with scheduling.',
      icon: '👥',
      color: 'linear-gradient(195deg, #00adb1 -59.59%, #77479b 120%)',
      image: 'assets/images/projects/system-mangment-5.png',
      features: [
        {
          ar: 'إدارة اللجان',
          en: 'Committee management',
          icon: 'fa-solid fa-users-gear',
          descriptionAr:
            'إنشاء وهيكلة اللجان المختلفة مع تحديد الأعضاء والرؤساء والمهام لكل لجنة.',
          descriptionEn:
            'Create and structure various committees with member, chairperson, and task assignments for each committee.',
        },
        {
          ar: 'جدولة الاجتماعات',
          en: 'Meeting scheduling',
          icon: 'fa-solid fa-calendar-check',
          descriptionAr:
            'تحديد مواعيد الاجتماعات وإرسال الدعوات للأعضاء مع إمكانية تأكيد الحضور.',
          descriptionEn:
            'Set meeting dates and send invitations to members with attendance confirmation capabilities.',
        },
        {
          ar: 'توثيق القرارات',
          en: 'Decision documentation',
          icon: 'fa-solid fa-file-pen',
          descriptionAr:
            'تسجيل وتوثيق جميع القرارات المتخذة في الاجتماعات مع متابعة تنفيذها.',
          descriptionEn:
            'Record and document all decisions made in meetings with implementation tracking.',
        },
        {
          ar: 'متابعة المهام',
          en: 'Task tracking',
          icon: 'fa-solid fa-list-check',
          descriptionAr:
            'تحويل القرارات إلى مهام قابلة للتنفيذ مع تحديد المسؤوليات والمواعيد النهائية.',
          descriptionEn:
            'Convert decisions into actionable tasks with assigned responsibilities and deadlines.',
        },
        {
          ar: 'محاضر الاجتماعات',
          en: 'Meeting minutes',
          icon: 'fa-solid fa-file-lines',
          descriptionAr:
            'إعداد محاضر اجتماعات احترافية قابلة للتعديل والمشاركة مع أرشفة تلقائية.',
          descriptionEn:
            'Prepare professional meeting minutes that are editable and shareable with automatic archiving.',
        },
        {
          ar: 'إشعارات الأعضاء',
          en: 'Member notifications',
          icon: 'fa-solid fa-bell',
          descriptionAr:
            'إشعارات تلقائية للأعضاء بالمواعيد والمستجدات والقرارات المهمة.',
          descriptionEn:
            'Automatic notifications to members about dates, updates, and important decisions.',
        },
      ],
      steps: [
        {
          num: '01',
          titleAr: 'التحليل',
          titleEn: 'Analysis',
          descAr: 'دراسة احتياجات النظام',
          descEn: 'Studying system requirements',
          detailDescAr:
            'نقوم في هذه المرحلة بجمع المتطلبات التقنية والإدارية للمؤسسة.',
          detailDescEn:
            'In this stage, we collect the technical and administrative requirements of the organization.',
        },
        {
          num: '02',
          titleAr: 'التكوين',
          titleEn: 'Configuration',
          descAr: 'ضبط الإعدادات',
          descEn: 'Settings Adjustment',
          detailDescAr: 'إعداد الخوادم وتوزيع الصلاحيات البرمجية لكل قسم.',
          detailDescEn:
            'Setting up servers and distributing software permissions for each department.',
        },
        {
          num: '03',
          titleAr: 'التدريب',
          titleEn: 'Training',
          descAr: 'تأهيل الموظفين',
          descEn: 'Employee Qualification',
          detailDescAr:
            'تقديم ورش عمل تدريبية للمستخدمين لضمان كفاءة الاستخدام.',
          detailDescEn:
            'Providing training workshops for users to ensure efficient usage.',
        },
        {
          num: '04',
          titleAr: 'التشغيل',
          titleEn: 'Operation',
          descAr: 'الإطلاق الفعلي',
          descEn: 'Live Launch',
          detailDescAr: 'بدء العمل الفعلي مع مراقبة حية لأداء النظام.',
          detailDescEn:
            'Commencing actual work with live monitoring of system performance.',
        },
      ],
      faqs: [
        {
          questionAr: 'هل يمكن تخصيص المنصة حسب احتياجاتنا؟',
          questionEn: 'Can the platform be customized to our needs?',
          answerAr:
            'نعم، المنصة مصممة لتكون مرنة وقابلة للتخصيص بالكامل لتناسب متطلبات عملك الخاصة.',
          answerEn:
            'Yes, the platform is designed to be flexible and fully customizable to suit your specific business requirements.',
          open: false,
        },
        {
          questionAr: 'كم يستغرق وقت التطبيق؟',
          questionEn: 'How long does the implementation take?',
          answerAr:
            'تعتمد مدة التنفيذ على حجم المؤسسة والمتطلبات، ولكن غالباً ما يستغرق الإعداد الأولي والتشغيل من 2 إلى 4 أسابيع.',
          answerEn:
            'The implementation time depends on the organization size and requirements, but usually, initial setup and launch take between 2 to 4 weeks.',
          open: false,
        },
        {
          questionAr: 'هل تدعم المنصة اللغة الإنجليزية؟',
          questionEn: 'Does the platform support English?',
          answerAr:
            'بالتأكيد، المنصة تدعم الواجهات ثنائية اللغة (العربية والإنجليزية) بشكل كامل مع دعم اتجاهات النص RTL و LTR.',
          answerEn:
            'Certainly, the platform fully supports bilingual interfaces (Arabic and English) with full support for RTL and LTR text directions.',
          open: false,
        },

        {
          questionAr: 'هل تقدمون تدريب للمستخدمين؟',
          questionEn: 'Do you provide training for users?',
          answerAr:
            'نعم، نقدم جلسات تدريبية شاملة للموظفين والمسؤولين عن النظام لضمان الاستخدام الأمثل لجميع خصائص المنصة.',
          answerEn:
            'Yes, we provide comprehensive training sessions for employees and system administrators to ensure optimal use of all platform features.',
          open: false,
        },
      ],
      images: [
        {
          url: 'assets/images/projects/system-mangment-6.png',
          titleAr: 'إدارة اللجان والأعضاء',
          titleEn: 'Committees & Members Management',
          descriptionAr:
            'نظام متكامل لإنشاء وهيكلة اللجان وتعيين الأعضاء والرؤساء وتوزيع المهام.',
          descriptionEn:
            'Integrated system for creating and structuring committees, assigning members and chairs, and distributing tasks.',
        },
        {
          url: 'assets/images/projects/system-mangment-5.png',
          titleAr: 'جدولة الاجتماعات والتذكير',
          titleEn: 'Meeting Scheduling & Reminders',
          descriptionAr:
            'تحديد مواعيد الاجتماعات وإرسال الدعوات للأعضاء مع نظام تذكير آلي.',
          descriptionEn:
            'Set meeting dates and send invitations to members with an automated reminder system.',
        },
        {
          url: 'assets/images/projects/system-mangment-5.png',
          titleAr: 'توثيق القرارات والمحاضر',
          titleEn: 'Decisions & Minutes Documentation',
          descriptionAr:
            'تسجيل وتوثيق جميع القرارات ومحاضر الاجتماعات مع متابعة تنفيذها.',
          descriptionEn:
            'Record and document all decisions and meeting minutes with implementation tracking.',
        },
        {
          url: 'assets/images/projects/system-mangment-6.png',
          titleAr: 'متابعة المهام والإشعارات',
          titleEn: 'Task Tracking & Notifications',
          descriptionAr:
            'تحويل القرارات إلى مهام قابلة للتنفيذ مع إشعارات تلقائية للأعضاء.',
          descriptionEn:
            'Convert decisions into actionable tasks with automatic notifications to members.',
        },
      ],
      video: 'assets/videos/projects/demo.mp4',
    },

    'task-management': {
      titleAr: 'إدارة المهام',
      titleEn: 'Task Management',
      shortTitleAr: 'مهامك',
      shortTitleEn: 'Your Tasks',
      descriptionAr:
        'تنظيم وتوزيع المهام مع متابعة التقدم والمواعيد والأولويات.',
      descriptionEn:
        'Organizing and distributing tasks with progress tracking.',
      icon: '✅',
      color: 'linear-gradient(195deg, #00adb1 -59.59%, #77479b 120%)',
      image: 'assets/images/projects/task-7.png',
    aboutfeatures: [
  {
    ar: 'ربط الاستراتيجيات بالمشاريع والمبادرات',
    en: 'Linking strategies with projects and initiatives',
  },
  {
    ar: 'تحليل ذكي لعبء العمل بالذكاء الاصطناعي',
    en: 'AI-powered workload analysis',
  },
  {
    ar: 'تتبع المهام عبر لوحات Kanban التفاعلية',
    en: 'Task tracking through interactive Kanban boards',
  },
  {
    ar: 'تقارير متقدمة لتحليل الأداء وسير العمل',
    en: 'Advanced reports for performance and workflow analysis',
  },
],
  features: [
  {
    ar: 'التحليل الذكي بالذكاء الاصطناعي',
    en: 'AI-powered intelligent analysis',
    icon: 'hgi hgi-stroke hgi-rounded hgi-ai-brain-01',
    descriptionAr:
      'تحليل عبء العمل وتوزيع المهام باستخدام تقنيات الذكاء الاصطناعي لتحسين الكفاءة التشغيلية ورفع الإنتاجية.',
    descriptionEn:
      'Analyze workload and distribute tasks using AI technologies to improve operational efficiency and productivity.',
  },
  {
    ar: 'الربط الاستراتيجي والمؤسسي',
    en: 'Strategic and organizational alignment',
    icon: 'hgi hgi-stroke hgi-rounded hgi-link-02',
    descriptionAr:
      'ربط المهام مباشرة بالاستراتيجيات والمشاريع والمبادرات لضمان تحقيق الأهداف المؤسسية بكفاءة.',
    descriptionEn:
      'Link tasks directly with strategies, projects, and initiatives to ensure efficient achievement of organizational goals.',
  },
 {
  ar: 'لوحات العمل التفاعلية',
  en: 'Interactive Kanban boards',
  icon: 'hgi hgi-stroke hgi-rounded hgi-dashboard-square-01',
  descriptionAr:
    'متابعة حالة المهام بصرياً عبر مراحل متعددة مثل: جديد، قيد التنفيذ، مكتمل، ومرفوض ضمن واجهات سهلة ومرنة.',
  descriptionEn:
    'Track task status visually through multiple stages such as New, In Progress, Completed, and Rejected within flexible interfaces.',
},
{
  ar: 'التقارير والتحليلات المتقدمة',
  en: 'Advanced reports and analytics',
  icon: 'hgi hgi-stroke hgi-rounded hgi-analytics-01',
  descriptionAr:
    'تقارير تفصيلية لتحليل المهام حسب النوع والحالة والأولوية مع متابعة مراحل سير العمل ومؤشرات الأداء.',
  descriptionEn:
    'Detailed reports analyzing tasks by type, status, and priority while tracking workflow stages and performance indicators.',
},
  {
    ar: 'تخصيص سير العمل والمهام',
    en: 'Workflow and task customization',
    icon: 'hgi hgi-stroke hgi-rounded hgi-flow-connection',
    descriptionAr:
      'إمكانية إنشاء أنواع مهام مختلفة وتخصيص مراحل Workflow مرنة تتوافق مع احتياجات العمل المختلفة.',
    descriptionEn:
      'Create different task types and customize flexible workflow stages that match various business needs.',
  },
  {
    ar: 'إدارة صلاحيات المستخدمين',
    en: 'User permission management',
    icon: 'hgi hgi-stroke hgi-rounded hgi-user-lock-01',
    descriptionAr:
      'التحكم الكامل في صلاحيات المستخدمين وتحديد الوصول للشاشات والتقارير حسب الأدوار والمجموعات الوظيفية.',
    descriptionEn:
      'Full control over user permissions and access to screens and reports based on roles and organizational groups.',
  },
],
 steps: [
  {
    num: '01',
    titleAr: 'تعريف وتصنيف المهمة',
    titleEn: 'Task Definition & Classification',
    descAr: 'تحديد نوع المهمة',
    descEn: 'Identifying task type',
    detailDescAr:
      'تحديد نوع المهمة وربطها بالنظام المناسب لتخصيص آلية العمل ومسار التنفيذ لكل نوع.',
    detailDescEn:
      'Defining the task type and linking it to the appropriate system to customize the workflow and execution path for each type.',
  },
  {
    num: '02',
    titleAr: 'بناء مراحل سير العمل',
    titleEn: 'Workflow Design',
    descAr: 'إنشاء مراحل العمل',
    descEn: 'Building workflow stages',
    detailDescAr:
      'إنشاء Workflow مرن يحدد مراحل انتقال المهمة منذ الإنشاء وحتى الإغلاق وفق احتياجات العمل.',
    detailDescEn:
      'Creating a flexible workflow that defines the task stages from creation to closure according to business needs.',
  },
  {
    num: '03',
    titleAr: 'إنشاء المهمة وإدخال البيانات',
    titleEn: 'Task Creation & Data Entry',
    descAr: 'إضافة تفاصيل المهمة',
    descEn: 'Adding task details',
    detailDescAr:
      'إضافة تفاصيل المهمة مثل العنوان، الوصف، الأولوية، وتاريخ التسليم لتظهر مباشرة داخل النظام.',
    detailDescEn:
      'Adding task details such as title, description, priority, and due date so it appears مباشرة داخل النظام.',
  },
  {
    num: '04',
    titleAr: 'المتابعة عبر لوحة التحكم',
    titleEn: 'Monitoring via Dashboard',
    descAr: 'تتبع تقدم المهام',
    descEn: 'Tracking task progress',
    detailDescAr:
      'تتبع المهام بصرياً عبر لوحة Kanban مع مراقبة حالة التنفيذ وسجل الإجراءات بكل شفافية.',
    detailDescEn:
      'Tracking tasks visually through Kanban boards while monitoring execution status and activity logs with full transparency.',
  },
],
      faqs: [
        {
          questionAr: 'هل يمكن تخصيص المنصة حسب احتياجاتنا؟',
          questionEn: 'Can the platform be customized to our needs?',
          answerAr:
            'نعم، المنصة مصممة لتكون مرنة وقابلة للتخصيص بالكامل لتناسب متطلبات عملك الخاصة.',
          answerEn:
            'Yes, the platform is designed to be flexible and fully customizable to suit your specific business requirements.',
          open: false,
        },
        {
          questionAr: 'كم يستغرق وقت التطبيق؟',
          questionEn: 'How long does the implementation take?',
          answerAr:
            'تعتمد مدة التنفيذ على حجم المؤسسة والمتطلبات، ولكن غالباً ما يستغرق الإعداد الأولي والتشغيل من 2 إلى 4 أسابيع.',
          answerEn:
            'The implementation time depends on the organization size and requirements, but usually, initial setup and launch take between 2 to 4 weeks.',
          open: false,
        },
        {
          questionAr: 'هل تدعم المنصة اللغة الإنجليزية؟',
          questionEn: 'Does the platform support English?',
          answerAr:
            'بالتأكيد، المنصة تدعم الواجهات ثنائية اللغة (العربية والإنجليزية) بشكل كامل مع دعم اتجاهات النص RTL و LTR.',
          answerEn:
            'Certainly, the platform fully supports bilingual interfaces (Arabic and English) with full support for RTL and LTR text directions.',
          open: false,
        },

        {
          questionAr: 'هل تقدمون تدريب للمستخدمين؟',
          questionEn: 'Do you provide training for users?',
          answerAr:
            'نعم، نقدم جلسات تدريبية شاملة للموظفين والمسؤولين عن النظام لضمان الاستخدام الأمثل لجميع خصائص المنصة.',
          answerEn:
            'Yes, we provide comprehensive training sessions for employees and system administrators to ensure optimal use of all platform features.',
          open: false,
        },
      ],
      images: [
      {
  url: 'assets/images/projects/task-1.png',
  titleAr: 'لوحة إدارة المهام بنظام كانبان',
  titleEn: 'Kanban Task Management Board',
  descriptionAr:
    'لوحة مهام تفاعلية تعتمد على نظام الكانبان لتنظيم المهام حسب مراحل العمل ومتابعة تقدم التنفيذ .',
  descriptionEn:
    'An interactive Kanban board that organizes tasks by workflow stages and helps teams easily track .',
},
        {
          url: 'assets/images/projects/task-2.png',
          titleAr: 'متابعة تقدم المهام',
          titleEn: 'Task Progress Tracking',
          descriptionAr:
            'متابعة تقدم إنجاز المهام بنسبة مئوية مع تحديثات فورية ورؤية زمنية.',
          descriptionEn:
            'Track task completion progress by percentage with real-time updates and timeline visibility.',
        },
        {
          url: 'assets/images/projects/task-4.png',
          titleAr: 'توزيع المهام وتحديد الأولويات',
          titleEn: 'Task Assignment & Prioritization',
          descriptionAr:
            'تعيين المهام للأفراد وتحديد مستويات الأولوية لتنظيم سير العمل.',
          descriptionEn:
            'Assign tasks to individuals and set priority levels to organize workflow.',
        },
      {
          url: 'assets/images/projects/task-5.png',
          titleAr: 'لوحة المهام الرئيسية',
          titleEn: 'Main Tasks Dashboard',
          descriptionAr:
            'واجهة مركزية تعرض جميع المهام مع تصنيفها حسب الأولوية والحالة والموعد النهائي.',
          descriptionEn:
            'Central interface displaying all tasks classified by priority, status, and deadline.',
        },
          


        
      ],
      video: 'assets/videos/projects/demo.mp4',
    },

    'survey': {
      titleAr: 'الاستبيان',
      titleEn: 'Survey',
      shortTitleAr: 'استبياناتك',
      shortTitleEn: 'Your Surveys',
      descriptionAr: 'إنشاء وإدارة الاستبيانات مع تحليل النتائج وتقارير شاملة.',
      descriptionEn: 'Creating and managing surveys with results analysis.',
      icon: '📋',
      color: 'linear-gradient(195deg, #00adb1 -59.59%, #77479b 120%)',
      image: 'assets/images/projects/system-mangment-5.png',
      features: [
        {
          ar: 'إنشاء الاستبيانات',
          en: 'Survey creation',
          icon: 'fa-solid fa-clipboard-list',
          descriptionAr:
            'تصميم استبيانات احترافية بأنواع متعددة من الأسئلة (اختيار من متعدد، نصوص، تقييم، نعم/لا).',
          descriptionEn:
            'Design professional surveys with multiple question types (multiple choice, text, rating, yes/no).',
        },
        {
          ar: 'تحليل النتائج',
          en: 'Results analysis',
          icon: 'fa-solid fa-chart-pie',
          descriptionAr:
            'تحليل بيانات الاستبيانات باستخدام رسوم بيانية متقدمة وإحصائيات دقيقة مع تصفية النتائج.',
          descriptionEn:
            'Analyze survey data using advanced charts and accurate statistics with result filtering.',
        },
        {
          ar: 'تجميع البيانات',
          en: 'Data collection',
          icon: 'fa-solid fa-database',
          descriptionAr:
            'جمع ردود المشاركين بشكل آمن مع ضمان سرية البيانات وإمكانية تصديرها.',
          descriptionEn:
            'Securely collect participant responses with data confidentiality and export capabilities.',
        },
        {
          ar: 'تقارير تفصيلية',
          en: 'Detailed reports',
          icon: 'fa-solid fa-file-lines',
          descriptionAr:
            'إنشاء تقارير شاملة بنتائج الاستبيان مع رسوم توضيحية وتوصيات قابلة للمشاركة.',
          descriptionEn:
            'Create comprehensive survey result reports with illustrations and shareable recommendations.',
        },
      ],
      steps: [
        {
          num: '01',
          titleAr: 'التحليل',
          titleEn: 'Analysis',
          descAr: 'دراسة احتياجات النظام',
          descEn: 'Studying system requirements',
          detailDescAr:
            'نقوم في هذه المرحلة بجمع المتطلبات التقنية والإدارية للمؤسسة.',
          detailDescEn:
            'In this stage, we collect the technical and administrative requirements of the organization.',
        },
        {
          num: '02',
          titleAr: 'التكوين',
          titleEn: 'Configuration',
          descAr: 'ضبط الإعدادات',
          descEn: 'Settings Adjustment',
          detailDescAr: 'إعداد الخوادم وتوزيع الصلاحيات البرمجية لكل قسم.',
          detailDescEn:
            'Setting up servers and distributing software permissions for each department.',
        },
        {
          num: '03',
          titleAr: 'التدريب',
          titleEn: 'Training',
          descAr: 'تأهيل الموظفين',
          descEn: 'Employee Qualification',
          detailDescAr:
            'تقديم ورش عمل تدريبية للمستخدمين لضمان كفاءة الاستخدام.',
          detailDescEn:
            'Providing training workshops for users to ensure efficient usage.',
        },
        {
          num: '04',
          titleAr: 'التشغيل',
          titleEn: 'Operation',
          descAr: 'الإطلاق الفعلي',
          descEn: 'Live Launch',
          detailDescAr: 'بدء العمل الفعلي مع مراقبة حية لأداء النظام.',
          detailDescEn:
            'Commencing actual work with live monitoring of system performance.',
        },
      ],
      faqs: [
        {
          questionAr: 'هل يمكن تخصيص المنصة حسب احتياجاتنا؟',
          questionEn: 'Can the platform be customized to our needs?',
          answerAr:
            'نعم، المنصة مصممة لتكون مرنة وقابلة للتخصيص بالكامل لتناسب متطلبات عملك الخاصة.',
          answerEn:
            'Yes, the platform is designed to be flexible and fully customizable to suit your specific business requirements.',
          open: false,
        },
        {
          questionAr: 'كم يستغرق وقت التطبيق؟',
          questionEn: 'How long does the implementation take?',
          answerAr:
            'تعتمد مدة التنفيذ على حجم المؤسسة والمتطلبات، ولكن غالباً ما يستغرق الإعداد الأولي والتشغيل من 2 إلى 4 أسابيع.',
          answerEn:
            'The implementation time depends on the organization size and requirements, but usually, initial setup and launch take between 2 to 4 weeks.',
          open: false,
        },
        {
          questionAr: 'هل تدعم المنصة اللغة الإنجليزية؟',
          questionEn: 'Does the platform support English?',
          answerAr:
            'بالتأكيد، المنصة تدعم الواجهات ثنائية اللغة (العربية والإنجليزية) بشكل كامل مع دعم اتجاهات النص RTL و LTR.',
          answerEn:
            'Certainly, the platform fully supports bilingual interfaces (Arabic and English) with full support for RTL and LTR text directions.',
          open: false,
        },

        {
          questionAr: 'هل تقدمون تدريب للمستخدمين؟',
          questionEn: 'Do you provide training for users?',
          answerAr:
            'نعم، نقدم جلسات تدريبية شاملة للموظفين والمسؤولين عن النظام لضمان الاستخدام الأمثل لجميع خصائص المنصة.',
          answerEn:
            'Yes, we provide comprehensive training sessions for employees and system administrators to ensure optimal use of all platform features.',
          open: false,
        },
      ],
      images: [
        {
          url: 'assets/images/projects/system-mangment-6.png',
          titleAr: 'بناء وتصميم الاستبيانات',
          titleEn: 'Survey Building & Design',
          descriptionAr:
            'مصمم استبيانات احترافي بأنواع متعددة من الأسئلة ونماذج جاهزة للتخصيص.',
          descriptionEn:
            'Professional survey builder with multiple question types and ready-to-customize templates.',
        },
        {
          url: 'assets/images/projects/system-mangment-5.png',
          titleAr: 'تحليل نتائج الاستبيانات',
          titleEn: 'Survey Results Analysis',
          descriptionAr:
            'تحليل متقدم للبيانات باستخدام رسوم بيانية وإحصائيات دقيقة مع تصفية النتائج.',
          descriptionEn:
            'Advanced data analysis using charts and accurate statistics with result filtering.',
        },
        {
          url: 'assets/images/projects/system-mangment-5.png',
          titleAr: 'تجميع البيانات والردود',
          titleEn: 'Data & Responses Collection',
          descriptionAr:
            'جمع ردود المشاركين بشكل آمن مع ضمان سرية البيانات وسهولة تصديرها.',
          descriptionEn:
            'Securely collect participant responses with data confidentiality and easy export capabilities.',
        },
        {
          url: 'assets/images/projects/system-mangment-6.png',
          titleAr: 'تقارير مفصلة وتوصيات',
          titleEn: 'Detailed Reports & Recommendations',
          descriptionAr:
            'إنشاء تقارير شاملة بنتائج الاستبيان مع رسوم توضيحية وتوصيات قابلة للمشاركة.',
          descriptionEn:
            'Create comprehensive survey result reports with illustrations and shareable recommendations.',
        },
      ],
      video: 'assets/videos/projects/demo.mp4',
    },

    'performance-indicators': {
      titleAr: 'مؤشرات الأداء',
      titleEn: 'Performance Indicators',
      shortTitleAr: 'مؤشرات أدائك',
      shortTitleEn: 'Your Performance Indicators',
      
      descriptionAr:
        'التركيز على دقة توثيق البيانات وجودة مدخلات الأداء مع بنية تنظيمية متكاملة للنظام',
      descriptionEn:
     'The SMEEM system is built on a structured architecture ensuring accurate data documentation and high-quality performance inputs with direct monitoring tools.',
      icon: '📊',
      color: 'linear-gradient(195deg, #00adb1 -59.59%, #77479b 120%)',
image: 'assets/images/projects/deg-5.png',
aboutfeatures: [

  {
    ar: 'التسمية المزدوجة باللغتين العربية والإنجليزية    ',
    en: 'Dual naming support in both Arabic and English    .',
  },
  {
    ar: 'التحكم في حالة تفعيل المؤشرات (نشط / غير نشط)',
    en: 'Control KPI activation status (Active / Inactive)',
  },
  {
    ar: 'ميزة الترتيب والترقيم التسلسلي للعناصر داخل النظام',
    en: 'Sequential ordering and numbering of system elements',
  },
  {
    ar: 'أدوات الإدارة السريعة (تعديل، حذف، واستعراض التفاصيل)',
    en: 'Quick management tools (edit, delete, and view details)',
  },
],
      features: [
  {
    ar: 'تنوع أنواع المؤشرات',
    en: 'Diverse KPI Types',
    icon: 'hgi hgi-stroke hgi-rounded hgi-target-01',
    descriptionAr:
      'يدعم النظام تصنيفات متعددة تشمل المؤشرات الاستراتيجية والتنفيذية والمبادرات والمشاريع لتغطية جميع مستويات العمل.',
    descriptionEn:
      'The system supports multiple KPI classifications including strategic, operational, initiatives, and project indicators to cover all levels of work.',
  },
  {
    ar: 'مرونة وحدات القياس',
    en: 'Flexible Measurement Units',
    icon: 'hgi hgi-stroke hgi-rounded hgi-ruler',
    descriptionAr:
      'يتيح النظام تعريف وإضافة وحدات قياس مخصصة مثل الوحدات الكمية بما يتناسب مع طبيعة كل مؤشر.',
    descriptionEn:
      'Allows defining and adding custom measurement units such as quantitative units according to the nature of each KPI.',
  },
  {
    ar: 'تخصيص الأوزان النسبية',
    en: 'Relative Weight Configuration',
icon: 'hgi hgi-stroke hgi-rounded hgi-analytics-up',
    descriptionAr:
      'يوفر النظام إمكانية تحديد وزن لكل مؤشر لبيان أهميته وتأثيره في عملية التقييم الإجمالية.',
    descriptionEn:
      'The system allows assigning a weight to each KPI to reflect its importance in the overall evaluation process.',
  },
  {
    ar: 'ضبط القيم الأساسية والمستهدفة',
    en: 'Baseline and Target Values',
    icon: 'hgi hgi-stroke hgi-rounded hgi-flag-01',
    descriptionAr:
      'يسمح النظام بإدخال القيم المستهدفة ومقارنتها بالقيم الأساسية لقياس مستوى التقدم بدقة.',
    descriptionEn:
      'Enables entering target values and comparing them with baseline values to measure progress accurately.',
  },
  {
    ar: 'إدارة الفترات الزمنية',
    en: 'Time Period Management',
    icon: 'hgi hgi-stroke hgi-rounded hgi-calendar-03',
    descriptionAr:
      'يتيح النظام ربط كل مؤشر أداء بفترة زمنية محددة لضمان انتظام عمليات القياس والمتابعة.',
    descriptionEn:
      'Allows linking each KPI to a specific time period to ensure regular measurement and monitoring.',
  },
  {
    ar: 'تحديد المصادر والملكية',
    en: 'Source and Ownership Tracking',
    icon: 'hgi hgi-stroke hgi-rounded hgi-user-square',
    descriptionAr:
      'يوفر النظام إمكانية توثيق مصدر المؤشر وتعيين مالك مسؤول عنه لتعزيز الشفافية ودقة البيانات.',
    descriptionEn:
      'The system enables documenting the KPI source and assigning an owner responsible for it to enhance transparency and data accuracy.',
  },
],

     steps: [
  {
    num: '01',
    titleAr: 'تهيئة الإعدادات',
    titleEn: 'System Setup',
    descAr: 'تعريف أنواع المؤشرات ووحدات القياس',
    descEn: 'Define KPI types and measurement units',
    detailDescAr:
      'تشمل هذه المرحلة تعريف أنواع المؤشرات ووحدات القياس المعتمدة داخل النظام لضمان توحيد أسلوب القياس.',
    detailDescEn:
      'This stage defines KPI types and standardized measurement units to ensure consistent evaluation.',
  },
  {
    num: '02',
    titleAr: 'صياغة المؤشرات',
    titleEn: 'KPI Configuration',
    descAr: 'تحديد الأوزان والقيم المستهدفة',
    descEn: 'Set weights and target values',
    detailDescAr:
      'يتم إدخال الأوزان النسبية والقيم المستهدفة وربطها بالفترات الزمنية المناسبة لقياس الأداء بدقة.',
    detailDescEn:
      'Weights, target values, and time periods are configured to accurately measure performance.',
  },
  {
    num: '03',
    titleAr: 'هيكلة المستخدمين',
    titleEn: 'User Structuring',
    descAr: 'ربط المستخدمين بالجهات والمسميات',
    descEn: 'Link users to departments and roles',
    detailDescAr:
      'تنظيم حسابات المستخدمين وربطها بالمسميات الوظيفية والجهات الإدارية المختصة لضمان وضوح المسؤوليات.',
    detailDescEn:
      'Users are organized and linked to job titles and departments to ensure clear responsibilities.',
  },
  {
    num: '04',
    titleAr: 'التحكم والوصول',
    titleEn: 'Access Control',
    descAr: 'إدارة الصلاحيات وحماية البيانات',
    descEn: 'Manage permissions and data security',
    detailDescAr:
      'تخصيص مجموعات الصلاحيات لضمان أمن البيانات وإتاحة الوصول المناسب للتقارير والوظائف.',
    detailDescEn:
      'Permission groups are configured to ensure data security and controlled access to reports and functions.',
  },
],

   images: [
  {
    url: 'assets/images/projects/deg-1.jpeg',
    titleAr: 'إدارة معلومات مؤشرات الأداء',
    titleEn: 'KPI Information Management',
    descriptionAr: 'واجهة متكاملة لتعريف وتعديل خصائص المؤشرات، تشمل المصدر، الوزن، والآلية الحسابية مع لوحة تحليلات سفلية نسب الامتثال والمستخدمين.',
    descriptionEn: 'An integrated interface for defining and editing indicator properties, including source, weight, and calculation method, with a lower analytics panel for compliance and users.'
  },
  {
    url: 'assets/images/projects/deg-2.jpeg',
    titleAr: 'مجموعات صلاحيات المستخدمين',
    titleEn: 'User Permission Groups',
    descriptionAr: 'لوحة التحكم بالأدوار والوظائف، تتيح للمشرفين إضافة صلاحيات وصول مخصصة (مثل مدير النظام أو مراجع) وتحديد أعداد الموظفين التابعين لكل مجموعة.',
    descriptionEn: 'The roles and functions control panel, allowing administrators to add custom access permissions (e.g., System Admin or Reviewer) and determine the number of employees under each group.'
  },
  {
    url: 'assets/images/projects/deg-3.jpeg',
    titleAr: 'إدارة وتعديل بيانات المستخدمين',
    titleEn: 'User Profile & Settings Management',
    descriptionAr: 'نموذج ذكي يتيح لمسؤولي النظام تعديل بيانات الموظفين، تحديد فترات العمل، توقيتات الدخول، والتحقق المزدوج للأمان عبر الـ IP.',
    descriptionEn: 'A smart form allowing system administrators to edit employee details, define work periods, access times, and secondary verification for security via IP.'
  },
  {
    url: 'assets/images/projects/deg-4.jpeg',
    titleAr: 'إعداد وحدات قياس المؤشرات',
    titleEn: 'Indicator Measurement Units Configuration',
    descriptionAr: 'شاشة ضبط وتصنيف وحدات القياس (نسب مئوية، مبالغ نقدية، درجات) مدعومة بمستشار ذكاء اصطناعي جانبي لمراجعة جودة البيانات ودقة التقارير.',
    descriptionEn: 'The measurement units setup and classification screen (percentages, currencies, scores) supported by a side AI assistant to review data quality and report accuracy.'
  }
],
  faqs: [
        {
          questionAr: 'هل يمكن تخصيص المنصة حسب احتياجاتنا؟',
          questionEn: 'Can the platform be customized to our needs?',
          answerAr:
            'نعم، المنصة مصممة لتكون مرنة وقابلة للتخصيص بالكامل لتناسب متطلبات عملك الخاصة.',
          answerEn:
            'Yes, the platform is designed to be flexible and fully customizable to suit your specific business requirements.',
          open: false,
        },
        {
          questionAr: 'كم يستغرق وقت التطبيق؟',
          questionEn: 'How long does the implementation take?',
          answerAr:
            'تعتمد مدة التنفيذ على حجم المؤسسة والمتطلبات، ولكن غالباً ما يستغرق الإعداد الأولي والتشغيل من 2 إلى 4 أسابيع.',
          answerEn:
            'The implementation time depends on the organization size and requirements, but usually, initial setup and launch take between 2 to 4 weeks.',
          open: false,
        },
        {
          questionAr: 'هل تدعم المنصة اللغة الإنجليزية؟',
          questionEn: 'Does the platform support English?',
          answerAr:
            'بالتأكيد، المنصة تدعم الواجهات ثنائية اللغة (العربية والإنجليزية) بشكل كامل مع دعم اتجاهات النص RTL و LTR.',
          answerEn:
            'Certainly, the platform fully supports bilingual interfaces (Arabic and English) with full support for RTL and LTR text directions.',
          open: false,
        },

        {
          questionAr: 'هل تقدمون تدريب للمستخدمين؟',
          questionEn: 'Do you provide training for users?',
          answerAr:
            'نعم، نقدم جلسات تدريبية شاملة للموظفين والمسؤولين عن النظام لضمان الاستخدام الأمثل لجميع خصائص المنصة.',
          answerEn:
            'Yes, we provide comprehensive training sessions for employees and system administrators to ensure optimal use of all platform features.',
          open: false,
        },
      ],
      video: 'assets/videos/projects/demo.mp4',
    },
    'files-library': {
      titleAr: 'مكتبة الملفات',
      titleEn: 'Files Library',
      shortTitleAr: 'ملفاتك',
      shortTitleEn: 'Your Files',
      descriptionAr:
        'تعد مكتبة الملفات الواجهة الأساسية لإدارة وتنظيم المحتوى الرقمي وتتبع التعديلات لضمان سير العمل بكفاءة',
      descriptionEn: 'The File Library serves as the main interface for managing and organizing digital content while tracking changes to ensure efficient workflow.',
      icon: '📁',
      color: 'linear-gradient(195deg, #00adb1 -59.59%, #77479b 120%)',
      image: 'assets/images/projects/lab-7.png',
aboutfeatures: [

  {
    ar: 'محرك بحث ذكي داخل المجلدات',
    en: 'Smart search engine within folders',
  },
  {
    ar: 'تتبع هوية صاحب الملف',
    en: 'Track file owner identity',
  },
  {
    ar: 'دعم واسع لصيغ الملفات',
    en: 'Wide support for file formats',
  },
  {
    ar: 'مسار تنقل تفاعلي (Breadcrumbs)',
    en: 'Interactive navigation path (Breadcrumbs)',
  },
],
    features: [
  {
    ar: 'ضبط الحد الأقصى لحجم الملف',
    en: 'Maximum file size limit',
    icon: 'hgi hgi-stroke hgi-rounded hgi-file-01',
    descriptionAr:
      'تمكّن الإدارة من تحديد سعة محددة لكل ملف يتم رفعه (مثل 25 ميجابايت) لضمان إدارة المساحة التخزينية بكفاءة.',
    descriptionEn:
      'Allows administrators to define a maximum size for uploaded files (e.g., 25 MB) to efficiently manage storage space.',
  },
  {
    ar: 'ضبط مستوى الأمان الافتراضي',
    en: 'Default security level',
    icon: 'hgi hgi-stroke hgi-rounded hgi-shield-key',
    descriptionAr:
      'تحديد مستوى الأمان الافتراضي للملفات المرفوعة مثل مستوى "عام" لضمان التوافق مع سياسات الخصوصية.',
    descriptionEn:
      'Define the default security level for uploaded files such as "Public" to ensure compliance with privacy policies.',
  },
  {
    ar: 'تحديث البيانات الفوري',
    en: 'Instant data refresh',
    icon: 'hgi hgi-stroke hgi-rounded hgi-refresh',
    descriptionAr:
      'زر مخصص لتحديث قائمة الملفات والمجلدات فوراً ومزامنة أي تغييرات دون الحاجة لإعادة تحميل الصفحة.',
    descriptionEn:
      'A dedicated refresh button to instantly reload files and folders and sync changes without reloading the entire page.',
  },
  {
    ar: 'التحكم في اتجاه الترتيب',
    en: 'Sorting control',
    icon: 'hgi hgi-stroke hgi-rounded hgi-sort-by-down-01',
    descriptionAr:
      'إمكانية التبديل بين الترتيب التصاعدي والتنازلي للملفات حسب الاسم أو الحجم أو تاريخ التعديل.',
    descriptionEn:
      'Switch between ascending and descending sorting based on name, size, or modification date.',
  },
  {
    ar: 'التتبع الزمني الدقيق',
    en: 'Precise timestamp tracking',
    icon: 'hgi hgi-stroke hgi-rounded hgi-clock-01',
    descriptionAr:
      'عرض تاريخ ووقت آخر تعديل للملفات والمجلدات بدقة عالية تشمل أجزاء الثانية لتعزيز دقة المتابعة.',
    descriptionEn:
      'Displays the exact date and time of the last modification including milliseconds for accurate tracking.',
  },
  {
    ar: 'تكامل البيانات مع التقارير',
    en: 'Data integration with reports',
    icon: 'hgi hgi-stroke hgi-rounded hgi-analytics-up',
    descriptionAr:
      'إمكانية تحويل بيانات الملفات إلى تقارير مفصلة عبر إنشاء شروط تصفية ورموز مخصصة داخل منتج التقارير.',
    descriptionEn:
      'Convert file data into detailed reports by creating filters and custom tokens within the reporting engine.',
  },
],
      steps: [
  {
    num: '01',
    titleAr: 'الإعدادات العامة',
    titleEn: 'General Settings',
    descAr: 'ضبط القواعد الأساسية للنظام',
    descEn: 'Configure basic system rules',
    detailDescAr:
      'تمكّن الإعدادات العامة من تحديد القواعد الأساسية للنظام مثل أنواع الملفات المسموحة وحجمها الأقصى لضمان إدارة فعّالة للمحتوى.',
    detailDescEn:
      'General settings allow defining the basic system rules such as allowed file types and maximum file size for efficient content management.',
  },
  {
    num: '02',
    titleAr: 'الصلاحيات',
    titleEn: 'Permissions',
    descAr: 'إدارة مستويات الوصول',
    descEn: 'Manage access levels',
    detailDescAr:
      'تتيح إدارة الصلاحيات التحكم في مستويات وصول المستخدمين وتحديد أدوارهم داخل النظام بما يضمن الأمان وتنظيم العمل.',
    detailDescEn:
      'Permissions management allows controlling user access levels and defining their roles within the system to ensure security and organized workflows.',
  },
  {
    num: '03',
    titleAr: 'منتج التقارير',
    titleEn: 'Report Engine',
    descAr: 'تحليل البيانات وإعداد التقارير',
    descEn: 'Data analysis and reporting',
    detailDescAr:
      'يقوم منتج التقارير بمعالجة البيانات وتحويلها إلى تقارير رقمية ورسوم بيانية تحليلية تدعم اتخاذ القرار.',
    detailDescEn:
      'The report engine processes data and converts it into digital reports and analytical charts to support decision-making.',
  },
  {
    num: '04',
    titleAr: 'مكتبة الملفات',
    titleEn: 'File Library',
    descAr: 'تنظيم وإدارة المستندات',
    descEn: 'Organize and manage documents',
    detailDescAr:
      'تساعد مكتبة الملفات على تنظيم وتخزين المستندات والمجلدات بطريقة منظمة تسهّل الوصول إليها وإدارتها داخل النظام.',
    detailDescEn:
      'The file library helps organize and store documents and folders in a structured way for easy access and management within the system.',
  },
],
      faqs: [
        {
          questionAr: 'هل يمكن تخصيص المنصة حسب احتياجاتنا؟',
          questionEn: 'Can the platform be customized to our needs?',
          answerAr:
            'نعم، المنصة مصممة لتكون مرنة وقابلة للتخصيص بالكامل لتناسب متطلبات عملك الخاصة.',
          answerEn:
            'Yes, the platform is designed to be flexible and fully customizable to suit your specific business requirements.',
          open: false,
        },
        {
          questionAr: 'كم يستغرق وقت التطبيق؟',
          questionEn: 'How long does the implementation take?',
          answerAr:
            'تعتمد مدة التنفيذ على حجم المؤسسة والمتطلبات، ولكن غالباً ما يستغرق الإعداد الأولي والتشغيل من 2 إلى 4 أسابيع.',
          answerEn:
            'The implementation time depends on the organization size and requirements, but usually, initial setup and launch take between 2 to 4 weeks.',
          open: false,
        },
        {
          questionAr: 'هل تدعم المنصة اللغة الإنجليزية؟',
          questionEn: 'Does the platform support English?',
          answerAr:
            'بالتأكيد، المنصة تدعم الواجهات ثنائية اللغة (العربية والإنجليزية) بشكل كامل مع دعم اتجاهات النص RTL و LTR.',
          answerEn:
            'Certainly, the platform fully supports bilingual interfaces (Arabic and English) with full support for RTL and LTR text directions.',
          open: false,
        },

        {
          questionAr: 'هل تقدمون تدريب للمستخدمين؟',
          questionEn: 'Do you provide training for users?',
          answerAr:
            'نعم، نقدم جلسات تدريبية شاملة للموظفين والمسؤولين عن النظام لضمان الاستخدام الأمثل لجميع خصائص المنصة.',
          answerEn:
            'Yes, we provide comprehensive training sessions for employees and system administrators to ensure optimal use of all platform features.',
          open: false,
        },
      ],
      images: [
        {
    url: 'assets/images/projects/lab-4.jpeg',
    titleAr: 'مكتبة الملفات وهيكل المجلدات',
    titleEn: 'File Library & Folder Structure',
    descriptionAr: 'مستودع رقمي متكامل لعرض المجلدات والملفات وهيكلتها، مع ميزة فرز وترتيب الملفات حسب الاسم أو الحجم أو التاريخ، ومتابعة إحصائيات المساحة والنشاط الأخير.',
    descriptionEn: 'An integrated digital repository for displaying and structuring folders and files, with sorting options by name, size, or date, alongside storage stats and recent activity tracking.'
  },
  {
    url: 'assets/images/projects/lab-5.jpeg',
    titleAr: 'إدارة وإنشاء المجلدات الرقمية',
    titleEn: 'Digital Folder Creation & Management',
    descriptionAr: 'واجهة سلسة تتيح تنظيم الأرشيف الرقمي عبر إنشاء مجلدات جديدة، وتصفح شجرة المجلدات الجانبية بسهولة لضمان حوكمة وترتيب الملفات داخل النظام.',
    descriptionEn: 'A seamless interface allowing digital archive organization through creating new folders and easily navigating the side folder tree to ensure system file governance.'
  },
  {
    url: 'assets/images/projects/lab-1.jpeg',
    titleAr: 'الإعدادات العامة للأنظمة',
    titleEn: 'General System Settings',
    descriptionAr: 'لوحة تحكم شاملة لضبط إعدادات النظام العامة مثل تحديد الحد الأقصى لحجم الملفات، أنواع الامتدادات المسموحة، ومستويات الأمان الافتراضية للحوكمة.',
    descriptionEn: 'A comprehensive control panel to configure general system settings such as maximum file size, allowed extensions, and default security levels for governance.'
  },
  {
    url: 'assets/images/projects/lab-2.jpeg',
    titleAr: 'منشئ التقارير الذكي والتصفية المتقدمة',
    titleEn: 'Smart Report Builder & Advanced Filtering',
    descriptionAr: 'واجهة متقدمة لبناء تقارير المراجعة الداخلية مع إمكانية إضافة شروط تصفية متعددة بناءً على نوع العملية، الحقل، والمصدر مع معاينة فورية للنتائج والسجلات.',
    descriptionEn: 'An advanced interface for building internal audit reports with multi-condition filtering capabilities based on operation type, field, and source, featuring real-time record preview.'
  },
  {
    url: 'assets/images/projects/lab-3.jpeg',
    titleAr: 'إدارة شروط البيانات والتقارير',
    titleEn: 'Data Conditions & Report Management',
    descriptionAr: 'نظام مرن يتيح للمستخدمين تحديد معايير دقيقة وتفاصيل الشروط وتخصيص البيانات المطلوبة قبل استخراج التقارير والرسوم البيانية النهائية بشكل منظم.',
    descriptionEn: 'A flexible system allowing users to define precise criteria, condition details, and customize required data before exporting final reports and charts.'
  },
  
  {
    url: 'assets/images/projects/lab-6.jpeg',
    titleAr: 'خطوات بناء وإدارة التقارير الاحترافية',
    titleEn: 'Professional Report Building Steps',
    descriptionAr: 'معالج ذكي متعدد الخطوات يبسط عملية إنشاء تقارير مرنة ومنظمة، يبدأ ببيانات شرط التصفية، مروراً بالتفاصيل وصولاً إلى العرض البياني النهائي.',
    descriptionEn: 'A smart multi-step wizard that simplifies the creation of flexible and organized reports, starting from filtering criteria data through to final charts visualization.'
  }
],
      video: 'assets/videos/projects/demo.mp4',
    },

    'strategic-planning': {
      titleAr: 'نظام إدارة الاستراتيجية',
      titleEn: 'Strategic Planning',
      shortTitleAr: 'استراتيجيتك',
      shortTitleEn: 'Your Strategy',
      descriptionAr:
        'نظام متكامل لإدارة الاستراتيجيات والأهداف والمؤشرات مع متابعة التنفيذ وتحليل الأداء.',
      descriptionEn:
        'An integrated system for managing strategies, objectives, and KPIs with execution tracking and performance analysis.',
      icon: '🎯',
      color: 'linear-gradient(195deg, #00adb1 -59.59%, #77479b 120%)',
      image: 'assets/images/projects/system-mangment-5.png',
      aboutfeatures: [
        {
          ar: ' هيكلة متكاملة للخطط ',
          en: 'Integrated structure of plans',
        },
        {
          ar: ' متابعة حية للأداء   ',
          en: 'Live performance monitoring ',
        },
        {
          ar: '  دعم القرار بالذكاء الاصطناعي    ',
          en: 'AI-assisted decision support   ',
        },
        {
          ar: '    نظام حوكمة متطور ',
          en: 'Advanced governance system     ',
        },
      ],
      features: [
        {
          ar: 'لوحة معلومات تفاعلية',
          en: 'Interactive dashboard',
          icon: 'hgi hgi-stroke hgi-rounded hgi-dashboard-square-01',
          descriptionAr:
            'توفر الصفحة عرضاً فورياً للإحصائيات والمبادرات الاستراتيجية مع تتبع نسب الإنجاز والمخاطر لدعم اتخاذ القرار بكفاءة.',
          descriptionEn:
            'Provides a real-time view of strategic statistics and initiatives with progress and risk tracking.',
        },
        {
          ar: 'إدارة ثنائية للخطط',
          en: 'Dual plan management',
          icon: 'hgi hgi-stroke hgi-rounded hgi-task-done-02',
          descriptionAr:
            'التنقل بين الخطط الاستراتيجية والتنفيذية ضمن هيكل موحد.',
          descriptionEn:
            'Manage strategic and operational plans in one unified structure.',
        },
        {
          ar: 'تقنيات الذكاء الاصطناعي والتحليلات',
          en: 'AI & analytics',
          icon: 'hgi hgi-stroke hgi-rounded hgi-ai-brain-01',
          descriptionAr: 'تحليلات ذكية وتوصيات مدعومة بالذكاء الاصطناعي.',
          descriptionEn: 'AI-powered insights and smart recommendations.',
        },
        {
          ar: 'الحوكمة والاعتمادات',
          en: 'Governance & approvals',
          icon: 'hgi hgi-stroke hgi-rounded hgi-shield-01',
          descriptionAr: 'سير عمل متكامل للمراجعة والاعتماد.',
          descriptionEn: 'Integrated workflow for approvals and governance.',
        },
        {
          ar: 'خيارات عرض مرنة وسهلة الاستخدام',
          en: 'Flexible display options',
          icon: 'hgi hgi-stroke hgi-rounded hgi-eye',
          descriptionAr:
            'عرض البيانات عبر البطاقات أو الجداول مع أدوات بحث وتصفية.',
          descriptionEn: 'Flexible views with filtering and search tools.',
        },
        {
          ar: 'إدارة استباقية للمخاطر والتحديات',
          en: 'Proactive risk management',
          icon: 'hgi hgi-stroke hgi-rounded hgi-alert-02',
          descriptionAr: 'متابعة المخاطر والإجراءات الوقائية بشكل مستمر.',
          descriptionEn:
            'Continuous monitoring of risks and mitigation actions.',
        },
      ],
      steps: [
        {
          num: '01',
          titleAr: 'التهيئة وضبط الصلاحيات',
          titleEn: 'Setup & Permissions',
          descAr: 'إعداد البيئة التشغيلية',
          descEn: 'Operational environment setup',
          detailDescAr:
            'يبدأ النظام بتعريف الأدوار والهياكل التنظيمية ومنح الصلاحيات المناسبة لكل مستخدم، إلى جانب إعداد القوالب والرموز والإعدادات العامة لضمان بيئة تشغيل آمنة ومنظمة وسهلة الإدارة.',
          detailDescEn:
            'The system starts by defining roles, organizational structures, and assigning appropriate permissions for each user, along with configuring templates, codes, and general settings to ensure a secure and organized operating environment.',
        },
        {
          num: '02',
          titleAr: 'تحويل الرؤية إلى خطط إجرائية',
          titleEn: 'Vision to Action Plans',
          descAr: 'بناء الخطط التنفيذية',
          descEn: 'Building execution plans',
          detailDescAr:
            'يربط النظام بين التوجهات الاستراتيجية والخطط التنفيذية من خلال تحويل الأهداف العليا إلى مبادرات ومشاريع تفصيلية مرتبطة بجدول زمني واضح ومؤشرات أداء قابلة للقياس والمتابعة.',
          detailDescEn:
            'The system connects strategic directions with operational plans by transforming high-level goals into detailed initiatives and projects linked to clear timelines and measurable KPIs.',
        },
        {
          num: '03',
          titleAr: 'أتمتة دورة الاعتمادات',
          titleEn: 'Workflow Automation',
          descAr: 'إدارة الاعتمادات والمراجعات',
          descEn: 'Managing approvals and reviews',
          detailDescAr:
            'يدير النظام مسارات العمل عبر آليات Workflow مرنة تضمن انتقال الخطط بين مراحل المراجعة والتدقيق والاعتماد، مع إشراك أصحاب المصلحة قبل اعتماد الخطط وتفعيلها رسميًا.',
          detailDescEn:
            'The system manages workflows through flexible mechanisms that ensure plans move smoothly through review, auditing, and approval stages while involving stakeholders before official activation.',
        },
        {
          num: '04',
          titleAr: 'التحليل الفوري والتطوير الذكي',
          titleEn: 'Smart Analytics & Improvement',
          descAr: 'تحليلات وتوصيات ذكية',
          descEn: 'Smart insights and recommendations',
          detailDescAr:
            'يعالج النظام بيانات الإنجاز والتشغيل بشكل لحظي لتحديث مؤشرات الأداء (KPIs) تلقائيًا، مع تقديم تحليلات ذكية وتوصيات مدعومة بالذكاء الاصطناعي لدعم اتخاذ القرار وتحسين كفاءة التنفيذ وتحقيق المستهدفات.',
          detailDescEn:
            'The system processes operational and achievement data in real time to automatically update KPIs, while providing AI-powered analytics and recommendations to support decision-making and improve execution efficiency.',
        },
      ],
      faqs: [
        {
          questionAr: 'هل يمكن تخصيص المنصة حسب احتياجاتنا؟',
          questionEn: 'Can the platform be customized to our needs?',
          answerAr:
            'نعم، المنصة مصممة لتكون مرنة وقابلة للتخصيص بالكامل لتناسب متطلبات عملك الخاصة.',
          answerEn:
            'Yes, the platform is designed to be flexible and fully customizable to suit your specific business requirements.',
          open: false,
        },
        {
          questionAr: 'كم يستغرق وقت التطبيق؟',
          questionEn: 'How long does the implementation take?',
          answerAr:
            'تعتمد مدة التنفيذ على حجم المؤسسة والمتطلبات، ولكن غالباً ما يستغرق الإعداد الأولي والتشغيل من 2 إلى 4 أسابيع.',
          answerEn:
            'The implementation time depends on the organization size and requirements, but usually, initial setup and launch take between 2 to 4 weeks.',
          open: false,
        },
        {
          questionAr: 'هل تدعم المنصة اللغة الإنجليزية؟',
          questionEn: 'Does the platform support English?',
          answerAr:
            'بالتأكيد، المنصة تدعم الواجهات ثنائية اللغة (العربية والإنجليزية) بشكل كامل مع دعم اتجاهات النص RTL و LTR.',
          answerEn:
            'Certainly, the platform fully supports bilingual interfaces (Arabic and English) with full support for RTL and LTR text directions.',
          open: false,
        },

        {
          questionAr: 'هل تقدمون تدريب للمستخدمين؟',
          questionEn: 'Do you provide training for users?',
          answerAr:
            'نعم، نقدم جلسات تدريبية شاملة للموظفين والمسؤولين عن النظام لضمان الاستخدام الأمثل لجميع خصائص المنصة.',
          answerEn:
            'Yes, we provide comprehensive training sessions for employees and system administrators to ensure optimal use of all platform features.',
          open: false,
        },
      ],
      // أضف هذه المصفوفة داخل كل مشروع في projectsData
      testimonials: [
        {
          nameAr: 'خالد المطيري',
          nameEn: 'Khalid Al-Mutairi',
          positionAr: 'مدير تقنية المعلومات',
          positionEn: 'IT Manager',
          companyAr: 'الهيئة العامة',
          companyEn: 'General Authority',
          rating: 5,
          quoteAr:
            'التكامل السلس مع أنظمتنا الحالية جعل التنفيذ أسرع مما توقعنا',
          quoteEn:
            'Seamless integration with our existing systems made implementation faster than we expected',
          avatar: 'assets/images/testimonials/khalid.jpg',
          gradient: 'linear-gradient(135deg, #00adb1 0%, #77479b 100%)',
        },
        {
          nameAr: 'نورة القحطاني',
          nameEn: 'Noura Al-Qahtani',
          positionAr: 'مديرة التحول الرقمي',
          positionEn: 'Digital Transformation Director',
          companyAr: 'مؤسسة المستقبل',
          companyEn: 'Future Foundation',
          rating: 5,
          quoteAr:
            'الذكاء الاصطناعي في التحليلات وفر علينا وقتاً ثميناً في اتخاذ القرارات الاستراتيجية',
          quoteEn:
            'AI in analytics saved us valuable time in strategic decision-making',
          avatar: 'assets/images/testimonials/noura.jpg',
          gradient: 'linear-gradient(135deg, #00adb1 0%, #77479b 100%)',
        },
        {
          nameAr: 'أحمد السلام',
          nameEn: 'Ahmed Al-Salam',
          positionAr: 'مدير التخطيط الاستراتيجي',
          positionEn: 'Strategic Planning Manager',
          companyAr: 'شركة التقنية المتقدمة',
          companyEn: 'Advanced Technology Company',
          rating: 5,
          quoteAr:
            'ساعدتنا المنصة على توحيد الرؤية بين الإدارات، وخفض وقت إعداد التقارير بنسبة 70%',
          quoteEn:
            'The platform helped us unify the vision across departments, reducing report preparation time by 70%',
          avatar: 'assets/images/testimonials/ahmed.jpg',
          gradient: 'linear-gradient(135deg, #00adb1 0%, #77479b 100%)',
        },
      ],
      images: [
        {
          url: 'assets/images/projects/str-1.jpeg',
          titleAr: 'لوحة الأهداف الاستراتيجية',
          titleEn: 'Strategic Goals Dashboard',
          descriptionAr:
            'نافذة ذكية لإدارة الخارطة الاستراتيجية، تضمن مواءمة الأهداف التشغيلية مع التوجهات الكبرى للمؤسسة . ',
          descriptionEn:
            'A smart window for managing the strategic map, ensuring that operational objectives are aligned with the organization’s major directions.',
        },
        {
          url: 'assets/images/projects/str-2.jpeg',
          titleAr: 'لوحة المعلومات الخاصة بلاستراتيجيات  ',
          titleEn: 'Strategies dashboard',
          descriptionAr:
            'مركز تحليل رقمي متطور يعتمد على تدفق البيانات اللحظي لرصد نبض الأداء . ',
          descriptionEn:
            'A sophisticated digital analysis center that relies on real-time data flow to monitor the pulse of performance.',
        },
        {
          url: 'assets/images/projects/str-3.jpeg',
          titleAr: 'الخطط الاستراتيجية والتنفيذية ',
          titleEn: 'Strategic Plans & Executive',
          descriptionAr:
            'تحويل الأهداف الاستراتيجية إلى خطط تشغيلية  محددة بميزانيات وجداول زمنية.',
          descriptionEn:
            'Transform strategic goals into operational plans and Executive with budgets and timelines.',
        },
        {
          url: 'assets/images/projects/str-4.jpeg',
          titleAr: 'تحليل الأداء وتقارير الإنجاز',
          titleEn: 'Performance Analysis & Achievement Reports',
          descriptionAr:
            'تحليل أداء الاستراتيجيات ونسب إنجاز الأهداف مع تحليل الفجوات والتحديات.',
          descriptionEn:
            'Analyze strategy performance and goal completion rates with gap and challenge analysis.',
        },
      ],
      video: 'assets/videos/projects/demo.mp4',
    },

    'projects-management': {
      titleAr: 'نظام إدارة المشاريع',
      titleEn: 'Projects Management',
      shortTitleAr: 'مشاريعك',
      shortTitleEn: 'Your Projects',
      descriptionAr:
        'نظام احترافي لإدارة المشاريع ومتابعة المهام والميزانيات والجداول الزمنية.',
      descriptionEn:
        'A professional system for managing projects, tracking tasks, budgets, and timelines.',
      icon: '🏗️',
      color: 'linear-gradient(195deg, #00adb1 -59.59%, #77479b 120%)',
      image: 'assets/images/projects/pm-6.png',
      aboutfeatures: [
        {
          ar: 'لوحات متابعة لحظية وتفاعلية',
          en: 'Real-time interactive dashboards',
        },

        {
          ar: 'نظام متطور لإدارة المخاطر',
          en: 'Advanced risk management system',
        },

        {
          ar: 'الرقابة المالية والتعاقدية',
          en: 'Financial and contractual control',
        },

        {
          ar: 'أدوات الدعم الذكي (AI)',
          en: 'AI-powered support tools',
        },
      ],
      features: [
        {
          ar: 'لوحات متابعة لحظية (KPIs)',
          en: 'Real-time KPI dashboards',
          icon: 'hgi hgi-stroke hgi-rounded hgi-dashboard-square-01',
          descriptionAr:
            'متابعة فورية لمؤشرات الأداء والمشاريع والأهداف التنفيذية عبر لوحات ذكية تضمن وضوح التقدم وتحقيق المواءمة الاستراتيجية.',
          descriptionEn:
            'Real-time monitoring of KPIs, projects, and strategic objectives through smart dashboards that ensure visibility and strategic alignment.',
        },
        {
          ar: 'سياق المعرفة بالذكاء الاصطناعي',
          en: 'AI knowledge context',
          icon: 'hgi hgi-stroke hgi-rounded hgi-ai-brain-01',
          descriptionAr:
            'تحليل المستندات والملفات تلقائياً باستخدام الذكاء الاصطناعي لاستخراج المعلومات وتقديم رؤى ذكية تدعم اتخاذ القرار.',
          descriptionEn:
            'Automatically analyze documents and files using AI to extract insights and provide intelligent decision-making support.',
        },
        {
          ar: 'إدارة المخاطر الذكية',
          en: 'Smart risk management',
          icon: 'hgi hgi-stroke hgi-rounded hgi-security-check',
          descriptionAr:
            'نظام متقدم لتحليل وتصنيف المخاطر مع توصيات ذكية تساعد على الاستجابة السريعة وتقليل التأثيرات المحتملة.',
          descriptionEn:
            'Advanced system for analyzing and classifying risks with smart recommendations for faster response and reduced impact.',
        },
        {
          ar: 'الرقابة المالية المتكاملة',
          en: 'Integrated financial control',
          icon: 'hgi hgi-stroke hgi-rounded hgi-money-bag-02',
          descriptionAr:
            'متابعة دقيقة للعقود والمصروفات والتدفقات المالية للمشاريع من خلال تقارير ولوحات مالية تفاعلية.',
          descriptionEn:
            'Accurate tracking of contracts, expenses, and project cash flows through interactive financial reports and dashboards.',
        },
        {
          ar: 'المساعد الذكي (Smart Assistant)',
          en: 'Smart assistant',
          icon: 'hgi hgi-stroke hgi-rounded hgi-bot',
          descriptionAr:
            'مساعد مدعوم بالذكاء الاصطناعي للإجابة على الاستفسارات، تسهيل الوصول للمعلومات، ودعم المستخدم أثناء العمل.',
          descriptionEn:
            'AI-powered assistant that answers inquiries, simplifies information access, and supports users during work.',
        },
        {
          ar: 'الجداول الزمنية التفاعلية',
          en: 'Interactive timelines',
          icon: 'hgi hgi-stroke hgi-rounded hgi-task-daily-01',
          descriptionAr:
            'عرض مرئي متكامل لمراحل التنفيذ والمهام والمواعيد النهائية مع متابعة التحديات والمخاطر لكل مشروع.',
          descriptionEn:
            'Comprehensive visual timelines for execution phases, tasks, and deadlines with risk and challenge tracking for each project.',
        },
      ],
      steps: [
        {
          num: '01',
          titleAr: 'التخطيط والربط',
          titleEn: 'Planning & Alignment',
          descAr: 'ربط المشاريع بالأهداف التنفيذية',
          descEn: 'Aligning projects with strategic goals',
          detailDescAr:
            'ربط المشاريع بالأهداف التنفيذية ضمن هيكلية تبدأ من المحافظ والبرامج والمبادرات لضمان المواءمة الاستراتيجية.',
          detailDescEn:
            'Linking projects with strategic objectives through a structure starting from portfolios, programs, and initiatives to ensure strategic alignment.',
        },

        {
          num: '02',
          titleAr: 'الإجراءات والاعتمادات',
          titleEn: 'Processes & Approvals',
          descAr: 'إدارة الطلبات والموافقات',
          descEn: 'Managing requests and approvals',
          detailDescAr:
            'إدارة طلبات الاعتماد ومسارات الموافقات (Workflow) لضمان الحوكمة والتنظيم قبل التنفيذ.',
          detailDescEn:
            'Managing approval requests and workflow processes to ensure governance and organization before execution.',
        },

        {
          num: '03',
          titleAr: 'التنفيذ والمتابعة',
          titleEn: 'Execution & Monitoring',
          descAr: 'متابعة المشاريع لحظياً',
          descEn: 'Real-time project tracking',
          detailDescAr:
            'متابعة المشاريع لحظياً عبر الجداول الزمنية ومؤشرات الأداء ونسب الإنجاز والتكاليف المالية.',
          detailDescEn:
            'Tracking projects in real time through timelines, KPIs, progress rates, and financial costs.',
        },

        {
          num: '04',
          titleAr: 'الرقابة الذكية',
          titleEn: 'Smart Governance',
          descAr: 'تحليل المخاطر والتوصيات الذكية',
          descEn: 'Risk analysis and AI recommendations',
          detailDescAr:
            'تحليل المخاطر وإصدار التوصيات والتقارير الذكية باستخدام أدوات الذكاء الاصطناعي والمساعد الذكي.',
          detailDescEn:
            'Analyzing risks and generating smart recommendations and reports using AI tools and smart assistants.',
        },
      ],
      faqs: [
        {
          questionAr: 'هل يمكن تخصيص المنصة حسب احتياجاتنا؟',
          questionEn: 'Can the platform be customized to our needs?',
          answerAr:
            'نعم، المنصة مصممة لتكون مرنة وقابلة للتخصيص بالكامل لتناسب متطلبات عملك الخاصة.',
          answerEn:
            'Yes, the platform is designed to be flexible and fully customizable to suit your specific business requirements.',
          open: false,
        },
        {
          questionAr: 'كم يستغرق وقت التطبيق؟',
          questionEn: 'How long does the implementation take?',
          answerAr:
            'تعتمد مدة التنفيذ على حجم المؤسسة والمتطلبات، ولكن غالباً ما يستغرق الإعداد الأولي والتشغيل من 2 إلى 4 أسابيع.',
          answerEn:
            'The implementation time depends on the organization size and requirements, but usually, initial setup and launch take between 2 to 4 weeks.',
          open: false,
        },
        {
          questionAr: 'هل تدعم المنصة اللغة الإنجليزية؟',
          questionEn: 'Does the platform support English?',
          answerAr:
            'بالتأكيد، المنصة تدعم الواجهات ثنائية اللغة (العربية والإنجليزية) بشكل كامل مع دعم اتجاهات النص RTL و LTR.',
          answerEn:
            'Certainly, the platform fully supports bilingual interfaces (Arabic and English) with full support for RTL and LTR text directions.',
          open: false,
        },

        {
          questionAr: 'هل تقدمون تدريب للمستخدمين؟',
          questionEn: 'Do you provide training for users?',
          answerAr:
            'نعم، نقدم جلسات تدريبية شاملة للموظفين والمسؤولين عن النظام لضمان الاستخدام الأمثل لجميع خصائص المنصة.',
          answerEn:
            'Yes, we provide comprehensive training sessions for employees and system administrators to ensure optimal use of all platform features.',
          open: false,
        },
      ],
      images: [
        {
          url: 'assets/images/projects/pm-4.png',
          titleAr: 'لوحة إدارة المشاريع',
          titleEn: 'Projects Management Dashboard',
          descriptionAr:
            'لوحة تحكم متكاملة تعرض جميع المشاريع مع مؤشرات التقدم والميزانيات والموارد.',
          descriptionEn:
            'Integrated dashboard displaying all projects with progress indicators, budgets, and resources.',
        },
        {
          url: 'assets/images/projects/pm-7.png',
          titleAr: 'مخططات جانت والجداول الزمنية',
          titleEn: 'Gantt Charts & Timelines',
          descriptionAr:
            'مخططات جانت متطورة لعرض الجداول الزمنية للمشاريع ومتابعة المعالم الرئيسية والتسليمات.',
          descriptionEn:
            'Advanced Gantt charts for displaying project timelines and tracking key milestones and deliverables.',
        },
        {
          url: 'assets/images/projects/pm-5.png',
          titleAr: 'إدارة ميزانيات المشاريع',
          titleEn: 'Project Budgets Management',
          descriptionAr:
            'مراقبة ميزانيات المشاريع والتكاليف الفعلية مقابل المخططة مع تحليل الفروقات.',
          descriptionEn:
            'Monitor project budgets and actual costs versus planned with variance analysis.',
        },
        {
          url: 'assets/images/projects/pm-3.png',
          titleAr: 'تقارير تقدم المشاريع',
          titleEn: 'Projects Progress Reports',
          descriptionAr:
            'تقارير مرحلية عن تقدم المشاريع وإنجاز المهام والمخاطر والتحديات.',
          descriptionEn:
            'Progress reports on project advancement, task completion, risks, and challenges.',
        },
        {
          url: 'assets/images/projects/pm-8.png',
          titleAr: 'خطوات استخدام منصة صميم لإدارة المشاريع',
          titleEn: 'Steps to Use the SMEEM Project Management Platform',
          descriptionAr:
            'شرح خطوات إدخال بيانات المشروع وإكمال الإجراءات حتى إرسالها للاعتماد.',
          descriptionEn:
            'Explanation of the steps to enter project data and complete procedures until submission for approval.',
        },
        {
          url: 'assets/images/projects/pm-9.jpeg',
          titleAr: 'تدفق استخدام منصة صميم لإدارة المشاريع',
          titleEn: 'SMEEM Platform Project Management Workflow',
          descriptionAr:
            'تقارير مرحلية عن تقدم المشاريع وإنجاز المهام والمخاطر والتحديات.',
          descriptionEn:
            'Progress reports on project advancement, task completion, risks, and challenges.',
        },
      ],
      testimonials: [
        {
          nameAr: 'خالد المطيري',
          nameEn: 'Khalid Al-Mutairi',
          positionAr: 'مدير تقنية المعلومات',
          positionEn: 'IT Manager',
          companyAr: 'الهيئة العامة',
          companyEn: 'General Authority',
          rating: 5,
          quoteAr:
            'التكامل السلس مع أنظمتنا الحالية جعل التنفيذ أسرع مما توقعنا',
          quoteEn:
            'Seamless integration with our existing systems made implementation faster than we expected',
          avatar: 'assets/images/testimonials/khalid.jpg',
          gradient: 'linear-gradient(135deg, #00adb1 0%, #77479b 100%)',
        },
        {
          nameAr: 'نورة القحطاني',
          nameEn: 'Noura Al-Qahtani',
          positionAr: 'مديرة التحول الرقمي',
          positionEn: 'Digital Transformation Director',
          companyAr: 'مؤسسة المستقبل',
          companyEn: 'Future Foundation',
          rating: 5,
          quoteAr:
            'الذكاء الاصطناعي في التحليلات وفر علينا وقتاً ثميناً في اتخاذ القرارات الاستراتيجية',
          quoteEn:
            'AI in analytics saved us valuable time in strategic decision-making',
          avatar: 'assets/images/testimonials/noura.jpg',
          gradient: 'linear-gradient(135deg, #00adb1 0%, #77479b 100%)',
        },
        {
          nameAr: 'أحمد السلام',
          nameEn: 'Ahmed Al-Salam',
          positionAr: 'مدير التخطيط الاستراتيجي',
          positionEn: 'Strategic Planning Manager',
          companyAr: 'شركة التقنية المتقدمة',
          companyEn: 'Advanced Technology Company',
          rating: 5,
          quoteAr:
            'ساعدتنا المنصة على توحيد الرؤية بين الإدارات، وخفض وقت إعداد التقارير بنسبة 70%',
          quoteEn:
            'The platform helped us unify the vision across departments, reducing report preparation time by 70%',
          avatar: 'assets/images/testimonials/ahmed.jpg',
          gradient: 'linear-gradient(135deg, #00adb1 0%, #77479b 100%)',
        },
      ],
      video: 'assets/videos/projects/demo.mp4',
    },
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public translate: TranslateService, // جعلها public للوصول إليها من الـ HTML
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.projectName = params['name'];
      this.project =
        this.projectsData[this.projectName as keyof typeof this.projectsData];

      if (!this.project) {
        this.router.navigate(['/']);
      }
    });
  }

  activeTab: 'features' | 'gallery' | 'video' | 'howItWorks' = 'howItWorks';
  activeStep = 0;
  private stepTimer: any;

  /** استخدم هذه الدالة لتغيير التاب بدل (click)="activeTab = '...'" مباشرة */
  setTab(tab: 'features' | 'gallery' | 'video' | 'howItWorks'): void {
    this.activeTab = tab;

    if (tab === 'howItWorks') {
      this.activeStep = 0;
      this.startStepTimer();
    } else {
      clearInterval(this.stepTimer);
    }
  }

  goStep(i: number): void {
    clearInterval(this.stepTimer);
    this.activeStep = i;
    this.startStepTimer();
  }

  getLineWidth(): string {
    if (!this.project?.steps?.length) return '0%';
    const total = this.project.steps.length - 1;
    if (total === 0 || this.activeStep === 0) return '0%';
    return (this.activeStep / total) * 90 + '%';
  }

  private startStepTimer(): void {
    clearInterval(this.stepTimer);
    this.stepTimer = setInterval(() => {
      if (!this.project?.steps) return;
      this.activeStep = (this.activeStep + 1) % this.project.steps.length;
    }, 3500);
  }

  ngOnDestroy(): void {
    clearInterval(this.stepTimer);
  }

  // دالة لفتح وإغلاق الأكورديون
  toggleFaq(index: number) {
    this.project.faqs[index].open = !this.project.faqs[index].open;
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  requestDemo(): void {
    console.log('Demo requested for:', this.projectName);
  }

  openDemoRequestDialog(project: any): void {

    const dialogRef = this.dialog.open(DemoRequestDialogComponent, {
       width: '450px',
  height: '100vh',
  position: { left: '0' },
  panelClass: 'left-dialog',
      data:
       { project: this.project }
       
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Demo request submitted:', result);
        // Here you can add API call to submit the form data
      }
    });
  }

  watchVideo(): void {
    console.log('Video requested for:', this.projectName);
  }

  /** Converts a hex color to rgba with opacity */
  hexToRgba(hex: string, opacity: number): string {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return `rgba(0,0,0,${opacity})`;
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);
    return `rgba(${r},${g},${b},${opacity})`;
  }

  // ngAfterViewInit(): void {
  //   this.drawDonutChart();
  //   this.drawBarChart();
  //   this.drawGaugeChart();
  // }

  // // 1. رسم المخطط الدائري (Donut)
  // drawDonutChart(): void {
  //   const canvas = document.getElementById('donutChart') as HTMLCanvasElement;
  //   if (!canvas) return;

  //   const ctx = canvas.getContext('2d');
  //   if (!ctx) return;

  //   const targetPercent = 87;
  //   let currentPercent = 0;

  //   const animate = () => {
  //     ctx.clearRect(0, 0, 120, 120);

  //     // الخلفية الرمادية
  //     ctx.beginPath();
  //     ctx.arc(60, 60, 45, 0, Math.PI * 2);
  //     ctx.strokeStyle = '#e9ecef';
  //     ctx.lineWidth = 8;
  //     ctx.stroke();

  //     // الجزء الملون
  //     const startAngle = -Math.PI / 2;
  //     const endAngle = startAngle + (Math.PI * 2 * currentPercent) / 100;
  //     ctx.beginPath();
  //     ctx.arc(60, 60, 45, startAngle, endAngle);
  //     ctx.strokeStyle = '#4c6ef5';
  //     ctx.lineWidth = 8;
  //     ctx.lineCap = 'round';
  //     ctx.stroke();

  //     // النص في المنتصف
  //     ctx.font = 'bold 18px sans-serif';
  //     ctx.fillStyle = '#2c3e50';
  //     ctx.textAlign = 'center';
  //     ctx.textBaseline = 'middle';
  //     ctx.fillText(`${Math.floor(currentPercent)}%`, 60, 60);

  //     if (currentPercent < targetPercent) {
  //       currentPercent += 1.8;
  //       requestAnimationFrame(animate);
  //     }
  //   };

  //   animate();
  // }

  // // 2. رسم المخطط الشريطي العمودي (Bar Chart)
  // drawBarChart(): void {
  //   const canvas = document.getElementById('barChart') as HTMLCanvasElement;
  //   if (!canvas) return;

  //   const ctx = canvas.getContext('2d');
  //   if (!ctx) return;

  //   const targetHeight = 70; // 70% من الأهداف تحققت
  //   let currentHeight = 0;

  //   const animate = () => {
  //     ctx.clearRect(0, 0, 120, 120);

  //     // رسم الأعمدة الخلفية (رمادية)
  //     const barWidth = 20;
  //     const spacing = 15;
  //     const startX = 35;

  //     // عمود 1 (رمادي خلفية)
  //     ctx.fillStyle = '#e9ecef';
  //     ctx.fillRect(startX, 85 - 60, barWidth, 60);

  //     // عمود 2 (رمادي خلفية)
  //     ctx.fillStyle = '#e9ecef';
  //     ctx.fillRect(startX + barWidth + spacing, 85 - 60, barWidth, 60);

  //     // عمود 3 (رمادي خلفية)
  //     ctx.fillStyle = '#e9ecef';
  //     ctx.fillRect(startX + (barWidth + spacing) * 2, 85 - 60, barWidth, 60);

  //     // الأعمدة الملونة (الجزء المتحرك)
  //     const fillHeight = (currentHeight / 100) * 60;

  //     // عمود 1 ملون
  //     ctx.fillStyle = '#4c6ef5';
  //     ctx.fillRect(startX, 85 - fillHeight, barWidth, fillHeight);

  //     // عمود 2 ملون (أقل قليلاً لتباين جميل)
  //     ctx.fillStyle = '#6c5ce7';
  //     ctx.fillRect(
  //       startX + barWidth + spacing,
  //       85 - fillHeight * 0.8,
  //       barWidth,
  //       fillHeight * 0.8,
  //     );

  //     // عمود 3 ملون
  //     ctx.fillStyle = '#a363d9';
  //     ctx.fillRect(
  //       startX + (barWidth + spacing) * 2,
  //       85 - fillHeight * 0.9,
  //       barWidth,
  //       fillHeight * 0.9,
  //     );

  //     // إضافة خط أفقي عند القيمة
  //     ctx.beginPath();
  //     ctx.moveTo(25, 85 - fillHeight);
  //     ctx.lineTo(105, 85 - fillHeight);
  //     ctx.strokeStyle = '#ff6b6b';
  //     ctx.lineWidth = 1.5;
  //     ctx.setLineDash([4, 4]);
  //     ctx.stroke();
  //     ctx.setLineDash([]);

  //     // كتابة النسبة
  //     ctx.font = 'bold 12px sans-serif';
  //     ctx.fillStyle = '#ff6b6b';
  //     ctx.fillText(`${Math.floor(currentHeight)}%`, 95, 85 - fillHeight - 2);

  //     if (currentHeight < targetHeight) {
  //       currentHeight += 1.5;
  //       requestAnimationFrame(animate);
  //     }
  //   };

  //   animate();
  // }

  // // 3. رسم مقياس السرعة (Gauge Chart)
  // drawGaugeChart(): void {
  //   const canvas = document.getElementById('gaugeChart') as HTMLCanvasElement;
  //   if (!canvas) return;

  //   const ctx = canvas.getContext('2d');
  //   if (!ctx) return;

  //   const targetValue = 87; // 87%
  //   let currentValue = 0;

  //   const animate = () => {
  //     ctx.clearRect(0, 0, 120, 120);

  //     const centerX = 60;
  //     const centerY = 60;
  //     const radius = 45;

  //     // رسم القوس الخلفي (رمادي)
  //     ctx.beginPath();
  //     ctx.arc(centerX, centerY, radius, 0.8 * Math.PI, 2.2 * Math.PI);
  //     ctx.strokeStyle = '#e9ecef';
  //     ctx.lineWidth = 10;
  //     ctx.stroke();

  //     // رسم القوس الملون (حسب النسبة)
  //     const startAngle = 0.8 * Math.PI;
  //     const endAngle = startAngle + (1.4 * Math.PI * currentValue) / 100;
  //     ctx.beginPath();
  //     ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  //     ctx.strokeStyle = '#20c997';
  //     ctx.lineWidth = 10;
  //     ctx.lineCap = 'round';
  //     ctx.stroke();

  //     // رسم المؤشر (السهم)
  //     const angle = startAngle + (1.4 * Math.PI * currentValue) / 100;
  //     const arrowLength = 35;
  //     const arrowX = centerX + Math.cos(angle) * arrowLength;
  //     const arrowY = centerY + Math.sin(angle) * arrowLength;

  //     ctx.beginPath();
  //     ctx.moveTo(centerX, centerY);
  //     ctx.lineTo(arrowX, arrowY);
  //     ctx.strokeStyle = '#ff6b6b';
  //     ctx.lineWidth = 3;
  //     ctx.stroke();

  //     // رسم دائرة صغيرة في المنتصف
  //     ctx.beginPath();
  //     ctx.arc(centerX, centerY, 6, 0, Math.PI * 2);
  //     ctx.fillStyle = '#ff6b6b';
  //     ctx.fill();

  //     // كتابة النسبة
  //     ctx.font = 'bold 14px sans-serif';
  //     ctx.fillStyle = '#2c3e50';
  //     ctx.textAlign = 'center';
  //     ctx.textBaseline = 'middle';
  //     ctx.fillText(`${Math.floor(currentValue)}%`, centerX, centerY + 15);

  //     if (currentValue < targetValue) {
  //       currentValue += 1.8;
  //       requestAnimationFrame(animate);
  //     }
  //   };

  //   animate();
  // }
}
