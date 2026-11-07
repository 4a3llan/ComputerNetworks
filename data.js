/* Question bank — 40 MCQs (section 1: Q1–20, section 2: Q21–40).
   Fields: section, question, options[], answer (letter + text), explanation (Arabic). */
const QUESTIONS = [
  {
    "section": 1,
    "question": "Which protocol function determines if data became corrupted or changed during transmission, whereas Reliability provides guaranteed delivery?",
    "options": [
      "Flow Control",
      "Error Detection",
      "Sequencing",
      "Addressing"
    ],
    "answer": "b. Error Detection",
    "explanation": "اخترنا هذه الإجابة لأن وظيفة اكتشاف الأخطاء (Error Detection) هي المسؤولة عن تحديد ما إذا كانت البيانات قد تعرضت للتلف أو التغيير أثناء النقل، بينما الموثوقية (Reliability) هي الوظيفة المسؤولة عن ضمان وصول البيانات (Guaranteed delivery) من المرسل إلى المستقبل."
  },
  {
    "section": 1,
    "question": "Which layer is used to deliver an individual packet from the source host to the destination host?",
    "options": [
      "Data Link layer",
      "Network layer",
      "Transport layer",
      "Physical layer"
    ],
    "answer": "b. Network layer",
    "explanation": "اخترنا طبقة الشبكة (Network layer) لأنها المسؤولة عن توصيل الحزم (Packets) من الجهاز المصدر إلى الجهاز الوجهة (Source-to-destination / Host-to-host delivery) عبر اختيار أفضل مسار للتوجيه (Routing) واستخدام العناوين المنطقية (IP addresses)."
  },
  {
    "section": 1,
    "question": "Which layer in the OSI model is directly responsible for providing services to the user?",
    "options": [
      "Presentation layer",
      "Session layer",
      "Transport layer",
      "Application layer"
    ],
    "answer": "d. Application layer",
    "explanation": "اخترنا طبقة التطبيقات (Application layer) لأنها الطبقة العليا التي تتعامل مباشرة مع المستخدم (سواء كان إنساناً أو برنامجاً) وتوفر له الخدمات اللازمة للتواصل عبر الشبكة، وتكون وحدة البيانات فيها هي الرسالة (Message)."
  },
  {
    "section": 1,
    "question": "Reassembly is the counterpart of Segmentation that reassembles the labeled pieces (segments) back into a complete ............. at the destination.",
    "options": [
      "Frame",
      "Bit stream",
      "Message (Data stream)",
      "Physical signal"
    ],
    "answer": "c. Message (Data stream)",
    "explanation": "اخترنا الرسالة أو تدفق البيانات (Message / Data stream) لأن عملية التجزئة (Segmentation) تقوم بتقسيم الرسالة الكبيرة إلى أجزاء صغيرة تُسمى (Segments)، وعملية إعادة التجميع (Reassembly) هي العملية العكسية عند جهاز الوجهة حيث يتم تجميع هذه الأجزاء المرقمة لإعادة تكوين الرسالة الأصلية لتسليمها لطبقة التطبيقات، وليس تجميع الحزم في إطارات (Frames)."
  },
  {
    "section": 1,
    "question": "What is the primary role of Flow Control in network communications?",
    "options": [
      "Managing the rate of data transmission and limiting the amount of data sent to ensure efficient flow",
      "Determining the best physical medium for signals",
      "Encrypting data to protect it from unauthorized access",
      "Assigning physical MAC addresses to network interface cards"
    ],
    "answer": "a. Managing the rate of data transmission and limiting the amount of data sent to ensure efficient flow",
    "explanation": "اخترنا هذه الإجابة لأن التحكم في التدفق (Flow Control) هو أحد متطلبات التوقيت وبروتوكولات الشبكة، ويعمل على إدارة معدل إرسال البيانات وتحديد كمية المعلومات التي يمكن إرسالها وسرعة تسليمها لضمان تدفقها بكفاءة دون إغراق الطرف المستقبل."
  },
  {
    "section": 1,
    "question": "In data transmission, what does the process of Multiplexing perform?",
    "options": [
      "Breaking a single message into smaller segments",
      "Interleaving multiple streams of segmented data or gathering data from multiple application processes to send over a shared link",
      "Stripping off protocol headers at the destination device",
      "Converting binary bits into electrical signals"
    ],
    "answer": "b. Interleaving multiple streams of segmented data or gathering data from multiple application processes to send over a shared link",
    "explanation": "اخترنا هذه الإجابة لأن الدمج (Multiplexing) يقوم بجمع البيانات من عدة تطبيقات لدى المرسل وتغليفها أو مداخلة (Interleaving) عدة سلاسل من الأجزاء المقسمة لإرسالها معاً عبر نفس خط الاتصال مما يسمح لعدة مستخدمين بمشاركة عرض النطاق الترددي (Bandwidth)."
  },
  {
    "section": 1,
    "question": "Sequencing is one of the connection control information that is used for:",
    "options": [
      "Transmitting order of the packets",
      "Receiving order of the packets",
      "Transmitting and receiving order of the packets",
      "Encrypting the packets during transmission"
    ],
    "answer": "b. Receiving order of the packets (أو c بحسب سياق ترقيم الأجزاء عند الإرسال لإعادة ترتيبها عند الاستقبال).",
    "explanation": "اخترنا هذه الإجابة لأن الترقيم التسلسلي (Sequencing) هو عملية إعطاء رقم فريد (Labeling/Numbering) لكل جزء من البيانات عند إرساله، والهدف الأساسي من هذه المعلومة هو تمكين جهاز الوجهة من ترتيب الأجزاء المستلمة (Ordering) وإعادة تجميعها بالترتيب الصحيح عند وصولها."
  },
  {
    "section": 1,
    "question": "Packets may traverse ............. during their transmission.",
    "options": [
      "Different paths",
      "The same path",
      "Equivalent paths",
      "Only direct physical cables"
    ],
    "answer": "a. Different paths",
    "explanation": "اخترنا مسارات مختلفة (Different paths) لأن الرسائل والحزم أثناء انتقالها عبر الشبكة البينية (Internetwork) يمكنها سلوك مسارات بديلة ومختلفة (Alternate routes/pathways)، حيث تقوم الأجهزة الوسيطة مثل الموجهات (Routers) بتوجيه البيانات عبر مسارات بديلة في حال حدوث عطل في أحد الروابط أو لاختيار المسار الأسرع."
  },
  {
    "section": 1,
    "question": "Flow Control is a function performed by ............. to limit the amount of transmitted data.",
    "options": [
      "a transmitting entity",
      "flow control entity",
      "a receiving entity",
      "a physical media cable"
    ],
    "answer": "c. a receiving entity",
    "explanation": "اخترنا الكيان المستقبل (Receiving entity) لأن التحكم في التدفق يعتمد على قدرة المستقبل على استيعاب البيانات ومعالجتها، فيقوم بتقييد وتنظيم كمية البيانات ومعدل الإرسال المتدفق إليه من المرسل لضمان عدم فقدان البيانات وكفاءة التدفق."
  },
  {
    "section": 1,
    "question": "Which type of network component is responsible for regenerating signals, maintaining pathway information, and directing data along alternate pathways when there is a link failure?",
    "options": [
      "End Devices",
      "Intermediary Network Devices",
      "Network Media",
      "Weblogs and Podcasts"
    ],
    "answer": "b. Intermediary Network Devices",
    "explanation": "اخترنا الأجهزة الوسيطة (Intermediary Devices مثل الـ Routers والـ Switches) لأنها تربط الأجهزة الطرفية بالشبكة وتؤدي وظائف حيوية تشمل إعادة توليد إشارات البيانات، الاحتفاظ بمعلومات المسارات، الإبلاغ عن الأخطاء، وتوجيه البيانات في مسارات بديلة دون تغيير محتوى البيانات نفسها."
  },
  {
    "section": 1,
    "question": "What is the fundamental difference between an Intranet and an Extranet?",
    "options": [
      "Intranet is public to the world, while Extranet is for company employees only",
      "Intranet is for internal company members only, while Extranet provides access to authorized external members like suppliers and customers",
      "Intranet does not require a username and password, while Extranet does",
      "Intranet interconnects WANs globally, while Extranet is a public website"
    ],
    "answer": "b. Intranet is for internal company members only, while Extranet provides access to authorized external members like suppliers and customers",
    "explanation": "اخترنا هذه الإجابة لأن الشبكة الداخلية (Intranet) مملوكة لمنظمة واحدة ومخصصة فقط لأفراد الشركة بالداخل، بينما الشبكة الممتدة (Extranet) هي شبكة خاصة أيضاً وتدار على أساس تعاقدي لتسمح بمشاركة المعلومات بين الأعضاء الداخليين وأطراف خارجية محددة مثل الموردين والعملاء والمتعاونين باستخدام اسم مستخدم وكلمة مرور."
  },
  {
    "section": 1,
    "question": "In which network system architecture does a single central authority manage all processing, data storage, and administrative decisions for connected devices?",
    "options": [
      "Peer to Peer (P2P)",
      "Client/Server",
      "Cluster system",
      "Unicast system"
    ],
    "answer": "b. Client/Server",
    "explanation": "اخترنا معمارية العميل/الخادم (Client/Server) لأنها تعتمد على خادم مركزي واحد (Central Server) يتولى معالجة جميع طلبات العملاء، وتخزين البيانات في موقع أساسي واحد، وإدارة قرارات التحكم والنظام مركزياً، على عكس نظام الند للند (P2P) الذي تتساوى فيه جميع الأجهزة."
  },
  {
    "section": 1,
    "question": "Which of the following is a key benefit of segmenting messages before transmission?",
    "options": [
      "It eliminates the need for IP addressing",
      "If some segments fail to reach the destination, only those failed segments need to be retransmitted rather than the entire data stream",
      "It allows a single user to tie up the entire communication link exclusively",
      "It removes all protocol headers from the message"
    ],
    "answer": "b. If some segments fail to reach the destination, only those failed segments need to be retransmitted rather than the entire data stream",
    "explanation": "اخترنا هذه الإجابة لأن تجزئة الرسائل (Segmentation) تحقق فائدتين رئيسيتين: الأولى هي زيادة الكفاءة (Efficiency) بحيث إذا فشل وصول بعض الأجزاء، يتم إعادة إرسال الأجزاء المفقودة فقط وليس الرسالة بالكامل؛ والثانية هي زيادة السرعة واستغلال عرض النطاق الترددي (Bandwidth) عن طريق إرسال كميات كبيرة من البيانات دون حجز الخط لمستخدم واحد."
  },
  {
    "section": 1,
    "question": "Under Message Timing requirements, what manages how long a device waits until it receives a reply from the destination?",
    "options": [
      "Access method",
      "Flow Control",
      "Response Timeout",
      "Manchester Encoding"
    ],
    "answer": "c. Response Timeout",
    "explanation": "اخترنا مهلة الاستجابة (Response Timeout) لأنها القاعدة المسؤولة ضمن توقيت الرسالة عن تحديد المدة الزمنية التي ينتظرها الجهاز المرسل لتلقي رد من الوجهة قبل اتخاذ إجراء آخر، بينما تحدد طريقة الوصول (Access method) متى يمكن للجهاز إرسال رسالة لتجنب التصادم (Collisions)."
  },
  {
    "section": 1,
    "question": "Which message delivery option is used when a source device sends a message to a specific group of devices (one to many, typically not all)?",
    "options": [
      "Unicast",
      "Multicast",
      "Broadcast",
      "Anycast"
    ],
    "answer": "b. Multicast",
    "explanation": "اخترنا البث المتعدد (Multicast) لأنه يمثل إرسال الرسالة من مصدر واحد إلى مجموعة محددة من الأجهزة (One to many, typically not all)، بينما البث الأحادي (Unicast) يكون من جهاز لجهاز واحد (One to one)، والبث العام (Broadcast) يكون من جهاز إلى جميع الأجهزة في الشبكة (One to all)."
  },
  {
    "section": 1,
    "question": "In the OSI model, which layer links the software layers (upper layers) and the hardware layers (Physical layer)?",
    "options": [
      "Network layer",
      "Transport layer",
      "Data Link layer",
      "Session layer"
    ],
    "answer": "c. Data Link layer",
    "explanation": "اخترنا طبقة ربط البيانات (Data Link layer - Layer 2) لأن الأجهزة المخصصة لهذه الطبقة (مثل كارت الشبكة NIC) تمتلك مكونات برمجية ومادية معاً (Hardware and Software)، مما يجعلها حلقة الوصل التي تربط الطبقات العليا المنفذة برمجياً بالطبقة الفيزيائية المنفذة مادياً."
  },
  {
    "section": 1,
    "question": "How do the delivery operations of the Data Link layer differ from the Transport layer?",
    "options": [
      "Data Link performs Process-to-process delivery, while Transport performs Hop-to-hop delivery",
      "Data Link performs Hop-to-hop (NIC to NIC) delivery of frames, while Transport performs Process-to-process delivery of segments",
      "Both layers perform exclusively Bit-by-bit delivery",
      "Data Link uses Port numbers, while Transport uses MAC addresses"
    ],
    "answer": "b. Data Link performs Hop-to-hop (NIC to NIC) delivery of frames, while Transport performs Process-to-process delivery of segments",
    "explanation": "اخترنا هذه الإجابة لأن طبقة ربط البيانات (Data Link) تنقل الإطارات (Frames) من عقدة إلى العقدة التالية مباشرة (Hop-to-hop) أي من كارت شبكة (NIC) إلى آخر على نفس الشبكة، بينما طبقة النقل (Transport) مسؤولة عن الاتصالات الطرفية (End-to-End) وتوصيل المقاطع (Segments) من عملية تطبيق إلى عملية أخرى (Process-to-process) بين الجهازين."
  },
  {
    "section": 1,
    "question": "In the OSI model, which layer is responsible for translation, data compression, and encryption?",
    "options": [
      "Session layer",
      "Presentation layer",
      "Application layer",
      "Network layer"
    ],
    "answer": "b. Presentation layer",
    "explanation": "اخترنا طبقة العرض (Presentation layer - Layer 6) لأن وظيفتها الأساسية هي تهيئة وتنسيق البيانات من خلال القيام بعمليات الترجمة (Translation)، وضغط البيانات (Compression)، والتشفير (Encryption)، بينما تتولى طبقة الجلسة (Session layer) التحكم في الحوار والمزامنة (Dialog control and synchronization)."
  },
  {
    "section": 1,
    "question": "What is the correct order of Protocol Data Units (PDUs) during the Encapsulation process as data passes DOWN the TCP/IP protocol stack?",
    "options": [
      "Bits -> Frame -> Packet -> Segment -> Data",
      "Data -> Segment -> Packet -> Frame -> Bits",
      "Data -> Packet -> Segment -> Frame -> Bits",
      "Frame -> Packet -> Segment -> Data -> Bits"
    ],
    "answer": "b. Data -> Segment -> Packet -> Frame -> Bits",
    "explanation": "اخترنا هذا الترتيب لأن عملية التغليف (Encapsulation) هي عملية تنازلية (Top-down process) تبدأ من طبقة التطبيقات بتدفق البيانات (Data)، ثم تضاف ترويسة النقل لتصبح (Segment)، ثم ترويسة الشبكة لتصبح (Packet)، ثم ترويسة وتذييل ربط البيانات لتصبح (Frame)، وأخيراً تُرسل على الوسط الناقل كسلسلة بتات (Bits)؛ أما الترتيب العكسي فيحدث أثناء فك التغليف (De-encapsulation) عند الاستقبال."
  },
  {
    "section": 1,
    "question": "Which special fields are included in the Transport layer segment headers by TCP and UDP to perform Multiplexing and De-multiplexing?",
    "options": [
      "Source and Destination MAC addresses",
      "Source and Destination IP addresses",
      "Source and Destination Port numbers",
      "Timing and Synchronization bits"
    ],
    "answer": "c. Source and Destination Port numbers",
    "explanation": "اخترنا أرقام المنافذ (Source and Destination Port numbers) لأن بروتوكولي TCP و UDP يعتمدان على هذين الحقلين في ترويسة المقطع (Segment header) لتمييز العمليات؛ فعند الاستقبال (De-multiplexing) ينظر الجهاز إلى رقم منفذ الوجهة (Destination port number) لتوجيه كل رسالة إلى التطبيق الصحيح الخاص بها (مثل فصل رسائل WhatsApp عن رسائل Hike)."
  },
  {
    "section": 2,
    "question": "Which popular communication tool is defined as a website that contains audio files available for downloading?",
    "options": [
      "Instant Messaging",
      "Weblogs (Blogs)",
      "Podcasting",
      "VoIP Telephony"
    ],
    "answer": "c. Podcasting",
    "explanation": "اخترنا التدوين الصوتي (Podcasting) لأنه يُعرف بأنه موقع إلكتروني يحتوي على ملفات صوتية متاحة للتحميل، بينما المراسلة الفورية (Instant Messaging) هي تواصل لحظي (Real-time) بين شخصين أو أكثر، والمدونات (Weblogs) هي صفحات ويب ينشئها فرد."
  },
  {
    "section": 2,
    "question": "In a typical network, which elements represent the physical hardware versus the software programs?",
    "options": [
      "Rules are hardware, while Messages are software",
      "Devices and media are hardware, while services and processes are software",
      "Services are hardware, while Media and Routers are software",
      "Protocols are hardware, while Cables are software"
    ],
    "answer": "b. Devices and media are hardware, while services and processes are software",
    "explanation": "اخترنا هذه الإجابة لأن عناصر الشبكة تنقسم إلى مكونات مادية ملموسة (Hardware) تتمثل في الأجهزة (Devices) ووسائط النقل (Media)، بينما الخدمات والعمليات (Services and Processes) هي البرامج (Software) التي تعمل على هذه الأجهزة لتحقيق الاتصال."
  },
  {
    "section": 2,
    "question": "Which of the following is classified as an \"End Device\" rather than an \"Intermediary Network Device\"?",
    "options": [
      "LAN Switch",
      "Firewall",
      "VoIP Phone (or Network Printer)",
      "Wireless Access Point"
    ],
    "answer": "c. VoIP Phone (or Network Printer)",
    "explanation": "اخترنا هاتف الـ VoIP (أو طابعة الشبكة) لأنها أجهزة طرفية (End Devices) تمثل مصدر الرسالة أو وجهتها النهائية (مثل الحواسيب، الخوادم، وكاميرات المراقبة)، أما المبدلات (Switches) وجدران الحماية (Firewalls) ونقاط الوصول اللاسلكية فهي أجهزة وسيطة (Intermediary Devices) تربط الأجهزة الطرفية بالشبكة."
  },
  {
    "section": 2,
    "question": "Which network medium uses glass or plastic fibers to provide the pathway over which data is transmitted?",
    "options": [
      "Copper cables",
      "Fiber Optics",
      "Wireless transmission",
      "Coaxial metallic wires"
    ],
    "answer": "b. Fiber Optics",
    "explanation": "اخترنا الألياف الضوئية (Fiber Optics) لأنها تعتمد على ألياف زجاجية أو بلاستيكية لنقل البيانات، بينما تعتمد الكابلات النحاسية (Copper) على الأسلاك المعدنية داخل الكابلات، ويعتمد النقل اللاسلكي (Wireless) على الموجات دون كابلات."
  },
  {
    "section": 2,
    "question": "Which network service uses the SMTP and POP protocols (rules) to operate?",
    "options": [
      "World Wide Web (WWW)",
      "IP Telephony",
      "E-mail",
      "Instant Messaging"
    ],
    "answer": "c. E-mail",
    "explanation": "اخترنا خدمة البريد الإلكتروني (E-mail) لأنها تعتمد على بروتوكول SMTP لإرسال البريد وبروتوكول POP لاستلامه، بينما تستخدم خدمة الويب (WWW) بروتوكول HTTP، وتستخدم المكالمات عبر الشبكة (IP Telephony) بروتوكول SIP، وتستخدم المراسلة الفورية بروتوكولي XMPP و OSCAR."
  },
  {
    "section": 2,
    "question": "How does a Wide Area Network (WAN) differ from a Local Area Network (LAN)?",
    "options": [
      "A WAN is administrated by a single organization and spans a small area",
      "A WAN interconnects LANs, is administrated by multiple service providers, and provides slower speed links between LANs",
      "A WAN provides high-speed bandwidth exclusively to internal end devices in one building",
      "A WAN does not use routers or intermediary devices"
    ],
    "answer": "b. A WAN interconnects LANs, is administrated by multiple service providers, and provides slower speed links between LANs",
    "explanation": "اخترنا هذه الإجابة لأن الشبكة الواسعة (WAN) تربط الشبكات المحلية (LANs) ببعضها وتُدار بواسطة عدة مزودي خدمة وتوفر روابط ذات سرعة أبطأ نسبياً بين الشبكات المحلية، على عكس الشبكة المحلية (LAN) التي تغطي مساحة جغرافية صغيرة وتدار بواسطة منظمة واحدة وتوفر سرعات عالية للأجهزة الداخلية."
  },
  {
    "section": 2,
    "question": "Which type of network system consists of a group of computers working as a whole (where each computer is a node) and often uses a load balancer?",
    "options": [
      "Peer to Peer (P2P)",
      "Cluster system",
      "Virtualized network",
      "Unicast network"
    ],
    "answer": "b. Cluster system",
    "explanation": "اخترنا النظام العنقودي (Cluster) لأنه يتكون من مجموعة من الحواسيب تعمل ككيان واحد لتزويد المستخدمين بموارد الشبكة، ويُسمى كل جهاز فيه عقدة (Cluster node)، ويمكن لمدير النظام إضافة أو حذف العقد بمرونة مع وجود موزع أحمال (Load balancer)."
  },
  {
    "section": 2,
    "question": "What is the main concept behind a \"Virtualized\" network system?",
    "options": [
      "Connecting two PCs directly with a copper wire",
      "Software-based separation of network traffic as a way to abstract from the physical network elements",
      "Storing all company data on a single non-networked computer",
      "Replacing all software protocols with hardware switches"
    ],
    "answer": "b. Software-based separation of network traffic as a way to abstract from the physical network elements",
    "explanation": "اخترنا هذه الإجابة لأن الشبكات الافتراضية (Virtualized) تعتمد على الفصل البرمجي (Software-based separation) لحركة مرور الشبكة كطريقة للتجريد والاستقلال عن عناصر الشبكة الفيزيائية (Physical Network)، حيث يمكن تشغيل عدة آلات وشبكات افتراضية (VMs / Virtual Networks) فوق نفس الخوادم المادية."
  },
  {
    "section": 2,
    "question": "How is \"Network Bandwidth\" defined in data communications?",
    "options": [
      "The time a device waits for a reply from the receiver",
      "The physical length of the fiber optic cable",
      "The maximum capacity of a wired or wireless link to deliver data in a given amount of time (number of bits sent in one second)",
      "The process of adding headers to a packet"
    ],
    "answer": "c. The maximum capacity of a wired or wireless link to deliver data in a given amount of time (number of bits sent in one second)",
    "explanation": "اخترنا هذه الإجابة لأن عرض النطاق الترددي (Bandwidth) يُعرف بأنه السعة القصوى (Maximum capacity) لرابط اتصال سلكي أو لاسلكي لنقل البيانات خلال فترة زمنية محددة، ويُقاس عادةً بعدد البتات المرسلة في الثانية الواحدة، وتُستخدم كلمتا Bandwidth و Capacity بالتبادل لوصف سرعة تسليم البيانات."
  },
  {
    "section": 2,
    "question": "What is the function of \"Message Encoding\" (such as Manchester encoding) in network communications?",
    "options": [
      "Breaking a large message into smaller segments",
      "Converting the stream of bits into a signal pattern detectable by the next device on the physical medium",
      "Assigning port numbers to application processes",
      "Compressing files at the Application layer"
    ],
    "answer": "b. Converting the stream of bits into a signal pattern detectable by the next device on the physical medium",
    "explanation": "اخترنا هذه الإجابة لأن الترميز (Message Encoding) هو عملية تحويل المعلومات وسلسلة البتات (0 و 1) إلى نمط إشارات (Signals pattern) مقبول ويمكن اكتشافه بواسطة الجهاز التالي على الوسط الفيزيائي، وتختلف طريقة التشوير حسب نوع الوسط المستخدم، ومن أمثلتها ترميز مانشستر (Manchester)."
  },
  {
    "section": 2,
    "question": "Under Message Timing, what happens when more than one device sends traffic at the same time on a shared medium?",
    "options": [
      "Multiplexing",
      "Collisions (signals corruption)",
      "De-encapsulation",
      "Unicast delivery"
    ],
    "answer": "b. Collisions (signals corruption)",
    "explanation": "اخترنا التصادمات (Collisions) لأنها تعني تلف الإشارات (Signals corruption) الذي يحدث عندما يقوم أكثر من جهاز بإرسال حركة بيانات في نفس الوقت، ولذلك توجد قاعدة \"طريقة الوصول\" (Access method) لتحديد متى يمكن للجهاز الإرسال؛ وبعض البروتوكولات تكون استباقية لمنع التصادم وبعضها تفاعلي يتعافى بعد حدوثه."
  },
  {
    "section": 2,
    "question": "Which category of network protocols is used for the automatic detection of devices or services on a network?",
    "options": [
      "Network Security protocols",
      "Routing protocols",
      "Service Discovery protocols",
      "Network Communications protocols"
    ],
    "answer": "c. Service Discovery protocols",
    "explanation": "اخترنا بروتوكولات اكتشاف الخدمة (Service Discovery) لأن وظيفتها هي الاكتشاف التلقائي للأجهزة أو الخدمات، بينما تُستخدم بروتوكولات الأمان (Network Security) للتوثيق وتكامل وتشفير البيانات، وتُستخدم بروتوكولات التوجيه (Routing) لتمكين الموجهات من تبادل ومقارنة المسارات واختيار أفضل مسار."
  },
  {
    "section": 2,
    "question": "In the OSI layered model design, which vendor or developer is typically responsible for building Layer 3 (Network) and Layer 4 (Transport)?",
    "options": [
      "NIC (Network Interface Card) vendor",
      "OS (Operating System) vendor",
      "Application developer",
      "Cable manufacturer"
    ],
    "answer": "b. OS (Operating System) vendor",
    "explanation": "اخترنا مُصنّع نظام التشغيل (OS vendor) لأنه المسؤول عن بناء الطبقتين الثالثة والرابعة (Network & Transport)، بينما يقوم مُصنّع كارت الشبكة (NIC vendor) ببناء الطبقتين الأولى والثانية (Physical & Data Link)، ويقوم مطور التطبيقات (Application developer) ببناء الطبقة السابعة، ويعمل كل منهم بشكل مستقل دون الحاجة لمعرفة التفاصيل الداخلية للآخر."
  },
  {
    "section": 2,
    "question": "During data encapsulation, which layer adds BOTH a Header (H2) and a Trailer (T2) to form its PDU?",
    "options": [
      "Transport layer",
      "Network layer",
      "Data Link layer (Network Access)",
      "Application layer"
    ],
    "answer": "c. Data Link layer (Network Access)",
    "explanation": "اخترنا طبقة ربط البيانات (Data Link layer) لأنها الطبقة الوحيدة التي تغلف البيانات بإضافة ترويسة في البداية (Frame Header - H2) وتذييل في النهاية (Frame Trailer - T2) لتكوين الإطار (Frame) قبل تحويله إلى بتات، بينما تضيف الطبقات الأخرى ترويسات (Headers) فقط."
  },
  {
    "section": 2,
    "question": "In the OSI model, which layer is responsible for dialog control, synchronization (adding 'syn' points), and setting up or tearing down sessions between hosts?",
    "options": [
      "Presentation layer",
      "Session layer",
      "Transport layer",
      "Data Link layer"
    ],
    "answer": "b. Session layer",
    "explanation": "اخترنا طبقة الجلسة (Session layer - Layer 5) لأنها المسؤولة عن إنشاء وإنهاء الجلسات (Sessions) بين الأجهزة المضيفة، بالإضافة إلى التحكم في الحوار (Dialog control) والمزامنة (Synchronization) للبيانات."
  },
  {
    "section": 2,
    "question": "How many layers does the TCP/IP Model have compared to the OSI Model?",
    "options": [
      "TCP/IP has 7 layers, while OSI has 4 layers",
      "TCP/IP has 4 layers (Application, Transport, Internet, Network Access), while OSI has 7 layers",
      "Both models have 5 identical layers",
      "TCP/IP has 3 layers, while OSI has 6 layers"
    ],
    "answer": "b. TCP/IP has 4 layers (Application, Transport, Internet, Network Access), while OSI has 7 layers",
    "explanation": "اخترنا هذه الإجابة لأن نموذج TCP/IP يتكون من 4 طبقات هي (Application, Transport, Internet, Network Access)، حيث تدمج طبقة التطبيقات في TCP/IP وظائف الطبقات العليا الثلاث في OSI (Application, Presentation, Session)، وتدمج طبقة الوصول للشبكة (Network Access) وظيفتي طبقتي (Data Link, Physical) في نموذج OSI ذي السبع طبقات."
  },
  {
    "section": 2,
    "question": "Which protocol in the TCP/IP suite belongs to the Transport layer, manages individual conversations, provides guaranteed delivery, and manages flow control?",
    "options": [
      "HTTP (Hypertext Transfer Protocol)",
      "IP (Internet Protocol)",
      "TCP (Transmission Control Protocol)",
      "Ethernet"
    ],
    "answer": "c. TCP (Transmission Control Protocol)",
    "explanation": "اخترنا بروتوكول التحكم في النقل (TCP) لأنه يعمل في طبقة النقل (Transport layer) ويدير المحادثات الفردية ويوفر توصيلاً مضموناً (Guaranteed delivery) ويتحكم في التدفق (Flow control)، بينما يعمل HTTP في طبقة التطبيقات، ويعمل IP في طبقة الإنترنت لتوصيل الرسائل عالمياً، ويعمل Ethernet في طبقة الوصول للشبكة."
  },
  {
    "section": 2,
    "question": "When a packet travels from Source A to Destination B through multiple routers (R1, R3, R4), which layers are processed at the intermediate routers?",
    "options": [
      "All 7 layers up to the Application layer",
      "Only the lower three layers: Physical, Data Link, and Network layers",
      "Only the Transport and Session layers",
      "Only the Physical layer"
    ],
    "answer": "b. Only the lower three layers: Physical, Data Link, and Network layers",
    "explanation": "اخترنا الطبقات الثلاث السفلى (Physical, Data Link, Network) لأن العقد الوسيطة مثل الموجهات (Routers) تتفحص العمليات عند كل قفزة (Hop) حتى طبقة الشبكة فقط لتحديد المسار وتوجيه الحزمة، بينما تكون طبقتا النقل والتطبيقات (Transport & Application) طرفية (End-to-End) تعمل عند جهازي المصدر والوجهة النهائيين فقط."
  },
  {
    "section": 2,
    "question": "What is the specific role of Data Link Addresses (Physical/MAC addresses) compared to Network Addresses (IP addresses)?",
    "options": [
      "Data Link addresses deliver frames from one NIC to another NIC on the same network, while IP addresses deliver packets from the original source to the final destination (same or remote network)",
      "Data Link addresses deliver packets globally across the internet, while IP addresses work only on the same cable",
      "Data Link addresses identify application processes (like WhatsApp), while IP addresses identify physical cables",
      "Both addresses perform the exact same function at the Physical layer"
    ],
    "answer": "a. Data Link addresses deliver frames from one NIC to another NIC on the same network, while IP addresses deliver packets from the original source to the final destination (same or remote network)",
    "explanation": "اخترنا هذه الإجابة لأن عناوين ربط البيانات (Data Link / Physical addresses) تُستخدم لتسليم الإطارات (Frames) من بطاقة واجهة شبكة (NIC) إلى بطاقة أخرى على نفس الشبكة المحلية، بينما تُستخدم عناوين الشبكة المنطقية (IP addresses) لتسليم الحزمة (Packet) من المصدر الأصلي إلى الوجهة النهائية سواء كانت على نفس الشبكة أو على شبكة بعيدة."
  },
  {
    "section": 2,
    "question": "During the De-multiplexing process at the receiver side, what information does the Transport layer examine to separate the received message and send it to the appropriate application (e.g., WhatsApp vs. Hike)?",
    "options": [
      "The Source MAC Address",
      "The Destination Port Number",
      "The Frame Trailer (T2)",
      "The Hop Limit field"
    ],
    "answer": "b. The Destination Port Number",
    "explanation": "اخترنا رقم منفذ الوجهة (Destination Port Number) لأن عملية فك الدمج (De-multiplexing) عند جهاز الاستقبال تقوم بفصل الرسائل المدمجة وتوجيه كل مقطع (Segment) إلى عملية التطبيق الصحيح في طبقة التطبيقات (مثل التفرقة بين رسائل WhatsApp ورسائل Hike) من خلال النظر إلى حقل رقم منفذ الوجهة الموجود في ترويسة طبقة النقل."
  }
];
