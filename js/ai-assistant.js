// Local offline AI Assistant for Soul-Hub Tests (No external API)
document.addEventListener('DOMContentLoaded', () => {
    const resultPage = document.getElementById('page-result');
    if (!resultPage) return;

    // Inject CSS
    const style = document.createElement('style');
    style.innerHTML = `
        #embedded-ai-assistant {
            width: 100%;
            margin-top: 30px;
            background: #1e293b;
            border: 1px solid #334155;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
            display: flex;
            flex-direction: column;
            overflow: hidden;
            font-family: 'Inter', sans-serif;
        }
        #ai-chat-header {
            background: linear-gradient(135deg, #10b981, #059669);
            padding: 15px 20px;
            font-weight: bold;
            color: #fff;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        #ai-chat-messages {
            height: 350px;
            padding: 15px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 10px;
            background: #0f172a;
        }
        .ai-message {
            background: #334155;
            color: #f8fafc;
            padding: 12px 16px;
            border-radius: 12px;
            border-bottom-left-radius: 0;
            max-width: 85%;
            align-self: flex-start;
            font-size: 14px;
            line-height: 1.5;
            white-space: pre-wrap;
        }
        .user-message {
            background: #10b981;
            color: #fff;
            padding: 12px 16px;
            border-radius: 12px;
            border-bottom-right-radius: 0;
            max-width: 85%;
            align-self: flex-end;
            font-size: 14px;
            line-height: 1.5;
        }
        html[dir="rtl"] .ai-message {
            border-bottom-left-radius: 12px;
            border-bottom-right-radius: 0;
        }
        html[dir="rtl"] .user-message {
            border-bottom-right-radius: 12px;
            border-bottom-left-radius: 0;
        }
        #ai-chat-input-area {
            display: flex;
            border-top: 1px solid #334155;
            padding: 15px;
            background: #1e293b;
        }
        #ai-chat-input {
            flex-grow: 1;
            background: #0f172a;
            border: 1px solid #334155;
            color: white;
            padding: 12px 16px;
            border-radius: 8px;
            outline: none;
            transition: border-color 0.2s;
        }
        #ai-chat-input:focus {
            border-color: #10b981;
        }
        #ai-chat-send {
            background: #10b981;
            color: white;
            border: none;
            padding: 10px 20px;
            margin-left: 10px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: bold;
            transition: background 0.2s;
        }
        html[dir="rtl"] #ai-chat-send {
            margin-left: 0;
            margin-right: 10px;
        }
        #ai-chat-send:hover { background: #059669; }
        
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #0f172a;
        }
        ::-webkit-scrollbar-thumb {
            background: #475569;
            border-radius: 4px;
        }
    `;
    document.head.appendChild(style);

    // Inject HTML into #page-result
    const aiContainer = document.createElement('div');
    aiContainer.id = 'embedded-ai-assistant';
    aiContainer.innerHTML = `
        <div id="ai-chat-header">
            <i class="fas fa-brain text-xl"></i> 
            <span style="font-size: 1.1rem; letter-spacing: 0.5px;">Soul-Hub Personal Assistant</span>
            <span style="margin-left: auto; font-size: 10px; background: rgba(255,255,255,0.2); padding: 2px 6px; border-radius: 12px;">Local Engine</span>
        </div>
        <div id="ai-chat-messages">
        </div>
        <div id="ai-chat-input-area">
            <input type="text" id="ai-chat-input" placeholder="Ask about your results...">
            <button id="ai-chat-send"><i class="fas fa-paper-plane"></i></button>
        </div>
    `;
    resultPage.appendChild(aiContainer);

    const sendBtn = document.getElementById('ai-chat-send');
    const inputEl = document.getElementById('ai-chat-input');
    const messagesEl = document.getElementById('ai-chat-messages');

    let isArabic = document.documentElement.lang === 'ar';
    let contextAdded = false;
    let highestTrait = "";

    const appendMessage = (text, sender) => {
        const div = document.createElement('div');
        div.className = sender === 'user' ? 'user-message' : 'ai-message';
        let formattedText = text.replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>');
        div.innerHTML = formattedText;
        messagesEl.appendChild(div);
        messagesEl.scrollTop = messagesEl.scrollHeight;
    };

    const addTestResultsContext = () => {
        isArabic = document.documentElement.lang === 'ar';
        messagesEl.innerHTML = '';
        
        // Analyze scores locally
        let analysisText = "";
        
        if (window.scores && Object.keys(window.scores).length > 0) {
            const sortedKeys = Object.keys(window.scores).sort((a, b) => window.scores[b] - window.scores[a]);
            highestTrait = sortedKeys[0];
            const secondTrait = sortedKeys[1];
            
            // Normalize score if it's out of 50
            let score1 = window.scores[highestTrait];
            let percent = Math.round((score1 / 50) * 100);
            if (percent > 100) percent = score1; // Failsafe if scoring is different
            
            // Get localized names if available
            let t1Name = highestTrait;
            let t2Name = secondTrait;
            if (window.categoriesTrans) {
                t1Name = window.categoriesTrans[highestTrait]?.[isArabic ? 'ar' : 'en'] || highestTrait;
                t2Name = window.categoriesTrans[secondTrait]?.[isArabic ? 'ar' : 'en'] || secondTrait;
            }

            if (isArabic) {
                analysisText = \`مرحباً! أنا المساعد النفسي الذكي الخاص بك من Soul-Hub (أعمل محلياً بالكامل للحفاظ على خصوصيتك).

لقد قمت بتحليل نتائج اختبارك:
يبدو أن النمط الأبرز في شخصيتك هو **\${t1Name}** (بنسبة \${percent}%)، والنمط الذي يليه هو **\${t2Name}**.

هذه الأنماط تعكس طريقة تفكيرك وردود أفعالك تجاه المواقف المختلفة. هل تود أن أعطيك نصائح لتطوير نفسك بناءً على نتيجتك، أو هل لديك أسئلة حول هذه الأنماط؟\`;
            } else {
                analysisText = \`Welcome! I am your Soul-Hub Personal Psychology Assistant (running 100% locally to protect your privacy).

I have analyzed your test results:
It appears your leading trait is **\${t1Name}** (at \${percent}%), followed closely by **\${t2Name}**.

These patterns reflect your typical cognitive style and emotional responses. Would you like me to provide some tailored advice for personal growth based on this, or do you have any specific questions about these traits?\`;
            }
        } else {
            // Fallback if no window.scores found
            if (isArabic) {
                analysisText = "مرحباً! أنا المساعد النفسي الذكي من Soul-Hub. لقد اطلعت على الاختبار الذي قمت به للتو. بمكنني مساعدتك في استيعاب هذه النتائج، هل لديك أي استفسار يخص شخصيتك؟";
            } else {
                analysisText = "Welcome! I am your personal psychology assistant from Soul-Hub. I see you've completed the test! I am here to help you understand your results. Do you have any questions?";
            }
        }

        appendMessage(analysisText, 'ai');
        contextAdded = true;
    };

    // Generic Chatbot Logic
    const generateLocalResponse = (prompt) => {
        isArabic = document.documentElement.lang === 'ar';
        const str = prompt.toLowerCase();
        
        // Dictionaries
        const greetings = ['hi', 'hello', 'hey', 'مرحبا', 'مرحباً', 'اهلا', 'السلام عليكم', 'هاي', 'أهلا', 'صباح الخير'];
        const gratitude = ['thanks', 'thank you', 'appreciate', 'شكرا', 'أشكرك', 'تسلم', 'يعطيك العافية'];
        const advice = ['advice', 'help', 'improve', 'tips', 'better', 'deal', 'نصيحة', 'نصيحه', 'كيف احسن', 'ازاي اتعامل', 'مساعدة', 'علاج', 'تطوير', 'حل'];
        const definitions = ['what is', 'meaning', 'means', 'يعني ايه', 'ما هو', 'متى', 'شرح'];
        const about = ['who are you', 'what are you', 'من انت', 'مين انت', 'مين حضرتك', 'شغال ازاي'];

        const hasKeyword = (arr) => arr.some(word => str.includes(word));

        if (hasKeyword(about)) {
            return isArabic ? 
                "أنا مساعد ذكي محلي (Local Heuristic Engine) تم تطويري بواسطة Soul-Hub. أعمل برمجياً داخل متصفحك للحفاظ على سرية معلوماتك، ومهمتي هي تحليل درجاتك النفسية البسيطة وتقديم نصائح عامة." : 
                "I am a Local Heuristic AI developed by Soul-Hub. I operate completely within your browser to ensure absolute privacy, and my main duty is to analyze your psychological scores and provide general guidance.";
        }

        if (hasKeyword(gratitude)) {
            return isArabic ? 
                "على الرحب والسعة! تذكر دائماً أن هذه الاختبارات لزيادة الوعي الذاتي وليست تشخيصاً طبياً صارماً. أنا هنا دائماً إذا احتجت للمزيد من الحديث." : 
                "You're very welcome! Always remember that these tests are meant for self-awareness and are not clinical diagnoses. I am here whenever you want to talk more about your psychology.";
        }

        if (hasKeyword(definitions)) {
            return isArabic ? 
                "تشير الأنماط النفسية إلى مجموعات من السمات والطباع التي تميز كيفية استجابتنا للضغوط، والعلاقات، والمواقف الحياتية. إذا كان هناك نمط معين برز في نتيجتك (مثل " + (highestTrait ? window.categoriesTrans?.[highestTrait]?.['ar'] || highestTrait : 'القلق') + ")، فهو مجرد مؤشر للاستبطان والتعرف على الذات." : 
                "Psychological patterns refer to clusters of traits that define how we respond to stress, relationships, and situations. If a specific trait stood out in your results (like " + (highestTrait || 'Anxiety') + "), it's solely an indicator for self-reflection and introspection.";
        }

        if (hasKeyword(advice)) {
            return isArabic ? 
                "بناءً على نتائجك، أفضل طريقة للتعامل مع هذا النمط هو 'الوعي بالذات'. \n\n1. لاحظ مشاعرك وقت حدوثها ولا تحكم عليها.\n2. حاول استخدام التدوين (Journaling) لتفريغ أفكارك.\n3. ركز على تقنيات التنفس وتأريض الذات العاطفي (Grounding).\n\nالأهم هو تقبل الذات والعمل تدريجياً على التقدم." : 
                "Based on your results, the best approach to handling prominent psychological traits involves 'Self-Awareness'. \n\n1. Notice your feelings without immediate judgment.\n2. Consider journaling to untangle complex thoughts.\n3. Focus on emotional grounding and breathing techniques when triggered.\n\nUltimately, radical self-acceptance combined with gradual steady progress is key.";
        }

        if (hasKeyword(greetings)) {
            return isArabic ? "أهلاً بك مرة أخرى! كيف يمكنني مساعدتك في نتائجك اليوم؟" : "Hello again! How can I assist you with your psychological results today?";
        }

        // Generic fallback prioritizing psychology
        return isArabic ? 
            "عذراً، بما أنني مبرمج للعمل محلياً للتركيز على الجانب النفسي فقط، قد لا أفهم بعض الجمل خارج هذا النطاق. بناءً على نتيجة اختبارك، هل هناك جزء معين في شخصيتك ترغب في تحليله بشكل أعمق؟" : 
            "Sorry, since I am a local engine dedicated precisely to your psychological profile, I might not understand inputs completely outside this scope. Regarding your test, is there a particular personality trait you'd like to explore further?";
    };

    const sendMessageToAI = (userText) => {
        if (!userText) return;
        appendMessage(userText, 'user');
        inputEl.value = '';

        const typingDiv = document.createElement('div');
        typingDiv.className = 'ai-message';
        typingDiv.innerText = isArabic ? 'جاري التحليل...' : 'Analyzing...';
        messagesEl.appendChild(typingDiv);
        messagesEl.scrollTop = messagesEl.scrollHeight;

        // Simulate local "thinking" time for realism
        setTimeout(() => {
            typingDiv.remove();
            const responseText = generateLocalResponse(userText);
            appendMessage(responseText, 'ai');
        }, 800);
    };

    sendBtn.onclick = () => sendMessageToAI(inputEl.value.trim());
    inputEl.onkeypress = (e) => {
        if (e.key === 'Enter') sendMessageToAI(inputEl.value.trim());
    };

    // Observe when the results page becomes visible
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'class') {
                if (!resultPage.classList.contains('hidden') && !contextAdded) {
                    addTestResultsContext();
                }
            }
        });
    });
    observer.observe(resultPage, { attributes: true });

    // Initial check in case it's already visible
    if (!resultPage.classList.contains('hidden') && !contextAdded) {
        addTestResultsContext();
    }
});
