const articlesList = [
    // =========================================================================
    // 1. MBTI / 16 PERSONALITIES (mbti)
    // =========================================================================
    {
        id: "MBTI-Grokipedia",
        category: "mbti",
        title: { 
            en: "The 16 Personality Archetypes & Jungian Cognitive Theory", 
            ar: "الأنماط الـ 16 للشخصية وعلم النفس التحليلي ليونغ" 
        },
        summary: { 
            en: "A comprehensive deep-dive into Carl Jung's cognitive functions and the Briggs-Myers systematization of human personality.", 
            ar: "دليل موسوعي شامل يستكشف نظرية الوظائف المعرفية لكارل يونغ وتصنيف بريغز-مايرز للأنماط الستة عشر للشخصية البشرية." 
        },
        content: {
            en: `
                <div class="space-y-6">
                    <p class="text-lg leading-relaxed text-slate-300">
                        Human personality has fascinated thinkers for millennia, yet few frameworks have achieved the cross-cultural resonance and utility of the Myers-Briggs Type Indicator (MBTI) and its theoretical predecessor, Carl Jung's Analytical Psychology. Rather than placing individuals in rigid boxes, Jungian theory describes how our minds prioritize information-gathering and decision-making through dynamic <strong>cognitive functions</strong>.
                    </p>

                    <div class="border-l-4 border-emerald-500 bg-slate-800/40 p-4 rounded-r-xl my-6">
                        <h4 class="text-emerald-400 font-bold mb-1">The Core Principle</h4>
                        <p class="italic text-slate-300">"Every individual is an exception to the rule. Yet, classification helps us navigate the complexity of human interaction." — Carl Jung</p>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">1. The Psychological Foundations: Jung's Cognitive Functions</h4>
                    <p class="text-slate-300 leading-relaxed">
                        At the heart of personality type theory is the understanding that the brain performs two basic activities: <strong>perceiving</strong> (taking in information) and <strong>judging</strong> (processing that information to make decisions). Jung subdivided these activities into four functions, which can be directed either inwardly toward the subjective world (Introverted) or outwardly toward the objective world (Extraverted):
                    </p>
                    <ul class="list-disc list-inside space-y-2 my-4 text-slate-300">
                        <li><strong>Intuition (N):</strong> Looking for patterns, possibilities, and future implications. Directed outwardly (Ne) it generates brainstorming; inwardly (Ni) it forms deep, singular insights.</li>
                        <li><strong>Sensing (S):</strong> Relying on concrete, present-moment data and historical facts. Extraverted Sensing (Se) focuses on immediate physical reality, while Introverted Sensing (Si) references past experiences and stability.</li>
                        <li><strong>Thinking (T):</strong> Making objective decisions based on logic, rules, and impersonal analysis. Extraverted Thinking (Te) optimizes systems and execution; Introverted Thinking (Ti) seeks internal precision and deep framework understanding.</li>
                        <li><strong>Feeling (F):</strong> Making subjective decisions based on personal values, harmony, and interpersonal impact. Extraverted Feeling (Fe) builds social connection; Introverted Feeling (Fi) preserves personal authenticity and inner ethics.</li>
                    </ul>

                    <h4 class="text-xl font-bold text-white mb-2">2. The Myers-Briggs Expansion: The Four Dimensions</h4>
                    <p class="text-slate-300 leading-relaxed">
                        Katharine Briggs and Isabel Myers built upon Jung’s complex models by adding a fourth preference scale—Judging (J) vs. Perceiving (P)—to determine which function is presented to the outside world. This created the familiar four-letter code:
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-emerald-300 block mb-1">E vs. I (Energy Orientation)</strong>
                            <p class="text-xs text-slate-400">Extraverts gain energy from social interactions and action; Introverts recharge in solitude and inner reflection.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-emerald-300 block mb-1">N vs. S (Information Perception)</strong>
                            <p class="text-xs text-slate-400">Intuitives read between the lines, focusing on abstract ideas; Sensors rely on raw sensory data and practical facts.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-emerald-300 block mb-1">T vs. F (Decision Criteria)</strong>
                            <p class="text-xs text-slate-400">Thinkers prioritize cold logic and objective truth; Feelers prioritize personal alignment and interpersonal harmony.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-emerald-300 block mb-1">J vs. P (Lifestyle Organization)</strong>
                            <p class="text-xs text-slate-400">Judgers prefer schedules, structure, and early closure; Perceivers favor flexibility, adaptability, and open options.</p>
                        </div>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">3. The Four Archetypal Temperaments</h4>
                    <p class="text-slate-300 leading-relaxed">
                        To simplify human diversity, psychologists group the 16 types into four distinct temperaments:
                    </p>
                    <ul class="list-decimal list-inside space-y-3 my-4 text-slate-300">
                        <li><strong>The Analysts (NT - INTJ, INTP, ENTJ, ENTP):</strong> Driven by rationality, intellectual curiosity, and systemic optimization. They excel at strategic planning, solving complex problems, and challenging established dogmas.</li>
                        <li><strong>The Diplomats (NF - INFJ, INFP, ENFJ, ENFP):</strong> Motivated by empathy, cooperation, and meaningful connection. They strive to inspire others, promote harmony, and help individuals realize their potential.</li>
                        <li><strong>The Sentinels (SJ - ISTJ, ISFJ, ESTJ, ESFJ):</strong> Grounded in tradition, order, and social duty. They are highly organized, reliable, and protect the rules and structures that keep communities stable.</li>
                        <li><strong>The Explorers (SP - ISTP, ISFP, ESTP, ESFP):</strong> Highly adaptive, spontaneous, and hands-on. They thrive in dynamic environments, enjoy physical or artistic creation, and live intensely in the present.</li>
                    </ul>

                    <h4 class="text-xl font-bold text-white mb-2">4. Path to Growth: Balancing the Cognitive Stack</h4>
                    <p class="text-slate-300 leading-relaxed">
                        Personal growth in MBTI is not about trying to change your type, but about maturing your "cognitive stack." We each have a dominant function that we rely on heavily. However, emotional maturity requires developing our auxiliary (supporting) and tertiary functions, while actively integrating our inferior (weakest) function. By recognizing our blind spots, we can transition from automatic, reactive behaviors to intentional self-mastery.
                    </p>
                </div>
            `,
            ar: `
                <div class="space-y-6">
                    <p class="text-lg leading-relaxed text-slate-300">
                        لقد استحوذت الشخصية الإنسانية على اهتمام المفكرين والفلاسفة لآلاف السنين، ومع ذلك فإن القليل من الأطر النظرية حقق الانتشار والتأثير العالمي الذي حققه مؤشر "مايرز بريغز" للأنماط الشخصية (MBTI) وجذوره النظرية العميقة المتمثلة في علم النفس التحليلي لمؤسسه كارل غوستاف يونغ. بدلاً من وضع الأفراد في قوالب جامدة، تصف نظرية يونغ كيف ترتب عقولنا أولويات جمع المعلومات واتخاذ القرارات من خلال ما يُعرف بالوظائف المعرفية الديناميكية.
                    </p>

                    <div class="border-r-4 border-emerald-500 bg-slate-800/40 p-4 rounded-l-xl my-6">
                        <h4 class="text-emerald-400 font-bold mb-1">المبدأ الأساسي</h4>
                        <p class="italic text-slate-300">"كل فرد هو استثناء للقاعدة. ومع ذلك، فإن التصنيف يساعدنا على التنقل في تعقيدات التفاعل البشري." — كارل يونغ</p>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">1. الجذور الفلسفية والنفسية: وظائف يونغ المعرفية</h4>
                    <p class="text-slate-300 leading-relaxed">
                        في قلب نظرية الأنماط تكمن فكرة أن العقل البشري يقوم بنشاطين أساسيين: <strong>الإدراك</strong> (طريقة استقبال وجمع المعلومات) و<strong>الحسم</strong> (طريقة معالجة هذه المعلومات واتخاذ القرارات بشأنها). وقسم يونغ هذه الأنشطة إلى أربع وظائف رئيسية تتجه إما داخلياً نحو الذات (انطوائية) أو خارجياً نحو العالم (انبساطية):
                    </p>
                    <ul class="list-disc list-inside space-y-2 my-4 text-slate-300">
                        <li><strong>الحدس (N):</strong> البحث عن الأنماط العميقة، الاحتمالات المستقبلية، والروابط غير المرئية. الحدس الانبساطي (Ne) يولد الأفكار الإبداعية المتشعبة؛ بينما الحدس الانطوائي (Ni) يركز على الرؤى الفلسفية العميقة والمستقبلية الأحادية.</li>
                        <li><strong>الإحساس (S):</strong> الاعتماد على الحقائق الواقعية الملموسة والتفاصيل التاريخية. الإحساس الانبساطي (Se) يتفاعل بحيوية مع البيئة المادية الحالية؛ بينما الإحساس الانطوائي (Si) يربط الحاضر بالماضي ويهتم بالاستقرار والتقاليد.</li>
                        <li><strong>التفكير (T):</strong> اتخاذ قرارات موضوعية مبنية على المنطق والقوانين والتحليل غير الشخصي. التفكير الانبساطي (Te) يركز على الكفاءة والإنتاجية وتنظيم المشاريع؛ بينما التفكير الانطوائي (Ti) يهدف لفهم الأنظمة بدقة وبناء أطر منطقية متكاملة.</li>
                        <li><strong>الشعور (F):</strong> اتخاذ قرارات ذاتية مبنية على القيم الشخصية، والانسجام الجماعي، والتأثير الإنساني. الشعور الانبساطي (Fe) يسعى لبناء الروابط الاجتماعية والانسجام مع الآخرين؛ بينما الشعور الانطوائي (Fi) يحمي الهوية الأخلاقية والصدق مع الذات.</li>
                    </ul>

                    <h4 class="text-xl font-bold text-white mb-2">2. توسع مايرز بريغز: الأبعاد الأربعة للشخصية</h4>
                    <p class="text-slate-300 leading-relaxed">
                        بنت كاثرين بريغز وابنتها إيزابيل مايرز على نموذج يونغ المعقد بإضافة بعد رابع - الحسم (J) مقابل المرونة (P) - لتحديد أي وظيفة يظهرها الشخص للعالم الخارجي. هذا التوسع أثمر عن ولادة الكود المألوف المكون من 4 أحرف:
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-emerald-300 block mb-1">الانبساط (E) مقابل الانطواء (I)</strong>
                            <p class="text-xs text-slate-400">الانبساطيون يستمدون طاقتهم من التفاعل مع الناس والأنشطة؛ بينما الانطوائيون يشحنون طاقتهم في العزلة والتأمل الداخلي.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-emerald-300 block mb-1">الحدس (N) مقابل الإحساس (S)</strong>
                            <p class="text-xs text-slate-400">الحدسيون يركزون على النظريات والأفكار المجردة والمستقبلية؛ بينما الحسيون يفضلون الحقائق الصلبة والواقعية القابلة للقياس المباشر.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-emerald-300 block mb-1">التفكير (T) مقابل الشعور (F)</strong>
                            <p class="text-xs text-slate-400">المفكرون يضعون المنطق والحقيقة الموضوعية فوق العواطف؛ بينما الشعوريون يزنون قراراتهم بناءً على القيم الإنسانية والتوافق العاطفي.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-emerald-300 block mb-1">الحسم (J) مقابل المرونة (P)</strong>
                            <p class="text-xs text-slate-400">الحاسمون يفضلون التنظيم والخطط الواضحة وإتمام الأمور سريعاً؛ بينما المرنون يفضلون التلقائية، إبقاء الخيارات مفتوحة والتكيف المستمر.</p>
                        </div>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">3. المجموعات الأربع الكبرى (الأمزجة النفسية)</h4>
                    <p class="text-slate-300 leading-relaxed">
                        لتسهيل فهم الشخصيات، صنف علماء النفس الأنماط الستة عشر إلى أربعة أمزجة رئيسية تشترك في الرؤى والغايات:
                    </p>
                    <ul class="list-decimal list-inside space-y-3 my-4 text-slate-300">
                        <li><strong>المحللون (NT - INTJ, INTP, ENTJ, ENTP):</strong> يتميزون بالعقلانية، وحب الابتكار والفضول المعرفي. يسعون لتطوير الأنظمة، وحل المشكلات الفكرية المعقدة، ورفض المسلمات غير المنطقية.</li>
                        <li><strong>الدبلوماسيون (NF - INFJ, INFP, ENFJ, ENFP):</strong> دافعهم الأسمى هو التعاطف، والبحث عن المغزى العميق والروابط الإنسانية الأصيلة. يركزون على إلهام الآخرين والمساهمة في جعل العالم مكاناً أفضل.</li>
                        <li><strong>الحراس (SJ - ISTJ, ISFJ, ESTJ, ESFJ):</strong> يمثلون العمود الفقري للاستقرار والنظام الاجتماعي. يقدرون التقاليد، الوفاء بالمسؤوليات، والالتزام بالواجبات والقوانين التي تحافظ على تماسك المجتمعات.</li>
                        <li><strong>المستكشفون (SP - ISTP, ISFP, ESTP, ESFP):</strong> عشاق التلقائية، الحركة، والارتباط بالواقع العملي. يتميزون بالقدرة الفائقة على التكيف السريع، والبراعة اليدوية أو الفنية، والاستمتاع باللحظة الحالية.</li>
                    </ul>

                    <h4 class="text-xl font-bold text-white mb-2">4. طريق النمو والتكامل: موازنة الهرم المعرفي</h4>
                    <p class="text-slate-300 leading-relaxed">
                        النمو النفسي الحقيقي في مدرسة الأنماط لا يعني محاولة تغيير نمطك، بل يعني نضج الهرم المعرفي الخاص بك. يولد كل منا بوظيفة مهيمنة نعتمد عليها بشكل مفرط. ومع ذلك، فإن النضج العاطفي يتطلب تفعيل وظيفتنا المساعدة (الداعمة)، وتدريب الوظيفة الثالثة، والسعي الواعي لتكامل الوظيفة الدنيا (الأضعف لدينا). من خلال فهم نقاط ضعفنا المعرفية، نتحول من ردود الفعل التلقائية واللاواعية إلى التحكم الذاتي الواعي والحكيم.
                    </p>
                </div>
            `
        }
    },

    // =========================================================================
    // 2. LOVE & ATTACHMENT (love)
    // =========================================================================
    {
        id: "Love-Grokipedia",
        category: "love",
        title: { 
            en: "Relationships, Attachment Styles & The 5 Love Languages", 
            ar: "سيكولوجية العلاقات، أنماط التعلق ولغات الحب الخمس" 
        },
        summary: { 
            en: "An expert exploration of relationship dynamics, combining John Bowlby's Attachment Theory with Gary Chapman's Love Languages.", 
            ar: "دراسة عميقة وديناميكية لسيكولوجية العلاقات، تجمع بين نظرية التعلق العاطفي لجون بولبي ولغات الحب الخمس لغاري تشابمان لشفاء الروابط الإنسانية." 
        },
        content: {
            en: `
                <div class="space-y-6">
                    <p class="text-lg leading-relaxed text-slate-300">
                        Human relationships are governed by deep psychological currents. While love is a near-universal emotion, the ways in which we experience security, process intimacy, and communicate our affection are highly unique. By bridging <strong>Attachment Theory</strong> (the psychology of relationship safety) and the <strong>Five Love Languages</strong> (the framework of emotional expression), we unlock the blueprints for lasting relationship success.
                    </p>

                    <div class="border-l-4 border-pink-500 bg-slate-800/40 p-4 rounded-r-xl my-6">
                        <h4 class="text-pink-400 font-bold mb-1">Theoretical Nexus</h4>
                        <p class="italic text-slate-300">"We are built for connection. How we communicate that connection determines whether our relationships flourish or fracture." — Dr. John Bowlby</p>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">1. Relationship Blueprints: Attachment Theory</h4>
                    <p class="text-slate-300 leading-relaxed">
                        Developed initially by British psychoanalyst John Bowlby and expanded by Mary Ainsworth, Attachment Theory explains how our early relationships with caregivers shape our emotional wiring in adult partnerships. There are four primary attachment styles:
                    </p>
                    <ul class="list-disc list-inside space-y-3 my-4 text-slate-300">
                        <li><strong>Secure Attachment:</strong> Individuals with this style feel comfortable with intimacy and vulnerability. They maintain healthy boundaries, communicate their needs directly, trust their partners, and handle conflict constructively without fearing immediate abandonment.</li>
                        <li><strong>Anxious-Preoccupied Attachment:</strong> Driven by a deep, underlying fear of abandonment, anxious individuals often crave high levels of intimacy and constant reassurance. They may interpret minor fluctuations in their partner’s behavior as signs of rejection, leading to emotional distress.</li>
                        <li><strong>Dismissive-Avoidant Attachment:</strong> Equating intimacy with a loss of independence, avoidant individuals tend to defensively withdraw when relationships become close or intense. They rely heavily on self-soothing, suppress their emotional needs, and keep partners at a distance.</li>
                        <li><strong>Fearful-Avoidant (Disorganized) Attachment:</strong> A complex mix of both anxious and avoidant traits. These individuals desire deep emotional closeness but are simultaneously terrified of the vulnerability and potential pain that comes with it, leading to a "push-pull" dynamic.</li>
                    </ul>

                    <h4 class="text-xl font-bold text-white mb-2">2. Communication Channels: The 5 Love Languages</h4>
                    <p class="text-slate-300 leading-relaxed">
                        Even when partners are securely attached, they can experience emotional distance if they do not speak the same "love language." Dr. Gary Chapman proposed that humans express and receive love through five distinct modalities:
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700 col-span-1">
                            <strong class="text-pink-300 block mb-1">Words of Affirmation</strong>
                            <p class="text-xs text-slate-400">Verbal compliments, appreciation, and words of encouragement are the lifeblood of this language.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700 col-span-1">
                            <strong class="text-pink-300 block mb-1">Quality Time</strong>
                            <p class="text-xs text-slate-400">Full, undivided attention—free from screens and distractions—during shared activities.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700 col-span-1">
                            <strong class="text-pink-300 block mb-1">Receiving Gifts</strong>
                            <p class="text-xs text-slate-400">Thoughtful, symbolic tokens of affection that show the recipient they were remembered and valued.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700 col-span-1 md:col-span-1.5">
                            <strong class="text-pink-300 block mb-1">Acts of Service</strong>
                            <p class="text-xs text-slate-400">Actions that ease the burden of chores or responsibilities. For this language, deeds speak louder than promises.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700 col-span-1 md:col-span-1.5">
                            <strong class="text-pink-300 block mb-1">Physical Touch</strong>
                            <p class="text-xs text-slate-400">Hugs, holding hands, and physical proximity represent safety, presence, and emotional warmth.</p>
                        </div>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">3. The Interaction of Safety and Expression</h4>
                    <p class="text-slate-300 leading-relaxed">
                        Mismatches in relationships often occur because one partner’s attachment fear triggers the other’s defense mechanism. For instance, when an anxious partner demands reassurance (seeking Quality Time), an avoidant partner may perceive this as a threat and shut down, which further terrifies the anxious partner. By recognizing these cycles, couples can learn to translate their love languages in ways that foster mutual attachment security.
                    </p>

                    <h4 class="text-xl font-bold text-white mb-2">4. Practical Application for Couples</h4>
                    <p class="text-slate-300 leading-relaxed">
                        To build a highly resilient partnership, first identify your and your partner’s attachment styles and dominant love languages. Practice "earned security" by validating fears without defensive reactions, and consciously express love through your partner’s primary language rather than your own. Over time, this deliberate behavior rewires relational dynamics, fostering absolute trust and profound intimacy.
                    </p>
                </div>
            `,
            ar: `
                <div class="space-y-6">
                    <p class="text-lg leading-relaxed text-slate-300">
                        تخضع العلاقات الإنسانية لقوانين نفسية عميقة تؤثر في سلوكنا اليومي. على الرغم من أن الحب هو عاطفة إنسانية مشتركة، إلا أن الطرق التي نختبر بها الأمان العاطفي ونعبر بها عن اهتمامنا تختلف بشكل مذهل من شخص لآخر. من خلال الربط بين <strong>نظرية التعلق العاطفي</strong> (سيكولوجية الأمان والارتباط) و<strong>لغات الحب الخمس</strong> (قنوات التعبير العاطفي)، يمكننا الحصول على خارطة طريق متكاملة لبناء علاقات مستقرة وصحية تدوم طويلاً.
                    </p>

                    <div class="border-r-4 border-pink-500 bg-slate-800/40 p-4 rounded-l-xl my-6">
                        <h4 class="text-pink-400 font-bold mb-1">ملتقى النظريات</h4>
                        <p class="italic text-slate-300">"لقد صممنا كبشر للارتباط ببعضنا البعض. والطريقة التي نتواصل بها تحدد ما إذا كانت علاقاتنا ستزدهر أم ستتحطم." — د. جون بولبي</p>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">1. خرائط الارتباط: نظرية التعلق العاطفي</h4>
                    <p class="text-slate-300 leading-relaxed">
                        تأسست هذه النظرية على يد عالم النفس البريطاني جون بولبي وتوسعت لاحقاً على يد ماري أينسورث. توضح النظرية كيف ترسم علاقاتنا المبكرة مع مربينا في الطفولة طريقة إدارتنا للمشاعر والأمان في علاقاتنا العاطفية كبالغين. وتنقسم الشخصيات إلى أربعة أنماط تعلق أساسية:
                    </p>
                    <ul class="list-disc list-inside space-y-3 my-4 text-slate-300">
                        <li><strong>التعلق الآمن (Secure):</strong> يشعر أصحاب هذا النمط بالراحة والاطمئنان في العلاقات الحميمية والمشاركة العاطفية. هم قادرون على وضع حدود صحية، والتعبير عن احتياجاتهم بوضوح وثقة، ومواجهة الخلافات بمرونة دون خوف مفرط من الهجر.</li>
                        <li><strong>التعلق القلق-المشغول (Anxious):</strong> يعيش أصحاب هذا النمط تحت وطأة خوف مستمر وغير واعٍ من الهجر والفقد. يتوقون لدرجات عالية من الحميمية والاندماج مع الشريك، ويحتاجون لطمأنينة مستمرة، وقد يفسرون أي تغير طفيف في سلوك الشريك على أنه بوادر رفض.</li>
                        <li><strong>التعلق التجنبي-الرافض (Avoidant):</strong> يربط هذا النمط الحميمية بفقدان الحرية والاستقلالية. يميل أصحابه للانسحاب العاطفي والجسدي عندما تتقارب العلاقة وتصبح عميقة، ويخفون مشاعرهم ويفضلون الاعتماد الكامل على أنفسهم بدلاً من طلب المساعدة.</li>
                        <li><strong>التعلق الخائف-التجنبي (Disorganized):</strong> يمثل مزيجاً معقداً ومتقلباً من القلق والتجنب. يتوق أصحاب هذا النمط للحصول على الحب والدفء العاطفي، لكنهم في الوقت ذاته يشعرون بالرعب الشديد من التعرض للأذى أو الخيانة، مما يخلق سلوكاً متأرجحاً بين القرب والبعد.</li>
                    </ul>

                    <h4 class="text-xl font-bold text-white mb-2">2. قنوات التواصل: لغات الحب الخمس</h4>
                    <p class="text-slate-300 leading-relaxed">
                        حتى عندما يتوفر الأمان بين الشريكين، فقد يختبران فجوة عاطفية إذا كان كل منهما يتحدث لغة حب مختلفة. قدم الدكتور غاري تشابمان فكرة أن البشر يستقبلون ويعبرون عن مشاعر الحب عبر خمس قنوات عاطفية مميزة:
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700 col-span-1">
                            <strong class="text-pink-300 block mb-1">كلمات التقدير والثناء</strong>
                            <p class="text-xs text-slate-400">الكلمات الرقيقة، المدح، عبارات الامتنان والتشجيع الشفهي تمثل شريان الحياة العاطفي لأصحاب هذه اللغة.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700 col-span-1">
                            <strong class="text-pink-300 block mb-1">الوقت النوعي المشترك</strong>
                            <p class="text-xs text-slate-400">قضاء أوقات تفاعلية مع الشريك بتركيز كامل وانتباه غير مجزأ، بعيداً عن شاشات الهواتف والمشتتات.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700 col-span-1">
                            <strong class="text-pink-300 block mb-1">تلقي الهدايا المعنوية</strong>
                            <p class="text-xs text-slate-400">الهدايا التي تحمل رمزية فكرية وعاطفية تظهر للمستقبل أن الشريك فكر فيه وبذل جهداً خاصاً لإسعاده.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700 col-span-1 md:col-span-1.5">
                            <strong class="text-pink-300 block mb-1">أعمال الخدمة والمساعدة</strong>
                            <p class="text-xs text-slate-400">تقديم المساعدة العملية التي تخفف من أعباء ومسؤوليات الحياة اليومية. هنا، الأفعال تتحدث بصوت أعلى من الكلمات.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700 col-span-1 md:col-span-1.5">
                            <strong class="text-pink-300 block mb-1">الاتصال والتلامس الجسدي</strong>
                            <p class="text-xs text-slate-400">العناق، الإمساك بالأيدي والقرب المادي يعبر بشكل مباشر عن الحماية، الدعم العاطفي، والوجود الحقيقي.</p>
                        </div>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">3. التفاعل الديناميكي بين الأمان والتعبير</h4>
                    <p class="text-slate-300 leading-relaxed">
                        تحدث الصدامات العميقة في العلاقات عندما يحفز خوف شريك ما الآلية الدفاعية للشريك الآخر. على سبيل المثال، عندما يطالب الشريك القلق بالطمأنينة (بلغة الوقت أو الكلام)، قد يرى الشريك التجنبي هذا الطلب كحصار وتهديد لحريته، فينسحب ويصمت، مما يزيد من رعب وقلق الطرف الأول. إن فهم هذه الدورات المتكررة يتيح للشركاء صياغة رسائل حبهم بلغة يسهل على الطرف الآخر استيعابها والشعور بالأمان من خلالها.
                    </p>

                    <h4 class="text-xl font-bold text-white mb-2">4. نصائح عملية لنمو العلاقات</h4>
                    <p class="text-slate-300 leading-relaxed">
                        لبناء علاقة قوية ومرنة، ابدأ بتحديد نمط تعلقك ولغة حبك المهيمنة وكذلك نمط ولغة شريكك. تدرب على توفير "الأمان المكتسب" من خلال الاستماع الفعال لمخاوف الطرف الآخر دون اتخاذ موقف دفاعي، وتعلم أن تعبر عن حبك باللغة التي يفضلها شريكك بدلاً من اللغة التي تفضلها أنت. مع مرور الوقت، يعيد هذا السلوك الواعي برمجة الديناميكيات العاطفية، مما يخلق ثقة مطلقة وحميمية حقيقية.
                    </p>
                </div>
            `
        }
    },

    // =========================================================================
    // 3. CLINICAL PERSONALITY STYLES (clinical)
    // =========================================================================
    {
        id: "Clinical-Grokipedia",
        category: "clinical",
        title: { 
            en: "Clinical Personality Styles & Modern Psychopathology", 
            ar: "الشخصية والاضطرابات السريرية في علم النفس المعاصر" 
        },
        summary: { 
            en: "An in-depth psychiatric exploration of clinical personality profiles, Cluster dynamics, and developmental psychopathology.", 
            ar: "تحليل سريري وبحثي متعمق للأنماط الشخصية السريرية، مصنفة وفق الدليل التشخيصي والتحليلي لعلم النفس المعاصر والعلاجات الحديثة." 
        },
        content: {
            en: `
                <div class="space-y-6">
                    <p class="text-lg leading-relaxed text-slate-300">
                        In the landscape of modern psychiatry and psychology, a "personality style" exists on a vast, continuous spectrum. While healthy personality traits allow for cognitive flexibility, adaptability, and emotional resilience, pathological clinical patterns—known as <strong>personality disorders</strong>—are characterized by rigid, maladaptive behaviors that cause chronic distress and disrupt interpersonal relationships.
                    </p>

                    <div class="border-l-4 border-indigo-500 bg-slate-800/40 p-4 rounded-r-xl my-6">
                        <h4 class="text-indigo-400 font-bold mb-1">Diagnostic Paradigm</h4>
                        <p class="italic text-slate-300">"Personality is a dynamic structure. Pathology arises when adaptation styles become so rigid that they prevent growth." — Modern Psychopathology</p>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">1. The DSM-5 Diagnostic Clusters</h4>
                    <p class="text-slate-300 leading-relaxed">
                        To help psychiatrists diagnose and treat these conditions, the American Psychiatric Association groups clinical personality styles into three distinct diagnostic clusters based on descriptive similarities:
                    </p>
                    <div class="space-y-4 my-6">
                        <div class="p-4 rounded-xl bg-slate-800/40 border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">Cluster A (The Odd, Eccentric Styles)</strong>
                            <p class="text-sm text-slate-300 mb-2">These styles are defined by social detachment, mistrust, and unconventional cognitive patterns.</p>
                            <ul class="list-disc list-inside text-xs text-slate-400 space-y-1">
                                <li><strong>Paranoid Style:</strong> Marked by pervasive, unwarranted distrust, suspicion, and hypersensitivity.</li>
                                <li><strong>Schizoid Style:</strong> Marked by extreme emotional detachment and a preference for solitary lives.</li>
                            </ul>
                        </div>
                        <div class="p-4 rounded-xl bg-slate-800/40 border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">Cluster B (The Dramatic, Emotional, Erratic Styles)</strong>
                            <p class="text-sm text-slate-300 mb-2">Characterized by impulsivity, unstable self-image, intense emotion, and dramatic interpersonal dynamics.</p>
                            <ul class="list-disc list-inside text-xs text-slate-400 space-y-1">
                                <li><strong>Narcissistic Style:</strong> Characterized by grandiosity, entitlement, deep insecurity, and lack of empathy.</li>
                                <li><strong>Borderline Style:</strong> Defined by a profound fear of abandonment, unstable self-image, and intense mood swings.</li>
                                <li><strong>Histrionic Style:</strong> Marked by constant attention-seeking, shallow emotions, and dramatic behavior.</li>
                                <li><strong>Aggressive / Antisocial Style:</strong> Marked by a persistent disregard for social norms, rights of others, and laws.</li>
                            </ul>
                        </div>
                        <div class="p-4 rounded-xl bg-slate-800/40 border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">Cluster C (The Anxious, Fearful Styles)</strong>
                            <p class="text-sm text-slate-300 mb-2">Driven primarily by internal feelings of anxiety, inadequacy, and a preoccupation with control.</p>
                            <ul class="list-disc list-inside text-xs text-slate-400 space-y-1">
                                <li><strong>Avoidant Style:</strong> Extreme sensitivity to negative evaluation, leading to isolation despite craving connection.</li>
                                <li><strong>Obsessive-Compulsive Style:</strong> Driven by perfectionism, rigidity, and a constant need for mental and environmental control.</li>
                            </ul>
                        </div>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">2. Etiology and Psychodynamics</h4>
                    <p class="text-slate-300 leading-relaxed">
                        Clinical personality styles do not appear overnight. They develop through a complex interaction of genetic predispositions (temperament) and early developmental environments (such as childhood trauma, emotional neglect, or overprotective parenting). Psychologically, these behaviors originate as desperate, creative defense mechanisms to cope with developmental stress. However, as the individual matures, these coping mechanisms solidify, becoming automatic filters that distort their perception of reality.
                    </p>

                    <h4 class="text-xl font-bold text-white mb-2">3. Pathways to Structural Healing</h4>
                    <p class="text-slate-300 leading-relaxed">
                        While clinical styles represent deeply ingrained patterns, healing and modification are highly possible. Modern evidence-based psychotherapy provides powerful tools for transformation:
                    </p>
                    <ul class="list-disc list-inside space-y-2 my-4 text-slate-300">
                        <li><strong>Cognitive Behavioral Therapy (CBT):</strong> Focuses on identifying and restructuring core core beliefs and automatic thoughts.</li>
                        <li><strong>Dialectical Behavior Therapy (DBT):</strong> Highly effective for borderline styles, emphasizing distress tolerance, emotion regulation, and mindfulness.</li>
                        <li><strong>Psychodynamic Therapy:</strong> Uncovers the unconscious roots of behavior and unresolved childhood conflicts to facilitate structural integration.</li>
                    </ul>
                    <p class="text-slate-300 leading-relaxed">
                        Developing self-awareness is the crucial first step. By recognizing your clinical tendencies under stress, you can intentionally choose healthy coping mechanisms, transforming vulnerability into profound emotional resilience.
                    </p>
                </div>
            `,
            ar: `
                <div class="space-y-6">
                    <p class="text-lg leading-relaxed text-slate-300">
                        في علم النفس المعاصر والطب النفسي الحديث، لا توجد الشخصية في قوالب مغلقة، بل تقع على طيف واسع ومستمر. بينما تمنحنا السمات الشخصية الطبيعية المرونة المعرفية، والقدرة على التكيف الاجتماعي، والمرونة العاطفية؛ فإن الأنماط السريرية المرضية - والمعروفة باسم <strong>اضطرابات الشخصية</strong> - تتميز بسلوكيات صلبة وغير متكيفة تسبب ألماً مزمناً وتعطل حياة الفرد وعلاقاته بشكل مستمر.
                    </p>

                    <div class="border-r-4 border-indigo-500 bg-slate-800/40 p-4 rounded-l-xl my-6">
                        <h4 class="text-indigo-400 font-bold mb-1">المنظور التشخيصي</h4>
                        <p class="italic text-slate-300">"الشخصية بناء ديناميكي مستمر. وتظهر العصابية والمرضية عندما تتصلب آليات التكيف لدرجة تمنع الفرد من النمو والنضج." — علم النفس المرضي المعاصر</p>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">1. تصنيفات الدليل التشخيصي والإحصائي (DSM-5)</h4>
                    <p class="text-slate-300 leading-relaxed">
                        لتسهيل التشخيص ووضع الخطط العلاجية، يصنف الأطباء النفسيون الأنماط الشخصية السريرية في ثلاث مجموعات أساسية تشترك في المظاهر السلوكية والوجدانية:
                    </p>
                    <div class="space-y-4 my-6">
                        <div class="p-4 rounded-xl bg-slate-800/40 border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">المجموعة أ (الأنماط الغريبة والارتيابية)</strong>
                            <p class="text-sm text-slate-300 mb-2">تتميز هذه المجموعة بالانفصال الاجتماعي، والشك المفرط في دوافع الآخرين، والأفكار غير التقليدية.</p>
                            <ul class="list-disc list-inside text-xs text-slate-400 space-y-1">
                                <li><strong>الشخصية الارتيابية (Paranoid):</strong> شكوك عميقة وغير مبررة، تفسير نوايا الآخرين على أنها عدائية، وحساسية مفرطة للنقد.</li>
                                <li><strong>الشخصية شبه الفصامية (Schizoid):</strong> زهد تام في العلاقات الاجتماعية، تفضيل شديد للعزلة التامة، وبرود وجداني ظاهر.</li>
                            </ul>
                        </div>
                        <div class="p-4 rounded-xl bg-slate-800/40 border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">المجموعة ب (الأنماط الدرامية، العاطفية والمتقلبة)</strong>
                            <p class="text-sm text-slate-300 mb-2">تتميز بالاندفاع، وعدم الاستقرار العاطفي، والتقلبات الشديدة في صورة الذات والعلاقات الإنسانية.</p>
                            <ul class="list-disc list-inside text-xs text-slate-400 space-y-1">
                                <li><strong>الشخصية النرجسية (Narcissistic):</strong> شعور مفرط بالعظمة والاستحقاق، حاجة دائمة للإعجاب، ونقص حاد في التعاطف مع الآخرين.</li>
                                <li><strong>الشخصية الحدية (Borderline):</strong> خوف هستيري من الهجر، اندفاع سلوكي، تقلبات مزاجية حادة، وعلاقات متذبذبة جداً.</li>
                                <li><strong>الشخصية الهستيرية (Histrionic):</strong> سعي محموم لجذب الانتباه، تعبير عاطفي مبالغ فيه لكنه سطحي، وتأثر سريع بالآخرين.</li>
                                <li><strong>الشخصية العدوانية / المضادة للمجتمع:</strong> تجاهل صارخ لحقوق الآخرين وقوانين المجتمع، وغياب الندم أو الشعور بالذنب.</li>
                            </ul>
                        </div>
                        <div class="p-4 rounded-xl bg-slate-800/40 border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">المجموعة ج (الأنماط القلقة والخائفة)</strong>
                            <p class="text-sm text-slate-300 mb-2">تتحكم مشاعر القلق، والتوتر الداخلي، والخوف من التقييم السلبي أو فقدان السيطرة في سلوكيات أصحاب هذه الأنماط.</p>
                            <ul class="list-disc list-inside text-xs text-slate-400 space-y-1">
                                <li><strong>الشخصية التجنبية (Avoidant):</strong> رغبة في التواصل الاجتماعي لكن يكبحها خوف مرعب من الرفض، ومشاعر بعدم الكفاءة.</li>
                                <li><strong>الشخصية الوسواسية (Obsessive-Compulsive):</strong> انشغال كامل بالمثالية، التفاصيل، النظام، والسيطرة العقلية والبيئية على حساب الكفاءة والمرونة.</li>
                            </ul>
                        </div>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">2. الأسباب والديناميكيات النفسية والتطورية</h4>
                    <p class="text-slate-300 leading-relaxed">
                        لا تنشأ هذه الأنماط فجأة، بل هي نتاج تفاعل معقد وطويل بين العوامل الجينية الوراثية (المزاج الفطري) والبيئة النمائية في مرحلة الطفولة (كالصدمات، الإهمال العاطفي، أو التدليل الزائد). نفسياً، تبدأ هذه السلوكيات كآليات دفاعية إبداعية وضرورية لمساعدة الطفل على البقاء عاطفياً في بيئة صعبة. ومع النضج، تتصلب هذه الدفاعات وتصبح فلاتر تلقائية تشوه الواقع وتعيق نمو الفرد الحقيقي.
                    </p>

                    <h4 class="text-xl font-bold text-white mb-2">3. مسارات الاستشفاء والتكامل الشخصي</h4>
                    <p class="text-slate-300 leading-relaxed">
                        على الرغم من أن هذه الأنماط متجذرة بعمق في بنية الشخصية، إلا أن تعديلها وشفاءها ممكنان بدرجة كبيرة بفضل مرونة الدماغ البشري. تقدم العلاجات النفسية المعاصرة أدوات قوية للتحول:
                    </p>
                    <ul class="list-disc list-inside space-y-2 my-4 text-slate-300">
                        <li><strong>العلاج السلوكي المعرفي (CBT):</strong> يساعد في كشف وإعادة بناء المعتقدات الأساسية العميقة والأفكار التلقائية المشوهة.</li>
                        <li><strong>العلاج السلوكي الجدلي (DBT):</strong> المعيار الذهبي لعلاج الشخصية الحدية، ويركز على مهارات تنظيم المشاعر، وتحمل الضغوط، واليقظة الذهنية.</li>
                        <li><strong>العلاج الديناميكي النفسي:</strong> يستهدف كشف الصراعات اللاواعية وحل عقد الماضي لتحقيق التكامل والنمو النفسي العميق.</li>
                    </ul>
                    <p class="text-slate-300 leading-relaxed">
                        إن تطوير الوعي بالذات هو الخطوة الحاسمة للشفاء. عندما تتعلم رصد استجاباتك النفسية التلقائية في لحظات الضغط، يمكنك استبدالها بوعي واختيار استجابات صحية واعية تحول معاناتك العميقة إلى مرونة وقوة عاطفية ملهمة.
                    </p>
                </div>
            `
        }
    },

    // =========================================================================
    // 4. EMOTIONAL INTELLIGENCE (eq)
    // =========================================================================
    {
        id: "EQ-Grokipedia",
        category: "eq",
        title: { 
            en: "Emotional Intelligence (EQ) - Self-Mastery & Social Adaptation", 
            ar: "الذكاء العاطفي (EQ) - سيكولوجية فهم الذات وإتقان العلاقات" 
        },
        summary: { 
            en: "An intellectual analysis of Daniel Goleman's emotional intelligence framework, neurological dynamics, and adaptation techniques.", 
            ar: "تحليل فكري وعلمي لمفهوم الذكاء العاطفي لدانيال غولمان، مع استكشاف البيولوجيا العصبية للعواطف وأدوات التدريب اليومية للتحكم بالذات." 
        },
        content: {
            en: `
                <div class="space-y-6">
                    <p class="text-lg leading-relaxed text-slate-300">
                        For decades, the Cognitive Intelligence Quotient (IQ) was viewed as the ultimate predictor of success and life stability. However, modern research reveals that intellectual horsepower represents only a fraction of human capability. Emotional Intelligence (EQ)—the capacity to identify, regulate, and direct emotions effectively—is the primary driver of relationship success, mental health, and leadership impact.
                    </p>

                    <div class="border-l-4 border-yellow-500 bg-slate-800/40 p-4 rounded-r-xl my-6">
                        <h4 class="text-yellow-400 font-bold mb-1">Neurological Axiom</h4>
                        <p class="italic text-slate-300">"If your emotional abilities aren't in hand, if you don't have self-awareness, if you aren't able to manage your distressing emotions... then no matter how smart you are, you aren't going to get very far." — Dr. Daniel Goleman</p>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">1. The Five Essential Pillars of EQ</h4>
                    <p class="text-slate-300 leading-relaxed">
                        Popularized by psychologist Daniel Goleman, Emotional Intelligence is divided into five core pillars, balancing internal self-regulation and external social adaptation:
                    </p>
                    <ul class="list-disc list-inside space-y-3 my-4 text-slate-300">
                        <li><strong>Self-Awareness:</strong> The cornerstone of EQ. It is the ability to recognize your emotions in real-time and understand how they affect your thoughts and behavior. Highly self-aware individuals understand their personal strengths, limits, and values.</li>
                        <li><strong>Self-Regulation:</strong> The step after awareness. It involves controlling impulsive desires, managing intense emotional outbursts, and adapting to changing environments. Rather than suppressing feelings, it means choosing *how* and *when* to express them.</li>
                        <li><strong>Internal Motivation:</strong> A deep, inner drive to pursue goals for reasons that transcend external rewards (such as money, status, or praise). This is marked by an eagerness to improve, high resilience under failure, and optimism.</li>
                        <li><strong>Empathy:</strong> The cognitive and emotional capacity to read other people’s nonverbal signals, understand their perspectives, and share their feelings. Empathy is the ultimate bridge for building profound human connections.</li>
                        <li><strong>Social Skills:</strong> The practical application of the other pillars. It includes building rapport, managing conflicts constructively, communicating complex ideas clearly, and inspiring cooperation.</li>
                    </ul>

                    <h4 class="text-xl font-bold text-white mb-2">2. The Neurobiology of Emotion: The Amygdala Hijack</h4>
                    <p class="text-slate-300 leading-relaxed">
                        Emotional Intelligence is grounded in biology. In our brains, the **amygdala** (the ancient emotional center) processes sensory inputs before they reach the **prefrontal cortex** (the rational, thinking center). Under threat or stress, the amygdala can trigger a rapid, irrational fight-or-flight response—a phenomenon known as an **amygdala hijack**. Developing EQ physically strengthens the neural connections between the prefrontal cortex and the amygdala, allowing rational thought to calm emotional reactions before they lead to impulsive behavior.
                    </p>

                    <h4 class="text-xl font-bold text-white mb-2">3. Steps for Developing EQ in Daily Life</h4>
                    <p class="text-slate-300 leading-relaxed">
                        Unlike IQ, which remains relatively stable across your lifespan, EQ can be consciously trained and improved at any age:
                    </p>
                    <ul class="list-decimal list-inside space-y-2 my-4 text-slate-300">
                        <li><strong>Embrace the "Pause":</strong> When triggered, wait 6 seconds before responding. This delay allows the thinking brain to regain control from the emotional brain.</li>
                        <li><strong>Practice Emotion Labeling:</strong> Replace vague phrases like "I feel bad" with precise terms like "I feel disappointed," "isolated," or "frustrated." High emotional clarity reduces distress.</li>
                        <li><strong>Cultivate Active Listening:</strong> Listen to understand, not to formulate a counterargument. Observe facial expressions and tone of voice, not just spoken words.</li>
                    </ul>
                    <p class="text-slate-300 leading-relaxed">
                        By integrating these habits, you cultivate an internal calm and a social intelligence that empowers you to navigate any challenge with wisdom, grace, and confidence.
                    </p>
                </div>
            `,
            ar: `
                <div class="space-y-6">
                    <p class="text-lg leading-relaxed text-slate-300">
                        لعقود طويلة، كان يُنظر إلى معامل الذكاء العقلي التقليدي (IQ) على أنه المقياس الأوحد لتوقع نجاح الإنسان واستقراره في الحياة. ومع ذلك، تكشف الأبحاث العلمية الحديثة أن القوة الفكرية المحضة تشكل جزءاً ضئيلاً من إمكانات النجاح. إن الذكاء العاطفي (EQ) - وهو القدرة على تحديد وفهم وإدارة وتوجيه المشاعر بشكل فعال - هو المحرك الأساسي للاستقرار النفسي، ونجاح العلاقات، والتأثير القيادي الحقيقي.
                    </p>

                    <div class="border-r-4 border-yellow-500 bg-slate-800/40 p-4 rounded-l-xl my-6">
                        <h4 class="text-yellow-400 font-bold mb-1">حتمية عصبية</h4>
                        <p class="italic text-slate-300">"إذا لم تكن مسيطراً على قدراتك العاطفية، وإذا لم يكن لديك وعي بذاتك، وإذا لم تكن قادراً على إدارة مشاعرك المؤلمة... فلن تذهب بعيداً مهما كنت ذكياً." — د. دانيال غولمان</p>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">1. الأعمدة الخمسة الأساسية للذكاء العاطفي</h4>
                    <p class="text-slate-300 leading-relaxed">
                        وفقاً للتأصيل العلمي الذي نشره دانيال غولمان، ينقسم الذكاء العاطفي إلى خمسة أعمدة أساسية توازن بين التنظيم الذاتي الداخلي والتكيف الاجتماعي الخارجي:
                    </p>
                    <ul class="list-disc list-inside space-y-3 my-4 text-slate-300">
                        <li><strong>الوعي بالذات (Self-Awareness):</strong> حجر الأساس للذكاء العاطفي. هو القدرة على رصد وتسمية مشاعرك فور حدوثها، وفهم كيفية تأثيرها على أفكارك وسلوكك. يتضمن ذلك معرفة مواطن قوتك، حدودك، ودوافعك القيمية.</li>
                        <li><strong>تنظيم الذات (Self-Regulation):</strong> هو الخطوة التالية للوعي. يتضمن التحكم في الاندفاعات العاطفية، وإدارة مشاعر الغضب والتوتر، والتكيف بمرونة مع المتغيرات. لا يعني ذلك كبت المشاعر، بل اختيار الطريقة والتوقيت المناسبين للتعبير عنها.</li>
                        <li><strong>التحفيز الداخلي (Motivation):</strong> الشغف الداخلي العميق لتحقيق الأهداف وإتمام المهام لدوافع تتجاوز المكافآت المادية (كالمال أو الشهرة أو الثناء). يظهر في الرغبة المستمرة في التعلم، والتفاؤل عند الفشل، والمثابرة.</li>
                        <li><strong>التعاطف (Empathy):</strong> القدرة على قراءة وتفهم مشاعر الآخرين، ورؤية المواقف من منظورهم، والاستجابة للإشارات الاجتماعية غير اللفظية. التعاطف هو الجسر الحقيقي لبناء علاقات إنسانية عميقة وذات مغزى.</li>
                        <li><strong>المهارات الاجتماعية (Social Skills):</strong> التطبيق العملي للأعمدة السابقة في التعامل مع الآخرين. ويشمل إدارة النزاعات وبناء التوافق، والتواصل بوضوح وإلهام الآخرين للتعاون المشترك.</li>
                    </ul>

                    <h4 class="text-xl font-bold text-white mb-2">2. البيولوجيا العصبية للعاطفة: اختطاف اللوزة الدماغية</h4>
                    <p class="text-slate-300 leading-relaxed">
                        الذكاء العاطفي له أسس بيولوجية متينة. ففي أدمغتنا، تقوم **اللوزة الدماغية** (Amygdala - المسؤولة عن معالجة المشاعر البدائية) باستقبال وتفسير المدخلات الحسية قبل أن تصل إلى **القشرة أمام الجبهية** (Prefrontal Cortex - المسؤولة عن التفكير والمنطق). في لحظات الخطر أو الضغط الشديد، يمكن للوزة أن تختطف التفكير وتطلق استجابة سريعة وغير عقلانية (الكر أو الفر)—وهو ما يُعرف بـ **اختطاف اللوزة الدماغية** (Amygdala Hijack). يساعد تطوير الذكاء العاطفي على بناء وتقوية الممرات العصبية بين القشرة أمام الجبهية واللوزة، مما يمنح العقل المفكر القدرة على تهدئة العقل الانفعالي واختيار استجابة واعية وحكيمة.
                    </p>

                    <h4 class="text-xl font-bold text-white mb-2">3. خطوات عملية لتنمية ذكائك العاطفي يومياً</h4>
                    <p class="text-slate-300 leading-relaxed">
                        على عكس الذكاء العقلي الذي يظل مستقراً نسبياً طوال الحياة، فإن الذكاء العاطفي مهارة مرنة يمكن التدرب عليها وتطويرها في أي عمر:
                    </p>
                    <ul class="list-decimal list-inside space-y-2 my-4 text-slate-300">
                        <li><strong>تدرب على "التوقف المؤقت":</strong> عندما تواجه موقفاً يثير غضبك، توقف لمدة 6 ثوانٍ قبل أن تستجيب. هذا التوقف كفيل بنقل إشارات المعالجة من اللوزة الانفعالية إلى القشرة العقلانية.</li>
                        <li><strong>وسع قاموسك العاطفي:</strong> استبدل التعبيرات العامة مثل "أنا أشعر بالسوء" بتسميات دقيقة مثل "أشعر بالإحباط"، "الخيبة"، أو "الوحدة". دقة تسمية المشاعر تقلل من حدتها وتسهل معالجتها.</li>
                        <li><strong>مارس الإنصات النشط:</strong> استمع للشريك بغرض الفهم الحقيقي وليس بغرض التحضير للرد أو الهجوم المضاد. انتبه للغة الجسد ونبرة الصوت كما تنتبه للكلمات.</li>
                    </ul>
                    <p class="text-slate-300 leading-relaxed">
                        من خلال دمج هذه الممارسات البسيطة في روتينك، ستبني سلاماً داخلياً صلباً وذكاءً اجتماعياً رفيعاً يمكنك من مواجهة أصعب تحديات الحياة بوعي وثقة ووقار.
                    </p>
                </div>
            `
        }
    },

    // =========================================================================
    // 5. BIG FIVE PERSONALITY TRAITS (big5)
    // =========================================================================
    {
        id: "BigFive-Grokipedia",
        category: "big5",
        title: { 
            en: "The Big Five Model - The Scientific Gold Standard of Personality", 
            ar: "نموذج السمات الخمس الكبرى - المعيار العلمي الذهبي لقياس الشخصية" 
        },
        summary: { 
            en: "A rigorous scientific breakdown of the OCEAN personality taxonomy, its empirical foundations, stability, and predictive power.", 
            ar: "تشريح علمي متكامل لنموذج السمات الخمس الكبرى للشخصية (OCEAN)، مبني على عقود من البحث التجريبي والفرضية المعجمية لقياس السلوك الإنساني." 
        },
        content: {
            en: `
                <div class="space-y-6">
                    <p class="text-lg leading-relaxed text-slate-300">
                        In the history of personality psychology, early models often relied heavily on subjective theories and clinical observations. Seeking a rigorous empirical framework, researchers developed the <strong>Big Five Personality Model</strong>. Backed by decades of statistical analysis across cultures, the Big Five—often recalled by the acronym **OCEAN**—stands today as the scientific standard for personality assessment.
                    </p>

                    <div class="border-l-4 border-blue-500 bg-slate-800/40 p-4 rounded-r-xl my-6">
                        <h4 class="text-blue-400 font-bold mb-1">Empirical Paradigm</h4>
                        <p class="italic text-slate-300">"The Lexical Hypothesis suggests that the most important individual differences in human transactions will eventually come to be encoded into single descriptive words in language." — Personality Psychology</p>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">1. The OCEAN Taxonomy Explained</h4>
                    <p class="text-slate-300 leading-relaxed">
                        Rather than labeling individuals as specific "types," the Big Five measures personality along five continuous, independent spectrums:
                    </p>
                    <ul class="list-disc list-inside space-y-3 my-4 text-slate-300">
                        <li><strong>Openness to Experience:</strong> This trait measures cognitive flexibility and curiosity. High scorers are imaginative, open to unconventional ideas, appreciative of art, and eager for change. Low scorers are practical, conventional, and prefer familiar routines.</li>
                        <li><strong>Conscientiousness:</strong> This trait reflects self-discipline, organization, and impulse control. High scorers are organized, reliable, goal-driven, and meticulous planners. Low scorers are spontaneous, unstructured, and can struggle with procrastination.</li>
                        <li><strong>Extraversion:</strong> This dimension measures sociability, assertiveness, and response to reward. High scorers are energetic, highly social, assertive, and thrive in stimulating environments. Low scorers (introverts) are quiet, reserved, and seek peaceful environments.</li>
                        <li><strong>Agreeableness:</strong> This trait reflects interpersonal harmony and empathy. High scorers are altruistic, cooperative, trusting, and ready to compromise. Low scorers are competitive, skeptical, direct, and place personal agenda over social agreement.</li>
                        <li><strong>Neuroticism (Emotional Instability):</strong> This measures stress sensitivity and negative emotional response. High scorers are prone to anxiety, mood swings, and vulnerability to stress. Low scorers are emotionally resilient, calm, and stable under pressure.</li>
                    </ul>

                    <h4 class="text-xl font-bold text-white mb-2">2. Stability and Biological Heredity</h4>
                    <p class="text-slate-300 leading-relaxed">
                        One of the reasons the Big Five is highly valued in the scientific community is its stability and predictive power. Twin studies and long-term research show that approximately 40% to 50% of the variance in these traits is genetically inherited. While personality traits are remarkably stable throughout adulthood, individuals often experience a natural maturation process: as we age, Agreeableness and Conscientiousness tend to increase, while Extraversion, Openness, and Neuroticism generally show subtle declines.
                    </p>

                    <h4 class="text-xl font-bold text-white mb-2">3. Practical and Professional Utility</h4>
                    <p class="text-slate-300 leading-relaxed">
                        The Big Five has profound real-world applications. In career placement, high Conscientiousness is the strongest predictor of job performance across all fields, while high Openness is crucial for creative roles, and high Extraversion benefits sales and leadership. In relationships, compatibility is strongly influenced by these traits; for instance, large gaps in Agreeableness or Neuroticism can lead to differences in conflict resolution styles.
                    </p>
                    <p class="text-slate-300 leading-relaxed">
                        Understanding your scientific score on the OCEAN spectrum allows you to customize your work environment, improve interpersonal communication, and consciously design strategies to balance your natural tendencies.
                    </p>
                </div>
            `,
            ar: `
                <div class="space-y-6">
                    <p class="text-lg leading-relaxed text-slate-300">
                        في تاريخ علم نفس الشخصية، اعتمدت النماذج الأولى بشكل كبير على الحدس الذاتي والملاحظات السريرية المحدودة. وبحثاً عن إطار تجريبي صارم مدعوم بالدليل العلمي، طوّر الباحثون **نموذج السمات الخمس الكبرى للشخصية**. وبفضل عقود من التحليل الإحصائي المتكرر عبر الثقافات المختلفة، يقف هذا النموذج - الذي يُرمز له اختصاراً بـ **OCEAN** - كمعيار ذهبي معتمد علمياً لقياس وتحليل السلوك الإنساني بدقة بالغة.
                    </p>

                    <div class="border-r-4 border-blue-500 bg-slate-800/40 p-4 rounded-l-xl my-6">
                        <h4 class="text-blue-400 font-bold mb-1">الفرضية المعجمية</h4>
                        <p class="italic text-slate-300">"تفترض الفرضية المعجمية أن الاختلافات الفردية الأكثر أهمية بين البشر ستتحول بمرور الوقت إلى كلمات واصفة مدمجة في لغاتهم اليومية." — علم نفس الشخصية التجريبي</p>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">1. تشريح أبعاد نموذج OCEAN الخمسة</h4>
                    <p class="text-slate-300 leading-relaxed">
                        بدلاً من تصنيف الناس في فئات جامدة، يقيس هذا النموذج الشخصية عبر خمسة أبعاد مستقلة ومستمرة، حيث يقع كل شخص عند نقطة ما على هذا الطيف:
                    </p>
                    <ul class="list-disc list-inside space-y-3 my-4 text-slate-300">
                        <li><strong>الانفتاح على الخبرة (Openness):</strong> يقيس الفضول الفكري والمرونة المعرفية. أصحاب الدرجات العالية يمتلكون خيالاً واسعاً، ويتقبلون الأفكار غير المألوفة، ويعشقون التجديد والفنون. أما الدرجات المنخفضة فتفضل الواقعية الملموسة، والروتين المألوف والتقليدي.</li>
                        <li><strong>الضمير الحي واليقظة (Conscientiousness):</strong> يعكس مستوى الانضباط الذاتي، والقدرة على كبح الدوافع العشوائية والتنظيم. أصحاب الدرجات العالية يعتمدون على التخطيط، والالتزام بالوعود والواجبات. أما الدرجات المنخفضة فتميل إلى العفوية المفرطة وقد تعاني من الفوضى والتسويف.</li>
                        <li><strong>الانبساط والاجتماعية (Extraversion):</strong> يقيس مدى حيوية الشخص في البيئات الخارجية وبحثه عن الإثارة والمكافآت الاجتماعية. الدرجات العالية تتمتع بطاقة اجتماعية عالية وجرأة وحب للظهور؛ بينما تفضل الدرجات المنخفضة (الانطوائية) الهدوء والعزلة والبيئات ذات التحفيز المحدود.</li>
                        <li><strong>الوداعة والوفاق (Agreeableness):</strong> يقيس مدى الاهتمام بالانسجام الاجتماعي والتعاون مع الآخرين. الدرجات العالية تتميز بالإيثار والتعاطف والثقة وتقديم التنازلات؛ بينما تميل الدرجات المنخفضة إلى التنافسية، الشك في النوايا، والتركيز على المصلحة الشخصية فوق الإجماع الاجتماعي.</li>
                        <li><strong>العصابية والحساسية (Neuroticism):</strong> يقيس مدى الاستقرار العاطفي أو القابلية لتجربة المشاعر السلبية. الدرجات العالية تكون أكثر عرضة للقلق، التقلبات المزاجية، والحساسية الشديدة للضغوط؛ بينما تتميز الدرجات المنخفضة (الاستقرار النفسي) بالهدوء، الثبات الانفعالي، والصلابة تحت وطأة الضغوط اليومية.</li>
                    </ul>

                    <h4 class="text-xl font-bold text-white mb-2">2. الاستقرار الزمني والتأثير الجيني والوراثي</h4>
                    <p class="text-slate-300 leading-relaxed">
                        تأتي قيمة نموذج السمات الخمس الكبرى في الأوساط العلمية من استقراره الزمني العالي وقدرته التنبؤية الفائقة. تشير دراسات التوائم والبحوث الطولية إلى أن ما يقرب من 40% إلى 50% من هذه السمات يعود لأسباب جينية ووراثية مباشرة. ورغم هذا الثبات الملحوظ في مرحلة البلوغ، إلا أن الإنسان يمر بعملية "نضج طبيعية" عبر العمر؛ حيث يميل الضمير الحي والوداعة إلى الارتفاع مع التقدم في السن، بينما تنخفض العصابية والانبساط والانفتاح تدريجياً وبشكل طفيف.
                    </p>

                    <h4 class="text-xl font-bold text-white mb-2">3. التطبيقات المهنية والشخصية للنموذج</h4>
                    <p class="text-slate-300 leading-relaxed">
                        يمتلك نموذج OCEAN تطبيقات واقعية هائلة. في مجال العمل، تعد سمة الضمير الحي أقوى مؤشر علمي على الأداء الوظيفي والنجاح الأكاديمي في شتى المجالات، بينما يُعد الانفتاح على الخبرة ضرورياً للابتكار والتصميم، والانبساط ضرورياً للوظائف القيادية والمبيعات. في العلاقات الإنسانية، تؤثر الفجوات الكبيرة في سمات الوفاق أو العصابية على طريقة إدارة الصراعات وحل الخلافات بين الشركاء.
                    </p>
                    <p class="text-slate-300 leading-relaxed">
                        إن معرفة درجاتك العلمية الدقيقة على طيف OCEAN يتيح لك تصميم بيئتك المهنية والشخصية بما يتوافق مع طبيعتك الفطرية، ويمنحك القدرة على بناء استراتيجيات واعية لتجاوز نقاط ضعفك بوعي علمي ومنهجي.
                    </p>
                </div>
            `
        }
    },

    // =========================================================================
    // 6. DARK TRIAD (dark)
    // =========================================================================
    {
        id: "DarkTriad-Grokipedia",
        category: "dark",
        title: { 
            en: "The Dark Triad - Machiavellianism, Narcissism, and Psychopathy", 
            ar: "الثالوث المظلم - تشريح الجوانب المظلمة في النفس البشرية" 
        },
        summary: { 
            en: "An intellectual dismantling of subclinical dark personality traits, their evolutionary origins, and defense strategies.", 
            ar: "تحليل سيكولوجي معمق لسمات النرجسية والماكيافيلية والسيكوباتية، مع كشف جذورها التطورية وطرق تحصين الذات من التلاعب." 
        },
        content: {
            en: `
                <div class="space-y-6">
                    <p class="text-lg leading-relaxed text-slate-300">
                        While psychology devotes considerable effort to understanding healthy functioning and emotional empathy, there exists a darker aspect of human nature. The **Dark Triad** is a prominent clinical framework that conceptualizes three overlapping, subclinical personality traits: **Narcissism**, **Machiavellianism**, and **Psychopathy**. These traits are bound together by a shared core of emotional coldness, self-serving manipulation, and a lack of empathy.
                    </p>

                    <div class="border-l-4 border-red-700 bg-slate-800/40 p-4 rounded-r-xl my-6">
                        <h4 class="text-red-500 font-bold mb-1">Behavioral Axiom</h4>
                        <p class="italic text-slate-300">"Dark personalities exploit the cooperation of others for personal benefit. Survival in complex social networks requires the ability to identify and neutralize these patterns." — Evolutionary Psychology</p>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">1. The Three Dark Pillars</h4>
                    <p class="text-slate-300 leading-relaxed">
                        Although these traits share common features, they are distinct psychological constructs with unique behavioral patterns:
                    </p>
                    <ul class="list-disc list-inside space-y-3 my-4 text-slate-300">
                        <li><strong>Narcissism (Egoism and Grandiosity):</strong> Characterized by extreme vanity, feelings of superiority, entitlement, and a constant need for external admiration. The narcissist's manipulation is often driven by a desperate need to protect a fragile ego and project power.</li>
                        <li><strong>Machiavellianism (Strategic Manipulation):</strong> Named after political theorist Niccolò Machiavelli, this trait is characterized by cold calculation, strategic cynicism, and a pragmatic view of others as tools for personal goals. Machiavellians are highly patient, skilled manipulators who play the long game.</li>
                        <li><strong>Psychopathy (Impulsive Callousness):</strong> Defined by a profound lack of empathy, a complete absence of remorse or guilt, high impulsivity, and thrill-seeking behavior. Subclinical psychopaths are emotionally cold, fearless, and display a reckless disregard for social norms and safety.</li>
                    </ul>

                    <h4 class="text-xl font-bold text-white mb-2">2. The Shared Core: Callous Manipulation</h4>
                    <p class="text-slate-300 leading-relaxed">
                        What binds these three profiles together? Researchers refer to it as the "dark core" of personality—specifically, a high level of **callousness** and a willingness to exploit others for personal gain. While a Machiavellian manipulates for long-term power, a Narcissist manipulates to protect their vanity, and a Psychopath manipulates for immediate thrill or material gain. All three share a marked deficit in emotional empathy, viewing human relationships as transactional battlegrounds.
                    </p>

                    <h4 class="text-xl font-bold text-white mb-2">3. The Evolutionary Paradox: Why Do These Traits Persist?</h4>
                    <p class="text-slate-300 leading-relaxed">
                        From an evolutionary perspective, if these traits are socially destructive, why haven't they been eliminated through natural selection? Evolutionary psychologists suggest that the Dark Triad represents an alternative, short-term reproductive and survival strategy. In highly competitive or unstable environments, the lack of empathy, readiness to manipulate, and superficial charm can provide individual benefits (such as rapid career advancement or resource accumulation) at the expense of the group's long-term well-being.
                    </p>

                    <h4 class="text-xl font-bold text-white mb-2">4. Shielding Yourself: Defending Against Dark Personalities</h4>
                    <p class="text-slate-300 leading-relaxed">
                        Interacting with high-scoring Dark Triad individuals in personal or professional settings can lead to emotional and psychological exhaustion. Protect yourself with these strategies:
                    </p>
                    <ul class="list-decimal list-inside space-y-2 my-4 text-slate-300">
                        <li><strong>Establish Ironclad Boundaries:</strong> Define clear boundaries and consistently enforce them. Dark personalities constantly test limits to see how much they can exploit.</li>
                        <li><strong>Verify Actions, Ignore Words:</strong> Ignore superficial charm, excessive praise, or empty promises. Evaluate individuals strictly by their consistent, observable behaviors.</li>
                        <li><strong>The "Grey Rock" Technique:</strong> If you must interact with a toxic manipulator, make yourself as emotionally boring and unresponsive as a grey rock. By denying them emotional reactions, they lose interest and look elsewhere.</li>
                    </ul>
                </div>
            `,
            ar: `
                <div class="space-y-6">
                    <p class="text-lg leading-relaxed text-slate-300">
                        بينما يكرس علم النفس جهداً هائلاً لفهم الصحة النفسية، وبناء التعاطف، والارتقاء العاطفي؛ فإن هناك جانباً مظلماً لا يمكن تجاهله في الطبيعة البشرية. يمثل **الثالوث المظلم** (The Dark Triad) إطاراً نظرياً وسريرياً بارزاً يجمع ثلاث سمات شخصية سامة دون السريرية: **النرجسية**، **الماكيافيلية**، و**السيكوباتية**. تلتقي هذه السمات وتترابط في جوهر عاطفي بارد يتميز بالتلاعب الأناني المطلق، وتهميش مشاعر الآخرين، والبلادة الوجدانية.
                    </p>

                    <div class="border-r-4 border-red-700 bg-slate-800/40 p-4 rounded-l-xl my-6">
                        <h4 class="text-red-500 font-bold mb-1">حتمية سلوكية</h4>
                        <p class="italic text-slate-300">"تستغل الشخصيات المظلمة رغبة الآخرين في التعاون لتحقيق مكاسب شخصية سريعة. ويتطلب البقاء في الشبكات الاجتماعية المعقدة القدرة على رصد هذه الأنماط وتحييدها مبكراً." — علم النفس التطوري</p>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">1. الأعمدة الثلاثة للظلام النفسي</h4>
                    <p class="text-slate-300 leading-relaxed">
                        رغم اشتراك هذه السمات في السلوكيات الاستغلالية، إلا أن لكل منها بنية نفسية ودوافع سلوكية مستقلة:
                    </p>
                    <ul class="list-disc list-inside space-y-3 my-4 text-slate-300">
                        <li><strong>النرجسية (Narcissism):</strong> تتسم بالعظمة والأنانية المطلقة، والغرور المفرط، والشعور الدائم بالاستحقاق والحاجة الملحّة للمدح والتقدير الخارجي. التلاعب هنا هدفه حماية إيجو هش ومنع أي شعور بالنقص.</li>
                        <li><strong>الماكيافيلية (Machiavellianism):</strong> سُميت تيمناً بالفيلسوف السياسي نيكولو ماكيافيلي. تتميز بالتلاعب البارد، التخطيط الاستراتيجي طويل الأمد، والتشكيك في قيم الآخرين، ورؤية الناس كأدوات لتحقيق أهداف نفعية مادية أو سلطوية.</li>
                        <li><strong>السيكوباتية (Psychopathy):</strong> تظهر في شكل بلادة مشاعر تامة، غياب مطلق للندم والذنب، واندفاع متهور بحثاً عن الإثارة والمكاسب السريعة، مع خرق متكرر للقوانين وتجاهل تام لسلامة وحقوق الآخرين.</li>
                    </ul>

                    <h4 class="text-xl font-bold text-white mb-2">2. الجوهر المشترك: البلادة والتلاعب الأناني</h4>
                    <p class="text-slate-300 leading-relaxed">
                        ما الذي يربط هذه السمات ببعضها؟ يسمي الباحثون هذا الرابط بـ "الجوهر المظلم" للشخصية، والمتمثل تحديداً في **البلادة العاطفية** (Callousness) والاستعداد لتسخير الآخرين كوقود للمصلحة الذاتية. الماكيافيلي يتلاعب من أجل النفوذ طويل الأمد، والنرجسي يتلاعب لحماية غروره، والسيكوباتي يتلاعب للمتعة الآنية أو الكسب المادي. والثلاثة يشتركون في غياب تام للتعاطف الوجداني ورؤية العلاقات كساحة صراع وصفقات تبادلية.
                    </p>

                    <h4 class="text-xl font-bold text-white mb-2">3. اللغز التطوري: لماذا تستمر هذه السمات في الوجود البشري؟</h4>
                    <p class="text-slate-300 leading-relaxed">
                        من منظور علم النفس التطوري، إذا كانت هذه السمات مدمرة ومرفوضة اجتماعياً، فلماذا لم يمحها التطور والانتخاب الطبيعي؟ تفترض النظريات التطورية أن الثالوث المظلم يمثل استراتيجية بقاء وتكاثر قصيرة المدى وناجحة في بيئات معينة تتميز بالفوضى أو التنافسية الشديدة. إن غياب التعاطف والجرأة العالية والجاذبية السطحية قد تمنح هؤلاء الأفراد مكاسب فردية سريعة (كالترقي الوظيفي السريع وحصد الموارد) على حساب مصلحة المجموعة على المدى البعيد.
                    </p>

                    <h4 class="text-xl font-bold text-white mb-2">4. تحصين الذات: كيف تنجو من فخاخ الشخصيات السامة؟</h4>
                    <p class="text-slate-300 leading-relaxed">
                        إن التعامل المستمر مع أشخاص ذوي سمات مظلمة مرتفعة في العمل أو العلاقات الشخصية يسبب استنزافاً نفسياً وذهنياً مدمراً. يمكنك تحصين نفسك بالخطوات التالية:
                    </p>
                    <ul class="list-decimal list-inside space-y-2 my-4 text-slate-300">
                        <li><strong>ضع حدوداً فولاذية:</strong> حدد بوضوح ما تسمح به وما لا تسمح به واثبت عليه. تختبر الشخصيات المظلمة الحدود باستمرار لمعرفة مدى إمكانية استغلالك.</li>
                        <li><strong>راقب الأفعال وتجاهل الكلمات:</strong> لا تلتفت للمدح المبالغ فيه أو السحر السطحي أو الوعود البراقة. قيم الأشخاص بناءً على سلوكياتهم المتكررة والواقعية فقط.</li>
                        <li><strong>استراتيجية الحجر الرمادي (Grey Rock):</strong> إذا كان التواصل مع شخص متلاعب حتمياً، اجعل ردود أفعالك مملة تماماً وغير مثيرة للاهتمام مثل "حجر رمادي". عندما لا يحصل المتلاعب على أي استجابة عاطفية أو طاقة منك، سيفقد اهتمامه بك ويبحث عن ضحية أخرى.</li>
                    </ul>
                </div>
            `
        }
    },
    // =========================================================================
    // 7. BORDERLINE PERSONALITY DISORDER (clinical)
    // =========================================================================
    {
        id: "BPD-Liberary",
        category: "clinical",
        title: { 
            en: "Borderline Personality Disorder (BPD) - Emotional Dysregulation & Relational Storms", 
            ar: "اضطراب الشخصية الحدية (BPD) - عواصف المشاعر وفقدان الاستقرار" 
        },
        summary: { 
            en: "A comprehensive psychological deep-dive into BPD, exploring emotional dysregulation, splitting mechanisms, DBT therapy, and attachment trauma.", 
            ar: "تحليل سريري ونفسي شامل لاضطراب الشخصية الحدية، يستكشف تقلبات المشاعر، وآليات الدفاع مثل الانشطار المعرفي، والخطط العلاجية المتكاملة." 
        },
        content: {
            en: `
                <div class="space-y-6">
                    <p class="text-lg leading-relaxed text-slate-300">
                        Borderline Personality Disorder (BPD) is one of the most widely discussed and historically misunderstood clinical profiles in mental health. Characterized by a pervasive pattern of instability in affect, self-image, and interpersonal relationships, BPD is marked by intense emotional sensitivity. Far from being a behavioral choice, individuals with BPD experience emotional fluctuations with a neurological intensity that can make everyday stressors feel overwhelming.
                    </p>

                    <div class="border-l-4 border-indigo-500 bg-slate-800/40 p-4 rounded-r-xl my-6">
                        <h4 class="text-indigo-400 font-bold mb-1">Emotional Vulnerability</h4>
                        <p class="italic text-slate-300">"People with BPD are like people with third-degree burns over 90% of their bodies. Lacking emotional skin, they feel agony at the slightest touch." — Dr. Marsha Linehan</p>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">1. The Nine Diagnostic Criteria of BPD</h4>
                    <p class="text-slate-300 leading-relaxed">
                        To receive a formal diagnosis under the DSM-5, an individual must demonstrate at least five of the following nine core criteria:
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">1. Fear of Abandonment</strong>
                            <p class="text-xs text-slate-400">Frantic efforts to avoid real or imagined abandonment by loved ones.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">2. Unstable Relationships</strong>
                            <p class="text-xs text-slate-400">A pattern of intense, volatile relationships characterized by shifting between extreme idealization and devaluation (splitting).</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">3. Identity Disturbance</strong>
                            <p class="text-xs text-slate-400">A persistently unstable self-image or sense of self; feeling like a chameleon to fit in.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">4. Impulsive Behaviors</strong>
                            <p class="text-xs text-slate-400">Self-damaging impulsivity in at least two areas (e.g., reckless driving, spending, substance abuse).</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700 col-span-1 md:col-span-2">
                            <strong class="text-indigo-300 block mb-1">5. Recurrent Self-Harm or Suicidal Behavior</strong>
                            <p class="text-xs text-slate-400">Suicidal threats, gestures, or self-harming acts, often triggered by fears of rejection or separation.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">6. Affective Instability</strong>
                            <p class="text-xs text-slate-400">Intense mood swings lasting a few hours to a few days, characterized by dysphoria, irritability, or anxiety.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">7. Chronic Emptiness</strong>
                            <p class="text-xs text-slate-400">A persistent internal feeling of boredom, numbness, or a void that cannot be filled.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">8. Intense, Uncontrolled Anger</strong>
                            <p class="text-xs text-slate-400">Difficulty controlling temper, leading to frequent outbursts or sarcasm.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">9. Dissociation & Paranoid Ideation</strong>
                            <p class="text-xs text-slate-400">Stress-related paranoid thoughts or severe feelings of detachment from one's body (depersonalization).</p>
                        </div>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">2. The Defense of Splitting (Black-and-White Thinking)</h4>
                    <p class="text-slate-300 leading-relaxed">
                        At the core of BPD interpersonal challenges is the defense mechanism known as **splitting**. Because of profound emotional distress, the brain struggles to integrate conflicting concepts (e.g., that a person can be loving yet occasionally make mistakes). As a result, BPD individuals split their perception of others: a loved one is either "all good" (perfect, idealized) or "all bad" (malicious, devalued). This rapid shifts can cause immense confusion and instability in friendships and romantic partnerships.
                    </p>

                    <h4 class="text-xl font-bold text-white mb-2">3. Neurobiology and Etiology</h4>
                    <p class="text-slate-300 leading-relaxed">
                        Modern neuroscience indicates that BPD is a biosocial condition. Neurologically, individuals with BPD show a hyper-reactive **amygdala** (which processes fear and emotional triggers) paired with a hypo-reactive **prefrontal cortex** (which regulates impulses and logical control). This creates an immediate emotional reaction that is highly difficult to suppress. This biological vulnerability is frequently triggered by early developmental factors, such as childhood trauma, emotional neglect, or unstable attachment structures.
                    </p>

                    <h4 class="text-xl font-bold text-white mb-2">4. Pathways to Structural Healing: DBT</h4>
                    <p class="text-slate-300 leading-relaxed">
                        For decades, BPD was viewed as highly difficult to treat. However, **Dialectical Behavior Therapy (DBT)**, developed by Dr. Marsha Linehan, revolutionized treatment. DBT focuses on teaching four essential modules:
                    </p>
                    <ul class="list-disc list-inside space-y-2 my-4 text-slate-300">
                        <li><strong>Mindfulness:</strong> Learning to observe emotions without immediate judgment or action.</li>
                        <li><strong>Distress Tolerance:</strong> Surviving emotional crises without engaging in self-damaging impulsive behaviors.</li>
                        <li><strong>Emotion Regulation:</strong> Understanding, labeling, and transforming painful emotional states.</li>
                        <li><strong>Interpersonal Effectiveness:</strong> Communicating needs, setting healthy boundaries, and handling relationship conflict constructively.</li>
                    </ul>
                    <p class="text-slate-300 leading-relaxed">
                        With structured therapy and support, individuals with BPD can cultivate profound emotional stability, transitioning from erratic reactivity to absolute self-mastery and secure relationships.
                    </p>
                </div>
            `,
            ar: `
                <div class="space-y-6">
                    <p class="text-lg leading-relaxed text-slate-300">
                        يعتبر اضطراب الشخصية الحدية (BPD) واحداً من أكثر الاضطرابات النفسية إثارة للجدل وسوء الفهم عبر التاريخ. يتسم هذا الاضطراب بنمط عام ومستمر من عدم الاستقرار في المشاعر، وصورة الذات، والعلاقات الشخصية، مع اندفاعية واضحة وحساسية مفرطة. إن التقلبات الحادة التي يمر بها المصاب ليست خياراً سلوكياً بل هي نتيجة لفرط حساسية عصبية وبيولوجية تجعل الضغوط اليومية البسيطة تبدو كأزمات وجودية خانقة.
                    </p>

                    <div class="border-r-4 border-indigo-500 bg-slate-800/40 p-4 rounded-l-xl my-6">
                        <h4 class="text-indigo-400 font-bold mb-1">الحساسية المفرطة</h4>
                        <p class="italic text-slate-300">"المصابون باضطراب الشخصية الحدية يشبهون مرضى الحروق من الدرجة الثالثة على 90% من أجسادهم. لافتراضهم الافتقار لـ 'جلد عاطفي'، فإنهم يشعرون بألم عارم مع أدنى لمسة نفسية." — د. مارشا لينهان</p>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">1. المعايير التشخيصية التسعة لاضطراب الشخصية الحدية</h4>
                    <p class="text-slate-300 leading-relaxed">
                        وفقاً للدليل التشخيصي والإحصائي للاضطرابات النفسية (DSM-5)، يتطلب تشخيص الشخصية الحدية إظهار الفرد لخمسة على الأقل من المعايير التسعة التالية:
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">1. الخوف الشديد من الهجر</strong>
                            <p class="text-xs text-slate-400">بذل جهود مستميتة لتجنب الهجر الحقيقي أو المتخيل من قِبل المقربين.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">2. العلاقات غير المستقرة</strong>
                            <p class="text-xs text-slate-400">نمط من العلاقات العاصفة يتأرجح بسرعة بين المثالية المطلقة (التقديس) والتبخيس (التقليل من الشأن).</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">3. اضطراب الهوية وصورة الذات</strong>
                            <p class="text-xs text-slate-400">عدم استقرار مزمن وعميق في فهم الشخص لذاته، وأهدافه، وقيمه الشخصية.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">4. الاندفاعية المؤذية للذات</strong>
                            <p class="text-xs text-slate-400">الاندفاع في مجالين على الأقل قد يسببان الأذى (مثل الإسراف، القيادة المتهورة، أو تعاطي المواد).</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700 col-span-1 md:col-span-2">
                            <strong class="text-indigo-300 block mb-1">5. سلوكيات إيذاء الذات المتكررة</strong>
                            <p class="text-xs text-slate-400">التهديد بالانتحار، الإيماءات الانتحارية، أو إيذاء الجسد المتعمد، وغالباً ما يُثار هذا بسبب الخوف من الفراق أو الرفض.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">6. عدم الاستقرار الوجداني</strong>
                            <p class="text-xs text-slate-400">تقلبات مزاجية شديدة ومفاجئة تستمر ساعات أو بضعة أيام (مثل نوبات الحزن أو القلق المفاجئ).</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">7. الشعور المزمن بالفراغ</strong>
                            <p class="text-xs text-slate-400">إحساس داخلي دائم ومؤلم بالملل أو وجود فجوة داخلية سوداء لا يمكن ملؤها.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">8. الغضب الشديد وغير المتكافئ</strong>
                            <p class="text-xs text-slate-400">صعوبة بالغة في التحكم بالانفعالات العصبية، مما يؤدي لنوبات غضب عارمة سريعة التوهج.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">9. أفكار ارتيابية أو تفكك مؤقت</strong>
                            <p class="text-xs text-slate-400">أفكار شكوكية مرتبطة بالضغوط، أو إحساس بالتغرب عن الذات والانفصال عن الواقع المادي.</p>
                        </div>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">2. آلية الانشطار المعرفي (التفكير بلونين: أبيض وأسود)</h4>
                    <p class="text-slate-300 leading-relaxed">
                        تعد آلية **الانشطار المعرفي** (Splitting) أحد أهم المظاهر السلوكية لاضطراب الشخصية الحدية. تحت وطأة التوتر العاطفي، يعجز عقل المصاب عن دمج المفاهيم المتناقضة في فكرة واحدة متوازنة (مثال: أن يكون الصديق محباً لكنه قد يخطئ أو ينشغل أحياناً). ونتيجة لذلك، يرى المريض الآخرين إما بصورة "بيضاء تماماً" (ملاك مثالي، مخلص) أو "سوداء تماماً" (عدو متلاعب، مهمل). هذا التأرجح السريع يسبب توتراً شديداً واستنزافاً للشركاء والأصدقاء على حد سواء.
                    </p>

                    <h4 class="text-xl font-bold text-white mb-2">3. الأسباب والديناميكيات العصبية للـ BPD</h4>
                    <p class="text-slate-300 leading-relaxed">
                        أثبتت أبحاث علم الأعصاب الحديثة أن الاضطراب ينشأ من تفاعل حيوي واجتماعي معقد. بيولوجياً، يظهر المصابون نشاطاً مفرطاً في **اللوزة الدماغية** (Amygdala - مركز الإنذار الانفعالي) مصحوباً بضعف في نشاط **قشرة الفص الجبهي** (Prefrontal Cortex - المسؤول عن كبح الاندفاعات والتفكير المنطقي). هذا الخلل يجعل إشارة العاطفة شديدة للغاية ويصعب كبحها منطقياً. تتفاعل هذه القابلية الجينية والعصبية مع بيئات نمائية صعبة في الطفولة، مثل الإهمال العاطفي، أو التعرض للصدمات، أو عدم التحقق والاعتراف بالمشاهد من قبل المربين.
                    </p>

                    <h4 class="text-xl font-bold text-white mb-2">4. بروتوكول العلاج المتكامل: العلاج الجدلي السلوكي (DBT)</h4>
                    <p class="text-slate-300 leading-relaxed">
                        على عكس الاعتقاد القديم بصعوبة علاج اضطراب الشخصية الحدية، أحدث **العلاج الجدلي السلوكي** (DBT) الذي طورته د. مارشا لينهان ثورة حقيقية في نسب الاستشفاء. يركز هذا البروتوكول على تدريب المريض في أربعة مجالات جوهرية:
                    </p>
                    <ul class="list-disc list-inside space-y-2 my-4 text-slate-300">
                        <li><strong>اليقظة الذهنية (Mindfulness):</strong> رصد الأفكار والمشاعر دون إطلاق أحكام مسبقة أو التفاعل التلقائي معها.</li>
                        <li><strong>تحمل الضيق النفسي (Distress Tolerance):</strong> مهارات التعامل مع الأزمات العاطفية الحادة دون اللجوء لسلوكيات إيذاء الذات.</li>
                        <li><strong>تنظيم العواطف (Emotion Regulation):</strong> فهم المشاعر المؤلمة وتسميتها بدقة والسعي لتعديلها تدريجياً.</li>
                        <li><strong>العلاقات الفعالة (Interpersonal Effectiveness):</strong> كيفية التعبير عن الاحتياجات، وضع حدود صحية، وحل النزاعات بوضوح.</li>
                    </ul>
                    <p class="text-slate-300 leading-relaxed">
                        من خلال الالتزام بالعملية العلاجية والدعم النفسي المنظم، يمكن لأصحاب الشخصية الحدية تحقيق سلام داخلي متين، وتحويل حساسيتهم المفرطة إلى أداة للتعاطف العميق والإبداع الإنساني الفريد.
                    </p>
                </div>
            `
        }
    },
    // =========================================================================
    // 8. BIPOLAR DISORDER (clinical)
    // =========================================================================
    {
        id: "Bipolar-Liberary",
        category: "clinical",
        title: { 
            en: "Bipolar Disorder - Navigating the Extremes of Mania and Depression", 
            ar: "الاضطراب ثنائي القطب - التنقل بين قمم الهوس وأعماق الاكتئاب" 
        },
        summary: { 
            en: "An in-depth psychiatric exploration of Bipolar I and II, mapping manic and depressive cycles, neurochemical dynamics, and modern stabilization strategies.", 
            ar: "دراسة طبية ونفسية مفصلة للاضطراب ثنائي القطب بنوعيه الأول والثاني، تستكشف دورات المزاج، الخصائص الكيميائية العصبية، والخطط العلاجية." 
        },
        content: {
            en: `
                <div class="space-y-6">
                    <p class="text-lg leading-relaxed text-slate-300">
                        Bipolar Disorder, historically known as manic-depression, is a complex psychiatric condition characterized by severe shifts in mood, energy, activity levels, and cognitive processing. Far exceeding the typical ups and downs that everyone experiences, the mood shifts of Bipolar Disorder oscillate between the high-energy state of **mania** (or hypomania) and the low-energy state of **clinical depression**. These cycles represent a profound neurological shift in how the brain processes reward, threats, and energy conservation.
                    </p>

                    <div class="border-l-4 border-indigo-500 bg-slate-800/40 p-4 rounded-r-xl my-6">
                        <h4 class="text-indigo-400 font-bold mb-1">The Mood Pendulum</h4>
                        <p class="italic text-slate-300">"Bipolar is a challenge, but it also gives a unique perspective on the depth and height of human experience, shifting from pure cosmic euphoria to absolute existential weight." — Clinical Psychopathology</p>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">1. The Two Poles: Mania and Depression</h4>
                    <p class="text-slate-300 leading-relaxed">
                        The clinical definition of Bipolar Disorder is built on two contrasting states, each presenting distinct somatic and cognitive features:
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                        <div class="p-5 rounded-xl bg-indigo-950/20 border border-indigo-500/30">
                            <strong class="text-indigo-400 text-lg block mb-2"><i class="fas fa-arrow-up"></i> The Manic Phase</strong>
                            <p class="text-sm text-slate-300 mb-3">Characterized by a sustained period of abnormally elevated, irritable, or energized mood.</p>
                            <ul class="list-disc list-inside text-xs text-slate-400 space-y-1">
                                <li>Decreased need for sleep (feeling rested after 2-3 hours).</li>
                                <li>Grandiosity or inflated self-esteem (believing one has special powers or connections).</li>
                                <li>Flight of ideas and rapid, pressured speech.</li>
                                <li>High risk-taking behaviors (impulsive investments, spending sprees).</li>
                            </ul>
                        </div>
                        <div class="p-5 rounded-xl bg-slate-800/40 border border-slate-700">
                            <strong class="text-slate-400 text-lg block mb-2"><i class="fas fa-arrow-down"></i> The Depressive Phase</strong>
                            <p class="text-sm text-slate-300 mb-3">Characterized by a persistent feeling of sadness, emptiness, and absolute loss of energy.</p>
                            <ul class="list-disc list-inside text-xs text-slate-400 space-y-1">
                                <li>Anhedonia: An absolute inability to experience pleasure in any activity.</li>
                                <li>Chronic fatigue, lethargy, or psychomotor retardation (feeling physically heavy).</li>
                                <li>Feelings of worthlessness, excessive guilt, or self-loathing.</li>
                                <li>Changes in sleep (insomnia or hypersomnia) and suicidal ideation.</li>
                            </ul>
                        </div>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">2. Clinical Classification and Subtypes</h4>
                    <p class="text-slate-300 leading-relaxed">
                        Psychiatrists classify Bipolar Disorder into three primary diagnostic categories based on the severity and duration of the episodes:
                    </p>
                    <ul class="list-decimal list-inside space-y-3 my-4 text-slate-300">
                        <li><strong>Bipolar I Disorder:</strong> Defined by at least one full manic episode that lasts at least seven days or is severe enough to require immediate hospitalization. Depressive episodes are common but not strictly required for diagnosis.</li>
                        <li><strong>Bipolar II Disorder:</strong> Characterized by a pattern of major depressive episodes shifting with **hypomanic** episodes. Hypomania is a milder form of mania that does not cause severe social impairment or psychosis.</li>
                        <li><strong>Cyclothymic Disorder (Cyclothymia):</strong> A milder, chronic form characterized by numerous periods of hypomanic and depressive symptoms lasting for at least two years, without meeting the full criteria for major episodes.</li>
                    </ul>

                    <h4 class="text-xl font-bold text-white mb-2">3. Neurobiology, Genetics, and Triggers</h4>
                    <p class="text-slate-300 leading-relaxed">
                        Bipolar Disorder is highly biological, possessing one of the highest rates of genetic heritability in psychiatry (approaching 80%). Neuroimaging shows functional abnormalities in the amygdala, prefrontal cortex, and hippocampus. The condition is primarily driven by fluctuations in monoamine neurotransmitters (dopamine, serotonin, and norepinephrine) and a deregulation of the body's **circadian rhythm** (internal clock). Under stress or sleep deprivation, the brain struggles to stabilize its internal balance, triggering a manic or depressive shift.
                    </p>

                    <h4 class="text-xl font-bold text-white mb-2">4. Medical and Integrative Treatment</h4>
                    <p class="text-slate-300 leading-relaxed">
                        Managing Bipolar Disorder successfully requires a long-term, integrative treatment plan that combines pharmaceutical stability with lifestyle adjustments:
                    </p>
                    <ul class="list-disc list-inside space-y-2 my-4 text-slate-300">
                        <li><strong>Mood Stabilizers:</strong> Medications such as Lithium and Valproate are the gold standard to prevent manic and depressive recurrence.</li>
                        <li><strong>Atypical Antipsychotics:</strong> Often prescribed to manage acute manic phases and stabilize baseline moods.</li>
                        <li><strong>Interpersonal and Social Rhythm Therapy (IPSRT):</strong> Focuses on stabilizing daily routines, particularly sleep-wake cycles, which directly stabilizes the biological clock.</li>
                        <li><strong>Psychoeducation:</strong> Empowering the patient and family to recognize early warning signs of mood shifts (e.g., subtle changes in sleep patterns or speed of speech).</li>
                    </ul>
                    <p class="text-slate-300 leading-relaxed">
                        With proper medical management, structured routines, and supportive networks, individuals with Bipolar Disorder can lead exceptionally fulfilling, creative, and highly stable lives.
                    </p>
                </div>
            `,
            ar: `
                <div class="space-y-6">
                    <p class="text-lg leading-relaxed text-slate-300">
                        يعتبر الاضطراب ثنائي القطب (Bipolar Disorder)، والذي كان يُطلق عليه سابقاً اسم "الجنون الاكتئابي"، اضطراباً نفسياً وسريرياً معقداً يتعدى بكثير التقلبات المزاجية العادية. يتأرجح المصابون بهذا الاضطراب بين قطبين متطرفين من الطاقة والمشاعر: قطب **الهوس** (Mania) أو الهوس الخفيف (Hypomania) الذي يتميز بطاقة متفجرة ونشاط مفرط، وقطب **الاكتئاب السريري الحاد** (Depression) الذي يسلب الفرد طاقته وإرادته بالكامل. تمثل هذه التغيرات اختلالاً بيولوجياً عصبياً عميقاً في طريقة إدارة الدماغ للطاقة، والمكافآت، والتفاعل مع البيئة.
                    </p>

                    <div class="border-r-4 border-indigo-500 bg-slate-800/40 p-4 rounded-l-xl my-6">
                        <h4 class="text-indigo-400 font-bold mb-1">بندول المزاج</h4>
                        <p class="italic text-slate-300">"ثنائي القطب تحدٍ هائل، لكنه يمنح أيضاً منظوراً فريداً لعمق وارتفاع التجربة الإنسانية، متأرجحاً بين نشوة كونية غامرة وثقل وجودي مطلق." — الطب النفسي السريري</p>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">1. القطبين المتناقضين: الهوس والاكتئاب</h4>
                    <p class="text-slate-300 leading-relaxed">
                        ينقسم التوصيف الطبي للاضطراب ثنائي القطب إلى حالتين مزاجيتين متنافرتين في الأعراض الجسدية والمعرفية:
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                        <div class="p-5 rounded-xl bg-indigo-950/20 border border-indigo-500/30">
                            <strong class="text-indigo-400 text-lg block mb-2"><i class="fas fa-arrow-up"></i> مرحلة الهوس (Mania)</strong>
                            <p class="text-sm text-slate-300 mb-3">تتميز بفترة ممتدة من المزاج المرتفع بشكل غير طبيعي، أو الانفعال الشديد، وتدفق الطاقة.</p>
                            <ul class="list-disc list-inside text-xs text-slate-400 space-y-1">
                                <li>قلة الحاجة للنوم بشكل ملحوظ (الشعور بالنشاط بعد ساعتين أو ثلاث فقط).</li>
                                <li>تضخم تقدير الذات أو أفكار العظمة (الاعتقاد بامتلاك قدرات غير عادية).</li>
                                <li>تطاير الأفكار، وتدفق سريع وضغوط شديدة في الكلام.</li>
                                <li>الانخراط في سلوكيات متهورة (كالإسراف المالي الحاد، أو اتخاذ قرارات متهورة).</li>
                            </ul>
                        </div>
                        <div class="p-5 rounded-xl bg-slate-800/40 border border-slate-700">
                            <strong class="text-slate-400 text-lg block mb-2"><i class="fas fa-arrow-down"></i> مرحلة الاكتئاب (Depression)</strong>
                            <p class="text-sm text-slate-300 mb-3">تتميز بمزاج هابط ومستمر، حزن عميق، شعور بالفراغ، وغياب تام للحيوية والنشاط.</p>
                            <ul class="list-disc list-inside text-xs text-slate-400 space-y-1">
                                <li>فقدان القدرة التامة على الاستمتاع بالأنشطة المعتادة (Anhedonia).</li>
                                <li>خمول بدني حاد، وبطء حركي ونفسي (الشعور بثقل جسدي حقيقي).</li>
                                <li>أفكار بجلد الذات، وشعور مفرط بالذنب وعدم القيمة.</li>
                                <li>اضطرابات شديدة في النوم (أرق دائم أو رغبة مفرطة في النوم) وأفكار سوداوية.</li>
                            </ul>
                        </div>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">2. التصنيفات الطبية للاضطراب</h4>
                    <p class="text-slate-300 leading-relaxed">
                        يصنف الأطباء النفسيون الاضطراب ثنائي القطب إلى ثلاثة أنواع رئيسية وفقاً لحدة وطبيعة الدورات المزاجية:
                    </p>
                    <ul class="list-decimal list-inside space-y-3 my-4 text-slate-300">
                        <li><strong>ثنائي القطب من النوع الأول (Bipolar I):</strong> يتطلب تشخيصه حدوث نوبة هوس كاملة واحدة على الأقل تستمر 7 أيام أو تكون حادة بما يكفي لتطلب التنويم الفوري بالمستشفى. النوبات الاكتئابية شائعة جداً لكنها ليست شرطاً إلزامياً للتشخيص.</li>
                        <li><strong>ثنائي القطب من النوع الثاني (Bipolar II):</strong> يتأرجح المريض فيه بين نوبات اكتئاب حاد ونوبات **هوس خفيف** (Hypomania). الهوس الخفيف هو حالة نشاط مرتفع أقل حدة لا تسبب تدهوراً خطيراً في العمل أو هلاوس ذهانية.</li>
                        <li><strong>اضطراب دوروية المزاج (Cyclothymia):</strong> نمط مزمن ومستمر لعامين على الأقل يتأرجح فيه الشخص بين أعراض هوس خفيف وأعراض اكتئاب خفيف دون أن يصل أي منهما لحدة النوبة الكاملة.</li>
                    </ul>

                    <h4 class="text-xl font-bold text-white mb-2">3. الجذور البيولوجية العصبية والمثيرات</h4>
                    <p class="text-slate-300 leading-relaxed">
                        يعتبر الاضطراب ثنائي القطب من أكثر الاضطرابات النفسية تأصلاً في علم الأحياء، حيث تبلغ نسبة التوريث الجيني حوالي 80%. تظهر الفحوصات الطبية اختلالات وظيفية وهيكلية في الروابط بين اللوزة الدماغية وقشرة الفص الجبهي. يعود هذا للتقلب الحاد في النواقل العصبية (مثل الدوبامين، السيروتونين والنورادرينالين) مصحوباً باعتلال في **الإيقاع البيولوجي** أو الساعة الداخلية للجسم. تحت الضغط الشديد أو الحرمان من النوم، يعجز الدماغ عن استعادة توازنه الكيميائي، مما يطلق نوبة مزاجية حادة.
                    </p>

                    <h4 class="text-xl font-bold text-white mb-2">4. بروتوكول العلاج المتكامل للثبات المزاجي</h4>
                    <p class="text-slate-300 leading-relaxed">
                        يتطلب العلاج الناجح للاضطراب ثنائي القطب خطة طويلة الأمد تجمع بين الاستقرار الدوائي والتهيئة البيئية:
                    </p>
                    <ul class="list-disc list-inside space-y-2 my-4 text-slate-300">
                        <li><strong>مثبتات المزاج (Mood Stabilizers):</strong> تمثل الأدوية مثل الليثيوم وفالبروات الصوديوم حجر الأساس لمنع توهج نوبات الهوس والاكتئاب مستقبلاً.</li>
                        <li><strong>مضادات الذهان غير التقليدية:</strong> تُوصف للتحكم السريع في نوبات الهوس الحادة وتنظيم الاستجابة الكيميائية اليومية للمخ.</li>
                        <li><strong>العلاج النفسي بالإيقاع الاجتماعي (IPSRT):</strong> يركز على تنظيم الروتين اليومي بدقة (وخاصة مواعيد النوم واليقظة)، مما يساعد في ضبط الساعة البيولوجية العصبية.</li>
                        <li><strong>التثقيف النفسي (Psychoeducation):</strong> تدريب المريض وأسرته على رصد المؤشرات المبكرة للنوبات (مثل التغير الطفيف في ساعات النوم أو سرعة الكلام) لإجهاض النوبة قبل اكتمالها.</li>
                    </ul>
                    <p class="text-slate-300 leading-relaxed">
                        بالرعاية الطبية المنتظمة، والروتين المتوازن، والدعم الاجتماعي الواعي، يمكن للمصابين بالاضطراب ثنائي القطب أن يعيشوا حياة مستقرة، ملهمة، وحافلة بالإبداع والتميز الشخصي والمهني.
                    </p>
                </div>
            `
        }
    },
    // =========================================================================
    // 9. OBSESSIVE-COMPULSIVE DISORDER (ocd)
    // =========================================================================
    {
        id: "OCD-Liberary",
        category: "clinical",
        title: { 
            en: "Obsessive-Compulsive Disorder (OCD) - Intrusive Thoughts & Compulsive Rituals", 
            ar: "اضطراب الوسواس القهري (OCD) - فخ الأفكار الاقتحامية والطقوس القهرية" 
        },
        summary: { 
            en: "A scientific deconstruction of OCD, examining the obsession-compulsion cycle, neural circuitry of anxiety, and the golden standard ERP therapy.", 
            ar: "تشريح علمي دقيق لاضطراب الوسواس القهري، يدرس حلقة الشك والقلق، المسارات العصبية للدماغ، والبروتوكول العلاجي الذهبي بالتعريض ومنع الاستجابة." 
        },
        content: {
            en: `
                <div class="space-y-6">
                    <p class="text-lg leading-relaxed text-slate-300">
                        Obsessive-Compulsive Disorder (OCD) is a widely recognized yet frequently trivialized psychiatric condition. Often colloquially reduced to a quirky love for neatness, OCD is actually a chronic, disabling anxiety disorder. It is defined by a relentless cycle of **obsessions** (intrusive, distressing, involuntary thoughts, images, or urges) and **compulsions** (repetitive physical or mental acts performed in response to an obsession to neutralize distress).
                    </p>

                    <div class="border-l-4 border-indigo-500 bg-slate-800/40 p-4 rounded-r-xl my-6">
                        <h4 class="text-indigo-400 font-bold mb-1">The Cycle of Doubt</h4>
                        <p class="italic text-slate-300">"OCD is 'the doubting disease.' It targets what the individual values most, demanding 100% absolute certainty in a world where certainty is impossible." — Modern Neuropsychiatry</p>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">1. The Obsession-Compulsion Cycle</h4>
                    <p class="text-slate-300 leading-relaxed">
                        To understand OCD is to understand a self-reinforcing cognitive feedback loop. This loop consists of four distinct phases that trap the individual:
                    </p>
                    <ul class="list-decimal list-inside space-y-3 my-4 text-slate-300">
                        <li><strong>The Trigger & Obsession:</strong> An involuntary intrusive thought occurs (e.g., "The stove is still on, my house will burn down" or "My hands are contaminated with a deadly virus").</li>
                        <li><strong>Anxiety & Distress:</strong> The brain interprets this thought as an immediate, catastrophic threat, inducing high anxiety, fear, or physical dread.</li>
                        <li><strong>The Compulsion:</strong> To relieve this agony, the individual performs a ritualistic behavior (e.g., checking the stove 15 times, washing hands until they bleed, or repeating a mental phrase).</li>
                        <li><strong>Temporary Relief:</strong> The compulsion temporarily lowers the anxiety. However, this relief **reinforces** the brain's belief that the compulsion was necessary, ensuring the cycle repeats.</li>
                    </ul>

                    <h4 class="text-xl font-bold text-white mb-2">2. Major Clinical Subtypes of OCD</h4>
                    <p class="text-slate-300 leading-relaxed">
                        OCD manifests in a wide variety of themes, but most cases fall into one of several primary clinical subtypes:
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">Contamination & Cleaning</strong>
                            <p class="text-xs text-slate-400">Fear of germs, toxins, or moral contamination, leading to excessive washing or avoidance of "unclean" objects.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">Symmetry, Ordering, & Counting</strong>
                            <p class="text-xs text-slate-400">A preoccupation with alignment, precision, or repeating mental tallies until things feel "just right."</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">Harm & Taboo Thoughts</strong>
                            <p class="text-xs text-slate-400">Distressing, intrusive thoughts of harming loved ones or violating personal morals, causing intense guilt.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">Checking & Reassurance Seeking</strong>
                            <p class="text-xs text-slate-400">Repetitive inspection of locks, appliances, or seeking constant verbal reassurance to avoid catastrophic errors.</p>
                        </div>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">3. Neurobiology of the OCD Circuit</h4>
                    <p class="text-slate-300 leading-relaxed">
                        OCD is rooted in structural brain differences. Neuroscientists have identified a hyper-active neural pathway called the **CSTC loop** (Cortico-Striato-Thalamo-Cortical loop). In a healthy brain, the prefrontal cortex detects a potential error, registers anxiety, and once resolved, the **caudate nucleus** (acting as a gatekeeper) dampens the signal. In OCD brains, this gatekeeper fails, leaving the worry signal active. The brain becomes stuck in a neural "gear" of anxiety, unable to shift out without performing a compulsion.
                    </p>

                    <h4 class="text-xl font-bold text-white mb-2">4. Treatment: CBT, ERP, and Neurotransmitter Regulation</h4>
                    <p class="text-slate-300 leading-relaxed">
                        Fortunately, OCD is highly treatable through evidence-based psychological and medical interventions:
                    </p>
                    <ul class="list-disc list-inside space-y-2 my-4 text-slate-300">
                        <li><strong>Exposure and Response Prevention (ERP):</strong> The gold standard psychotherapy. Patients are gradually exposed to their triggers (e.g., touching a doorknob) and actively prevented from performing the compulsion (e.g., washing hands). Over time, the brain learns that the anxiety decreases naturally without the ritual (habituation).</li>
                        <li><strong>Cognitive Behavioral Therapy (CBT):</strong> Focuses on restructuring the cognitive distortion that having a thought is equivalent to having an action (thought-action fusion).</li>
                        <li><strong>Pharmacotherapy:</strong> High-dose Selective Serotonin Reuptake Inhibitors (SSRIs) help chemically stabilize the CSTC pathway, reducing the baseline intensity of intrusive thoughts.</li>
                    </ul>
                    <p class="text-slate-300 leading-relaxed">
                        By stepping out of the loop and learning to tolerate uncertainty, individuals with OCD can rewire their neural circuitry, breaking free from compulsions to reclaim absolute focus, calm, and cognitive freedom.
                    </p>
                </div>
            `,
            ar: `
                <div class="space-y-6">
                    <p class="text-lg leading-relaxed text-slate-300">
                        يعد اضطراب الوسواس القهري (OCD) واحداً من أكثر الاضطرابات النفسية شيوعاً وأشدها تعرضاً للاختزال والتسطيح. فعلى عكس الصورة النمطية التي تصوره كحب طريف للترتيب والنظافة، يمثل الوسواس القهري اضطراباً قلقياً مزمناً ومعيقاً للحياة اليومية. ينشأ الاضطراب من حلقة معذبة تتكون من **الوساوس** (وهي أفكار، أو صور، أو دوافع اقتحامية قسرية تثير ذعراً شديداً) و**القهريات** (وهي طقوس وتصرفات تكرارية بدنية أو عقلية يُجبر الشخص على أدائها لتهدئة القلق).
                    </p>

                    <div class="border-r-4 border-indigo-500 bg-slate-800/40 p-4 rounded-l-xl my-6">
                        <h4 class="text-indigo-400 font-bold mb-1">دائرة الشك اللانهائية</h4>
                        <p class="italic text-slate-300">"يُعرف الوسواس القهري بـ 'مرض الشك'. فهو يستهدف أغلى ما يملكه الشخص قسرياً، مطالباً بيقين بنسبة 100% في عالم يستحيل فيه اليقين المطلق." — علم الأعصاب السلوكي</p>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">1. تشريح حلقة الوسواس القهري</h4>
                    <p class="text-slate-300 leading-relaxed">
                        ينسج الوسواس القهري فخه من خلال آلية تغذية راجعة معرفية تعيد تعزيز نفسها تلقائياً، وتتكون من أربع مراحل متتالية:
                    </p>
                    <ul class="list-decimal list-inside space-y-3 my-4 text-slate-300">
                        <li><strong>المثير والفكرة الاقتحامية (Obsession):</strong> فكرة لا إرادية ومزعجة تقتحم الوعي (مثل: "قد تكون يدي ملوثة بمرض قاتل" أو "قد أتسبب بضرر لشخص أحبه").</li>
                        <li><strong>التوتر والقلق العارم (Distress):</strong> يترجم العقل هذه الفكرة كخطر كارثي داهم، مما يولد استجابة فزع وقلق حاد وجسدي.</li>
                        <li><strong>السلوك القهري (Compulsion):</strong> لإنهاء هذا العذاب النفسي، يقوم الشخص بأداء طقوس متكررة (مثل غسل الأيدي لعشرات المرات، أو التحقق المفرط، أو تكرار عبارات معينة عقلياً).</li>
                        <li><strong>الراحة المؤقتة (Temporary Relief):</strong> يمنح الطقس القهري راحة مؤقتة وهبوطاً للقلق. لكن هذا الهبوط يعلم العقل (بشكل خاطئ) أن الطقس كان ضرورياً للبقاء، مما يضمن تكرار الحلقة بقوة أكبر عند المثير التالي.</li>
                    </ul>

                    <h4 class="text-xl font-bold text-white mb-2">2. الأنماط السريرية الشائعة للوسواس القهري</h4>
                    <p class="text-slate-300 leading-relaxed">
                        يتجلى الوسواس القهري في صور وأفكار متعددة، لكن معظم الحالات تقع تحت أحد الأنماط السريرية الأساسية التالية:
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">الوساوس والقهريات المرتبطة بالتلوث</strong>
                            <p class="text-xs text-slate-400">خوف مرضي من الجراثيم، أو السموم، أو التلوث الأخلاقي، مسبباً غسيلاً وتطهيراً مستمراً وتجنباً للأماكن العامة.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">الوساوس المرتبطة بالتماثل، الترتيب، والعد</strong>
                            <p class="text-xs text-slate-400">انشغال حاد بتناسق الأشياء وترتيبها بدقة بالغة، أو تكرار أفعال بعدد محدد حتى يشعر الشخص بالارتياح التام.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">الوساوس الفكرية الاقتحامية والأذى</strong>
                            <p class="text-xs text-slate-400">أفكار مروعة باحتمالية التسبب بأذى دون قصد للمقربين أو ارتكاب أفعال تتعارض تماماً مع أخلاق الشخص وقيمه.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">وساوس التحقق والتأكد المستمر</strong>
                            <p class="text-xs text-slate-400">تفقد الأقفال، مواقد الغاز، والأجهزة الكهربائية لعشرات المرات، أو طلب طمأنينة لفظية دائمة لتفادي كوارث متخيلة.</p>
                        </div>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">3. علم الأعصاب: فرط نشاط الدائرة القشرية المخططية (CSTC)</h4>
                    <p class="text-slate-300 leading-relaxed">
                        الوسواس القهري هو اضطراب ذو أسس بيولوجية عصبية واضحة. يظهر المصابون فرط نشاط في مسار عصبي مغلق يُعرف باسم **الدائرة القشرية المخططية المهادية القشرية** (CSTC Loop). في الدماغ الطبيعي، عندما يرصد الفص الجبهي خطأ ما، يطلق إنذاراً بالقلق، وبمجرد حل المشكلة، تقوم **النواة المذنبة** (Caudate Nucleus) بإغلاق هذا الإنذار. أما في دماغ المصاب بالوسواس، فإن هذا الصمام لا يعمل بالشكل المطلوب، مما يجعل إشارة القلق مستمرة ومحتجزة في العقل كأنها "ترس عالق" لا يمكن تحريره إلا باللجوء للسلوك القهري.
                    </p>

                    <h4 class="text-xl font-bold text-white mb-2">4. بروتوكول العلاج الذهبي: التعريض ومنع الاستجابة (ERP)</h4>
                    <p class="text-slate-300 leading-relaxed">
                        يعد الوسواس القهري من الاضطرابات القابلة للعلاج والاستجابة بشكل ممتاز بفضل دمج العلاجات السلوكية والدوائية المعاصرة:
                    </p>
                    <ul class="list-disc list-inside space-y-2 my-4 text-slate-300">
                        <li><strong>العلاج بالتعريض ومنع الاستجابة (ERP):</strong> المعيار الذهبي المطلق. يتم تعريض المريض تدريجياً للمثير الذي يثير وساوسه (مثل لمس مقبض الباب) مع منعه تماماً من أداء السلوك القهري (مثل غسل اليدين). بمرور الوقت، يكتشف المخ تلقائياً أن القلق يهبط تدريجياً وحده دون حاجة للطقس (آلية التعود العصبي).</li>
                        <li><strong>العلاج السلوكي المعرفي (CBT):</strong> يستهدف تفكيك "الاندماج الفكري العملي" (Thought-Action Fusion)، وهي المغالطة المعرفية التي تجعل المريض يعتقد أن التفكير في السوء يعني حدوثه حتماً.</li>
                        <li><strong>العلاجات الدوائية:</strong> تعمل الجرعات الطبية المنظمة من مثبطات استرداد السيروتونين الانتقائية (SSRIs) على تهدئة النشاط المفرط لدائرة CSTC العصبية، مما يقلل من تكرار وحدة الأفكار الاقتحامية.</li>
                    </ul>
                    <p class="text-slate-300 leading-relaxed">
                        من خلال تدريب الدماغ على تحمل الشك وتقبل عدم اليقين، يمكن للمصابين بالوسواس القهري تحرير عقولهم وإعادة بناء مساراتهم العصبية، واستعادة السيطرة الكاملة على حياتهم وتركيزهم العقلي.
                    </p>
                </div>
            `
        }
    },
    // =========================================================================
    // 10. SCHIZOPHRENIA (clinical)
    // =========================================================================
    {
        id: "Schizophrenia-Liberary",
        category: "clinical",
        title: { 
            en: "Schizophrenia - Demystifying Psychosis, Delusions, & Cognitive Fragmentation", 
            ar: "مرض الفصام - فك غموض الذهان، الضلالات، وتشتت البنية الذهنية" 
        },
        summary: { 
            en: "A rigorous psychiatric breakdown of Schizophrenia, distinguishing positive and negative symptoms, dopamine pathways, and paths to psychosocial integration.", 
            ar: "تحليل طبي ونفسي رصين لمرض الفصام، يفرق بين الأعراض الإيجابية والسلبية، ويناقش فرضية الدوبامين، والعلاجات الدوائية والتأهيلية المتكاملة." 
        },
        content: {
            en: `
                <div class="space-y-6">
                    <p class="text-lg leading-relaxed text-slate-300">
                        Schizophrenia is a severe, chronic neurodevelopmental psychiatric disorder that affects how a person thinks, feels, and perceives reality. Often subject to severe social stigma and pop-culture distortions—such as being incorrectly equated with "split personality" or dissociative identity disorder—Schizophrenia is medically characterized by **psychosis** (a loss of contact with objective reality) and a profound fragmentation of cognitive and emotional processes.
                    </p>

                    <div class="border-l-4 border-indigo-500 bg-slate-800/40 p-4 rounded-r-xl my-6">
                        <h4 class="text-indigo-400 font-bold mb-1">Perceptual Fragmentation</h4>
                        <p class="italic text-slate-300">"Schizophrenia represents a disruption in the integration of sensory inputs, thoughts, and emotions. The boundaries between the self and the outer world become porous." — Modern Psychiatry</p>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">1. The Clinical Spectrum: Positive vs. Negative Symptoms</h4>
                    <p class="text-slate-300 leading-relaxed">
                        To diagnose Schizophrenia, clinicians divide symptoms into two primary, contrasting categories:
                    </p>
                    <div class="space-y-4 my-6">
                        <div class="p-4 rounded-xl bg-slate-800/40 border border-slate-700">
                            <strong class="text-indigo-300 block mb-1"><i class="fas fa-plus-circle"></i> Positive Symptoms (Excess or Distortion of Normal Function)</strong>
                            <p class="text-sm text-slate-300 mb-2">These represent active psychotic behaviors that are not seen in healthy individuals:</p>
                            <ul class="list-disc list-inside text-xs text-slate-400 space-y-1">
                                <li><strong>Hallucinations:</strong> Sensory perceptions without external stimuli. Auditory hallucinations (hearing voices) are the most common.</li>
                                <li><strong>Delusions:</strong> Fixed, false beliefs that are resistant to logic or contrary evidence (e.g., delusions of persecution or grandiose missions).</li>
                                <li><strong>Disorganized Speech:</strong> Loose associations, where sentences are fragmented, or words are jumbled (word salad), reflecting fragmented thinking.</li>
                                <li><strong>Catatonic Behavior:</strong> Abnormal motor behavior, ranging from childlike silliness to rigid, unresponsive immobility.</li>
                            </ul>
                        </div>
                        <div class="p-4 rounded-xl bg-slate-800/40 border border-slate-700">
                            <strong class="text-slate-400 block mb-1"><i class="fas fa-minus-circle"></i> Negative Symptoms (Deficit or Loss of Normal Function)</strong>
                            <p class="text-sm text-slate-300 mb-2">These symptoms reflect a withdrawal or absence of normal psychological responses:</p>
                            <ul class="list-disc list-inside text-xs text-slate-400 space-y-1">
                                <li><strong>Flat Affect:</strong> Diminished emotional expression; monotone voice and lack of facial expressions.</li>
                                <li><strong>Avolition:</strong> A severe lack of initiative, drive, or motivation to perform self-directed purposeful activities.</li>
                                <li><strong>Alogia:</strong> Poverty of speech; marked reduction in the quantity or fluency of spoken words.</li>
                                <li><strong>Anhedonia & Asociality:</strong> Absolute loss of interest in pleasure and total social withdrawal.</li>
                            </ul>
                        </div>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">2. The Dopamine Hypothesis and Structural Neurobiology</h4>
                    <p class="text-slate-300 leading-relaxed">
                        The neurological foundations of Schizophrenia are deeply tied to neurotransmitter imbalances. The **Dopamine Hypothesis** suggests that:
                    </p>
                    <ul class="list-disc list-inside space-y-2 my-4 text-slate-300">
                        <li>An excess of dopamine in the **mesolimbic pathway** of the brain triggers hyper-salience, leading directly to hallucinations and positive symptoms.</li>
                        <li>A deficit of dopamine in the **mesocortical pathway** (prefrontal cortex) is responsible for executive dysfunction, social withdrawal, and negative symptoms.</li>
                    </ul>
                    <p class="text-slate-300 leading-relaxed">
                        Furthermore, neuroimaging shows physical differences in Schizophrenia brains, including enlarged ventricles (fluid-filled cavities), reduced gray matter volume in the temporal and frontal lobes, and impaired connectivity across critical brain networks.
                    </p>

                    <h4 class="text-xl font-bold text-white mb-2">3. Etiology: The Diathesis-Stress Model</h4>
                    <p class="text-slate-300 leading-relaxed">
                        Schizophrenia is not caused by a single factor. The dominant clinical model is the **Diathesis-Stress Model**. It proposes that an individual inherits a genetic vulnerability (diathesis), which interacts with environmental stressors (such as prenatal infections, birth complications, cannabis use in adolescence, or severe early trauma) to trigger the onset of the disorder, typically in late adolescence or early adulthood.
                    </p>

                    <h4 class="text-xl font-bold text-white mb-2">4. Holistic Management and Pathways to Integration</h4>
                    <p class="text-slate-300 leading-relaxed">
                        Although Schizophrenia is a lifelong condition, modern psychiatric treatment enables stabilization and meaningful community integration:
                    </p>
                    <ul class="list-disc list-inside space-y-2 my-4 text-slate-300">
                        <li><strong>Antipsychotic Medication:</strong> The cornerstone of treatment. Second-generation atypical antipsychotics stabilize dopamine and serotonin receptors, effectively controlling positive symptoms.</li>
                        <li><strong>Cognitive Behavioral Therapy for Psychosis (CBTp):</strong> Teaches patients to evaluate, challenge, and cope with distressing delusional thoughts and voices.</li>
                        <li><strong>Social Skills & Vocational Training:</strong> Aids individuals in developing interpersonal skills, managing daily tasks, and gaining stable employment.</li>
                        <li><strong>Family Psychoeducation:</strong> Equips families with understanding and support systems, significantly reducing relapse rates.</li>
                    </ul>
                    <p class="text-slate-300 leading-relaxed">
                        By combining chemical stability, tailored psychological tools, and robust social support networks, individuals with Schizophrenia can reconstruct their lives, finding meaning, autonomy, and successful community integration.
                    </p>
                </div>
            `,
            ar: `
                <div class="space-y-6">
                    <p class="text-lg leading-relaxed text-slate-300">
                        يعتبر مرض الفصام (Schizophrenia) واحداً من أشد الاضطرابات النفسية والنمائية العصبية حركيةً وتأثيراً على حياة الإنسان. ورغم تعرض هذا المرض لوصمة مجتمعية شديدة وتشوهات إعلامية متكررة - مثل الخلط الخاطئ بينه وبين "انفصام الشخصية" أو تعدد الشخصيات - فإن الفصام يتميز طبياً بـ **الذهان** (وهو انفصال مؤقت عن الواقع الموضوعي) وتشتت وتفكك عميقين في العمليات الفكرية، والمعرفية، والوجدان للـ مريض.
                    </p>

                    <div class="border-r-4 border-indigo-500 bg-slate-800/40 p-4 rounded-l-xl my-6">
                        <h4 class="text-indigo-400 font-bold mb-1">تفتت الإدراك</h4>
                        <p class="italic text-slate-300">"يمثل الفصام خللاً حاداً في دمج المدخلات الحسية مع الأفكار والمشاعر. تصبح الحدود الفاصلة بين الذات والعالم الخارجي هشة ونفاذة." — الطب النفسي المعاصر</p>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">1. الطيف السريري: الأعراض الإيجابية مقابل الأعراض السلبية</h4>
                    <p class="text-slate-300 leading-relaxed">
                        لتشخيص الفصام بدقة، يقسم الأطباء النفسيون الأعراض إلى فئتين رئيسيتين تعكسان طبيعة الخلل المعرفي:
                    </p>
                    <div class="space-y-4 my-6">
                        <div class="p-4 rounded-xl bg-slate-800/40 border border-slate-700">
                            <strong class="text-indigo-300 block mb-1"><i class="fas fa-plus-circle"></i> الأعراض الإيجابية (إضافة أو تشوه في الوظائف الطبيعية)</strong>
                            <p class="text-sm text-slate-300 mb-2">سلوكيات ذهانية نشطة تضاف لطبيعة الفرد ولا تظهر لدى الشخص الطبيعي:</p>
                            <ul class="list-disc list-inside text-xs text-slate-400 space-y-1">
                                <li><strong>الهلاوس (Hallucinations):</strong> إدراك حسي كامل في غياب أي مثير مادي خارجي. الهلاوس السمعية (سماع أصوات) هي الأكثر شيوعاً.</li>
                                <li><strong>الضلالات (Delusions):</strong> معتقدات فكرية راسخة وخاطئة لا تتفق مع المنطق أو الدليل الواقعي (مثل ضلالات الاضطهاد أو العظمة المطلقة).</li>
                                <li><strong>الكلام المفكك:</strong> الحديث بشكل غير مترابط وتشتت الأفكار وسرعة القفز بين مواضيع غير مترابطة (سلطة الكلمات).</li>
                                <li><strong>السلوكيات العشوائية أو التخشبية (Catatonia):</strong> حركات غريبة وغير هادفة، أو جمود تام في وضعية جسدية واحدة لساعات ورفض الاستجابة للمحيط.</li>
                            </ul>
                        </div>
                        <div class="p-4 rounded-xl bg-slate-800/40 border border-slate-700">
                            <strong class="text-slate-400 block mb-1"><i class="fas fa-minus-circle"></i> الأعراض السلبية (نقص أو غياب في الوظائف الطبيعية)</strong>
                            <p class="text-sm text-slate-300 mb-2">تعكس انسحاباً وفقداناً للقدرات النفسية والاجتماعية والوجدانية الطبيعية للفرد:</p>
                            <ul class="list-disc list-inside text-xs text-slate-400 space-y-1">
                                <li><strong>تسطح المشاعر (Flat Affect):</strong> غياب تعبيرات الوجه، التحدث بنبرة صوت رتيبة وجافة تماماً.</li>
                                <li><strong>فقدان الإرادة والدافعية (Avolition):</strong> عجز تام وصعوبة بالغة في بدء أو إتمام المهام اليومية البسيطة وهادفة.</li>
                                <li><strong>فقر الكلام (Alogia):</strong> تراجع ملحوظ في عدد الكلمات ومحتوى الحديث اليومي للفرد.</li>
                                <li><strong>فقدان اللذة والانعزال (Anhedonia):</strong> غياب الشغف بالكامل وتجنب تام للتفاعل الاجتماعي والروابط البشرية.</li>
                            </ul>
                        </div>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">2. فرضية الدوبامين والتغيرات العصبية للمخ</h4>
                    <p class="text-slate-300 leading-relaxed">
                        ترتبط الجذور البيولوجية العصبية للفصام باختلال كيميائي واضح في مسارات الدماغ. تفترض **فرضية الدوبامين** ما يلي:
                    </p>
                    <ul class="list-disc list-inside space-y-2 my-4 text-slate-300">
                        <li>فرط نشاط الدوبامين في **المسار الهامشي (Mesolimbic Pathway)** يتسبب مباشرة في نشوء الهلاوس والضلالات والأعراض الإيجابية.</li>
                        <li>نقص الدوبامين في **المسار القشري (Mesocortical Pathway)** في الفص الجبهي يتسبب في قصور الوظائف التنفيذية والأعراض السلبية والانسحاب الاجتماعي.</li>
                    </ul>
                    <p class="text-slate-300 leading-relaxed">
                        وتظهر صور الرنين المغناطيسي تباينات هيكلية ملموسة في أدمغة المصابين بالفصام، مثل تضخم بطينات الدماغ (مما يعكس تراجعاً طفيفاً في المادة الرمادية)، وضمور نسبي في الفصين الجبهي والصدغي، واعتلال في تواصل الشبكات العصبية الكبرى.
                    </p>

                    <h4 class="text-xl font-bold text-white mb-2">3. الأسباب: نموذج القابلية والضغوط (Diathesis-Stress)</h4>
                    <p class="text-slate-300 leading-relaxed">
                        الفصام هو نتاج تلاقي عدة عوامل. يفترض النموذج المعتمد علمياً أن الشخص يرث استعداداً جينياً معيناً (Diathesis)، ويتفجر هذا الاستعداد تحت وطأة مثيرات وضغوط بيئية معينة (مثل التعرض لعدوى فيروسية في الرحم، نقص الأكسجين أثناء الولادة، تعاطي القنب الهندي (الحشيش) في فترة المراهقة، أو الصدمات النفسية الشديدة)، وعادة ما يتفجر الاضطراب في أواخر المراهقة أو بداية العشرينات.
                    </p>

                    <h4 class="text-xl font-bold text-white mb-2">4. بروتوكول العلاج المتكامل وإعادة الدمج</h4>
                    <p class="text-slate-300 leading-relaxed">
                        على الرغم من أن الفصام هو اضطراب مزمن، إلا أن الطب النفسي الحديث يمنح المصابين فرصة ذهبية للتحكم والعيش باستقرار واستقلالية:
                    </p>
                    <ul class="list-disc list-inside space-y-2 my-4 text-slate-300">
                        <li><strong>مضادات الذهان (Antipsychotics):</strong> الركن الأساسي للعلاج. تعمل الأدوية الحديثة على إعادة ضبط مستقبلات الدوبامين والسيروتونين للسيطرة الكاملة على الهلاوس والنشاط الذهاني.</li>
                        <li><strong>العلاج السلوكي المعرفي للذهان (CBTp):</strong> يساعد المريض على مناقشة وتقييم أفكاره الارتيابية والهلاوس بوعي ومنطقية وتقليل الخوف منها.</li>
                        <li><strong>التدريب على المهارات الاجتماعية والتأهيل المهني:</strong> يهدف لمساعدة المصابين على استعادة قدرتهم على التواصل اليومي والعمل المستقل.</li>
                        <li><strong>التثقيف النفسي الأسري:</strong> تمكين الأسرة من فهم طبيعة الاضطراب وتخفيف التوتر البيئي، مما يقلل نسب الانتكاسات بنسبة 50%.</li>
                    </ul>
                    <p class="text-slate-300 leading-relaxed">
                        بالجمع الذكي بين العلاج الدوائي الدقيق، والتأهيل السلوكي الداعم، والبيئة الأسرية الواعية، يستطيع المصابون بالفصام استعادة توازنهم الفكري، وبناء حياة مستقلة وحافلة بالإنجاز والدمج الاجتماعي الناجح.
                    </p>
                </div>
            `
        }
    },
    // =========================================================================
    // 11. ATTENTION DEFICIT HYPERACTIVITY DISORDER (adhd)
    // =========================================================================
    {
        id: "ADHD-Liberary",
        category: "clinical",
        title: { 
            en: "Attention Deficit Hyperactivity Disorder (ADHD) - Dopamine & Executive Dysfunction", 
            ar: "اضطراب فرط الحركة وتشتت الانتباه (ADHD) - سيكولوجية الدوبامين والتنظيم الذاتي" 
        },
        summary: { 
            en: "A modern neurobehavioral perspective on ADHD, analyzing executive dysfunction, dopamine deficiency, structural differences, and evidence-based interventions.", 
            ar: "منظور سلوكي وعصبي حديث حول اضطراب فرط الحركة وتشتت الانتباه، يحلل قصور وظائف المخ التنفيذية، نقص الدوبامين، والتدخلات السلوكية والدوائية الناجعة." 
        },
        content: {
            en: `
                <div class="space-y-6">
                    <p class="text-lg leading-relaxed text-slate-300">
                        Attention-Deficit/Hyperactivity Disorder (ADHD) is a highly prevalent neurodevelopmental condition that affects both children and adults. Frequently misunderstood as a simple lack of willpower, behavioral laziness, or a childhood phase, ADHD is in reality a complex biological difference in how the brain regulates attention, impulses, and motivation. It is fundamentally an impairment of the brain's **executive functions**—the management system of the mind.
                    </p>

                    <div class="border-l-4 border-indigo-500 bg-slate-800/40 p-4 rounded-r-xl my-6">
                        <h4 class="text-indigo-400 font-bold mb-1">The Hunter in a Farmer's World</h4>
                        <p class="italic text-slate-300">"ADHD is not an inability to focus. It is an inability to control *where* the focus goes, combined with a brain that is chronically under-stimulated by default." — Neurobehavioral Medicine</p>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">1. The Three Clinical Presentations of ADHD</h4>
                    <p class="text-slate-300 leading-relaxed">
                        Under the DSM-5, ADHD is diagnosed along a spectrum of symptoms and categorized into three distinct clinical presentations:
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">1. Predominantly Inattentive</strong>
                            <p class="text-xs text-slate-400">Marked by struggle with task completion, organizing, sustained focus, working memory deficits, and easily becoming distracted.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">2. Predominantly Hyperactive-Impulsive</strong>
                            <p class="text-xs text-slate-400">Marked by constant fidgeting, restlessness, talking excessively, difficulty waiting turn, and acting without thinking.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">3. Combined Presentation</strong>
                            <p class="text-xs text-slate-400">The most common type, where individuals display significant symptoms of both inattention and hyperactivity-impulsivity.</p>
                        </div>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">2. Neurochemistry: The Dopamine Deficiency Model</h4>
                    <p class="text-slate-300 leading-relaxed">
                        At the heart of ADHD is a chemical deficiency in the brain's reward and attention networks. Neurologically, individuals with ADHD have a shortage of two key neurotransmitters: **dopamine** (which regulates motivation, pleasure, and focus selection) and **norepinephrine** (which regulates alertness and mental energy). Because the ADHD brain is chronically starving for dopamine, it naturally seeks out highly stimulating, immediate-gratification activities, making dry, routine, or long-term tasks incredibly painful to initiate and sustain.
                    </p>

                    <h4 class="text-xl font-bold text-white mb-2">3. Executive Dysfunction: The Brain's Broken Conductor</h4>
                    <p class="text-slate-300 leading-relaxed">
                        Executive functions are cognitive processes housed in the **prefrontal cortex**. In ADHD, this "conductor" is structurally and chemically underactive. This leads to impairment in several critical areas:
                    </p>
                    <ul class="list-disc list-inside space-y-2 my-4 text-slate-300">
                        <li><strong>Working Memory:</strong> Struggling to hold information in mind while performing a task (e.g., losing track of why you entered a room).</li>
                        <li><strong>Task Initiation:</strong> Experiencing a paralyzing resistance to starting tasks, even when highly important (often mistaken for procrastination).</li>
                        <li><strong>Time Blindness:</strong> A struggle to estimate how much time has passed or how long a future task will take.</li>
                        <li><strong>Emotional Dysregulation:</strong> Heightened sensitivity to rejection (Rejection Sensitive Dysphoria) and rapid irritation.</li>
                    </ul>

                    <h4 class="text-xl font-bold text-white mb-2">4. Treatment: Stimulants, Coaching, and Environmental Design</h4>
                    <p class="text-slate-300 leading-relaxed">
                        Effective management of ADHD utilizes a multi-modal approach combining chemical regulation with behavioral strategy:
                    </p>
                    <ul class="list-disc list-inside space-y-2 my-4 text-slate-300">
                        <li><strong>Stimulant Medication:</strong> Medications such as Methylphenidate or Amphetamines are highly effective. Counter-intuitively, by increasing dopamine and norepinephrine in the prefrontal cortex, stimulants calm the hyperactive mind and enable sustained focus.</li>
                        <li><strong>Non-Stimulants:</strong> Alternative medications (like Atomoxetine) that increase norepinephrine levels in the prefrontal cortex.</li>
                        <li><strong>Cognitive Behavioral Coaching:</strong> Focuses on developing practical coping systems: breaking tasks into micro-steps, visual cues, time-management protocols, and accountability.</li>
                        <li><strong>Environmental Design:</strong> Minimizing distractions, utilizing gamification, and designing workspaces that suit the ADHD mind's need for novelty.</li>
                    </ul>
                    <p class="text-slate-300 leading-relaxed">
                        When ADHD is understood not as a moral failing but as a unique neurochemical profile, individuals can leverage their hyper-focus, high creativity, and rapid brainstorming to achieve outstanding personal and professional success.
                    </p>
                </div>
            `,
            ar: `
                <div class="space-y-6">
                    <p class="text-lg leading-relaxed text-slate-300">
                        يعتبر اضطراب فرط الحركة وتشتت الانتباه (ADHD) اضطراباً نموياً عصبياً شائعاً وواسع الانتشار يؤثر على الأطفال والبالغين على حد سواء. وكثيراً ما يُساء فهم هذا الاضطراب سريرياً باعتباره كسلاً سلوكياً، أو ضعفاً في قوة الإرادة، أو مجرد مرحلة طفولية عابرة؛ بينما هو في واقع الأمر تباين بيولوجي مثبت في طريقة تنظيم الدماغ للانتباه، والمثيرات، والاندفاعات. يمثل الاضطراب أساساً قصوراً في **الوظائف التنفيذية** للمخ، والتي تعد بمثابة المايسترو الإداري للعقل البشري.
                    </p>

                    <div class="border-r-4 border-indigo-500 bg-slate-800/40 p-4 rounded-l-xl my-6">
                        <h4 class="text-indigo-400 font-bold mb-1">صياد في عالم مزارعين</h4>
                        <p class="italic text-slate-300">"لا يمثل الـ ADHD عجزاً عن التركيز، بل عجزاً عن التحكم في *وجهة* التركيز، مصحوباً بوعاء مخ جائع للدوبامين والتحفيز بشكل دائم." — الطب النفسي العصبي</p>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">1. الأنماط السريرية الثلاثة للـ ADHD</h4>
                    <p class="text-slate-300 leading-relaxed">
                        وفقاً للدليل التشخيصي والإحصائي (DSM-5)، يُصنف الاضطراب إلى ثلاثة أنماط سلوكية رئيسية تختلف في مظاهرها الإكلينيكية:
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">1. نمط تشتت الانتباه المهيمن</strong>
                            <p class="text-xs text-slate-400">يواجه المصاب صعوبة بالغة في التنظيم، المذاكرة، إنهاء المهام، الاحتفاظ بالمعلومات قصيرة المدى، وتشتته السريع بالمثيرات الجانبية.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">2. نمط فرط الحركة والاندفاعية</strong>
                            <p class="text-xs text-slate-400">يظهر في الحركة المستمرة والتململ، التحدث المفرط، المقاطعة، التسرع في اتخاذ القرارات، وعدم القدرة على الجلوس بهدوء.</p>
                        </div>
                        <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                            <strong class="text-indigo-300 block mb-1">3. النمط المشترك (Combined)</strong>
                            <p class="text-xs text-slate-400">النمط الأكثر شيوعاً، حيث يعاني المصاب من درجات واضحة وملموسة من تشتت الانتباه وفرط الحركة معاً.</p>
                        </div>
                    </div>

                    <h4 class="text-xl font-bold text-white mb-2">2. الكيمياء العصبية: فرضية نقص الدوبامين</h4>
                    <p class="text-slate-300 leading-relaxed">
                        في قلب اضطراب الـ ADHD يكمن اختلال كيميائي واضح في مسارات المكافأة والتركيز بالمخ. يعاني المصابون بالاضطراب من نقص أو خلل في مستقبلات ناقلين عصبيين رئيسيين: **الدوبامين** (المسؤول عن الشغف والمكافأة وتوجيه التركيز) و**النورادرينالين** (المسؤول عن التلقي والطاقة الذهنية). لأن عقل الـ ADHD يعيش في جوع دائم للدوبامين، فإنه يبحث تلقائياً وبشكل لا إرادي عن المثيرات العالية والأنشطة ذات المكافأة السريعة، مما يجعل بدء المهام الجافة أو طويلة الأمد أمراً شاقاً ومؤلماً للغاية بالنسبة لهم.
                    </p>

                    <h4 class="text-xl font-bold text-white mb-2">3. قصور الوظائف التنفيذية: مايسترو المخ المعطل</h4>
                    <p class="text-slate-300 leading-relaxed">
                        الوظائف التنفيذية هي العمليات المعرفية الكبرى التي تديرها **قشرة الفص الجبهي** (Prefrontal Cortex). في عقل المصاب بالـ ADHD، يظهر هذا مركز نقصاً في النشاط الكهربائي والكيميائي، مما يعطل مهارات رئيسية:
                    </p>
                    <ul class="list-disc list-inside space-y-2 my-4 text-slate-300">
                        <li><strong>الذاكرة العاملة:</strong> صعوبة الاحتفاظ بالمعلومات أثناء أداء المهام (مثل نسيان الغرض من دخول الغرفة فور دخولها).</li>
                        <li><strong>صعوبة بدء المهام (Task Initiation):</strong> مقاومة عقلية مشلة تحول دون بدء المذاكرة أو العمل، حتى مع الرغبة الشديدة في ذلك (شلل بدء المهام).</li>
                        <li><strong>عمى الوقت (Time Blindness):</strong> عدم القدرة الفطرية على تقدير مرور الوقت أو تخمين المدة التي يستغرقها إنجاز عمل ما.</li>
                        <li><strong>حساسية الرفض المفرطة (RSD):</strong> استجابة شعورية مؤلمة وحادة للغاية عند التعرض للنقد، أو الرفض الحقيقي أو المتخيل.</li>
                    </ul>

                    <h4 class="text-xl font-bold text-white mb-2">4. بروتوكول العلاج: المنشطات العصبية والكوتشينغ المعرفي</h4>
                    <p class="text-slate-300 leading-relaxed">
                        تتطلب الإدارة الناجحة لاضطراب فرط الحركة وتشتت الانتباه منهجاً شمولياً يدمج الدواء بالاستراتيجيات السلوكية والبيئية:
                    </p>
                    <ul class="list-disc list-inside space-y-2 my-4 text-slate-300">
                        <li><strong>الأدوية المنشطة (Stimulants):</strong> مثل الميثيلفينيديت والأمفيتامينات. تعمل هذه الأدوية على زيادة نسب الدوبامين والنورادرينالين في قشرة الفص الجبهي، مما يهدئ العقل المشتت ويفعل السيطرة والتركيز.</li>
                        <li><strong>الأدوية غير المنشطة:</strong> (مثل أتوموكستين) وتعمل كخيارات بديلة لتنظيم النورادرينالين وزيادة الانتباه.</li>
                        <li><strong>الكوتشينغ السلوكي المعرفي:</strong> تطوير استراتيجيات ملموسة، مثل تقسيم المهام لخطوات مجهرية، استخدام المثيرات البصرية للتنظيم، وأنظمة المحاسبة والمسؤولية.</li>
                        <li><strong>التصميم البيئي:</strong> تهيئة بيئة عمل خالية من المشتتات، واستخدام التلعيب (Gamification) لإبقاء مستويات الدوبامين مرتفعة أثناء العمل.</li>
                    </ul>
                    <p class="text-slate-300 leading-relaxed">
                        عندما يُفهم اضطراب فرط الحركة وتشتت الانتباه ليس كعيب أخلاقي أو كسل، بل كبنية كيميائية عصبية فريدة؛ يمكن لأصحاب هذا الدماغ تسخير مهاراتهم المتمثلة في التركيز الفائق (Hyper-focus)، والقدرة الإبداعية المتفجرة، والتفكير المتشعب لتحقيق نجاحات شخصية ومهنية استثنائية وباهرة.
                    </p>
                </div>
            `
        }
    }
];

const articles = articlesList;
