// Класс заполнения карточки цветов
class FlowerCard {
  constructor(src, description, title, imgFlowerClass) {
    this.src = src;
    this.description = description;
    this.title = title;
    this.imgFlowerClass = imgFlowerClass;
  }
  deleteElem() {
    if (
      document.querySelector(".second-section__right-card") &&
      document.querySelector(".second-section__text-item")
    ) {
      document.querySelector(".second-section__right-card").remove();
      document.querySelector(".second-section__text-item").remove();
    }
  }
  createCard() {
    const flowerCard = document.querySelector(".second-section__right-wrapper");
    const flowerTextItem = document.querySelector(
      ".second-section__second-title"
    );
    flowerCard.insertAdjacentHTML(
      "afterbegin",
      `<div class="second-section__right-card"><img class="second-section__right-img ${this.imgFlowerClass}_img" src=${this.src} alt="Цветок" /></div>`
    );
    flowerTextItem.insertAdjacentHTML(
      "afterend",
      `
			<div class="second-section__text-item">
			<h2 class="second-section__third-title notosans-title color_red">${this.title}</h2>
			<p class="second-section__left-paragraph notosans-paragraph">${this.description}</p>
			<div class="second-section__first-star stars">
				<img class="stars-icon" src="icons/Stars.svg" alt="Звезды" />
			</div>
			<div class="second-section__first-line line black_line"></div>
			<div class="second-section__second-star stars">
				<img class="stars-icon" src="icons/Stars.svg" alt="Звезды" />
			</div>
			<div class="second-section__second-line line black_line"></div>
		</div>
	</div>`
    );
    const newCard = document.querySelector(".second-section__right-card");
    const newTextItem = document.querySelector(".second-section__text-item");
    setTimeout(() => {
      newCard.classList.add("show_elem");
      newTextItem.classList.add("show_elem");
    }, 800);
  }
}

const lotusCard = new FlowerCard(
  "icons/flower-lotos.svg",
  `С именем Екатерина ассоциируется Лотос. Вечно чистый считают его буддисты. Так как он растет в болоте и не вбирает в себя его грязь. 
	Екатерины также изящны и прямолинейны как стебель Лотоса. Красивы и величественны в любой обстановке. Лотос - мистический цветок. 
	Так же и Екатерины бывают немного мистическими и чувствующими слова своей интуиции.`,
  "Лотос",
  "lotos"
);
const liliaCard = new FlowerCard(
  "icons/flower-lilia.svg",
  `Лилия – символ чистоты, нежности и благородства. Как и этот цветок, Алины обладают утончённостью и элегантностью. 
	Они умеют находить гармонию в любых обстоятельствах и наполнять окружающих светом. 
	Лилии выделяются среди других цветов своей благородной простотой – так же, как Алины умеют привлекать внимание без лишнего шума.`,
  "Лилия",
  "lilia"
);
const pansiesCard = new FlowerCard(
  "icons/flower-pansies.svg",
  `Анютины глазки – цветок с тёплой, доброй энергетикой, символ заботы и преданности. Анны, как и этот цветок, 
	всегда приносят радость своим близким. Они открытые, искренние и отзывчивые, умеют поддержать в трудную минуту. 
	Разноцветные лепестки анютиных глазок олицетворяют многогранность натуры Анны – в них сочетаются мягкость, сила, мудрость и любовь.`,
  "Анютины глазки",
  "pansies"
);
const buttercupCard = new FlowerCard(
  "icons/flower-buttercup.svg",
  `Лютик – солнечный, яркий цветок, символизирующий радость, оптимизм и жизненную энергию. Елены, как и лютики, излучают свет и тепло, 
	они способны озарять день улыбкой и вдохновлять окружающих. Лютик может расти в самых неожиданных местах, 
	показывая свою стойкость и способность адаптироваться – так же и Елены умеют находить выход из любой ситуации, 
	не теряя своей жизнерадостности.`,
  "Лютик",
  "buttercup"
);
const cameliaCard = new FlowerCard(
  "icons/flower-camelia.svg",
  `Камелия – символ изысканности, стойкости и внутренней силы. Как и этот цветок, 
	Ирины обладают утончённой красотой и непоколебимой уверенностью в себе. Они умеют сочетать элегантность и решительность, 
	мягкость и силу. Камелия раскрывается не сразу, и так же Ирину не всегда можно понять с первого взгляда – но те, 
	кто узнают её ближе, видят её истинную глубину и величие.`,
  "Камелия",
  "camelia"
);

