// ----------------------------------------- WATERSLIDE ANIMATION -----------------------------------------

const waterSlide = document.querySelector(".hiddenShape");

const waterSlideObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        waterSlide.classList.add("showShape");
        waterSlide.classList.remove("hiddenShape");
      }
    });
  },
  { threshold: 0.5 }
);

waterSlideObserver.observe(waterSlide);

// ----------------------------------------- CARD ANIMATION -----------------------------------------

const hiddenCard = document.querySelector(".hiddenCard");

const componentsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      hiddenCard.classList.add("showCard");
      hiddenCard.classList.remove("hiddenCard");
    }
  });
});
componentsObserver.observe(hiddenCard);

// ----------------------------------------- SVG ANIMATION -----------------------------------------
let path = document.querySelector("path");
let pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + " " + pathLength;

path.style.strokeDashoffset = pathLength;

path.getBoundingClientRect();

window.addEventListener("scroll", () => {
  let scrollPercentage =
    (document.documentElement.scrollTop + document.body.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);

  let drawLength = pathLength * scrollPercentage;
  path.style.strokeDashoffset = pathLength - drawLength;
});

// ----------------------------------------- EXAMENS ANIMATION -----------------------------------------
const hiddenExamImg = document.querySelector(".hidden-exam-img");
const hiddenExamBody = document.querySelector(".hidden-exam-body");

const examObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    setTimeout(() => {
      if (entry.isIntersecting) {
        hiddenExamImg.classList.add("show-exam-img");
        hiddenExamImg.classList.remove("hidden-exam-img");
        hiddenExamBody.classList.add("show-exam-body");
        hiddenExamBody.classList.remove("hidden-exam-body");
      }
    }, 600);
  });
});

examObserver.observe(hiddenExamImg);

// ----------------------------------------- ADMISSION ANIMATION -----------------------------------------
const hiddenAdmissionImg = document.querySelector(".hidden-admission-img");
const hiddenAdmissionBody = document.querySelector(".hidden-admission-body");

const admissionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    setTimeout(() => {
      if (entry.isIntersecting) {
        hiddenAdmissionImg.classList.add("show-admission-img");
        hiddenAdmissionImg.classList.remove("hidden-admission-img");
        hiddenAdmissionBody.classList.add("show-admission-body");
        hiddenAdmissionBody.classList.remove("hidden-admission-body");
      }
    }, 600);
  });
});

admissionObserver.observe(hiddenAdmissionImg);

// ----------------------------------------- EVENEMENTS ANIMATION -----------------------------------------
const hiddenEvents = document.querySelectorAll(".hidden-events");

const eventsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    setTimeout(() => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-events");
        entry.target.classList.remove("hidden-events");
      }
    }, 300);
  });
});

hiddenEvents.forEach((hiddenEvent) => {
  eventsObserver.observe(hiddenEvent);
});

const hiddenEventDate = document.querySelectorAll(".hidden-date");

const dateObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-date");
      entry.target.classList.remove("hidden-date");
    }
  });
});

hiddenEventDate.forEach((hiddenDate) => {
  dateObserver.observe(hiddenDate);
});

// ----------------------------------------- NUMBER ANIMATION -----------------------------------------
const counters = document.querySelectorAll(".counter");

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // see if the element is intersecting <=> is in the viewport
    if (entry.isIntersecting) {
      counters.forEach((counter) => {
        counter.innerText = "0";

        const updateCounter = () => {
          const target = +counter.getAttribute("data-target");
          const c = +counter.innerText;

          const increment = target / 200;

          if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 25);
          } else {
            counter.innerText = target;
          }
        };
        updateCounter();
      });
    }
  });
});
const statsContainer = document.querySelector(".stats-container");
statObserver.observe(statsContainer);

// --------------------------------- CHANGE CONTENT ON RESIZE ---------------------------------

