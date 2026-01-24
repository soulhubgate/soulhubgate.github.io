const articlesList = [
    // ==========================================
    // CLINICAL / PERSONALITY STYLES (10 Styles)
    // ==========================================
    {
        id: "Narcissism",
        category: "clinical",
        title: { en: "The Narcissistic Style", ar: "النمط النرجسي" },
        summary: { en: "Grandiosity, need for admiration, and lack of empathy. A deep dive into the facade of superiority.", ar: "العظمة، الحاجة إلى الإعجاب، ونقص التعاطف. نظرة متعمقة في قناع التفوق." },
        content: {
            en: `
                <h3 class="text-xl font-bold text-red-400 mb-3">The Pursuit of Grandiosity</h3>
                <p class="mb-4">Individuals with strong Narcissistic traits often exhibit a pervasive pattern of grandiosity, a need for admiration, and a lack of empathy. While often misunderstood as simple "vanity," true pathological narcissism is a complex defense mechanism aimed at protecting a fragile self-esteem.</p>
                <div class="bg-slate-800/50 p-4 rounded-xl border-l-4 border-red-500 mb-6">
                    <p class="italic text-slate-300">"I am special, and I deserve special treatment."</p>
                </div>
                <h4 class="text-lg font-bold text-white mb-2">Core Characteristics</h4>
                <ul class="list-disc list-inside space-y-2 mb-6 text-slate-300">
                    <li><strong>Grandiosity:</strong> An exaggerated sense of self-importance and talent. They may lie about achievements to seem improved.</li>
                    <li><strong>Fantasies of Success:</strong> Preoccupation with unlimited power, beauty, or ideal love. Reality often disappoints them.</li>
                    <li><strong>Need for Validation:</strong> Excessive requirement for admiration. They fish for compliments and are easily deflated by criticism.</li>
                </ul>
                <h4 class="text-lg font-bold text-white mb-2">Psychological Mechanism</h4>
                <p class="mb-4 text-slate-300">Psychologically, the grandiose exterior often masks deep-seated feelings of inadequacy or shame. The narcissist splits the world into "winners" (themselves) and "losers" (others) to avoid feeling vulnerable.</p>
                <h4 class="text-lg font-bold text-indigo-400 mb-2">Advice for Growth</h4>
                <p class="text-slate-300">True confidence comes from within, not from others' applause. Practice empathy by actively listening to others without turning the conversation back to yourself.</p>
            `,
            ar: `
                <h3 class="text-xl font-bold text-red-400 mb-3">السعي وراء العظمة</h3>
                <p class="mb-4">غالباً ما يظهر الأفراد ذوو السمات النرجسية القوية نمطاً سائداً من العظمة، والحاجة إلى الإعجاب، ونقص التعاطف. على الرغم من أنه غالباً ما يُساء فهمه على أنه مجرد "غرور"، إلا أن النرجسية المرضية الحقيقية هي آلية دفاع معقدة تهدف إلى حماية تقدير الذات الهش.</p>
                <div class="bg-slate-800/50 p-4 rounded-xl border-r-4 border-red-500 mb-6">
                    <p class="italic text-slate-300">"أنا مميز، وأستحق معاملة خاصة."</p>
                </div>
                <h4 class="text-lg font-bold text-white mb-2">الخصائص الأساسية</h4>
                <ul class="list-disc list-inside space-y-2 mb-6 text-slate-300">
                    <li><strong>العظمة:</strong> شعور مبالغ فيه بأهمية الذات والموهبة.</li>
                    <li><strong>خيالات النجاح:</strong> الانشغال بأوهام السلطة غير المحدودة والجمال والحب المثالي.</li>
                    <li><strong>الحاجة للتقدير:</strong> حاجة مفرطة للإعجاب. يصطادون المجاملات ويحبطون بسهولة من النقد.</li>
                </ul>
                <h4 class="text-lg font-bold text-white mb-2">الآلية النفسية</h4>
                <p class="mb-4 text-slate-300">نفسياً، غالباً ما يخفي المظهر الخارجي المتغطرس مشاعر عميقة بالنقص أو العار. يقسم النرجسي العالم إلى "رابحين" و "خاسرين" لتجنب الشعور بالضعف.</p>
                 <h4 class="text-lg font-bold text-indigo-400 mb-2">نصيحة للنمو</h4>
                <p class="text-slate-300">الثقة الحقيقية تأتي من الداخل، وليس من تصفيق الآخرين. مارس التعاطف من خلال الاستماع النشط للآخرين دون تحويل المحادثة إليك.</p>
            `
        }
    },
    {
        id: "Borderline",
        category: "clinical",
        title: { en: "Borderline Style", ar: "الشخصية الحدية" },
        summary: { en: "A rollercoaster of emotions, unstable relationships, and fear of abandonment.", ar: "أفعوانية من العواطف، علاقات غير مستقرة، وخوف من الهجر." },
        content: {
            en: `
                <h3 class="text-xl font-bold text-orange-400 mb-3">Emotional Intensity & Instability</h3>
                <p class="mb-4">The Borderline style is characterized by pervasive instability in moods, interpersonal relationships, self-image, and behavior. This instability often disrupts family and work life, long-term planning, and the individual's sense of self-identity.</p>
                <h4 class="text-lg font-bold text-white mb-2">Key Features</h4>
                 <ul class="list-disc list-inside space-y-2 mb-6 text-slate-300">
                    <li><strong>Fear of Abandonment:</strong> Frantic efforts to avoid real or imagined abandonment. A slightly delayed text message can trigger panic.</li>
                    <li><strong>Splitting:</strong> Viewing people as either "all good" or "all bad". A friend is an angel today and a traitor tomorrow.</li>
                    <li><strong>Identity Disturbance:</strong> Unstable self-image. Goals, values, and career aspirations may shift suddenly.</li>
                </ul>
                <h4 class="text-lg font-bold text-indigo-400 mb-2">Advice for Growth</h4>
                <p class="text-slate-300">Mindfulness and "glibing" (wait before reacting) are key. Learn to tolerate distress without acting impulsively. Remember: feelings are not facts.</p>
            `,
            ar: `
                <h3 class="text-xl font-bold text-orange-400 mb-3">الكثافة العاطفية وعدم الاستقرار</h3>
                <p class="mb-4">تتميز الشخصية الحدية بعدم الاستقرار السائد في الحالة المزاجية، والعلاقات الشخصية، وصورة الذات، والسلوك. غالباً ما يعطل هذا عدم الاستقرار الحياة الأسرية والعملية.</p>
                <h4 class="text-lg font-bold text-white mb-2">السمات الرئيسية</h4>
                 <ul class="list-disc list-inside space-y-2 mb-6 text-slate-300">
                    <li><strong>الخوف من الهجر:</strong> جهود محمومة لتجنب الهجر. تأخر بسيط في الرد على رسالة قد يثير الذعر.</li>
                    <li><strong>الانقسام:</strong> رؤية الناس إما "ملائكة" أو "شياطين". الصديق قد يصبح عدواً في لحظة.</li>
                    <li><strong>اضطراب الهوية:</strong> صورة ذاتية غير مستقرة. قد تتغير الأهداف والقيم فجأة.</li>
                </ul>
                <h4 class="text-lg font-bold text-indigo-400 mb-2">نصيحة للنمو</h4>
                <p class="text-slate-300">اليقظة الذهنية والانتظار قبل رد الفعل أمران أساسيان. تعلم تحمل الضيق دون التصرف بتهور. تذكر: المشاعر ليست حقائق.</p>
            `
        }
    },
    {
        id: "Histrionic",
        category: "clinical",
        title: { en: "Histrionic Style", ar: "الشخصية الهستيرية" },
        summary: { en: "Living life as a performance. Excessive emotionality and attention seeking.", ar: "الحياة كعرض مسرحي. العاطفة المفرطة والسعي لجذب الانتباه." },
        content: {
            en: `
                 <h3 class="text-xl font-bold text-pink-400 mb-3">The Center of Attention</h3>
                 <p class="mb-4">People with a Histrionic style utilize physical appearance and dramatic behavior to draw attention to themselves. They often feel uncomfortable when they are not the center of attention and may engage in provocative behaviors to regain it.</p>
                 <h4 class="text-lg font-bold text-white mb-2">Traits</h4>
                 <ul class="list-disc list-inside space-y-2 mb-6 text-slate-300">
                    <li><strong>Depression when ignored:</strong> They feel unseen and worthless if not being praised or watched.</li>
                    <li><strong>Shallow Emotions:</strong> Expressions of emotion may seem exaggerated but lack depth, shifting rapidly.</li>
                    <li><strong>Suggestibility:</strong> Easily influenced by others or trends, lacking strong inner convictions.</li>
                 </ul>
            `,
            ar: `
                <h3 class="text-xl font-bold text-pink-400 mb-3">مركز الاهتمام</h3>
                <p class="mb-4">يستخدم الأشخاص ذوو الأسلوب الهيستيري مظهرهم الجسدي وسلوكهم الدرامي لجذب الانتباه لأنفسهم. غالباً ما يشعرون بعدم الارتياح عندما لا يكونون مركز الاهتمام.</p>
                <h4 class="text-lg font-bold text-white mb-2">السمات</h4>
                 <ul class="list-disc list-inside space-y-2 mb-6 text-slate-300">
                    <li><strong>الاكتئاب عند التجاهل:</strong> يشعرون أنهم بلا قيمة إذا لم يتم مدحهم أو ملاحظتهم.</li>
                    <li><strong>مشاعر ضحلة:</strong> قد تبدو تعبيراتهم العاطفية مبالغة ولكنها تفتقر إلى العمق وتتغير بسرعة.</li>
                    <li><strong>القابلية للإيحاء:</strong> يتأثرون بسهولة بالآخرين أو الموضة، ويفتقرون إلى قناعات داخلية قوية.</li>
                 </ul>
            `
        }
    },
    {
        id: "Aggressive",
        category: "clinical",
        title: { en: "Aggressive / Antisocial Style", ar: "الشخصية العدوانية" },
        summary: { en: "Viewing the world as a battlefield regarding dominance and power.", ar: "رؤية العالم كساحة معركة للسيطرة والقوة." },
        content: {
            en: `
                <h3 class="text-xl font-bold text-red-600 mb-3">Dominance and Disregard</h3>
                <p class="mb-4">This style is characterized by a disregard for the rights of others. Individuals may rationalize hurting others or believe that life is a survival of the fittest game where they must dominate or be dominated.</p>
                <div class="bg-slate-800/50 p-4 rounded-xl border-l-4 border-red-600 mb-6">
                    <p class="italic text-slate-300">"It's a dog-eat-dog world."</p>
                </div>
                <p class="mb-4 text-slate-300">They may be deceitful, impulsive, and irritable. A lack of remorse after mistreating others is a hallmark feature. They often mistake kindness for weakness.</p>
            `,
            ar: `
                <h3 class="text-xl font-bold text-red-600 mb-3">السيطرة وتجاهل الآخرين</h3>
                <p class="mb-4">يتميز هذا النمط بتجاهل حقوق الآخرين. قد يبرر الأفراد إيذاء الآخرين أو يعتقدون أن الحياة هي لعبة البقاء للأصلح حيث يجب عليهم السيطرة أو الخضوع.</p>
                <div class="bg-slate-800/50 p-4 rounded-xl border-r-4 border-red-600 mb-6">
                    <p class="italic text-slate-300">"إنها شريعة الغاب."</p>
                </div>
                <p class="mb-4 text-slate-300">قد يكونون مخادعين ومندفعين. عدم الندم بعد سوء معاملة الآخرين هو سمة مميزة. غالباً ما يخلطون بين اللطف والضعف.</p>
            `
        }
    },
    {
        id: "Schizoid",
        category: "clinical",
        title: { en: "Schizoid Style", ar: "الشخصية شبه الفصامية" },
        summary: { en: "Preference for solitude and emotional detachment.", ar: "تفضيل العزلة والانفصال العاطفي." },
        content: {
            en: `
                <h3 class="text-xl font-bold text-blue-200 mb-3">The Solitary Observer</h3>
                <p class="mb-4">A pervasive pattern of detachment from social relationships and a restricted range of expression of emotions in interpersonal settings. These individuals often choose solitary activities and seem indifferent to praise or criticism.</p>
                <p class="mb-4">They are not necessarily lonely; they simply prefer their internal world over the external social world, often finding social interaction draining and unnecessary.</p>
            `,
            ar: `
                <h3 class="text-xl font-bold text-blue-200 mb-3">المراقب المنعزل</h3>
                <p class="mb-4">نمط سائد من الانفصال عن العلاقات الاجتماعية ونطاق محدود من التعبير عن المشاعر. غالباً ما يختار هؤلاء الأفراد الأنشطة الفردية ويبدون غير مبالين بالمدح أو النقد.</p>
                <p class="mb-4">إنهم ليسوا بالضرورة وحيدين؛ هم ببساطة يفضلون عالمهم الداخلي على العالم الاجتماعي الخارجي، وغالباً ما يجدون التفاعل الاجتماعي مرهقاً وغير ضروري.</p>
            `
        }
    },
    {
        id: "Avoidant",
        category: "clinical",
        title: { en: "Avoidant Style", ar: "الشخصية التجنبية" },
        summary: { en: "Craving connection but fearing rejection.", ar: "الرغبة في التواصل ولكن الخوف من الرفض." },
        content: {
            en: `
                <h3 class="text-xl font-bold text-purple-300 mb-3">Fear of Rejection</h3>
                <p class="mb-4">Characterized by social inhibition, feelings of inadequacy, and hypersensitivity to negative evaluation. Unlike the Schizoid style, Avoidant individuals <strong>crave</strong> social connection but are too terrified of rejection to pursue it.</p>
                <p class="mb-4">They view themselves as socially inept, personally unappealing, or inferior to others, leading to a self-fulfilling prophecy of isolation.</p>
            `,
            ar: `
                <h3 class="text-xl font-bold text-purple-300 mb-3">الخوف من الرفض</h3>
                <p class="mb-4">تتميز بالكبت الاجتماعي، ومشاعر عدم الكفاءة، والحساسية المفرطة للتقييم السلبي. على عكس النمط شبه الفصامي، يتوق الأفراد التجنبيون إلى التواصل الاجتماعي لكنهم خائفون جداً من الرفض.</p>
                <p class="mb-4">ينظرون إلى أنفسهم على أنهم غير أكفاء اجتماعياً، أو غير جذابين، مما يؤدي إلى نبوءة تحقق ذاتها بالعزلة.</p>
            `
        }
    },
    {
        id: "Depressive",
        category: "clinical",
        title: { en: "Depressive Style", ar: "الشخصية الاكتئابية" },
        summary: { en: "Seeing the world through grey-tinted glasses.", ar: "رؤية العالم من خلال نظارات رمادية." },
        content: {
            en: `
                <h3 class="text-xl font-bold text-slate-400 mb-3">Melancholic Outlook</h3>
                <p class="mb-4">Individuals with this style have a persistent depressive outlook. They are prone to feelings of guilt, remorse, and inadequacy. They tend to judge themselves harshly and may be prone to pessimism.</p>
                <p class="mb-4">Even in happy moments, they may worry that "this won't last".</p>
            `,
            ar: `
                <h3 class="text-xl font-bold text-slate-400 mb-3">النظرة السوداوية</h3>
                <p class="mb-4">لدى الأفراد الذين يتمتعون بهذا النمط نظرة اكتئابية مستمرة. هم عرضة لمشاعر الذنب والندم وعدم الكفاءة. يميلون إلى الحكم على أنفسهم بقسوة.</p>
                <p class="mb-4">حتى في اللحظات السعيدة، قد يقلقون من أن "هذا لن يدوم".</p>
            `
        }
    },
    {
        id: "Paranoid",
        category: "clinical",
        title: { en: "Paranoid Style", ar: "الشخصية الارتيابية" },
        summary: { en: "Constant vigilance and suspicion of motives.", ar: "اليقظة المستمرة والشك في النوايا." },
        content: {
            en: `
                <h3 class="text-xl font-bold text-green-800 mb-3">Vigilance and Suspicion</h3>
                <p class="mb-4">Pervasive distrust and suspiciousness of others such that their motives are interpreted as malevolent. These individuals are reluctant to confide in others because of unwarranted fear that the information will be used against them.</p>
                <p class="mb-4">They often hold grudges for long periods and are quick to counterattack if they perceive a slight.</p>
            `,
            ar: `
                <h3 class="text-xl font-bold text-green-800 mb-3">اليقظة والشك</h3>
                <p class="mb-4">عدم ثقة سائد وشك في الآخرين بحيث يتم تفسير دوافعهم على أنها حاقدة. يتردد هؤلاء الأفراد في الثقة بالآخرين بسبب الخوف غير المبرر من استخدام المعلومات ضدهم.</p>
                <p class="mb-4">غالباً ما يحملون الضغائن لفترات طويلة ويسارعون إلى الهجوم المضاد إذا شعروا بأي إهانة.</p>
            `
        }
    },
    {
        id: "Compulsive",
        category: "clinical",
        title: { en: "Obsessive-Compulsive Style", ar: "الشخصية الوسواسية" },
        summary: { en: "Perfectionism, order, and control.", ar: "المثالية والنظام والسيطرة." },
        content: {
            en: `
                <h3 class="text-xl font-bold text-teal-500 mb-3">Order and Control</h3>
                <p class="mb-4">Preoccupation with orderliness, perfectionism, and mental and interpersonal control, at the expense of flexibility, openness, and efficiency. They are often rigid and stubborn.</p>
                <p class="mb-4">They may struggle to delegate tasks because they believe no one else can do it "right". Note: This is a personality style, different from OCD (the anxiety disorder).</p>
            `,
            ar: `
                <h3 class="text-xl font-bold text-teal-500 mb-3">النظام والسيطرة</h3>
                <p class="mb-4">الانشغال بالنظام، والمثالية، والسيطرة العقلية والشخصية، على حساب المرونة، والانفتاح، والكفاءة. غالباً ما يكونون جامدين وعنيدين.</p>
                <p class="mb-4">قد يجدون صعوبة في تفويض المهام لأنهم يعتقدون أنه لا يمكن لأي شخص آخر القيام بذلك "بشكل صحيح". ملاحظة: هذا نمط شخصية، يختلف عن الوسواس القهري (اضطراب القلق).</p>
            `
        }
    },
    {
        id: "Anxiety",
        category: "clinical",
        title: { en: "Anxious Style", ar: "الشخصية القلقة" },
        summary: { en: "Living in anticipation of future threats.", ar: "العيش في توقع التهديدات المستقبلية." },
        content: {
            en: `
                <h3 class="text-xl font-bold text-yellow-500 mb-3">Apprehension</h3>
                <p class="mb-4">Excessive anxiety and worry occurring more days than not about a number of events or activities. The individual exhibits restlessness, being easily fatigued, difficulty concentrating, irritability, muscle tension, and sleep disturbance.</p>
                <p class="mb-4">They tend to catastrophize, assuming the worst possible outcome for any given situation.</p>
            `,
            ar: `
                <h3 class="text-xl font-bold text-yellow-500 mb-3">التوجس</h3>
                <p class="mb-4">القلق المفرط والهم الذي يحدث في معظم الأيام بشأن عدد من الأحداث أو الأنشطة. يظهر الفرد قلة الراحة، التعب بسهولة، صعوبة التركيز، التهيج، وتوتر العضلات.</p>
                <p class="mb-4">يميلون إلى تهويل الأمور، ويفترضون أسوأ نتيجة ممكنة لأي موقف.</p>
            `
        }
    },

    // ==========================================
    // LOVE LANGUAGES (5 Types)
    // ==========================================
    {
        id: "Words of Affirmation",
        category: "love",
        title: { en: "Words of Affirmation", ar: "كلمات التقدير" },
        summary: { en: "Using words to build up the other person.", ar: "استخدام الكلمات لرفع معنويات الطرف الآخر." },
        content: {
            en: `<p class="mb-4">For you, actions don't always speak louder than words. Unsolicited compliments mean the world to you. Hearing the words "I love you" is important—hearing the reasons behind it sends your spirits skyward. Insults can leave you shattered and seem less easily forgotten.</p>`,
            ar: `<p class="mb-4">بالنسبة لك، الأفعال لا تتحدث دائماً بصوت أعلى من الكلمات. المجاملات غير المتوقعة تعني لك العالم. سماع كلمات "أنا أحبك" مهم، لكن سماع الأسباب وراء ذلك يرفع معنوياتك عالياً. الإهانات قد تتركك محطماً ويصعب نسيانها.</p>`
        }
    },
    {
        id: "Acts of Service",
        category: "love",
        title: { en: "Acts of Service", ar: "أعمال الخدمة" },
        summary: { en: "Actions speak louder than words.", ar: "الأفعال أبلغ من الأقوال." },
        content: { en: "<p class='mb-4'>Can helping with homework be an expression of love? Absolutely. Anything you do to ease the burden of responsibilities weighing on an 'Acts of Service' person will speak volumes. The words he or she most want to hear: 'Let me do that for you'. Laziness, broken commitments, and making more work for them tell speakers of this language their feelings don't matter.</p>", ar: "<p class='mb-4'>هل يمكن أن تكون المساعدة في الأعمال المنزلية تعبيراً عن الحب؟ بالتأكيد. أي شيء تفعله لتخفيف عبء المسؤوليات عن شخص يقدر 'أعمال الخدمة' سيعني له الكثير. الكلمات التي يرغبون في سماعها أكثر هي: 'دعني أفعل ذلك من أجلك'. الكسل والوعود المنقوضة تخبرهم أن مشاعرهم لا تهم.</p>" }
    },
    {
        id: "Receiving Gifts",
        category: "love",
        title: { en: "Receiving Gifts", ar: "تلقي الهدايا" },
        summary: { en: "Visual symbols of love.", ar: "رموز مرئية للحب." },
        content: { en: "<p class='mb-4'>Don't mistake this for materialism; the receiver of gifts thrives on the love, thoughtfulness, and effort behind the gift. If you speak this language, the perfect gift or gesture shows that you are known, you are cared for, and you are prized above whatever was sacrificed to bring the gift to you.</p>", ar: "<p class='mb-4'>لا تخطئ في هذا وتظنه مادية؛ فالمتلقي للهدايا ينتعش بالحب والتفكير والجهد المبذول وراء الهدية. إذا كنت تتحدث هذه اللغة، فإن الهدية المثالية تظهر أنك معروف، ومحبوب، ومقدر أكثر من أي شيء تم التضحية به لجلب الهدية لك.</p>" }
    },
    {
        id: "Quality Time",
        category: "love",
        title: { en: "Quality Time", ar: "الوقت النوعي" },
        summary: { en: "Undivided attention.", ar: "انتباه غير مجزأ." },
        content: { en: "<p class='mb-4'>Nothing says 'I love you' like full, undivided attention. Being there for this type of person is critical, but really being there—with the TV off, fork and knife down, and all chores and tasks on standby—makes your significant other feel truly special and loved. Distractions, postponed dates, or the failure to listen can be especially hurtful.</p>", ar: "<p class='mb-4'>لا شيء يقول 'أنا أحبك' مثل الانتباه الكامل وغير المجزأ. التواجد من أجل هذا النوع من الأشخاص أمر بالغ الأهمية، ولكن التواجد الحقيقي - مع إيقاف تشغيل التلفزيون، ووضع الشوكة والسكين جانباً - يجعل شريكك يشعر بأنه مميز ومحبوب حقاً.</p>" }
    },
    {
        id: "Physical Touch",
        category: "love",
        title: { en: "Physical Touch", ar: "التلامس الجسدي" },
        summary: { en: "Intimacy and closeness.", ar: "الحميمية والقرب." },
        content: { en: "<p class='mb-4'>To this person, nothing speaks more deeply than appropriate touch. Taking the time to just graze their shoulder or give them a hug shows them you care. Physical presence and accessibility are crucial, while neglect or abuse can be unforgivable and destructive.</p>", ar: "<p class='mb-4'>بالنسبة لهذا الشخص، لا شيء يتحدث بعمق أكثر من اللمس المناسب. تخصيص الوقت لمسح كتفهم أو معانقتهم يظهر لهم أنك تهتم. الحضور الجسدي أمر بالغ الأهمية، في حين أن الإهمال يمكن أن يكون مدمراً.</p>" }
    },

    // ==========================================
    // MBTI ANALYSTS (INTJ, INTP, ENTJ, ENTP)
    // ==========================================
    {
        id: "INTJ",
        category: "mbti",
        title: { en: "INTJ: The Architect", ar: "INTJ: المهندس المعماري" },
        summary: { en: "Imaginative and strategic thinkers with a plan for everything.", ar: "مفكرون استراتيجيون ومبدعون لديهم خطة لكل شيء." },
        content: {
            en: `
                <h3 class="text-xl font-bold text-indigo-400 mb-3">The Mastermind</h3>
                <p class="mb-4">INTJs are one of the rarest and most capable personality types. They are relentless intellectual explorers who see life as a giant chess board. Driven by a desire to understand systems and implement innovative solutions, they often possess a unique ability to foresee outcomes.</p>
                <div class="bg-indigo-900/30 p-4 rounded-lg my-4"><strong class="text-indigo-300">Superpower:</strong> Turning theories into action.</div>
                <h4 class="text-white font-bold mb-2">Strengths</h4>
                <ul class="list-disc list-inside text-slate-300 mb-4">
                    <li>Rational and informed.</li>
                    <li>Independent and determined.</li>
                    <li>Curious and versatile.</li>
                </ul>
            `,
            ar: `
                <h3 class="text-xl font-bold text-indigo-400 mb-3">العقل المدبر</h3>
                <p class="mb-4">شخصية INTJ هي واحدة من أندر الشخصيات. هم مستكشفون فكريون لا يكلون ويرون الحياة كرقعة شطرنج عملاقة. مدفوعين برغبة في فهم الأنظمة، يمتلكون قدرة فريدة على توقع النتائج.</p>
                <div class="bg-indigo-900/30 p-4 rounded-lg my-4"><strong class="text-indigo-300">القوة الخارقة:</strong> تحويل النظريات إلى واقع.</div>
                <h4 class="text-white font-bold mb-2">نقاط القوة</h4>
                <ul class="list-disc list-inside text-slate-300 mb-4">
                    <li>عقلاني ومطلع.</li>
                    <li>مستقل وحازم.</li>
                    <li>فضولي ومتعدد المواهب.</li>
                </ul>
            `
        }
    },
    {
        id: "INTP",
        category: "mbti",
        title: { en: "INTP: The Logician", ar: "INTP: المنطقي" },
        summary: { en: "Innovative inventors with an unquenchable thirst for knowledge.", ar: "مخترعون مبدعون لديهم عطش لا يرتوي للمعرفة." },
        content: {
            en: `
                <h3 class="text-xl font-bold text-indigo-400 mb-3">The Philosophical Innovator</h3>
                <p class="mb-4">INTPs pride themselves on their inventiveness and creativity, their unique perspective and vigorous intellect. Usually known as the philosopher, the architect, or the dreamy professor, they have been responsible for many scientific discoveries throughout history.</p>
                <p class="mb-4">They see patterns and discrepancies that others fail to spot.</p>
                <div class="bg-indigo-900/30 p-4 rounded-lg my-4"><strong class="text-indigo-300">Motto:</strong> "Question everything."</div>
            `,
            ar: `
                <h3 class="text-xl font-bold text-indigo-400 mb-3">المبتكر الفلسفي</h3>
                <p class="mb-4">يفخر INTPs بإبداعهم وابتكارهم، ومنظورهم الفريد وفكرهم القوي. يُعرفون عادةً بالفلاسفة أو المهندسين المعماريين أو الأساتذة الحالمين، وكانوا مسؤولين عن العديد من الاكتشافات العلمية.</p>
                <p class="mb-4">يرون الأنماط والتناقضات التي يفشل الآخرون في رصدها.</p>
                <div class="bg-indigo-900/30 p-4 rounded-lg my-4"><strong class="text-indigo-300">الشعار:</strong> "شكك في كل شيء."</div>
            `
        }
    },
    {
        id: "ENTJ",
        category: "mbti",
        title: { en: "ENTJ: The Commander", ar: "ENTJ: القائد" },
        summary: { en: "Bold, imaginative and strong-willed leaders.", ar: "قادة جريئون ومبدعون وأقوياء الإرادة." },
        content: {
            en: `
                <h3 class="text-xl font-bold text-indigo-400 mb-3">The Natural Leader</h3>
                <p class="mb-4">ENTJs are natural-born leaders. People with this personality type embody the gifts of charisma and confidence, and project authority in a way that draws crowds together behind a common goal. Unlike their Feeling counterpart, however, ENTJs are characterized by an often ruthless level of rationality.</p>
            `,
            ar: `
                <h3 class="text-xl font-bold text-indigo-400 mb-3">القائد الطبيعي</h3>
                <p class="mb-4">شخصيات ENTJ هم قادة بالفطرة. يجسدون الكاريزما والثقة، ويبرزون السلطة بطريقة تجمع الحشود خلف هدف مشترك. ومع ذلك، يتميزون بمستوى قاسٍ غالباً من العقلانية.</p>
            `
        }
    },
    {
        id: "ENTP",
        category: "mbti",
        title: { en: "ENTP: The Debater", ar: "ENTP: المحاور" },
        summary: { en: "Smart and curious thinkers who cannot resist an intellectual challenge.", ar: "مفكرون أذكياء وفضوليون لا يمكنهم مقاومة التحدي الفكري." },
        content: {
            en: `
                <h3 class="text-xl font-bold text-indigo-400 mb-3">The Devil's Advocate</h3>
                <p class="mb-4">The ENTP personality type is the ultimate devil's advocate, thriving on the process of shredding arguments and beliefs and letting the ribbons drift in the wind for all to see. They don't do this to be mean, but because it is fun for them.</p>
            `,
            ar: `
                <h3 class="text-xl font-bold text-indigo-400 mb-3">محامي الشيطان</h3>
                <p class="mb-4">شخصية ENTP هي المحامي المثالي للشيطان، وتزدهر في عملية تمزيق الحجج والمعتقدات. لا يفعلون ذلك ليكونوا لئيمين، ولكن لأنه أمر ممتع بالنسبة لهم وممارسة عقلية.</p>
            `
        }
    },
    // ==========================================
    // MBTI DIPLOMATS (INFJ, INFP, ENFJ, ENFP)
    // ==========================================
    {
        id: "INFJ",
        category: "mbti",
        title: { en: "INFJ: The Advocate", ar: "INFJ: المحامي" },
        summary: { en: "Quiet and mystical, yet very inspiring and tireless idealists.", ar: "مثاليون هادئون وغامضون، لكنهم ملهمون للغاية ولا يكلون." },
        content: {
            en: `
                <h3 class="text-xl font-bold text-emerald-400 mb-3">The Wise Advisor</h3>
                <p class="mb-4">The INFJ personality type is very rare, making up less than 1% of the population, but they still leave their mark on the world. As Diplomats, they have an inborn sense of idealism and morality, but what sets them apart is that they are not lazy dreamers, but people capable of taking concrete steps.</p>
            `,
            ar: `
                <h3 class="text-xl font-bold text-emerald-400 mb-3">المستشار الحكيم</h3>
                <p class="mb-4">شخصية INFJ نادرة جداً، تشكل أقل من 1% من السكان. لديهم شعور فطري بالمثالية والأخلاق. ما يميزهم هو أنهم ليسوا حالمين كسالى، بل أشخاص قادرون على اتخاذ خطوات ملموسة لتحقيق أهدافهم.</p>
            `
        }
    },
    {
        id: "INFP",
        category: "mbti",
        title: { en: "INFP: The Mediator", ar: "INFP: الوسيط" },
        summary: { en: "Poetic, kind and altruistic people, always eager to help.", ar: "أناس شعريون ولطيفون وإيثاريون، دائماً حريصون على المساعدة." },
        content: {
            en: `
                <h3 class="text-xl font-bold text-emerald-400 mb-3">The True Idealist</h3>
                <p class="mb-4">INFPs are true idealists, always looking for the hint of good in even the worst of people and events, searching for ways to make things better. While they may be perceived as calm, reserved, or even shy, INFPs have an inner flame and passion that can truly shine.</p>
            `,
            ar: `
                <h3 class="text-xl font-bold text-emerald-400 mb-3">المثالي الحقيقي</h3>
                <p class="mb-4">INFPs هم مثاليون حقيقيون، يبحثون دائمًا عن الخير حتى في أسوأ الناس والأحداث. على الرغم من أنهم قد يُنظر إليهم على أنهم هادئون أو خجولون، إلا أن لديهم شعلة داخلية وعاطفة يمكن أن تتألق حقًا.</p>
            `
        }
    },
    {
        id: "ENFJ",
        category: "mbti",
        title: { en: "ENFJ: The Protagonist", ar: "ENFJ: البطل" },
        summary: { en: "Charismatic and inspiring leaders, able to mesmerize their listeners.", ar: "قادة كاريزماتيون وملهمون، قادرون على سحر مستمعيهم." },
        content: {
            en: `
                <h3 class="text-xl font-bold text-emerald-400 mb-3">The Inspiring Teacher</h3>
                <p class="mb-4">ENFJs are natural-born leaders, full of passion and charisma. Forming around 2% of the population, they are oftentimes our politicians, our coaches and our teachers, reaching out and inspiring others to achieve and to do good in the world.</p>
            `,
            ar: `
                <h3 class="text-xl font-bold text-emerald-400 mb-3">المعلم الملهم</h3>
                <p class="mb-4">ENFJs هم قادة بالفطرة، مليئون بالعاطفة والكاريزما. يشكلون حوالي 2% من السكان، وغالباً ما يكونون سياسيينا ومدربينا ومعلمينا، يلهمون الآخرين لتحقيق الخير في العالم.</p>
            `
        }
    },
    {
        id: "ENFP",
        category: "mbti",
        title: { en: "ENFP: The Campaigner", ar: "ENFP: المناضل" },
        summary: { en: "Enthusiastic, creative and sociable free spirits.", ar: "أرواح حرة متحمسة ومبدعة واجتماعية." },
        content: {
            en: `
                <h3 class="text-xl font-bold text-emerald-400 mb-3">The Free Spirit</h3>
                <p class="mb-4">The ENFP personality is a true free spirit. They are often the life of the party, but unlike Explorers, they are less interested in the sheer excitement and pleasure of the moment than they are in enjoying the social and emotional connections they make with others.</p>
            `,
            ar: `
                <h3 class="text-xl font-bold text-emerald-400 mb-3">الروح الحرة</h3>
                <p class="mb-4">شخصية ENFP هي روح حرة حقيقية. غالباً ما يكونون روح الحفلة، لكنهم مهتمون بالاستمتاع بالروابط الاجتماعية والعاطفية التي يقيمونها مع الآخرين أكثر من مجرد الإثارة اللحظية.</p>
            `
        }
    },
    // ==========================================
    // MBTI SENTINELS (ISTJ, ISFJ, ESTJ, ESFJ)
    // ==========================================
    {
        id: "ISTJ",
        category: "mbti",
        title: { en: "ISTJ: The Logistician", ar: "ISTJ: اللوجستي" },
        summary: { en: "Practical and fact-minded individuals, whose reliability cannot be doubted.", ar: "أشخاص عمليون وواقعيون، لا يمكن الشك في موثوقيتهم." },
        content: {
            en: `
                <h3 class="text-xl font-bold text-cyan-400 mb-3">The Responsible Realist</h3>
                <p class="mb-4">The ISTJ personality type is thought to be the most abundant, making up around 13% of the population. Their defining characteristics of integrity, practical logic and tireless dedication to duty make them a vital core to many families, as well as organizations that uphold traditions, rules and standards.</p>
            `,
            ar: `
                <h3 class="text-xl font-bold text-cyan-400 mb-3">الواقعي المسؤول</h3>
                <p class="mb-4">تعتبر شخصية ISTJ الأكثر شيوعاً (13%). خصائصهم المميزة المتمثلة في النزاهة والمنطق العملي والتفاني الدؤوب في الواجب تجعلهم نواة حيوية للعديد من الأسر والمنظمات التي تحافظ على التقاليد.</p>
            `
        }
    },
    {
        id: "ISFJ",
        category: "mbti",
        title: { en: "ISFJ: The Defender", ar: "ISFJ: المدافع" },
        summary: { en: "Very dedicated and warm protectors, always ready to defend their loved ones.", ar: "حماة مخلصون ودافئون للغاية، مستعدون دائماً للدفاع عن أحبائهم." },
        content: {
            en: `
                <h3 class="text-xl font-bold text-cyan-400 mb-3">The Dedicated Protector</h3>
                <p class="mb-4">The ISFJ personality type is quite unique, as many of their qualities defy the definition of their individual traits. Though Feeling, they have excellent analytical abilities; though Introverted, they have well-developed people skills and robust social relationships.</p>
            `,
            ar: `
                <h3 class="text-xl font-bold text-cyan-400 mb-3">الحامي المخلص</h3>
                <p class="mb-4">شخصية ISFJ فريدة جداً. على الرغم من أنهم عاطفيون، إلا أن لديهم قدرات تحليلية ممتازة؛ وعلى الرغم من أنهم انطوائيون، إلا أن لديهم مهارات اجتماعية متطورة.</p>
            `
        }
    },
    {
        id: "ESTJ",
        category: "mbti",
        title: { en: "ESTJ: The Executive", ar: "ESTJ: التنفيذي" },
        summary: { en: "Excellent administrators, unsurpassed at managing things or people.", ar: "إداريون ممتازون، لا مثيل لهم في إدارة الأشياء أو الناس." },
        content: {
            en: `
                <h3 class="text-xl font-bold text-cyan-400 mb-3">The Efficient Manager</h3>
                <p class="mb-4">ESTJs are representatives of tradition and order, utilizing their understanding of what is right, wrong and socially acceptable to bring families and communities together. Embracing the values of honesty and dedication, people with the ESTJ personality type are valued for their clear advice and guidance.</p>
            `,
            ar: `
                <h3 class="text-xl font-bold text-cyan-400 mb-3">المدير الكفء</h3>
                <p class="mb-4">يمثل ESTJs التقاليد والنظام. يستخدمون فهمهم لما هو صواب وما هو خطأ للجمع بين العائلات والمجتمعات. يتم تقديرهم لنصائحهم الواضحة وتوجيهاتهم وقيمهم المتمثلة في الصدق والتفاني.</p>
            `
        }
    },
    {
        id: "ESFJ",
        category: "mbti",
        title: { en: "ESFJ: The Consul", ar: "ESFJ: القنصل" },
        summary: { en: "Extraordinarily caring, social and popular people, always eager to help.", ar: "أشخاص مهتمون واجتماعيون ومحبوبون للغاية، حريصون دائماً على المساعدة." },
        content: {
            en: `
                <h3 class="text-xl font-bold text-cyan-400 mb-3">The Social Caregiver</h3>
                <p class="mb-4">People who share the ESFJ personality type are, for lack of a better word, popular – which makes sense, given that it is also a very common personality type, making up 12% of the population. They are the cheerleaders and the quarterbacks, always setting the tone and taking the spotlight.</p>
            `,
            ar: `
                <h3 class="text-xl font-bold text-cyan-400 mb-3">مقدم الرعاية الاجتماعية</h3>
                <p class="mb-4">الأشخاص من نوع ESFJ محبوبون وشعبيون. يشكلون 12% من السكان. هم المشجعون والقادة، يحددون النغمة دائماً ويأخذون بقعة الضوء ويهتمون جداً بمن حولهم.</p>
            `
        }
    },
    // ==========================================
    // MBTI EXPLORERS (ISTP, ISFP, ESTP, ESFP)
    // ==========================================
    {
        id: "ISTP",
        category: "mbti",
        title: { en: "ISTP: The Virtuoso", ar: "ISTP: الفنان المبدع" },
        summary: { en: "Bold and practical experimenters, masters of all kinds of tools.", ar: "مجربون جريئون وعمليون، يتقنون جميع أنواع الأدوات." },
        content: {
            en: `
                <h3 class="text-xl font-bold text-yellow-400 mb-3">The Skilled Mechanic</h3>
                <p class="mb-4">ISTPs love to explore with their hands and their eyes, touching and examining the world around them with cool rationalism and spirited curiosity. People with this personality type are natural Makers, moving from project to project.</p>
            `,
            ar: `
                <h3 class="text-xl font-bold text-yellow-400 mb-3">الميكانيكي الماهر</h3>
                <p class="mb-4">يحب ISTPs الاستكشاف بأيديهم وأعينهم، وفحص العالم من حولهم بعقلانية باردة وفضول حيوي. هم صناع بالفطرة، ينتقلون من مشروع إلى آخر.</p>
            `
        }
    },
    {
        id: "ISFP",
        category: "mbti",
        title: { en: "ISFP: The Adventurer", ar: "ISFP: المغامر" },
        summary: { en: "Flexible and charming artists, always ready to explore something new.", ar: "فنانون مرنون وساحرون، مستعدون دائماً لاستكشاف شيء جديد." },
        content: {
            en: `
                <h3 class="text-xl font-bold text-yellow-400 mb-3">The Compassionate Artist</h3>
                <p class="mb-4">ISFP personality types are true artists, but not necessarily in the typical sense where they're out painting happy little trees. Often enough though, they are perfectly capable of this. Rather, it's that they use aesthetics, design and even their choices and actions to push the limits of social convention.</p>
            `,
            ar: `
                <h3 class="text-xl font-bold text-yellow-400 mb-3">الفنان المتعاطف</h3>
                <p class="mb-4">شخصيات ISFP هم فنانون حقيقيون. يستخدمون الجماليات والتصميم وحتى خياراتهم وأفعالهم لتجاوز حدود الأعراف الاجتماعية وتجربة أشياء جديدة.</p>
            `
        }
    },
    {
        id: "ESTP",
        category: "mbti",
        title: { en: "ESTP: The Entrepreneur", ar: "ESTP: رائد الأعمال" },
        summary: { en: "Smart, energetic and perceptive people, who truly enjoy living on the edge.", ar: "أشخاص أذكياء ونشيطون ومدركون، يستمتعون حقاً بالعيش على الحافة." },
        content: {
            en: `
                <h3 class="text-xl font-bold text-yellow-400 mb-3">The Energetic Risk-Taker</h3>
                <p class="mb-4">ESTP personality types always have an impact on their immediate surroundings – the best way to spot them at a party is to look for the whirling eddy of people flitting about them as they move from group to group. Laughing and entertaining with endless humor.</p>
            `,
            ar: `
                <h3 class="text-xl font-bold text-yellow-400 mb-3">المخاطر النشيط</h3>
                <p class="mb-4">شخصيات ESTP لديهم دائماً تأثير على محيطهم المباشر. هم روح الحفلة، ينتقلون من مجموعة إلى أخرى، يضحكون ويمتعون الجميع بروح الدعابة والديناميكية.</p>
            `
        }
    },
    {
        id: "ESFP",
        category: "mbti",
        title: { en: "ESFP: The Entertainer", ar: "ESFP: المسلي" },
        summary: { en: "Spontaneous, energetic and enthusiastic people – life is never boring around them.", ar: "أشخاص عفويون ونشيطون ومتحمسون - الحياة لا تكون مملة أبداً حولهم." },
        content: {
            en: `
                <h3 class="text-xl font-bold text-yellow-400 mb-3">The Spontaneous Performer</h3>
                <p class="mb-4">If anyone is to be found spontaneously breaking into song and dance, it is the ESFP personality type. ESFPs get caught up in the excitement of the moment, and want everyone else to feel that way, too. No other personality type is as generous with their time and energy.</p>
            `,
            ar: `
                <h3 class="text-xl font-bold text-yellow-400 mb-3">المؤدي العفوي</h3>
                <p class="mb-4">إذا كان هناك أي شخص سيغني ويرقص بشكل عفوي، فهو شخصية ESFP. ينجرفون في إثارة اللحظة ويريدون أن يشعر الجميع بذلك أيضاً. هم كرماء جداً بوقتهم وطاقتهم.</p>
            `
        }
    },

    // ==========================================
    // BIG FIVE TRAITS
    // ==========================================
    {
        id: "O",
        category: "big5",
        title: { en: "Openness to Experience", ar: "الانفتاح على الخبرة" },
        summary: { en: "Imagination, curiosity, and artistic sensitivity.", ar: "سعة الخيال والفضول والحساسية الفنية." },
        content: {
            en: `
                <h3 class="text-xl font-bold text-blue-400 mb-3">Intellectual Curiosity</h3>
                <p class="mb-4">Openness to experience describes a dimension of cognitive style that distinguishes imaginative, creative people from down-to-earth, conventional people.</p>
                <div class="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div class="bg-slate-800 p-3 rounded-lg"><strong class="text-green-400">High Scorer:</strong> Creative, intellectually curious, open to new ideas, artistic.</div>
                    <div class="bg-slate-800 p-3 rounded-lg"><strong class="text-red-400">Low Scorer:</strong> Conventional, down-to-earth, prefers familiar routines.</div>
                </div>
            `,
            ar: `
                <h3 class="text-xl font-bold text-blue-400 mb-3">الفضول الفكري</h3>
                <p class="mb-4">يصف الانفتاح على الخبرة بعداً للأسلوب المعرفي يميز الأشخاص المبدعين واسعي الخيال عن الأشخاص التقليديين الواقعيين.</p>
                <div class="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div class="bg-slate-800 p-3 rounded-lg"><strong class="text-green-400">درجة عالية:</strong> مبدع، فضولي فكرياً، منفتح على الأفكار الجديدة، فني.</div>
                    <div class="bg-slate-800 p-3 rounded-lg"><strong class="text-red-400">درجة منخفضة:</strong> تقليدي، واقعي، يفضل الروتين المألوف.</div>
                </div>
            `
        }
    },
    {
        id: "C",
        category: "big5",
        title: { en: "Conscientiousness", ar: "الضمير الحي" },
        summary: { en: "Dependability, self-discipline, and achievement-orientation.", ar: "الموثوقية والانضباط الذاتي والتوجه نحو الإنجاز." },
        content: {
            en: `
                <h3 class="text-xl font-bold text-blue-400 mb-3">The Workhorse</h3>
                <p class="mb-4">Conscientiousness concerns the way in which we control, regulate, and direct our impulses. Conscientious people avoid trouble and achieve high levels of success through purposeful planning and persistence.</p>
                <div class="bg-blue-900/20 text-blue-300 p-3 rounded-lg mb-4">Highly correlated with career success and academic performance.</div>
            `,
            ar: `
                <h3 class="text-xl font-bold text-blue-400 mb-3">القوة العاملة</h3>
                <p class="mb-4">يتعلق الضمير الحي بالطريقة التي نتحكم بها في دوافعنا وننظمها ونوجهها. يتجنب الأشخاص ذوو الضمير الحي المشاكل ويحققون مستويات عالية من النجاح من خلال التخطيط الهادف والمثابرة.</p>
                <div class="bg-blue-900/20 text-blue-300 p-3 rounded-lg mb-4">مرتبط بشكل كبير بالنجاح الوظيفي والأداء الأكاديمي.</div>
            `
        }
    },
    {
        id: "E",
        category: "big5",
        title: { en: "Extraversion", ar: "الانبساط" },
        summary: { en: "Energy, positive emotions, and sociability.", ar: "الطاقة، والمشاعر الإيجابية، والاجتماعية." },
        content: {
            en: `
                <h3 class="text-xl font-bold text-blue-400 mb-3">Enthusiastic Engagement</h3>
                <p class="mb-4">Extraversion is characterized by marked engagement with the external world. Extraverts enjoy being with people, are full of energy, and often experience positive emotions. Introverts lack this energy and independence of group activity.</p>
            `,
            ar: `
                <h3 class="text-xl font-bold text-blue-400 mb-3">المشاركة الحماسية</h3>
                <p class="mb-4">يتميز الانبساط بمشاركة ملحوظة مع العالم الخارجي. يستمتع المنبسطون بالتواجد مع الناس، وهم مليئون بالطاقة، وغالباً ما يختبرون مشاعر إيجابية.</p>
            `
        }
    },
    {
        id: "A",
        category: "big5",
        title: { en: "Agreeableness", ar: "الوداعة (الطيبة)" },
        summary: { en: "Compassion and cooperation vs. suspicion and antagonism.", ar: "الرحمة والتعاون مقابل الشك والعدائية." },
        content: {
            en: `
                <h3 class="text-xl font-bold text-blue-400 mb-3">Social Harmony</h3>
                <p class="mb-4">Agreeable individuals value getting along with others. They are generally considerate, kind, generous, trusting and trustworthy, helpful, and willing to compromise their interests with others.</p>
            `,
            ar: `
                <h3 class="text-xl font-bold text-blue-400 mb-3">الانسجام الاجتماعي</h3>
                <p class="mb-4">يقدر الأفراد الودودون التوافق مع الآخرين. هم عموماً مراعون، لطيفون، كرماء، واثقون وجديرون بالثقة، متعاونون، ومستعدون للتنازل عن مصالحهم مع الآخرين.</p>
            `
        }
    },
    {
        id: "N",
        category: "big5",
        title: { en: "Neuroticism", ar: "العصابية (الاستقرار العاطفي)" },
        summary: { en: "Tendency to experience unpleasant emotions easily.", ar: "الميل لتجربة المشاعر غير السارة بسهولة." },
        content: {
            en: `
                <h3 class="text-xl font-bold text-blue-400 mb-3">Emotional Sensitivity</h3>
                <p class="mb-4">Neuroticism refers to the tendency to experience negative feelings. Those who score high on Neuroticism may experience primarily one specific negative feeling such as anxiety, anger, or depression, but are likely to experience several of these emotions.</p>
                 <div class="bg-slate-800 p-3 rounded-lg"><strong class="text-green-400">Low Scorer (Stable):</strong> Calm, emotionally resilient, and less prone to stress.</div>
            `,
            ar: `
                <h3 class="text-xl font-bold text-blue-400 mb-3">الحساسية العاطفية</h3>
                <p class="mb-4">تشير العصابية إلى الميل لتجربة المشاعر السلبية. قد يعاني أولئك الذين يسجلون درجات عالية في العصابية في المقام الأول من شعور سلبي واحد محدد مثل القلق أو الغضب أو الاكتئاب، لكنهم عرضة لتجربة العديد من هذه المشاعر.</p>
                 <div class="bg-slate-800 p-3 rounded-lg"><strong class="text-green-400">درجة منخفضة (مستقر):</strong> هادئ، مرن عاطفياً، وأقل عرضة للتوتر.</div>
            `
        }
    }
];

const articles = articlesList;