document
  .querySelector(".second-section__dropdown-menu")
  .addEventListener("change", function (event) {
    event.preventDefault();
    if (document.querySelector(`option[value="unknown"]`)) {
      document.querySelector(`option[value="unknown"]`).remove();
    }
    if (this.value === "ekaterina") {
      lotusCard.deleteElem();
      lotusCard.createCard();
    } else if (this.value === "alina") {
      liliaCard.deleteElem();
      liliaCard.createCard();
    } else if (this.value === "anna") {
      pansiesCard.deleteElem();
      pansiesCard.createCard();
    } else if (this.value === "elena") {
      buttercupCard.deleteElem();
      buttercupCard.createCard();
    } else if (this.value === "irina") {
      cameliaCard.deleteElem();
      cameliaCard.createCard();
    }
  });

// Переворт карточки по клику
const allSecretCard = document.querySelectorAll(".card");

function addCardToggle(cards) {
  for (let value of cards) {
    value.addEventListener("click", function () {
      this.classList.toggle("card_toggle");
    });
  }
}

addCardToggle(allSecretCard);

// Класс викторины
class Quiz {
  constructor(questions, quizContainer, resultContainer, button) {
    this.questions = questions;
    this.quizContainer = document.querySelector(quizContainer);
    this.resultContainer = document.querySelector(resultContainer);
    this.button = document.querySelector(button);

    this.renderQuiz();
    this.button.addEventListener("click", () => this.checkAnswers());
  }

  renderQuiz() {
    this.quizContainer.innerHTML = this.questions
      .map(
        (q, i) => `
          <div class="radio__question">
              <div class="radio__group">
                <h2 class="radio__title">${q.text}</h2>
                  ${q.answers
                    .map(
                      (a, j) => `
                      <label class="radio__label">
                          <input class="radio__answer" type="radio" name="${q.name}" value="${j}">
                          ${a}
                      </label>
                  `
                    )
                    .join("")}
              </div>
          </div>
      `
      )
      .join("");
  }