const changeContentForPhone = () => {
  const cardText = document.querySelector(".myCard-text");
  const examsText = document.querySelector(".examens-text");
  const admissionText = document.querySelector(".admission-text");
  if (window.matchMedia("(max-width: 600px)").matches) {
    cardText.innerText =
      "ثانوية ابن بطوطة، أحد أفضل المدارس في المغرب، تتميز بجودة التعليم والرعاية المقدمة للطلاب. تقع في طنجة وتعتبر ثانوية عامة وتكنولوجية، وتستقبل الطلاب من الصف السادس إلى الصف الثاني عشر. إنها مدرسة ذات سمعة مرموقة وتمتاز بمنهجية تعليمية استثنائية وإرشاد فعّال";
    examsText.innerText = "الموقع الإلكتروني يمكنك من استعراض الامتحانات الوطنية والإقليمية وحلولها. نهدف لتسهيل مسارك الدراسي وتحقيق نجاحك الأكاديمي. أدواتنا تساعدك على التفوق والتفاعل مع المحتوى التعليمي بسهولة.";
    admissionText.innerText = "يمكنك من خلال هذا الموقع الحصول على المعلومات اللازمة لعملية القبول. يمكنك الاطلاع على بيانات الالتحاق وإعادة التسجيل، بالإضافة إلى الإرشادات العامة. يوفر الموقع أيضًا معلومات حول قائمة الأغراض المدرسية المطلوبة لكل تخصص و فصل دراسي";
    } else {
    cardText.innerText =
      "يعتبر ثانوية ابن بطوطة واحدة من أفضل المدارس في المغرب. لا يمكن تصنيف هذا الأمر على أنه مجرد صدفة ، بل إنه يعود إلى جودة التعليم والرعاية التي يوفرها المؤسسة للطلاب. إن ثانوية ابن بطوطة هي ثانوية عامة وتكنولوجية. تقع في مدينة طنجة بالمغرب. يتم إدارتها بواسطة جمعية أولياء أمور ابن بطوطة. تستقبل الطلاب من الصف السادس حتى الصف الثاني عشر. إنها واحدة من أقدم ثانويات مدينة طنجة وتعتبر واحدة من أفضل ثانوياتها. تمتاز بمنهجية تعليمية متميزة وكفاءة في الإرشاد والتوجيه للطلاب. تضم مجموعة من المعلمين المتميزين والملتزمين بتقديم تعليم عالي الجودة. بالإضافة إلى ذلك ، توفر ثانوية ابن بطوطة بيئة تعليمية مناسبة تساهم في تنمية مهارات الطلاب وقدراتهم الفكرية والاجتماعية. يعتبر هذا الاندماج المثالي من العوامل المختلفة سببًا رئيسيًا في تفوق ثانوية ابن بطوطة وانتمائها لقمة المدارس في طنجة.";
    examsText.innerText = "يوفر لك هذا الموقع الإلكتروني فرصة استعراض الامتحانات الوطنية والإقليمية، بالإضافة إلى إمكانية الاطلاع على حلولها. رؤيتنا هي تسهيل مسارك الدراسي وتمكينك من تحقيق النجاح في دراستك. نحن نسعى جاهدين لتوفير أدوات تساعدك في التفوق الأكاديمي والتفاعل مع المحتوى التعليمي بطريقة سهلة وميسرة.";
    admissionText.innerText = "بغض النظر عما إذا كنت طالبًا أو ولي أمر، يمكنك الاستفادة من هذا الموقع للحصول على المعلومات الضرورية لعملية القبول في المدرسة. يتيح لك هذا الموقع الوصول إلى بيانات الالتحاق وإعادة التسجيل، بما في ذلك المواعيد الهامة والمستندات المطلوبة والإرشادات العامة. كما يتضمن معلومات حول قائمة الأغراض المدرسية التي يجب شراؤها لكل تخصص أو فصل دراسي.";
  }
};

changeContentForPhone();

window.addEventListener("resize", changeContentForPhone);
