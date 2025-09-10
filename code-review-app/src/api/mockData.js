const mockResponses = {
  magic_number: {
    choices: [
      {
        message: {
          role: "assistant",
          content: 
`Ревью завершено. Найдено замечание по улучшению читаемости кода.

**Правило:** "no-magic-numbers" (Избегайте "магических чисел")
**Проблема:** В коде используется число \`1.2\`, значение которого не очевидно без контекста. Это затрудняет понимание и поддержку кода.

**Проблемный код:**
\`\`\`javascript
function calculatePriceWithTax(price) {
  return price * 1.2;
}
\`\`\`

**Предлагаемое исправление:**
Вынесите число в именованную константу, чтобы сделать код самодокументируемым.
\`\`\`javascript
const VAT_RATE = 1.2; // Ставка НДС

function calculatePriceWithTax(price) {
  return price * VAT_RATE;
}
\`\`\`
`,
        },
      },
    ],
  },

  missing_await: {
    choices: [
      {
        message: {
          role: "assistant",
          content: 
`Ревью завершено. Обнаружена потенциальная логическая ошибка.

**Проблема:** Пропущено ключевое слово \`await\`.
**Описание:** Функция \`getUserFromDB\` (предположительно) является асинхронной и возвращает Promise. Без \`await\` переменная \`user\` будет содержать объект Promise, а не данные пользователя. Попытка доступа к \`user.name\` приведет к ошибке \`undefined\`.

**Проблемный код:**
\`\`\`javascript
async function getUserData(userId) {
  const user = getUserFromDB(userId); // Ошибка: отсутствует await
  console.log(user.name);
}
\`\`\`

**Предлагаемое исправление:**
Добавьте ключевое слово \`await\`, чтобы дождаться разрешения Promise.
\`\`\`javascript
async function getUserData(userId) {
  const user = await getUserFromDB(userId);
  console.log(user.name);
}
\`\`\`
`,
        },
      },
    ],
  },
  
  default: {
    choices: [
      {
        message: {
          role: "assistant",
          content: "Отличный код! Замечаний не найдено.",
        },
      },
    ],
  },
};


export const fetchCodeReview = async (payload) => {
  const userCode = payload.messages[1].content;
  console.log("Получен код на ревью:", userCode);

  await new Promise(resolve => setTimeout(resolve, 1500));

  if (userCode.includes('return price * 1.2')) {
    console.log("Сработал триггер 'магического числа'");
    return mockResponses.magic_number;
  } 
  
  if (userCode.includes('getUserFromDB(userId)')) {
    console.log("Сработал триггер 'пропущенный await'");
    return mockResponses.missing_await;
  }

  console.log("Ни один триггер не сработал. Возвращаем ответ по умолчанию.");
  return mockResponses.default;
};