  checkAnswers() {
    let allAnswered = this.questions.every((q) =>
      document.querySelector(`input[name="${q.name}"]:checked`)
    );

    if (!allAnswered) {
      alert("Неа-неа, будь добра ответить на все вопросы ^_^");
      return;
    }

    let score = this.questions.filter(
      (q) =>
        document.querySelector(`input[name="${q.name}"]:checked`)?.value ==
        q.correct
    ).length;

    if (score === 0 || score === 1) {
      this.resultContainer.innerHTML = `${score} / ${this.questions.length} - <span class="radio__span">«Дива, живущая по фэн-шую вселенной ✨»</span>
      <br> Ты явно не паришься из-за правильных ответов, потому что твоя сила в шарме, а не в знаниях про карбюраторы и ГУР. 
      Ты идёшь по жизни легко и красиво — и этого вполне достаточно! `;
    } else if (score === 2 || score === 3) {
      this.resultContainer.innerHTML = `${score} / ${this.questions.length} - <span class="radio__span">«Богиня экспериментов 🤯»</span>
      <br> Твой девиз: «Я не ошибаюсь, я просто ищу новые пути». Возможно, у тебя бывали странные жизненные ситуации, 
      но ты прошла их с гордо поднятой головой (и иногда с непониманием, как это вышло).`;
    } else if (score === 4 || score === 5) {
      this.resultContainer.innerHTML = `${score} / ${this.questions.length} - <span class="radio__span">«Принцесса лёгкого хаоса 💃»</span>
      <br> Ты не всегда знаешь, что делать, но как-то выкручиваешься. Главное — выглядеть уверенно, а там уже пусть судьба сама решает! 
      Твои друзья точно знают, что с тобой никогда не бывает скучно.`;
    } else if (score === 6 || score === 7) {
      this.resultContainer.innerHTML = `${score} / ${this.questions.length} - <span class="radio__span">«Мисс “на интуиции вывезла” 🎯»</span>
    <br> Ты не всегда уверена в ответе, но каким-то образом угадываешь! Видимо, у тебя есть внутренний радар, который помогает 
    в сложных ситуациях. Главное — продолжай в том же духе, и жизнь тебя не застанет врасплох!`;
    } else if (score === 8 || score === 9) {
      this.resultContainer.innerHTML = `${score} / ${this.questions.length} - <span class="radio__span">«Леди, которая всё схватывает на лету 💅»</span>
    <br> Ты умна, находчива и умеешь ориентироваться в любых ситуациях. Гвоздь сломался? Ты его покрасишь. Машина не заводится? 
    Ты хотя бы знаешь, почему. В общем, ты знаешь, как справляться с жизнью без паники!`;
    } else if (score === 10) {
      this.resultContainer.innerHTML = `${score} / ${this.questions.length} - <span class="radio__span">«Королева жизненных лайфхаков 👑»</span>
  <br> Ты не просто молодец, ты гуру выживания в этом мире! Твои знания на уровне: «Я всё знаю, но всё равно делаю по-своему».
  Подруги точно обращаются к тебе за советом, ведь ты разбираешься во всём — от авто до идеального селфи!`;
    }
  }
}

// Вопросы, которые передаем в класс

const questions = [
  {
    text: "Что такое карбюратор?",
    name: "q1",
    answers: [
      "Украшение на машину",
      "Бьюти-девайс для карбонирования кожи",
      "Фигня в машине, которая что-то там с бензином делает",
      "Персонаж Marvel",
    ],
    correct: 2,
  },
  {
    text: "Как правильно заменить колесо?",
    name: "q2",
    answers: [
      "Позвонить папе/парню/другу",
      "Пнуть пару раз и надеяться, что само прикрутится",
      "Вызвать такси и уехать",
      "Взять домкрат, снять колесо, поставить новое",
    ],
    correct: 3,
  },
  {
    text: "Как понять, что ты голоден?",
    name: "q3",
    answers: [
      "Ты злой без причины",
      "Ты вдруг вспомнил про все вкусные вещи в мире",
      "Ты заглядываешь в холодильник каждые 5 минут",
      "Ты начинаешь нюхать еду, даже если это картинка",
    ],
    correct: 0,
  },
  {
    text: "Как правильно пить чай?",
    name: "q4",
    answers: [
      "Добавить лимон и мёд, потому что «так полезнее»",
      "Дуть на него 10 минут, а потом всё равно обжечься",
      "Забыть про него, а потом пить уже холодный",
      "Заварить, но не выпить, потому что уже не хочется",
    ],
    correct: 2,
  },
  {
    text: "Как правильно сидеть за компьютером?",
    name: "q5",
    answers: [
      "Сначала прямо, потом в позе креветки",
      "Поджимая одну ногу под себя, а потом жалеть об этом",
      "Лечь на бок, пока ноутбук не начнёт скользить",
      "Сначала удобно, а потом уже не важно, лишь бы не вставать",
    ],
    correct: 0,
  },
  {
    text: "Что делать, если в доме появился паук?",
    name: "q6",
    answers: [
      "Вызвать МЧС и переехать в другую квартиру",
      "Закрыть дверь и сделать вид, что комнаты больше не существует",
      "Вежливо попросить его уйти",
      "Взять тапок и стать героем",
    ],
    correct: 3,
  },
  {
    text: "Какой инструмент поможет в 90% бытовых проблем?",
    name: "q7",
    answers: [
      "Молоток",
      "Ложка (её можно и как отвёртку, и как гаечный ключ…)",
      "Скрепка",
      "Телефон – звоним специалисту!",
    ],
    correct: 0,
  },
  {
    text: "Что делать, если случайно наступил на LEGO?",
    name: "q8",
    answers: [
      "Закричать так, чтобы соседи вызвали спасателей",
      "Попытаться остаться в сознании",
      "Прикинуться, что всё нормально, а потом тихонько страдать",
      "Записать это в список «самых болезненных ошибок в жизни»",
    ],
    correct: 0,
  },
  {
    text: "Что делать, если внезапно отключили интернет?",
    name: "q9",
    answers: [
      "Начать новую жизнь, переехать в деревню и завести козу",
      "Перезагрузить роутер 50 раз, надеясь на чудо",
      "Подключиться к Wi-Fi соседей с помощью магии",
      "Выйти на улицу, посмотреть на солнце и испугаться",
    ],
    correct: 1,
  },
  {
    text: "Как правильно реагировать на будильник?",
    name: "q10",
    answers: [
      "Выключить и сразу уснуть обратно",
      "Оставить 10 запасных будильников через каждые 5 минут",
      "Задать вопрос: «А если просто не вставать?»",
      "Ударить его, как будто он виноват в твоих проблемах",
    ],
    correct: 1,
  },
];

// Инциализируем новый опросник

new Quiz(
  questions,
  ".fifth-section__radio-content",
  ".radio__result",
  ".radio__btn"
);

// Рандомное предсказание

const buttonRandom = document.querySelector(".sixth-section__btn");

const prediction = [
  "Удача на твоей стороне! Скоро тебя ждёт приятный сюрприз – может, букет цветов, а может, неожиданный комплимент. Будь готова сиять! ✨",
  "Деньги к тебе идут! В ближайшие дни тебя ждёт неожиданный бонус – будь то скидка в магазине, выигрыш или просто найденная купюра. 💰",
  "Время для чуда! Загаданное желание обязательно исполнится, если улыбнуться и поверить в лучшее! 🌈",
  "Кто-то думает о тебе... Сегодня кто-то вспомнит о тебе с теплотой. Может, пора написать старому другу? 💌",
  "Сладкая жизнь впереди! В ближайшие дни ты попробуешь что-то вкусное и обязательно насладишься моментом! 🍫",
  "Настроение на высоте! Тебя ждёт волна позитива, и ни одна мелочь не сможет испортить твой день! 😊",
  "Пора сиять! Совсем скоро ты окажешься в центре внимания и получишь заслуженные комплименты. 💃",
  "Цветы и радость! Скоро тебя окружат цветы – будь то букет, прогулка в парке или цветущий настрой. 🌷",
  "Время чудес! Ждёт неожиданная встреча, которая принесёт улыбку и радость! 💖",
  "День удачи! Если загадаешь желание в ближайшие 10 секунд – оно точно сбудется! 🌠",
];

// Рандомное предсказание

buttonRandom.addEventListener("click", function (event) {
  event.preventDefault();

  const randomNumberPredict = Math.floor(Math.random() * prediction.length);

  const predictDescription = document.querySelector(
    ".sixth-section__description"
  );

  const checkDescription = document.querySelector(".description_show");

  predictDescription.innerHTML = prediction[randomNumberPredict];

  if (!checkDescription) {
    setTimeout(() => {
      predictDescription.classList.add("description_show");
    }, 800);
  }
});

const allHiddenElem = document.querySelectorAll(".hidden");

function upElem(entries, observe) {
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add("smooth_elem");
    observe.unobserve(entries[0].target);
  }
}

const options = {
  threshold: [0.3],
};

const observer = new IntersectionObserver(upElem, options);

allHiddenElem.forEach(function (elem) {
  observer.observe(elem);
});
